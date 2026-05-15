import { AgentLanguage, AgentTone, BusinessCategory } from "@/backend";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  Globe,
  Phone,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const steps = ["Business Info", "AI Personality", "Done"];

const categories = [
  { value: BusinessCategory.RealEstate, label: "Real Estate", emoji: "🏠" },
  { value: BusinessCategory.Clinic, label: "Clinic", emoji: "🏥" },
  { value: BusinessCategory.Salon, label: "Salon", emoji: "💇" },
  { value: BusinessCategory.Coaching, label: "Coaching", emoji: "📚" },
  { value: BusinessCategory.Gym, label: "Gym", emoji: "💪" },
  { value: BusinessCategory.Restaurant, label: "Restaurant", emoji: "🍽️" },
];

const languages = [
  { value: AgentLanguage.english, label: "English" },
  { value: AgentLanguage.hindi, label: "हिंदी" },
  { value: AgentLanguage.marathi, label: "मराठी" },
];

const tones = [
  { value: AgentTone.professional, label: "Professional" },
  { value: AgentTone.friendly, label: "Friendly" },
  { value: AgentTone.formal, label: "Formal" },
  { value: AgentTone.casual, label: "Casual" },
];

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    businessName: "",
    phone: "+91 ",
    email: "",
    address: "",
    category: BusinessCategory.RealEstate,
    language: AgentLanguage.english,
    tone: AgentTone.professional,
  });

  const update = (key: keyof typeof form, val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-xl"
      >
        {/* Progress */}
        <div className="flex items-center gap-2 mb-8 justify-center">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-smooth ${
                  i < step
                    ? "bg-primary text-primary-foreground"
                    : i === step
                      ? "gradient-accent text-white accent-glow-sm"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {i < step ? <Check className="w-3 h-3" /> : i + 1}
              </div>
              <span
                className={`text-xs font-medium ${i === step ? "text-foreground" : "text-muted-foreground"}`}
              >
                {s}
              </span>
              {i < steps.length - 1 && (
                <ChevronRight className="w-3 h-3 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>

        <div className="glass-effect-dark rounded-2xl p-8 border border-border">
          {step === 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-foreground">
                    Business Information
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Tell us about your business
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="ob-business-name"
                    className="block text-xs font-medium text-muted-foreground mb-1.5"
                  >
                    Business Name *
                  </label>
                  <input
                    id="ob-business-name"
                    type="text"
                    value={form.businessName}
                    onChange={(e) => update("businessName", e.target.value)}
                    placeholder="e.g. Balaji Properties"
                    data-ocid="onboarding.business_name_input"
                    className="w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth"
                  />
                </div>
                <div>
                  <label
                    htmlFor="ob-phone"
                    className="block text-xs font-medium text-muted-foreground mb-1.5"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="ob-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+91 9867692722"
                    data-ocid="onboarding.phone_input"
                    className="w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth"
                  />
                </div>
                <div>
                  <label
                    htmlFor="ob-email"
                    className="block text-xs font-medium text-muted-foreground mb-1.5"
                  >
                    Email *
                  </label>
                  <input
                    id="ob-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@business.com"
                    data-ocid="onboarding.email_input"
                    className="w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth"
                  />
                </div>
                <div>
                  <label
                    htmlFor="ob-category"
                    className="block text-xs font-medium text-muted-foreground mb-1.5"
                  >
                    Business Category *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        type="button"
                        onClick={() => update("category", cat.value)}
                        data-ocid={`onboarding.category_${cat.value.toLowerCase()}`}
                        className={`p-2.5 rounded-lg text-xs font-medium border transition-smooth flex flex-col items-center gap-1 ${
                          form.category === cat.value
                            ? "border-primary bg-primary/15 text-primary"
                            : "border-input bg-muted/20 text-muted-foreground hover:border-primary/40"
                        }`}
                      >
                        <span className="text-base">{cat.emoji}</span>
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <Button
                type="button"
                className="w-full mt-6 gradient-accent text-white font-semibold hover:opacity-90 transition-smooth"
                onClick={() => setStep(1)}
                disabled={!form.businessName || !form.phone || !form.email}
                data-ocid="onboarding.next_button"
              >
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {step === 1 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-foreground">
                    AI Personality
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Configure your AI voice agent
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <fieldset>
                  <legend className="block text-xs font-medium text-muted-foreground mb-2">
                    Primary Language
                  </legend>
                  <div className="flex gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.value}
                        type="button"
                        onClick={() => update("language", lang.value)}
                        data-ocid={`onboarding.lang_${lang.value}`}
                        aria-pressed={form.language === lang.value}
                        className={`flex-1 py-2.5 rounded-lg text-sm font-medium border transition-smooth flex items-center justify-center gap-1.5 ${
                          form.language === lang.value
                            ? "border-primary bg-primary/15 text-primary"
                            : "border-input bg-muted/20 text-muted-foreground hover:border-primary/40"
                        }`}
                      >
                        <Globe className="w-3 h-3" />
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="block text-xs font-medium text-muted-foreground mb-2">
                    Agent Tone
                  </legend>
                  <div className="grid grid-cols-2 gap-2">
                    {tones.map((t) => (
                      <button
                        key={t.value}
                        type="button"
                        onClick={() => update("tone", t.value)}
                        data-ocid={`onboarding.tone_${t.value}`}
                        aria-pressed={form.tone === t.value}
                        className={`py-2.5 rounded-lg text-sm font-medium border transition-smooth ${
                          form.tone === t.value
                            ? "border-primary bg-primary/15 text-primary"
                            : "border-input bg-muted/20 text-muted-foreground hover:border-primary/40"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep(0)}
                  data-ocid="onboarding.back_button"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  className="flex-1 gradient-accent text-white font-semibold hover:opacity-90 transition-smooth"
                  onClick={() => setStep(2)}
                  data-ocid="onboarding.setup_button"
                >
                  Set Up AI Agent <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4"
            >
              <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mx-auto mb-6 accent-glow">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                You&apos;re All Set!
              </h2>
              <p className="text-muted-foreground mb-2 text-sm">
                Your AI platform is ready. Welcome,{" "}
                <strong className="text-foreground">{form.businessName}</strong>
                .
              </p>
              <Badge
                variant="outline"
                className="mb-8 border-primary/20 text-primary bg-primary/5 text-xs"
              >
                <Phone className="w-3 h-3 mr-1" /> AI Agent ready to handle
                calls
              </Badge>
              <Button
                type="button"
                size="lg"
                className="w-full gradient-accent text-white font-semibold hover:opacity-90 transition-smooth accent-glow"
                onClick={() => navigate("/dashboard")}
                data-ocid="onboarding.go_dashboard_button"
              >
                Go to Dashboard <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
