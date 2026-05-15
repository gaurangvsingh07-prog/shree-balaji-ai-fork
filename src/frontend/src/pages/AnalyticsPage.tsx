import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  BarChart3,
  PhoneCall,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const weeklyData = [
  { day: "Mon", calls: 12, leads: 4 },
  { day: "Tue", calls: 19, leads: 7 },
  { day: "Wed", calls: 8, leads: 2 },
  { day: "Thu", calls: 24, leads: 9 },
  { day: "Fri", calls: 31, leads: 12 },
  { day: "Sat", calls: 15, leads: 5 },
  { day: "Sun", calls: 6, leads: 1 },
];

const maxCalls = Math.max(...weeklyData.map((d) => d.calls));

const kpis = [
  {
    label: "Total Calls (7d)",
    value: "115",
    delta: "+22%",
    trend: "up",
    icon: PhoneCall,
  },
  {
    label: "New Leads (7d)",
    value: "40",
    delta: "+15%",
    trend: "up",
    icon: Users,
  },
  {
    label: "Conversion Rate",
    value: "34.8%",
    delta: "+2.4%",
    trend: "up",
    icon: TrendingUp,
  },
  {
    label: "Avg Call Duration",
    value: "3:42",
    delta: "-0:12",
    trend: "down",
    icon: BarChart3,
  },
];

export default function AnalyticsPage() {
  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">
          Analytics
        </h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Performance metrics for the last 7 days
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass-effect-dark border-border p-4 hover:border-primary/30 transition-smooth">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-lg bg-primary/15">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  {kpi.trend === "up" ? (
                    <TrendingUp className="w-3.5 h-3.5 text-chart-3" />
                  ) : (
                    <TrendingDown className="w-3.5 h-3.5 text-destructive" />
                  )}
                </div>
                <div className="font-display text-2xl font-bold text-foreground">
                  {kpi.value}
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-muted-foreground">
                    {kpi.label}
                  </span>
                  <Badge
                    variant="outline"
                    className={`text-[10px] px-1.5 ${
                      kpi.trend === "up"
                        ? "bg-chart-3/15 text-chart-3 border-chart-3/30"
                        : "bg-destructive/15 text-destructive border-destructive/30"
                    }`}
                  >
                    {kpi.delta}
                  </Badge>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Weekly Chart */}
      <Card className="glass-effect-dark border-border p-6">
        <div className="flex items-center gap-2 mb-6">
          <BarChart3 className="w-4 h-4 text-primary" />
          <h2 className="font-display font-semibold text-foreground text-sm">
            Weekly Call Volume
          </h2>
        </div>
        <div className="flex items-end gap-2 h-40">
          {weeklyData.map((d, i) => (
            <motion.div
              key={d.day}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex-1 flex flex-col items-center gap-2 origin-bottom"
            >
              <div
                className="w-full flex flex-col gap-1 items-center justify-end"
                style={{ height: "120px" }}
              >
                {/* Leads bar */}
                <div
                  className="w-full rounded-t-sm bg-accent/60"
                  style={{
                    height: `${(d.leads / maxCalls) * 100}px`,
                    minHeight: "4px",
                  }}
                  title={`Leads: ${d.leads}`}
                />
                {/* Calls bar */}
                <div
                  className="w-full rounded-t-sm gradient-accent"
                  style={{
                    height: `${(d.calls / maxCalls) * 100}px`,
                    minHeight: "6px",
                  }}
                  title={`Calls: ${d.calls}`}
                />
              </div>
              <span className="text-[10px] text-muted-foreground">{d.day}</span>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-2 rounded-sm gradient-accent" />
            <span className="text-xs text-muted-foreground">Calls</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-2 rounded-sm bg-accent/60" />
            <span className="text-xs text-muted-foreground">Leads</span>
          </div>
        </div>
      </Card>

      {/* Lead Sources */}
      <Card className="glass-effect-dark border-border p-6">
        <div className="flex items-center gap-2 mb-5">
          <Users className="w-4 h-4 text-accent" />
          <h2 className="font-display font-semibold text-foreground text-sm">
            Lead Sources
          </h2>
        </div>
        <div className="space-y-4">
          {[
            { source: "AI Voice Agent", count: 32, pct: 80 },
            { source: "Manual Entry", count: 8, pct: 20 },
          ].map((s) => (
            <div key={s.source}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-foreground">{s.source}</span>
                <span className="text-sm font-semibold text-foreground">
                  {s.count} leads
                </span>
              </div>
              <div className="h-2 rounded-full bg-muted/40 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-full rounded-full gradient-accent"
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
