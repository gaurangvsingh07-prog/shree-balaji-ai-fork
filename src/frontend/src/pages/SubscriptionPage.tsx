import { SubscriptionTier } from "@/backend";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { SubscriptionPlan } from "@/types";
import { Check, Crown, Rocket, Zap } from "lucide-react";
import { motion } from "motion/react";

const plans: SubscriptionPlan[] = [
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
      "Email notifications",
    ],
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
      "Call recordings 30 days",
    ],
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
      "Custom AI instructions",
    ],
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
      "Multi-business accounts",
    ],
  },
];

const planIcons: Record<string, React.ElementType> = {
  free: Zap,
  basic: Rocket,
  pro: Crown,
  enterprise: Crown,
};

export default function SubscriptionPage() {
  return (
    <div className="p-4 sm:p-6 space-y-8 max-w-5xl mx-auto">
      <div className="text-center">
        <h1 className="font-display text-2xl font-bold text-foreground">
          Choose Your Plan
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          Scale your AI voice operations with the right plan
        </p>
        <Badge
          variant="outline"
          className="mt-3 border-primary/20 text-primary bg-primary/5 text-xs"
        >
          <Crown className="w-3 h-3 mr-1" /> Currently on Free Trial
        </Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {plans.map((plan, i) => {
          const Icon = planIcons[plan.id];
          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              data-ocid={`subscription.plan.item.${i + 1}`}
            >
              <Card
                className={`relative flex flex-col h-full border transition-smooth p-6 ${
                  plan.highlighted
                    ? "gradient-subtle border-primary/50 accent-glow"
                    : "glass-effect-dark border-border hover:border-primary/30"
                }`}
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-0.5">
                    Most Popular
                  </Badge>
                )}

                <div className="flex items-center gap-2.5 mb-4">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${plan.highlighted ? "gradient-accent" : "bg-primary/15"}`}
                  >
                    <Icon
                      className={`w-4 h-4 ${plan.highlighted ? "text-white" : "text-primary"}`}
                    />
                  </div>
                  <h3 className="font-display font-bold text-foreground">
                    {plan.name}
                  </h3>
                </div>

                <div className="mb-5">
                  {plan.price === 0 ? (
                    <span className="font-display text-3xl font-bold text-foreground">
                      Free
                    </span>
                  ) : (
                    <>
                      <span className="font-display text-3xl font-bold text-foreground">
                        ₹{plan.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-sm text-muted-foreground ml-1">
                        /{plan.period}
                      </span>
                    </>
                  )}
                </div>

                <ul className="space-y-2 flex-1 mb-6">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-chart-3 shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Button
                  type="button"
                  data-ocid={`subscription.select_plan_${plan.id}_button`}
                  className={`w-full font-semibold transition-smooth ${
                    plan.highlighted
                      ? "gradient-accent text-white hover:opacity-90"
                      : "border-primary/30 text-foreground hover:bg-primary/10"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.price === 0
                    ? "Current Plan"
                    : `Upgrade to ${plan.name}`}
                </Button>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <p className="text-center text-xs text-muted-foreground">
        All plans include GST. Powered by Razorpay. Cancel anytime.
      </p>
    </div>
  );
}
