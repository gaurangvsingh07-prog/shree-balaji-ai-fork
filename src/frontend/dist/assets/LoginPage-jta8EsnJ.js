import { u as useAuth, a as useNavigate, r as reactExports, j as jsxRuntimeExports, Z as Zap, B as Button, L as Link } from "./index-D0AWEIiM.js";
import { B as Badge } from "./badge-BjVDTU3O.js";
import { m as motion } from "./proxy-BWz1kCTu.js";
import { L as LoaderCircle } from "./loader-circle-LF6upe9h.js";
function LoginPage() {
  const { isAuthenticated, isLoading, login } = useAuth();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex items-center justify-center px-4 py-12 bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/8 blur-[100px]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "relative z-10 w-full max-w-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-effect-dark rounded-2xl p-8 border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl gradient-accent flex items-center justify-center accent-glow mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground", children: "Welcome Back" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Sign in to Shree Balaji AI" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "w-full justify-center mb-6 py-2 text-xs font-mono border-primary/20 text-primary bg-primary/5",
                children: "SECURE · DECENTRALIZED · INTERNET IDENTITY"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                size: "lg",
                className: "w-full gradient-accent text-white font-semibold hover:opacity-90 transition-smooth accent-glow-sm",
                onClick: login,
                disabled: isLoading,
                "data-ocid": "login.submit_button",
                children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }),
                  "Connecting..."
                ] }) : "Sign In with Internet Identity"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground mt-6", children: [
              "Don't have an account?",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/signup",
                  className: "text-primary hover:underline",
                  "data-ocid": "login.signup_link",
                  children: "Create one free"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[11px] text-muted-foreground/60 mt-4", children: "By signing in you agree to our Terms of Service and Privacy Policy." })
        ]
      }
    )
  ] });
}
export {
  LoginPage as default
};
