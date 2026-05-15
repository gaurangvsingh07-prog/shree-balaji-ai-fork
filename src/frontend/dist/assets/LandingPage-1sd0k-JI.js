import { c as createLucideIcon, u as useAuth, a as useNavigate, j as jsxRuntimeExports, Z as Zap, B as Button, b as Bot } from "./index-D0AWEIiM.js";
import { B as Badge } from "./badge-BjVDTU3O.js";
import { m as motion } from "./proxy-BWz1kCTu.js";
import { A as ArrowRight } from "./arrow-right-DcnbQjNa.js";
import { P as Phone } from "./phone-Daw3KLMm.js";
import { T as TrendingUp } from "./trending-up-B5-q-zPi.js";
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
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r"
    }
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }]
];
const Brain = createLucideIcon("brain", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode);
const features = [
  {
    icon: Phone,
    title: "AI Voice Agents",
    description: "Deploy intelligent voice agents that handle inbound and outbound calls 24/7 with human-like conversation."
  },
  {
    icon: Brain,
    title: "Lead Intelligence",
    description: "Automatically qualify leads, capture key information, and rank prospects by purchase intent."
  },
  {
    icon: TrendingUp,
    title: "Real-time Analytics",
    description: "Monitor call performance, conversion rates, and agent metrics through a live analytics dashboard."
  },
  {
    icon: Bot,
    title: "Multi-language Support",
    description: "Engage customers in English, Hindi, and Marathi for truly local business automation."
  }
];
const stats = [
  { value: "500+", label: "Businesses Using AI" },
  { value: "1.2M", label: "Calls Handled" },
  { value: "38%", label: "Avg Lead Conversion" },
  { value: "99.9%", label: "Uptime SLA" }
];
function LandingPage() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const handleCTA = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      login();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg gradient-accent flex items-center justify-center accent-glow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground", children: "Shree Balaji AI" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: () => navigate("/login"),
            "data-ocid": "landing.login_button",
            className: "text-muted-foreground hover:text-foreground",
            children: "Sign In"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            size: "sm",
            onClick: handleCTA,
            "data-ocid": "landing.cta_primary_button",
            className: "gradient-accent text-white font-semibold hover:opacity-90 transition-smooth",
            children: "Get Started Free"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex-1 flex items-center justify-center overflow-hidden bg-background py-20 px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-[120px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/8 blur-[100px]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: "mb-6 px-4 py-1.5 text-xs font-mono tracking-widest border-primary/30 text-primary bg-primary/10",
                  children: "AI VOICE PLATFORM · REAL ESTATE & BEYOND"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6", children: [
                "Your Business,",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-clip-text text-transparent gradient-accent", children: "Supercharged" }),
                " ",
                "with AI Voice"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed", children: "Deploy intelligent AI voice agents that qualify leads, schedule appointments, and engage customers 24/7 — in English, Hindi, and Marathi." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    size: "lg",
                    onClick: handleCTA,
                    "data-ocid": "landing.hero_cta_button",
                    className: "gradient-accent text-white font-semibold px-8 hover:opacity-90 transition-smooth accent-glow",
                    children: [
                      "Start Free Trial",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    size: "lg",
                    onClick: () => navigate("/subscription"),
                    "data-ocid": "landing.pricing_button",
                    className: "border-border hover:bg-muted/20 font-medium",
                    children: "View Pricing"
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 40 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.3 },
            className: "mt-16 relative",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden border border-border glass-effect-dark accent-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/hero-ai-voice.dim_1200x600.jpg",
                alt: "Shree Balaji AI Platform Dashboard",
                className: "w-full h-auto"
              }
            ) })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 border-y border-border py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6", children: stats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-bold text-foreground", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: stat.label })
        ]
      },
      stat.label
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground mb-3", children: "Everything Your Business Needs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "From real estate to clinics, our AI platform adapts to your business with powerful automation tools." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: features.map((feat, i) => {
        const Icon = feat.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.12 },
            className: "glass-effect-dark rounded-xl p-6 hover:border-primary/30 transition-smooth",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-2", children: feat.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: feat.description })
            ]
          },
          feat.title
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 border-y border-border py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-bold text-foreground mb-4", children: "Ready to Transform Your Business?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Join hundreds of businesses already using Shree Balaji AI to automate calls and grow faster." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          size: "lg",
          onClick: handleCTA,
          "data-ocid": "landing.bottom_cta_button",
          className: "gradient-accent text-white font-semibold px-10 hover:opacity-90 transition-smooth",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 mr-2" }),
            "Start Free — No Credit Card Required"
          ]
        }
      )
    ] }) })
  ] });
}
export {
  LandingPage as default
};
