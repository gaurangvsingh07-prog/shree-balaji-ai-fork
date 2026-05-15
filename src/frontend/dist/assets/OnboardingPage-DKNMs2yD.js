import { c as createLucideIcon, a as useNavigate, r as reactExports, j as jsxRuntimeExports, B as Button, Z as Zap } from "./index-D0AWEIiM.js";
import { A as AgentTone, a as AgentLanguage, B as BusinessCategory } from "./backend-ClNi1UKZ.js";
import { B as Badge } from "./badge-BjVDTU3O.js";
import { m as motion } from "./proxy-BWz1kCTu.js";
import { C as Check } from "./check-BvhHJ6Yd.js";
import { B as Building2 } from "./building-2-DV2gXu0d.js";
import { A as ArrowRight } from "./arrow-right-DcnbQjNa.js";
import { G as Globe } from "./globe-BWAbvNJv.js";
import { P as Phone } from "./phone-Daw3KLMm.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
const steps = ["Business Info", "AI Personality", "Done"];
const categories = [
  { value: BusinessCategory.RealEstate, label: "Real Estate", emoji: "🏠" },
  { value: BusinessCategory.Clinic, label: "Clinic", emoji: "🏥" },
  { value: BusinessCategory.Salon, label: "Salon", emoji: "💇" },
  { value: BusinessCategory.Coaching, label: "Coaching", emoji: "📚" },
  { value: BusinessCategory.Gym, label: "Gym", emoji: "💪" },
  { value: BusinessCategory.Restaurant, label: "Restaurant", emoji: "🍽️" }
];
const languages = [
  { value: AgentLanguage.english, label: "English" },
  { value: AgentLanguage.hindi, label: "हिंदी" },
  { value: AgentLanguage.marathi, label: "मराठी" }
];
const tones = [
  { value: AgentTone.professional, label: "Professional" },
  { value: AgentTone.friendly, label: "Friendly" },
  { value: AgentTone.formal, label: "Formal" },
  { value: AgentTone.casual, label: "Casual" }
];
function OnboardingPage() {
  const navigate = useNavigate();
  const [step, setStep] = reactExports.useState(0);
  const [form, setForm] = reactExports.useState({
    businessName: "",
    phone: "+91 ",
    email: "",
    address: "",
    category: BusinessCategory.RealEstate,
    language: AgentLanguage.english,
    tone: AgentTone.professional
  });
  const update = (key, val) => setForm((prev) => ({ ...prev, [key]: val }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background flex items-center justify-center px-4 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/8 blur-[120px]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "relative z-10 w-full max-w-xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-8 justify-center", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-smooth ${i < step ? "bg-primary text-primary-foreground" : i === step ? "gradient-accent text-white accent-glow-sm" : "bg-muted text-muted-foreground"}`,
                children: i < step ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3" }) : i + 1
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-xs font-medium ${i === step ? "text-foreground" : "text-muted-foreground"}`,
                children: s
              }
            ),
            i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 text-muted-foreground" })
          ] }, s)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-effect-dark rounded-2xl p-8 border border-border", children: [
            step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground", children: "Business Information" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Tell us about your business" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "ob-business-name",
                      className: "block text-xs font-medium text-muted-foreground mb-1.5",
                      children: "Business Name *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "ob-business-name",
                      type: "text",
                      value: form.businessName,
                      onChange: (e) => update("businessName", e.target.value),
                      placeholder: "e.g. Balaji Properties",
                      "data-ocid": "onboarding.business_name_input",
                      className: "w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "ob-phone",
                      className: "block text-xs font-medium text-muted-foreground mb-1.5",
                      children: "Phone Number *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "ob-phone",
                      type: "tel",
                      value: form.phone,
                      onChange: (e) => update("phone", e.target.value),
                      placeholder: "+91 9867692722",
                      "data-ocid": "onboarding.phone_input",
                      className: "w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "ob-email",
                      className: "block text-xs font-medium text-muted-foreground mb-1.5",
                      children: "Email *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "ob-email",
                      type: "email",
                      value: form.email,
                      onChange: (e) => update("email", e.target.value),
                      placeholder: "you@business.com",
                      "data-ocid": "onboarding.email_input",
                      className: "w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "ob-category",
                      className: "block text-xs font-medium text-muted-foreground mb-1.5",
                      children: "Business Category *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => update("category", cat.value),
                      "data-ocid": `onboarding.category_${cat.value.toLowerCase()}`,
                      className: `p-2.5 rounded-lg text-xs font-medium border transition-smooth flex flex-col items-center gap-1 ${form.category === cat.value ? "border-primary bg-primary/15 text-primary" : "border-input bg-muted/20 text-muted-foreground hover:border-primary/40"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: cat.emoji }),
                        cat.label
                      ]
                    },
                    cat.value
                  )) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  className: "w-full mt-6 gradient-accent text-white font-semibold hover:opacity-90 transition-smooth",
                  onClick: () => setStep(1),
                  disabled: !form.businessName || !form.phone || !form.email,
                  "data-ocid": "onboarding.next_button",
                  children: [
                    "Continue ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                  ]
                }
              )
            ] }),
            step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-accent" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground", children: "AI Personality" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Configure your AI voice agent" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("fieldset", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("legend", { className: "block text-xs font-medium text-muted-foreground mb-2", children: "Primary Language" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: languages.map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => update("language", lang.value),
                      "data-ocid": `onboarding.lang_${lang.value}`,
                      "aria-pressed": form.language === lang.value,
                      className: `flex-1 py-2.5 rounded-lg text-sm font-medium border transition-smooth flex items-center justify-center gap-1.5 ${form.language === lang.value ? "border-primary bg-primary/15 text-primary" : "border-input bg-muted/20 text-muted-foreground hover:border-primary/40"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3 h-3" }),
                        lang.label
                      ]
                    },
                    lang.value
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("fieldset", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("legend", { className: "block text-xs font-medium text-muted-foreground mb-2", children: "Agent Tone" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: tones.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => update("tone", t.value),
                      "data-ocid": `onboarding.tone_${t.value}`,
                      "aria-pressed": form.tone === t.value,
                      className: `py-2.5 rounded-lg text-sm font-medium border transition-smooth ${form.tone === t.value ? "border-primary bg-primary/15 text-primary" : "border-input bg-muted/20 text-muted-foreground hover:border-primary/40"}`,
                      children: t.label
                    },
                    t.value
                  )) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    className: "flex-1",
                    onClick: () => setStep(0),
                    "data-ocid": "onboarding.back_button",
                    children: "Back"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    className: "flex-1 gradient-accent text-white font-semibold hover:opacity-90 transition-smooth",
                    onClick: () => setStep(2),
                    "data-ocid": "onboarding.setup_button",
                    children: [
                      "Set Up AI Agent ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                    ]
                  }
                )
              ] })
            ] }),
            step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                className: "text-center py-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mx-auto mb-6 accent-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-8 h-8 text-white" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "You're All Set!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-2 text-sm", children: [
                    "Your AI platform is ready. Welcome,",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: form.businessName }),
                    "."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Badge,
                    {
                      variant: "outline",
                      className: "mb-8 border-primary/20 text-primary bg-primary/5 text-xs",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3 h-3 mr-1" }),
                        " AI Agent ready to handle calls"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "button",
                      size: "lg",
                      className: "w-full gradient-accent text-white font-semibold hover:opacity-90 transition-smooth accent-glow",
                      onClick: () => navigate("/dashboard"),
                      "data-ocid": "onboarding.go_dashboard_button",
                      children: [
                        "Go to Dashboard ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ]
      }
    )
  ] });
}
export {
  OnboardingPage as default
};
