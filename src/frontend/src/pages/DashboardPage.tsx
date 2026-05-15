import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowUpRight,
  Bot,
  Clock,
  PhoneCall,
  PhoneMissed,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const statCards = [
  {
    label: "Total Leads",
    value: "247",
    delta: "+18%",
    icon: Users,
    color: "text-primary",
  },
  {
    label: "Active Agents",
    value: "3",
    delta: "2 live",
    icon: Bot,
    color: "text-accent",
  },
  {
    label: "Calls Today",
    value: "38",
    delta: "+5 vs yesterday",
    icon: PhoneCall,
    color: "text-chart-2",
  },
  {
    label: "Conversion Rate",
    value: "34%",
    delta: "+2.4%",
    icon: TrendingUp,
    color: "text-chart-3",
  },
];

const recentLeads = [
  {
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    budget: "₹85L",
    location: "Thane West",
    status: "Qualified",
    time: "5 min ago",
  },
  {
    name: "Priya Sharma",
    phone: "+91 87654 32109",
    budget: "₹1.2Cr",
    location: "Powai",
    status: "Scheduled",
    time: "32 min ago",
  },
  {
    name: "Amit Patel",
    phone: "+91 76543 21098",
    budget: "₹60L",
    location: "Dombivli",
    status: "New",
    time: "1 hr ago",
  },
  {
    name: "Sunita Rao",
    phone: "+91 65432 10987",
    budget: "₹2Cr",
    location: "Navi Mumbai",
    status: "Qualified",
    time: "2 hr ago",
  },
];

const recentCalls = [
  {
    caller: "+91 98123 45678",
    agent: "Real Estate Pro",
    duration: "4:32",
    status: "Completed",
  },
  {
    caller: "+91 87234 56789",
    agent: "Real Estate Pro",
    duration: "2:14",
    status: "Completed",
  },
  {
    caller: "+91 76345 67890",
    agent: "Real Estate Pro",
    duration: "0:00",
    status: "Missed",
  },
  {
    caller: "+91 65456 78901",
    agent: "Real Estate Pro",
    duration: "6:07",
    status: "Completed",
  },
];

const statusColors: Record<string, string> = {
  Qualified: "bg-chart-3/20 text-chart-3 border-chart-3/30",
  Scheduled: "bg-primary/20 text-primary border-primary/30",
  New: "bg-muted text-muted-foreground border-border",
  Completed: "bg-chart-3/20 text-chart-3 border-chart-3/30",
  Missed: "bg-destructive/20 text-destructive border-destructive/30",
};

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Dashboard
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Welcome back, Shree Balaji Enterprises
          </p>
        </div>
        <Button
          type="button"
          size="sm"
          onClick={() => navigate("/agents")}
          data-ocid="dashboard.create_agent_button"
          className="gradient-accent text-white font-medium hover:opacity-90 transition-smooth self-start sm:self-auto"
        >
          <Bot className="w-4 h-4 mr-2" />
          New AI Agent
        </Button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass-effect-dark p-4 border-border hover:border-primary/30 transition-smooth">
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2 rounded-lg bg-current/10 ${stat.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
                <div className="font-display text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-muted-foreground">
                    {stat.label}
                  </span>
                  <span className="text-xs text-chart-3 font-medium">
                    {stat.delta}
                  </span>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Recent Leads */}
        <div className="lg:col-span-3">
          <Card className="glass-effect-dark border-border">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <h2 className="font-display font-semibold text-foreground text-sm">
                  Recent Leads
                </h2>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => navigate("/leads")}
                data-ocid="dashboard.view_all_leads_button"
                className="text-xs text-primary hover:text-primary"
              >
                View all
              </Button>
            </div>
            <div className="divide-y divide-border">
              {recentLeads.map((lead, i) => (
                <div
                  key={lead.name}
                  data-ocid={`dashboard.lead.item.${i + 1}`}
                  className="px-5 py-3.5 flex items-center justify-between hover:bg-muted/10 transition-smooth"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {lead.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {lead.location} · {lead.budget}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-3">
                    <Badge
                      variant="outline"
                      className={`text-xs ${statusColors[lead.status]}`}
                    >
                      {lead.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground hidden sm:block">
                      {lead.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Recent Calls */}
        <div className="lg:col-span-2">
          <Card className="glass-effect-dark border-border h-full">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-accent" />
                <h2 className="font-display font-semibold text-foreground text-sm">
                  Recent Calls
                </h2>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => navigate("/calls")}
                data-ocid="dashboard.view_all_calls_button"
                className="text-xs text-primary"
              >
                View all
              </Button>
            </div>
            <div className="divide-y divide-border">
              {recentCalls.map((call, i) => (
                <div
                  key={call.caller}
                  data-ocid={`dashboard.call.item.${i + 1}`}
                  className="px-5 py-3.5 flex items-center gap-3 hover:bg-muted/10 transition-smooth"
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      call.status === "Missed"
                        ? "bg-destructive/20"
                        : "bg-chart-3/20"
                    }`}
                  >
                    {call.status === "Missed" ? (
                      <PhoneMissed className="w-3.5 h-3.5 text-destructive" />
                    ) : (
                      <PhoneCall className="w-3.5 h-3.5 text-chart-3" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-foreground truncate">
                      {call.caller}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {call.agent}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                    <Clock className="w-3 h-3" />
                    {call.duration}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
