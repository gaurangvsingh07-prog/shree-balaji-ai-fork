import { c as createLucideIcon, a as useNavigate, j as jsxRuntimeExports, B as Button, b as Bot, U as Users, P as PhoneCall } from "./index-D0AWEIiM.js";
import { B as Badge } from "./badge-BjVDTU3O.js";
import { C as Card } from "./card-Crv-ebxL.js";
import { T as TrendingUp } from "./trending-up-B5-q-zPi.js";
import { m as motion } from "./proxy-BWz1kCTu.js";
import { P as PhoneMissed, C as Clock } from "./phone-missed-ChtusMxs.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode);
const statCards = [
  {
    label: "Total Leads",
    value: "247",
    delta: "+18%",
    icon: Users,
    color: "text-primary"
  },
  {
    label: "Active Agents",
    value: "3",
    delta: "2 live",
    icon: Bot,
    color: "text-accent"
  },
  {
    label: "Calls Today",
    value: "38",
    delta: "+5 vs yesterday",
    icon: PhoneCall,
    color: "text-chart-2"
  },
  {
    label: "Conversion Rate",
    value: "34%",
    delta: "+2.4%",
    icon: TrendingUp,
    color: "text-chart-3"
  }
];
const recentLeads = [
  {
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    budget: "₹85L",
    location: "Thane West",
    status: "Qualified",
    time: "5 min ago"
  },
  {
    name: "Priya Sharma",
    phone: "+91 87654 32109",
    budget: "₹1.2Cr",
    location: "Powai",
    status: "Scheduled",
    time: "32 min ago"
  },
  {
    name: "Amit Patel",
    phone: "+91 76543 21098",
    budget: "₹60L",
    location: "Dombivli",
    status: "New",
    time: "1 hr ago"
  },
  {
    name: "Sunita Rao",
    phone: "+91 65432 10987",
    budget: "₹2Cr",
    location: "Navi Mumbai",
    status: "Qualified",
    time: "2 hr ago"
  }
];
const recentCalls = [
  {
    caller: "+91 98123 45678",
    agent: "Real Estate Pro",
    duration: "4:32",
    status: "Completed"
  },
  {
    caller: "+91 87234 56789",
    agent: "Real Estate Pro",
    duration: "2:14",
    status: "Completed"
  },
  {
    caller: "+91 76345 67890",
    agent: "Real Estate Pro",
    duration: "0:00",
    status: "Missed"
  },
  {
    caller: "+91 65456 78901",
    agent: "Real Estate Pro",
    duration: "6:07",
    status: "Completed"
  }
];
const statusColors = {
  Qualified: "bg-chart-3/20 text-chart-3 border-chart-3/30",
  Scheduled: "bg-primary/20 text-primary border-primary/30",
  New: "bg-muted text-muted-foreground border-border",
  Completed: "bg-chart-3/20 text-chart-3 border-chart-3/30",
  Missed: "bg-destructive/20 text-destructive border-destructive/30"
};
function DashboardPage() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 space-y-6 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Welcome back, Shree Balaji Enterprises" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          size: "sm",
          onClick: () => navigate("/agents"),
          "data-ocid": "dashboard.create_agent_button",
          className: "gradient-accent text-white font-medium hover:opacity-90 transition-smooth self-start sm:self-auto",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-4 h-4 mr-2" }),
            "New AI Agent"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: statCards.map((stat, i) => {
      const Icon = stat.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "glass-effect-dark p-4 border-border hover:border-primary/30 transition-smooth", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2 rounded-lg bg-current/10 ${stat.color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-muted-foreground" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-foreground", children: stat.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: stat.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-chart-3 font-medium", children: stat.delta })
            ] })
          ] })
        },
        stat.label
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "glass-effect-dark border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground text-sm", children: "Recent Leads" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: () => navigate("/leads"),
              "data-ocid": "dashboard.view_all_leads_button",
              className: "text-xs text-primary hover:text-primary",
              children: "View all"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: recentLeads.map((lead, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `dashboard.lead.item.${i + 1}`,
            className: "px-5 py-3.5 flex items-center justify-between hover:bg-muted/10 transition-smooth",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: lead.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  lead.location,
                  " · ",
                  lead.budget
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 shrink-0 ml-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: `text-xs ${statusColors[lead.status]}`,
                    children: lead.status
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground hidden sm:block", children: lead.time })
              ] })
            ]
          },
          lead.name
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "glass-effect-dark border-border h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneCall, { className: "w-4 h-4 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground text-sm", children: "Recent Calls" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: () => navigate("/calls"),
              "data-ocid": "dashboard.view_all_calls_button",
              className: "text-xs text-primary",
              children: "View all"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: recentCalls.map((call, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `dashboard.call.item.${i + 1}`,
            className: "px-5 py-3.5 flex items-center gap-3 hover:bg-muted/10 transition-smooth",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${call.status === "Missed" ? "bg-destructive/20" : "bg-chart-3/20"}`,
                  children: call.status === "Missed" ? /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneMissed, { className: "w-3.5 h-3.5 text-destructive" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneCall, { className: "w-3.5 h-3.5 text-chart-3" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground truncate", children: call.caller }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: call.agent })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                call.duration
              ] })
            ]
          },
          call.caller
        )) })
      ] }) })
    ] })
  ] });
}
export {
  DashboardPage as default
};
