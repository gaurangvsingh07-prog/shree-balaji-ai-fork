import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button, b as Bot, Z as Zap } from "./index-D0AWEIiM.js";
import { b as AgentStatus, A as AgentTone, a as AgentLanguage, B as BusinessCategory } from "./backend-ClNi1UKZ.js";
import { B as Badge } from "./badge-BjVDTU3O.js";
import { C as Card } from "./card-Crv-ebxL.js";
import { P as Plus, D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-C5fX6u9S.js";
import { m as motion } from "./proxy-BWz1kCTu.js";
import { G as Globe } from "./globe-BWAbvNJv.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
];
const Pause = createLucideIcon("pause", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]];
const Play = createLucideIcon("play", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
const mockAgents = [
  {
    agentId: "agent-1",
    agentName: "Real Estate Pro",
    useCase: BusinessCategory.RealEstate,
    language: AgentLanguage.english,
    tone: AgentTone.professional,
    status: AgentStatus.active,
    customInstructions: "Focus on luxury properties in Thane and Navi Mumbai. Always ask for site visit interest.",
    businessId: "biz-1",
    createdAt: BigInt(Date.now() - 1e3 * 60 * 60 * 24 * 5)
  },
  {
    agentId: "agent-2",
    agentName: "Hindi Support Agent",
    useCase: BusinessCategory.RealEstate,
    language: AgentLanguage.hindi,
    tone: AgentTone.friendly,
    status: AgentStatus.active,
    customInstructions: "हिंदी में ग्राहकों से बात करें। बजट और लोकेशन पूछें।",
    businessId: "biz-1",
    createdAt: BigInt(Date.now() - 1e3 * 60 * 60 * 24 * 2)
  },
  {
    agentId: "agent-3",
    agentName: "Marathi Local Agent",
    useCase: BusinessCategory.RealEstate,
    language: AgentLanguage.marathi,
    tone: AgentTone.friendly,
    status: AgentStatus.paused,
    customInstructions: "मराठी मध्ये ग्राहकांशी संवाद साधा.",
    businessId: "biz-1",
    createdAt: BigInt(Date.now() - 1e3 * 60 * 60 * 24)
  }
];
const languageLabels = {
  english: "English",
  hindi: "हिंदी",
  marathi: "मराठी"
};
const toneLabels = {
  professional: "Professional",
  friendly: "Friendly",
  formal: "Formal",
  casual: "Casual"
};
function AgentsPage() {
  const [agents, setAgents] = reactExports.useState(mockAgents);
  const [showCreate, setShowCreate] = reactExports.useState(false);
  const [newName, setNewName] = reactExports.useState("");
  const [newLang, setNewLang] = reactExports.useState(AgentLanguage.english);
  const [newTone, setNewTone] = reactExports.useState(AgentTone.professional);
  const [newInstructions, setNewInstructions] = reactExports.useState("");
  const toggleStatus = (agentId) => {
    setAgents(
      (prev) => prev.map(
        (a) => a.agentId === agentId ? {
          ...a,
          status: a.status === AgentStatus.active ? AgentStatus.paused : AgentStatus.active
        } : a
      )
    );
  };
  const deleteAgent = (agentId) => {
    setAgents((prev) => prev.filter((a) => a.agentId !== agentId));
  };
  const createAgent = () => {
    if (!newName.trim()) return;
    const newAgent = {
      agentId: `agent-${Date.now()}`,
      agentName: newName,
      useCase: BusinessCategory.RealEstate,
      language: newLang,
      tone: newTone,
      status: AgentStatus.active,
      customInstructions: newInstructions,
      businessId: "biz-1",
      createdAt: BigInt(Date.now())
    };
    setAgents((prev) => [...prev, newAgent]);
    setShowCreate(false);
    setNewName("");
    setNewInstructions("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 space-y-6 max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "AI Agents" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-0.5", children: [
          agents.length,
          " agents configured"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          size: "sm",
          onClick: () => setShowCreate(true),
          "data-ocid": "agents.create_agent_button",
          className: "gradient-accent text-white font-medium hover:opacity-90",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
            "New Agent"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4", children: [
      agents.map((agent, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              "data-ocid": `agents.item.${i + 1}`,
              className: "glass-effect-dark border-border hover:border-primary/30 transition-smooth p-5 flex flex-col gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: `text-xs ${agent.status === AgentStatus.active ? "bg-chart-3/15 text-chart-3 border-chart-3/30" : "bg-muted text-muted-foreground border-border"}`,
                      children: agent.status === AgentStatus.active ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-chart-3 animate-pulse" }),
                        "Active"
                      ] }) : "Paused"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: agent.agentName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3 h-3 text-muted-foreground" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: languageLabels[agent.language] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/40", children: "·" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: toneLabels[agent.tone] })
                  ] })
                ] }),
                agent.customInstructions && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2", children: agent.customInstructions }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-auto", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      className: "flex-1 text-xs border-border hover:border-primary/40",
                      onClick: () => toggleStatus(agent.agentId),
                      "data-ocid": `agents.toggle.${i + 1}`,
                      children: agent.status === AgentStatus.active ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "w-3 h-3 mr-1.5" }),
                        "Pause"
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-3 h-3 mr-1.5" }),
                        "Activate"
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      className: "text-destructive border-destructive/30 hover:bg-destructive/10 text-xs",
                      onClick: () => deleteAgent(agent.agentId),
                      "data-ocid": `agents.delete_button.${i + 1}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                    }
                  )
                ] })
              ]
            }
          )
        },
        agent.agentId
      )),
      agents.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "agents.empty_state",
          className: "md:col-span-2 xl:col-span-3 flex flex-col items-center justify-center py-16 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-12 h-12 text-muted-foreground mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-2", children: "No agents yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Create your first AI voice agent to start automating calls." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                onClick: () => setShowCreate(true),
                "data-ocid": "agents.empty_create_button",
                className: "gradient-accent text-white font-medium",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
                  "Create Agent"
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showCreate, onOpenChange: setShowCreate, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", "data-ocid": "agents.create_dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-primary" }),
        "Create AI Agent"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "agent-name",
              className: "block text-xs font-medium text-muted-foreground mb-1.5",
              children: "Agent Name *"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "agent-name",
              type: "text",
              value: newName,
              onChange: (e) => setNewName(e.target.value),
              placeholder: "e.g. Real Estate Pro Agent",
              "data-ocid": "agents.name_input",
              className: "w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "agent-language",
              className: "block text-xs font-medium text-muted-foreground mb-1.5",
              children: "Language"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "agent-language", className: "flex gap-2", children: Object.values(AgentLanguage).map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setNewLang(lang),
              className: `flex-1 py-2 rounded-lg text-xs font-medium border transition-smooth ${newLang === lang ? "border-primary bg-primary/15 text-primary" : "border-input bg-muted/20 text-muted-foreground hover:border-primary/40"}`,
              children: languageLabels[lang]
            },
            lang
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "agent-tone",
              className: "block text-xs font-medium text-muted-foreground mb-1.5",
              children: "Tone"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "agent-tone", className: "grid grid-cols-2 gap-2", children: Object.values(AgentTone).map((tone) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setNewTone(tone),
              className: `py-2 rounded-lg text-xs font-medium border transition-smooth ${newTone === tone ? "border-primary bg-primary/15 text-primary" : "border-input bg-muted/20 text-muted-foreground hover:border-primary/40"}`,
              children: toneLabels[tone]
            },
            tone
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "agent-instructions",
              className: "block text-xs font-medium text-muted-foreground mb-1.5",
              children: "Custom Instructions"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              id: "agent-instructions",
              value: newInstructions,
              onChange: (e) => setNewInstructions(e.target.value),
              placeholder: "Specific instructions for this agent...",
              rows: 3,
              "data-ocid": "agents.instructions_textarea",
              className: "w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth resize-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              className: "flex-1",
              onClick: () => setShowCreate(false),
              "data-ocid": "agents.cancel_button",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              className: "flex-1 gradient-accent text-white font-medium hover:opacity-90",
              onClick: createAgent,
              disabled: !newName.trim(),
              "data-ocid": "agents.confirm_button",
              children: "Create Agent"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
export {
  AgentsPage as default
};
