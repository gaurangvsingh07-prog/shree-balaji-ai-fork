import { c as createLucideIcon, j as jsxRuntimeExports, P as PhoneCall, U as Users, S as ChartColumn } from "./index-D0AWEIiM.js";
import { B as Badge } from "./badge-BjVDTU3O.js";
import { C as Card } from "./card-Crv-ebxL.js";
import { T as TrendingUp } from "./trending-up-B5-q-zPi.js";
import { m as motion } from "./proxy-BWz1kCTu.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
];
const TrendingDown = createLucideIcon("trending-down", __iconNode);
const weeklyData = [
  { day: "Mon", calls: 12, leads: 4 },
  { day: "Tue", calls: 19, leads: 7 },
  { day: "Wed", calls: 8, leads: 2 },
  { day: "Thu", calls: 24, leads: 9 },
  { day: "Fri", calls: 31, leads: 12 },
  { day: "Sat", calls: 15, leads: 5 },
  { day: "Sun", calls: 6, leads: 1 }
];
const maxCalls = Math.max(...weeklyData.map((d) => d.calls));
const kpis = [
  {
    label: "Total Calls (7d)",
    value: "115",
    delta: "+22%",
    trend: "up",
    icon: PhoneCall
  },
  {
    label: "New Leads (7d)",
    value: "40",
    delta: "+15%",
    trend: "up",
    icon: Users
  },
  {
    label: "Conversion Rate",
    value: "34.8%",
    delta: "+2.4%",
    trend: "up",
    icon: TrendingUp
  },
  {
    label: "Avg Call Duration",
    value: "3:42",
    delta: "-0:12",
    trend: "down",
    icon: ChartColumn
  }
];
function AnalyticsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 space-y-6 max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Analytics" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Performance metrics for the last 7 days" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: kpis.map((kpi, i) => {
      const Icon = kpi.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "glass-effect-dark border-border p-4 hover:border-primary/30 transition-smooth", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-primary/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-primary" }) }),
              kpi.trend === "up" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3.5 h-3.5 text-chart-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-3.5 h-3.5 text-destructive" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-foreground", children: kpi.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: kpi.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: `text-[10px] px-1.5 ${kpi.trend === "up" ? "bg-chart-3/15 text-chart-3 border-chart-3/30" : "bg-destructive/15 text-destructive border-destructive/30"}`,
                  children: kpi.delta
                }
              )
            ] })
          ] })
        },
        kpi.label
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "glass-effect-dark border-border p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground text-sm", children: "Weekly Call Volume" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-2 h-40", children: weeklyData.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scaleY: 0 },
          animate: { opacity: 1, scaleY: 1 },
          transition: { delay: i * 0.08, duration: 0.4 },
          className: "flex-1 flex flex-col items-center gap-2 origin-bottom",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "w-full flex flex-col gap-1 items-center justify-end",
                style: { height: "120px" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-full rounded-t-sm bg-accent/60",
                      style: {
                        height: `${d.leads / maxCalls * 100}px`,
                        minHeight: "4px"
                      },
                      title: `Leads: ${d.leads}`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-full rounded-t-sm gradient-accent",
                      style: {
                        height: `${d.calls / maxCalls * 100}px`,
                        minHeight: "6px"
                      },
                      title: `Calls: ${d.calls}`
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: d.day })
          ]
        },
        d.day
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-2 rounded-sm gradient-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Calls" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-2 rounded-sm bg-accent/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Leads" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "glass-effect-dark border-border p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground text-sm", children: "Lead Sources" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
        { source: "AI Voice Agent", count: 32, pct: 80 },
        { source: "Manual Entry", count: 8, pct: 20 }
      ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: s.source }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-foreground", children: [
            s.count,
            " leads"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-muted/40 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { width: 0 },
            whileInView: { width: `${s.pct}%` },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.2 },
            className: "h-full rounded-full gradient-accent"
          }
        ) })
      ] }, s.source)) })
    ] })
  ] });
}
export {
  AnalyticsPage as default
};
