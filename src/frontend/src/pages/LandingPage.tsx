import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import {
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  Phone,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Phone,
    title: "AI Voice Agents",
    description:
      "Deploy intelligent voice agents that handle inbound and outbound calls 24/7 with human-like conversation.",
  },
  {
    icon: Brain,
    title: "Lead Intelligence",
    description:
      "Automatically qualify leads, capture key information, and rank prospects by purchase intent.",
  },
  {
    icon: TrendingUp,
    title: "Real-time Analytics",
    description:
      "Monitor call performance, conversion rates, and agent metrics through a live analytics dashboard.",
  },
  {
    icon: Bot,
    title: "Multi-language Support",
    description:
      "Engage customers in English, Hindi, and Marathi for truly local business automation.",
  },
];

const stats = [
  { value: "500+", label: "Businesses Using AI" },
  { value: "1.2M", label: "Calls Handled" },
  { value: "38%", label: "Avg Lead Conversion" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function LandingPage() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  const handleCTA = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      login();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center accent-glow-sm">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-foreground">
              Shree Balaji AI
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => navigate("/login")}
              data-ocid="landing.login_button"
              className="text-muted-foreground hover:text-foreground"
            >
              Sign In
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={handleCTA}
              data-ocid="landing.cta_primary_button"
              className="gradient-accent text-white font-semibold hover:opacity-90 transition-smooth"
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex-1 flex items-center justify-center overflow-hidden bg-background py-20 px-4">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/8 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1.5 text-xs font-mono tracking-widest border-primary/30 text-primary bg-primary/10"
            >
              AI VOICE PLATFORM · REAL ESTATE & BEYOND
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Your Business,{" "}
              <span className="bg-clip-text text-transparent gradient-accent">
                Supercharged
              </span>{" "}
              with AI Voice
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Deploy intelligent AI voice agents that qualify leads, schedule
              appointments, and engage customers 24/7 — in English, Hindi, and
              Marathi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                type="button"
                size="lg"
                onClick={handleCTA}
                data-ocid="landing.hero_cta_button"
                className="gradient-accent text-white font-semibold px-8 hover:opacity-90 transition-smooth accent-glow"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => navigate("/subscription")}
                data-ocid="landing.pricing_button"
                className="border-border hover:bg-muted/20 font-medium"
              >
                View Pricing
              </Button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 relative"
          >
            <div className="rounded-2xl overflow-hidden border border-border glass-effect-dark accent-glow">
              <img
                src="/assets/generated/hero-ai-voice.dim_1200x600.jpg"
                alt="Shree Balaji AI Platform Dashboard"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted/30 border-y border-border py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-background py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">
              Everything Your Business Needs
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From real estate to clinics, our AI platform adapts to your
              business with powerful automation tools.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="glass-effect-dark rounded-xl p-6 hover:border-primary/30 transition-smooth"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-muted/30 border-y border-border py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join hundreds of businesses already using Shree Balaji AI to
            automate calls and grow faster.
          </p>
          <Button
            type="button"
            size="lg"
            onClick={handleCTA}
            data-ocid="landing.bottom_cta_button"
            className="gradient-accent text-white font-semibold px-10 hover:opacity-90 transition-smooth"
          >
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Start Free — No Credit Card Required
          </Button>
        </div>
      </section>
    </div>
  );
}
