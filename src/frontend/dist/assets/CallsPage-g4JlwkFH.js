import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button, P as PhoneCall } from "./index-D0AWEIiM.js";
import { C as CallStatus } from "./backend-ClNi1UKZ.js";
import { B as Badge } from "./badge-BjVDTU3O.js";
import { C as Card } from "./card-Crv-ebxL.js";
import { P as PhoneMissed, C as Clock } from "./phone-missed-ChtusMxs.js";
import { S as Search } from "./search-Cys7jSnX.js";
import { m as motion } from "./proxy-BWz1kCTu.js";
import { P as Phone } from "./phone-Daw3KLMm.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272",
      key: "1wngk7"
    }
  ],
  ["path", { d: "M22 2 2 22", key: "y4kqgn" }],
  [
    "path",
    {
      d: "M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473",
      key: "10hv5p"
    }
  ]
];
const PhoneOff = createLucideIcon("phone-off", __iconNode);
const mockCalls = [
  {
    callId: "call-1",
    callerPhone: "+91 98765 43210",
    calleePhone: "+91 98676 92722",
    callStatus: CallStatus.Completed,
    durationSeconds: BigInt(272),
    transcriptSnippet: "Customer interested in 2BHK in Thane. Budget 85L. Wants site visit next weekend.",
    businessId: "biz-1",
    agentId: "agent-1",
    createdAt: BigInt(Date.now() - 1e3 * 60 * 5)
  },
  {
    callId: "call-2",
    callerPhone: "+91 87654 32109",
    calleePhone: "+91 98676 92722",
    callStatus: CallStatus.Completed,
    durationSeconds: BigInt(134),
    transcriptSnippet: "Confirmed site visit for Saturday 3PM. Priya is very interested in Powai lakefront property.",
    businessId: "biz-1",
    agentId: "agent-1",
    createdAt: BigInt(Date.now() - 1e3 * 60 * 32)
  },
  {
    callId: "call-3",
    callerPhone: "+91 76543 21098",
    calleePhone: "+91 98676 92722",
    callStatus: CallStatus.Missed,
    durationSeconds: BigInt(0),
    businessId: "biz-1",
    agentId: "agent-1",
    createdAt: BigInt(Date.now() - 1e3 * 60 * 65)
  },
  {
    callId: "call-4",
    callerPhone: "+91 65432 10987",
    calleePhone: "+91 98676 92722",
    callStatus: CallStatus.Completed,
    durationSeconds: BigInt(367),
    transcriptSnippet: "Premium buyer looking for 4BHK villa in Navi Mumbai. Budget 2Cr. Serious buyer.",
    businessId: "biz-1",
    agentId: "agent-1",
    createdAt: BigInt(Date.now() - 1e3 * 60 * 120)
  },
  {
    callId: "call-5",
    callerPhone: "+91 54321 09876",
    calleePhone: "+91 98676 92722",
    callStatus: CallStatus.Transferred,
    durationSeconds: BigInt(45),
    transcriptSnippet: "High-intent buyer, transferred to human agent for closure.",
    businessId: "biz-1",
    agentId: "agent-2",
    createdAt: BigInt(Date.now() - 1e3 * 60 * 180)
  },
  {
    callId: "call-6",
    callerPhone: "+91 43210 98765",
    calleePhone: "+91 98676 92722",
    callStatus: CallStatus.Missed,
    durationSeconds: BigInt(0),
    businessId: "biz-1",
    agentId: "agent-1",
    createdAt: BigInt(Date.now() - 1e3 * 60 * 240)
  }
];
function formatDuration(seconds) {
  const s = Number(seconds);
  if (s === 0) return "—";
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return `${m}:${rem.toString().padStart(2, "0")}`;
}
function timeAgo(ts) {
  const diff = Date.now() - Number(ts);
  const mins = Math.floor(diff / 6e4);
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
    badge: "bg-chart-3/20 text-chart-3 border-chart-3/30"
  },
  [CallStatus.Missed]: {
    icon: PhoneMissed,
    color: "text-destructive",
    bg: "bg-destructive/15",
    badge: "bg-destructive/20 text-destructive border-destructive/30"
  },
  [CallStatus.Transferred]: {
    icon: PhoneOff,
    color: "text-primary",
    bg: "bg-primary/15",
    badge: "bg-primary/20 text-primary border-primary/30"
  }
};
function CallsPage() {
  const [calls] = reactExports.useState(mockCalls);
  const [search, setSearch] = reactExports.useState("");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const filtered = calls.filter((c) => {
    const matchSearch = c.callerPhone.includes(search);
    const matchStatus = statusFilter === "all" || c.callStatus === statusFilter;
    return matchSearch && matchStatus;
  });
  const completedCount = calls.filter(
    (c) => c.callStatus === CallStatus.Completed
  ).length;
  const missedCount = calls.filter(
    (c) => c.callStatus === CallStatus.Missed
  ).length;
  const totalDuration = calls.reduce(
    (acc, c) => acc + Number(c.durationSeconds),
    0
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 space-y-6 max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Call Logs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-0.5", children: [
          calls.length,
          " calls recorded today"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "sm",
          "data-ocid": "calls.export_button",
          className: "border-border text-muted-foreground hover:text-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 mr-2" }),
            " Export"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4", children: [
      {
        label: "Completed",
        value: completedCount,
        icon: PhoneCall,
        color: "text-chart-3"
      },
      {
        label: "Missed",
        value: missedCount,
        icon: PhoneMissed,
        color: "text-destructive"
      },
      {
        label: "Total Duration",
        value: `${Math.floor(totalDuration / 60)} min`,
        icon: Clock,
        color: "text-primary"
      }
    ].map((stat, _i) => {
      const Icon = stat.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "glass-effect-dark border-border p-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 ${stat.color}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground", children: stat.label })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-foreground mt-2", children: stat.value })
          ]
        },
        stat.label
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "search",
            placeholder: "Search by phone number...",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            "data-ocid": "calls.search_input",
            className: "w-full pl-9 pr-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-4 h-4 text-muted-foreground" }),
        ["all", ...Object.values(CallStatus)].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setStatusFilter(s),
            "data-ocid": `calls.filter.${s}`,
            className: `px-3 py-1.5 rounded-lg text-xs font-medium border transition-smooth ${statusFilter === s ? "border-primary bg-primary/15 text-primary" : "border-input bg-muted/20 text-muted-foreground hover:border-primary/30"}`,
            children: s === "all" ? "All" : s
          },
          s
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "glass-effect-dark border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "divide-y divide-border", children: [
      filtered.map((call, i) => {
        const config = statusConfig[call.callStatus];
        const Icon = config.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -8 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: i * 0.06 },
            "data-ocid": `calls.item.${i + 1}`,
            className: "flex items-start gap-4 px-5 py-4 hover:bg-muted/10 transition-smooth",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-9 h-9 rounded-full ${config.bg} flex items-center justify-center shrink-0`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-4 h-4 ${config.color}` })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground font-mono", children: call.callerPhone }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: `text-xs ${config.badge}`,
                      children: call.callStatus
                    }
                  )
                ] }),
                call.transcriptSnippet && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-1", children: call.transcriptSnippet })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 shrink-0 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                  formatDuration(call.durationSeconds)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3 h-3" }),
                  timeAgo(call.createdAt)
                ] })
              ] })
            ]
          },
          call.callId
        );
      }),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "calls.empty_state", className: "py-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneCall, { className: "w-10 h-10 text-muted-foreground mx-auto mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No call logs found" })
      ] })
    ] }) })
  ] });
}
export {
  CallsPage as default
};
