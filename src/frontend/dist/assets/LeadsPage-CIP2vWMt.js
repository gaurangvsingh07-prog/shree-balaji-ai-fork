import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button, U as Users, X } from "./index-D0AWEIiM.js";
import { L as LeadSource, c as LeadStatus, d as LeadPriority } from "./backend-ClNi1UKZ.js";
import { B as Badge } from "./badge-BjVDTU3O.js";
import { C as Card } from "./card-Crv-ebxL.js";
import { P as Plus, D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-C5fX6u9S.js";
import { S as Search } from "./search-Cys7jSnX.js";
import { m as motion } from "./proxy-BWz1kCTu.js";
import { P as Phone } from "./phone-Daw3KLMm.js";
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
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$1);
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
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const mockLeads = [
  {
    leadId: "lead-1",
    customerName: "Rajesh Kumar",
    phone: "+91 98765 43210",
    email: "rajesh.k@email.com",
    budget: "₹85 Lakhs",
    location: "Thane West",
    propertyType: "2BHK Apartment",
    buyingTimeline: "3 months",
    siteVisitInterest: true,
    priority: LeadPriority.High,
    status: LeadStatus.Qualified,
    source: LeadSource.AICall,
    notes: "Interested in ready possession. Budget flexible for right property.",
    businessId: "biz-1",
    createdAt: BigInt(Date.now() - 1e3 * 60 * 30),
    updatedAt: BigInt(Date.now() - 1e3 * 60 * 10)
  },
  {
    leadId: "lead-2",
    customerName: "Priya Sharma",
    phone: "+91 87654 32109",
    email: "priya.s@email.com",
    budget: "₹1.2 Crore",
    location: "Powai",
    propertyType: "3BHK Flat",
    buyingTimeline: "1 month",
    siteVisitInterest: true,
    priority: LeadPriority.High,
    status: LeadStatus.Scheduled,
    source: LeadSource.AICall,
    notes: "Site visit confirmed for Saturday 3 PM. Very interested in lake view.",
    businessId: "biz-1",
    createdAt: BigInt(Date.now() - 1e3 * 60 * 60 * 2),
    updatedAt: BigInt(Date.now() - 1e3 * 60 * 30)
  },
  {
    leadId: "lead-3",
    customerName: "Amit Patel",
    phone: "+91 76543 21098",
    budget: "₹60 Lakhs",
    location: "Dombivli East",
    propertyType: "1BHK",
    buyingTimeline: "6 months",
    siteVisitInterest: false,
    priority: LeadPriority.Medium,
    status: LeadStatus.New,
    source: LeadSource.AICall,
    notes: "First-time buyer. Needs more information about loan options.",
    businessId: "biz-1",
    createdAt: BigInt(Date.now() - 1e3 * 60 * 60 * 5),
    updatedAt: BigInt(Date.now() - 1e3 * 60 * 60 * 5)
  },
  {
    leadId: "lead-4",
    customerName: "Sunita Rao",
    phone: "+91 65432 10987",
    email: "sunita.r@gmail.com",
    budget: "₹2 Crore",
    location: "Navi Mumbai",
    propertyType: "4BHK Villa",
    buyingTimeline: "2 months",
    siteVisitInterest: true,
    priority: LeadPriority.High,
    status: LeadStatus.Qualified,
    source: LeadSource.Manual,
    notes: "Premium segment buyer. Looking for gated community with amenities.",
    businessId: "biz-1",
    createdAt: BigInt(Date.now() - 1e3 * 60 * 60 * 8),
    updatedAt: BigInt(Date.now() - 1e3 * 60 * 60 * 3)
  },
  {
    leadId: "lead-5",
    customerName: "Vikram Singh",
    phone: "+91 54321 09876",
    budget: "₹45 Lakhs",
    location: "Kalyan",
    propertyType: "Studio Apartment",
    buyingTimeline: "As soon as possible",
    siteVisitInterest: true,
    priority: LeadPriority.Low,
    status: LeadStatus.Closed,
    source: LeadSource.AICall,
    notes: "Property booked. Purchase completed.",
    businessId: "biz-1",
    createdAt: BigInt(Date.now() - 1e3 * 60 * 60 * 24),
    updatedAt: BigInt(Date.now() - 1e3 * 60 * 60 * 12)
  },
  {
    leadId: "lead-6",
    customerName: "Meena Joshi",
    phone: "+91 91234 56789",
    email: "meena.j@gmail.com",
    budget: "₹75 Lakhs",
    location: "Ulhasnagar",
    propertyType: "2BHK",
    buyingTimeline: "4 months",
    siteVisitInterest: false,
    priority: LeadPriority.Medium,
    status: LeadStatus.New,
    source: LeadSource.Manual,
    notes: "Comparing multiple projects. Needs follow-up.",
    businessId: "biz-1",
    createdAt: BigInt(Date.now() - 1e3 * 60 * 60 * 10),
    updatedAt: BigInt(Date.now() - 1e3 * 60 * 60 * 10)
  }
];
const COLUMNS = [
  {
    status: LeadStatus.New,
    label: "New",
    color: "border-border",
    headerCls: "bg-muted/60 text-muted-foreground"
  },
  {
    status: LeadStatus.Qualified,
    label: "Qualified",
    color: "border-chart-3/40",
    headerCls: "bg-chart-3/15 text-chart-3"
  },
  {
    status: LeadStatus.Scheduled,
    label: "Scheduled",
    color: "border-primary/40",
    headerCls: "bg-primary/15 text-primary"
  },
  {
    status: LeadStatus.Closed,
    label: "Closed",
    color: "border-accent/40",
    headerCls: "bg-accent/15 text-accent"
  }
];
const statusColors = {
  [LeadStatus.New]: "bg-muted text-muted-foreground border-border",
  [LeadStatus.Qualified]: "bg-chart-3/20 text-chart-3 border-chart-3/30",
  [LeadStatus.Scheduled]: "bg-primary/20 text-primary border-primary/30",
  [LeadStatus.Closed]: "bg-accent/20 text-accent border-accent/30"
};
const priorityColors = {
  [LeadPriority.High]: "text-destructive",
  [LeadPriority.Medium]: "text-chart-1",
  [LeadPriority.Low]: "text-muted-foreground"
};
const emptyForm = {
  customerName: "",
  phone: "+91 ",
  budget: "",
  location: "",
  propertyType: ""
};
function LeadsPage() {
  const [leads, setLeads] = reactExports.useState(mockLeads);
  const [search, setSearch] = reactExports.useState("");
  const [selected, setSelected] = reactExports.useState(null);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [addForm, setAddForm] = reactExports.useState(emptyForm);
  const [movingId, setMovingId] = reactExports.useState(null);
  const filteredBySearch = (lead) => lead.customerName.toLowerCase().includes(search.toLowerCase()) || (lead.location ?? "").toLowerCase().includes(search.toLowerCase());
  const moveLeadTo = (leadId, status) => {
    setMovingId(leadId);
    setTimeout(() => {
      setLeads(
        (prev) => prev.map((l) => l.leadId === leadId ? { ...l, status } : l)
      );
      setMovingId(null);
    }, 200);
  };
  const handleAddLead = () => {
    if (!addForm.customerName || !addForm.phone) return;
    const newLead = {
      leadId: `lead-${Date.now()}`,
      customerName: addForm.customerName,
      phone: addForm.phone,
      budget: addForm.budget || "TBD",
      location: addForm.location || void 0,
      propertyType: addForm.propertyType || "TBD",
      buyingTimeline: "TBD",
      siteVisitInterest: false,
      priority: LeadPriority.Medium,
      status: LeadStatus.New,
      source: LeadSource.Manual,
      notes: "",
      businessId: "biz-1",
      createdAt: BigInt(Date.now()),
      updatedAt: BigInt(Date.now())
    };
    setLeads((prev) => [newLead, ...prev]);
    setAddForm(emptyForm);
    setAddOpen(false);
  };
  const otherStatuses = (current) => COLUMNS.filter((c) => c.status !== current);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 space-y-5 max-w-[1400px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Lead CRM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-0.5", children: [
          leads.length,
          " total leads"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          size: "sm",
          "data-ocid": "leads.add_lead_button",
          onClick: () => setAddOpen(true),
          className: "gradient-accent text-white font-medium hover:opacity-90 self-start sm:self-auto",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
            " Add Lead"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "search",
          placeholder: "Search leads...",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          "data-ocid": "leads.search_input",
          className: "w-full pl-9 pr-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-4 min-w-[720px]", children: COLUMNS.map((col) => {
      const colLeads = leads.filter(
        (l) => l.status === col.status && filteredBySearch(l)
      );
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center justify-between px-3 py-2 rounded-lg border ${col.color} ${col.headerCls}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wide", children: col.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold bg-background/40 rounded-full px-2 py-0.5", children: colLeads.length })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `leads.column.${col.status.toLowerCase()}`,
            className: "flex flex-col gap-3 min-h-[120px]",
            children: [
              colLeads.map((lead, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: {
                    opacity: movingId === lead.leadId ? 0 : 1,
                    y: 0
                  },
                  transition: { delay: i * 0.05, duration: 0.2 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Card,
                    {
                      "data-ocid": `leads.item.${i + 1}`,
                      className: "glass-effect-dark border-border hover:border-primary/30 transition-smooth p-4 cursor-pointer",
                      onClick: () => setSelected(lead),
                      onKeyDown: (e) => (e.key === "Enter" || e.key === " ") && setSelected(lead),
                      tabIndex: 0,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5 text-primary" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Star,
                            {
                              className: `w-3 h-3 ${priorityColors[lead.priority]}`,
                              fill: lead.priority === LeadPriority.High ? "currentColor" : "none"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-sm leading-snug", children: lead.customerName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 space-y-0.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[11px] text-muted-foreground", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-2.5 h-2.5 shrink-0" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: lead.phone })
                          ] }),
                          lead.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[11px] text-muted-foreground", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-2.5 h-2.5 shrink-0" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: lead.location })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2.5 pt-2.5 border-t border-border/50", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: lead.budget }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground truncate max-w-[60px]", children: lead.propertyType })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "mt-2.5 flex flex-wrap gap-1",
                            onClick: (e) => e.stopPropagation(),
                            onKeyDown: (e) => e.stopPropagation(),
                            children: otherStatuses(lead.status).map((target) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "button",
                              {
                                type: "button",
                                "data-ocid": `leads.move_${lead.leadId}_to_${target.status.toLowerCase()}`,
                                onClick: () => moveLeadTo(lead.leadId, target.status),
                                className: "px-1.5 py-0.5 rounded text-[10px] font-medium border border-input bg-muted/20 text-muted-foreground hover:border-primary/40 hover:text-primary transition-smooth",
                                children: [
                                  "→ ",
                                  target.label
                                ]
                              },
                              target.status
                            ))
                          }
                        )
                      ]
                    }
                  )
                },
                lead.leadId
              )),
              colLeads.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": `leads.${col.status.toLowerCase()}.empty_state`,
                  className: "flex flex-col items-center justify-center py-10 rounded-lg border border-dashed border-border/50 text-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-muted-foreground/40 mb-1.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "No leads" })
                  ]
                }
              )
            ]
          }
        )
      ] }, col.status);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!selected,
        onOpenChange: (open) => !open && setSelected(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", "data-ocid": "leads.dialog", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-primary" }),
            selected == null ? void 0 : selected.customerName
          ] }) }),
          selected && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-effect-dark rounded-lg p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide", children: "Budget" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mt-0.5", children: selected.budget })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-effect-dark rounded-lg p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide", children: "Timeline" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mt-0.5", children: selected.buyingTimeline })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-effect-dark rounded-lg p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide", children: "Location" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mt-0.5", children: selected.location })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-effect-dark rounded-lg p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide", children: "Property" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mt-0.5", children: selected.propertyType })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-effect-dark rounded-lg p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide mb-1", children: "Notes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selected.notes })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: `text-xs ${statusColors[selected.status]}`,
                  children: selected.status
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: selected.source }),
              selected.siteVisitInterest && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: "text-xs bg-chart-3/10 text-chart-3 border-chart-3/20",
                  children: "Site Visit ✓"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                className: "w-full gradient-accent text-white font-medium hover:opacity-90",
                "data-ocid": "leads.close_button",
                onClick: () => setSelected(null),
                children: "Close"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: addOpen, onOpenChange: setAddOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", "data-ocid": "leads.add_lead_dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-5 h-5 text-primary" }),
        "Add New Lead"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "add-lead-name",
              className: "block text-xs font-medium text-muted-foreground mb-1.5",
              children: "Customer Name *"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "add-lead-name",
              type: "text",
              value: addForm.customerName,
              onChange: (e) => setAddForm((f) => ({ ...f, customerName: e.target.value })),
              placeholder: "e.g. Ravi Mehta",
              "data-ocid": "leads.add_name_input",
              className: "w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "add-lead-phone",
              className: "block text-xs font-medium text-muted-foreground mb-1.5",
              children: "Phone Number *"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "add-lead-phone",
              type: "tel",
              value: addForm.phone,
              onChange: (e) => setAddForm((f) => ({ ...f, phone: e.target.value })),
              placeholder: "+91 9876543210",
              "data-ocid": "leads.add_phone_input",
              className: "w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "add-lead-budget",
                className: "block text-xs font-medium text-muted-foreground mb-1.5",
                children: "Budget"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "add-lead-budget",
                type: "text",
                value: addForm.budget,
                onChange: (e) => setAddForm((f) => ({ ...f, budget: e.target.value })),
                placeholder: "₹50 Lakhs",
                "data-ocid": "leads.add_budget_input",
                className: "w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "add-lead-location",
                className: "block text-xs font-medium text-muted-foreground mb-1.5",
                children: "Location"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "add-lead-location",
                type: "text",
                value: addForm.location,
                onChange: (e) => setAddForm((f) => ({ ...f, location: e.target.value })),
                placeholder: "Thane West",
                "data-ocid": "leads.add_location_input",
                className: "w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "add-lead-property",
              className: "block text-xs font-medium text-muted-foreground mb-1.5",
              children: "Property Type"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "add-lead-property",
              type: "text",
              value: addForm.propertyType,
              onChange: (e) => setAddForm((f) => ({ ...f, propertyType: e.target.value })),
              placeholder: "2BHK Apartment",
              "data-ocid": "leads.add_property_input",
              className: "w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              variant: "outline",
              className: "flex-1",
              "data-ocid": "leads.add_cancel_button",
              onClick: () => {
                setAddOpen(false);
                setAddForm(emptyForm);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 mr-1.5" }),
                " Cancel"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              className: "flex-1 gradient-accent text-white font-semibold hover:opacity-90",
              "data-ocid": "leads.add_submit_button",
              disabled: !addForm.customerName || !addForm.phone,
              onClick: handleAddLead,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-1.5" }),
                " Add Lead"
              ]
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
export {
  LeadsPage as default
};
