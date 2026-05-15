import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Loader2, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { isAuthenticated, isLoading, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/8 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-sm"
      >
        {/* Card */}
        <div className="glass-effect-dark rounded-2xl p-8 border border-border">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center accent-glow mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="font-display text-xl font-bold text-foreground">
              Welcome Back
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Sign in to Shree Balaji AI
            </p>
          </div>

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
            data-ocid="login.submit_button"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Connecting...
              </>
            ) : (
              "Sign In with Internet Identity"
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="text-primary hover:underline"
              data-ocid="login.signup_link"
            >
              Create one free
            </Link>
          </p>
        </div>

        <p className="text-center text-[11px] text-muted-foreground/60 mt-4">
          By signing in you agree to our Terms of Service and Privacy Policy.
        </p>
      </motion.div>
    </div>
  );
}
