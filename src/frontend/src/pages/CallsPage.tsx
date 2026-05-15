import { CallStatus } from "@/backend";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { CallLog } from "@/types";
import {
  Clock,
  Download,
  Filter,
  Phone,
  PhoneCall,
  PhoneMissed,
  PhoneOff,
  Search,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const mockCalls: CallLog[] = [
  {
    callId: "call-1",
    callerPhone: "+91 98765 43210",
    calleePhone: "+91 98676 92722",
    callStatus: CallStatus.Completed,
    durationSeconds: BigInt(272),
    transcriptSnippet:
      "Customer interested in 2BHK in Thane. Budget 85L. Wants site visit next weekend.",
    businessId: "biz-1",
    agentId: "agent-1",
    createdAt: BigInt(Date.now() - 1000 * 60 * 5),
  },
  {
    callId: "call-2",
    callerPhone: "+91 87654 32109",
    calleePhone: "+91 98676 92722",
    callStatus: CallStatus.Completed,
    durationSeconds: BigInt(134),
    transcriptSnippet:
      "Confirmed site visit for Saturday 3PM. Priya is very interested in Powai lakefront property.",
    businessId: "biz-1",
    agentId: "agent-1",
    createdAt: BigInt(Date.now() - 1000 * 60 * 32),
  },
  {
    callId: "call-3",
    callerPhone: "+91 76543 21098",
    calleePhone: "+91 98676 92722",
    callStatus: CallStatus.Missed,
    durationSeconds: BigInt(0),
    businessId: "biz-1",
    agentId: "agent-1",
    createdAt: BigInt(Date.now() - 1000 * 60 * 65),
  },
  {
    callId: "call-4",
    callerPhone: "+91 65432 10987",
    calleePhone: "+91 98676 92722",
    callStatus: CallStatus.Completed,
    durationSeconds: BigInt(367),
    transcriptSnippet:
      "Premium buyer looking for 4BHK villa in Navi Mumbai. Budget 2Cr. Serious buyer.",
    businessId: "biz-1",
    agentId: "agent-1",
    createdAt: BigInt(Date.now() - 1000 * 60 * 120),
  },
  {
    callId: "call-5",
    callerPhone: "+91 54321 09876",
    calleePhone: "+91 98676 92722",
    callStatus: CallStatus.Transferred,
    durationSeconds: BigInt(45),
    transcriptSnippet:
      "High-intent buyer, transferred to human agent for closure.",
    businessId: "biz-1",
    agentId: "agent-2",
    createdAt: BigInt(Date.now() - 1000 * 60 * 180),
  },
  {
    callId: "call-6",
    callerPhone: "+91 43210 98765",
    calleePhone: "+91 98676 92722",
    callStatus: CallStatus.Missed,
    durationSeconds: BigInt(0),
    businessId: "biz-1",
    agentId: "agent-1",
    createdAt: BigInt(Date.now() - 1000 * 60 * 240),
  },
];

function formatDuration(seconds: bigint): string {
  const s = Number(seconds);
  if (s === 0) return "—";
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return `${m}:${rem.toString().padStart(2, "0")}`;
}

function timeAgo(ts: bigint): string {
  const diff = Date.now() - Number(ts);
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} hr ago`;
  return `${Math.floor(hrs / 24)} days ago`;
}

const statusConfig = {
  [CallStatus.Completed]: {
    icon: PhoneCall,
    color: "text-chart-3",
    bg: "bg-chart-3/15",
    badge: "bg-chart-3/20 text-chart-3 border-chart-3/30",
  },
  [CallStatus.Missed]: {
    icon: PhoneMissed,
    color: "text-destructive",
    bg: "bg-destructive/15",
    badge: "bg-destructive/20 text-destructive border-destructive/30",
  },
  [CallStatus.Transferred]: {
    icon: PhoneOff,
    color: "text-primary",
    bg: "bg-primary/15",
    badge: "bg-primary/20 text-primary border-primary/30",
  },
};

export default function CallsPage() {
  const [calls] = useState(mockCalls);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<CallStatus | "all">("all");

  const filtered = calls.filter((c) => {
    const matchSearch = c.callerPhone.includes(search);
    const matchStatus = statusFilter === "all" || c.callStatus === statusFilter;
    return matchSearch && matchStatus;
  });

  const completedCount = calls.filter(
    (c) => c.callStatus === CallStatus.Completed,
  ).length;
  const missedCount = calls.filter(
    (c) => c.callStatus === CallStatus.Missed,
  ).length;
  const totalDuration = calls.reduce(
    (acc, c) => acc + Number(c.durationSeconds),
    0,
  );

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Call Logs
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {calls.length} calls recorded today
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          data-ocid="calls.export_button"
          className="border-border text-muted-foreground hover:text-foreground"
        >
          <Download className="w-4 h-4 mr-2" /> Export
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          {
            label: "Completed",
            value: completedCount,
            icon: PhoneCall,
            color: "text-chart-3",
          },
          {
            label: "Missed",
            value: missedCount,
            icon: PhoneMissed,
            color: "text-destructive",
          },
          {
            label: "Total Duration",
            value: `${Math.floor(totalDuration / 60)} min`,
            icon: Clock,
            color: "text-primary",
          },
        ].map((stat, _i) => {
          const Icon = stat.icon;
          return (
            <Card
              key={stat.label}
              className="glass-effect-dark border-border p-4"
            >
              <div className={`flex items-center gap-2 ${stat.color}`}>
                <Icon className="w-4 h-4" />
                <span className="text-xs font-medium text-muted-foreground">
                  {stat.label}
                </span>
              </div>
              <div className="font-display text-2xl font-bold text-foreground mt-2">
                {stat.value}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search by phone number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            data-ocid="calls.search_input"
            className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
          />
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Filter className="w-4 h-4 text-muted-foreground" />
          {(["all", ...Object.values(CallStatus)] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStatusFilter(s)}
              data-ocid={`calls.filter.${s}`}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-smooth ${
                statusFilter === s
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-input bg-muted/20 text-muted-foreground hover:border-primary/30"
              }`}
            >
              {s === "all" ? "All" : s}
            </button>
          ))}
        </div>
      </div>

      {/* Call List */}
      <Card className="glass-effect-dark border-border overflow-hidden">
        <div className="divide-y divide-border">
          {filtered.map((call, i) => {
            const config = statusConfig[call.callStatus];
            const Icon = config.icon;
            return (
              <motion.div
                key={call.callId}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                data-ocid={`calls.item.${i + 1}`}
                className="flex items-start gap-4 px-5 py-4 hover:bg-muted/10 transition-smooth"
              >
                <div
                  className={`w-9 h-9 rounded-full ${config.bg} flex items-center justify-center shrink-0`}
                >
                  <Icon className={`w-4 h-4 ${config.color}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-sm font-medium text-foreground font-mono">
                      {call.callerPhone}
                    </span>
                    <Badge
                      variant="outline"
                      className={`text-xs ${config.badge}`}
                    >
                      {call.callStatus}
                    </Badge>
                  </div>
                  {call.transcriptSnippet && (
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                      {call.transcriptSnippet}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-4 shrink-0 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {formatDuration(call.durationSeconds)}
                  </div>
                  <div className="hidden sm:flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    {timeAgo(call.createdAt)}
                  </div>
                </div>
              </motion.div>
            );
          })}
          {filtered.length === 0 && (
            <div data-ocid="calls.empty_state" className="py-16 text-center">
              <PhoneCall className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">
                No call logs found
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
