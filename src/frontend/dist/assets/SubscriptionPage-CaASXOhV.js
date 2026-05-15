import { c as createLucideIcon, j as jsxRuntimeExports, Z as Zap, B as Button } from "./index-D0AWEIiM.js";
import { S as SubscriptionTier } from "./backend-ClNi1UKZ.js";
import { B as Badge } from "./badge-BjVDTU3O.js";
import { C as Card } from "./card-Crv-ebxL.js";
import { m as motion } from "./proxy-BWz1kCTu.js";
import { C as Check } from "./check-BvhHJ6Yd.js";
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
      d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
      key: "1vdc57"
    }
  ],
  ["path", { d: "M5 21h14", key: "11awu3" }]
];
const Crown = createLucideIcon("crown", __iconNode$1);
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
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      key: "m3kijz"
    }
  ],
  [
    "path",
    {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      key: "1fmvmk"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]
];
const Rocket = createLucideIcon("rocket", __iconNode);
const plans = [
  {
    id: "free",
    name: "Free Trial",
    price: 0,
    currency: "INR",
    period: "14 days",
    tier: SubscriptionTier.free,
    highlighted: false,
    features: [
      "1 AI Voice Agent",
      "100 calls/month",
      "Basic lead capture",
      "English support",
      "Email notifications"
    ]
  },
  {
    id: "basic",
    name: "Basic",
    price: 2999,
    currency: "INR",
    period: "month",
    tier: SubscriptionTier.basic,
    highlighted: false,
    features: [
      "3 AI Voice Agents",
      "1,000 calls/month",
      "Full CRM + Lead scoring",
      "English + Hindi support",
      "WhatsApp notifications",
      "Call recordings 30 days"
    ]
  },
  {
    id: "pro",
    name: "Pro",
    price: 7999,
    currency: "INR",
    period: "month",
    tier: SubscriptionTier.pro,
    highlighted: true,
    features: [
      "10 AI Voice Agents",
      "5,000 calls/month",
      "Advanced CRM & Analytics",
      "English + Hindi + Marathi",
      "WhatsApp + Gmail integration",
      "Unlimited call recordings",
      "Priority support",
      "Custom AI instructions"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 24999,
    currency: "INR",
    period: "month",
    tier: SubscriptionTier.enterprise,
    highlighted: false,
    features: [
      "Unlimited AI Agents",
      "Unlimited calls",
      "White-label solution",
      "All languages",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "Multi-business accounts"
    ]
  }
];
const planIcons = {
  free: Zap,
  basic: Rocket,
  pro: Crown,
  enterprise: Crown
};
function SubscriptionPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 space-y-8 max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Choose Your Plan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Scale your AI voice operations with the right plan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          variant: "outline",
          className: "mt-3 border-primary/20 text-primary bg-primary/5 text-xs",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-3 h-3 mr-1" }),
            " Currently on Free Trial"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4", children: plans.map((plan, i) => {
      const Icon = planIcons[plan.id];
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.1 },
          "data-ocid": `subscription.plan.item.${i + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: `relative flex flex-col h-full border transition-smooth p-6 ${plan.highlighted ? "gradient-subtle border-primary/50 accent-glow" : "glass-effect-dark border-border hover:border-primary/30"}`,
              children: [
                plan.highlighted && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-0.5", children: "Most Popular" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-9 h-9 rounded-lg flex items-center justify-center ${plan.highlighted ? "gradient-accent" : "bg-primary/15"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Icon,
                        {
                          className: `w-4 h-4 ${plan.highlighted ? "text-white" : "text-primary"}`
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground", children: plan.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5", children: plan.price === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl font-bold text-foreground", children: "Free" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-3xl font-bold text-foreground", children: [
                    "₹",
                    plan.price.toLocaleString("en-IN")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground ml-1", children: [
                    "/",
                    plan.period
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 flex-1 mb-6", children: plan.features.map((feat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "flex items-start gap-2 text-sm text-muted-foreground",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-chart-3 shrink-0 mt-0.5" }),
                      feat
                    ]
                  },
                  feat
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    "data-ocid": `subscription.select_plan_${plan.id}_button`,
                    className: `w-full font-semibold transition-smooth ${plan.highlighted ? "gradient-accent text-white hover:opacity-90" : "border-primary/30 text-foreground hover:bg-primary/10"}`,
                    variant: plan.highlighted ? "default" : "outline",
                    children: plan.price === 0 ? "Current Plan" : `Upgrade to ${plan.name}`
                  }
                )
              ]
            }
          )
        },
        plan.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground", children: "All plans include GST. Powered by Razorpay. Cancel anytime." })
  ] });
}
export {
  SubscriptionPage as default
};
