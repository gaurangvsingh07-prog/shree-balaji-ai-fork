import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { ArrowRight, Loader2, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignupPage() {
  const { isAuthenticated, isLoading, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/onboarding");
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-accent/8 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-sm"
      >
        <div className="glass-effect-dark rounded-2xl p-8 border border-border">
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center accent-glow mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="font-display text-xl font-bold text-foreground">
              Create Your Account
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Start with Shree Balaji AI for free
            </p>
          </div>

          <ul className="space-y-2 mb-6">
            {[
              "14-day free trial — no credit card",
              "1 AI voice agent included",
              "Up to 100 calls/month free",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <Badge
            variant="outline"
            className="w-full justify-center mb-6 py-2 text-xs font-mono border-primary/20 text-primary bg-primary/5"
          >
            SECURE · DECENTRALIZED · INTERNET IDENTITY
          </Badge>

          <Button
            type="button"
            size="lg"
            className="w-full gradient-accent text-white font-semibold hover:opacity-90 transition-smooth accent-glow-sm"
            onClick={login}
            disabled={isLoading}
            data-ocid="signup.submit_button"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Connecting...
              </>
            ) : (
              "Sign Up with Internet Identity"
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary hover:underline"
              data-ocid="signup.login_link"
            >
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
