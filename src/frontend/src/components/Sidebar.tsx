import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Bot,
  CreditCard,
  LayoutDashboard,
  PhoneCall,
  Settings,
  Users,
  X,
  Zap,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "AI Agents", path: "/agents", icon: Bot },
  { label: "Lead CRM", path: "/leads", icon: Users },
  { label: "Call Logs", path: "/calls", icon: PhoneCall },
  { label: "Analytics", path: "/analytics", icon: BarChart3 },
  { label: "Subscription", path: "/subscription", icon: CreditCard },
  { label: "Settings", path: "/settings", icon: Settings },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isMobile?: boolean;
}

export function Sidebar({ isOpen, onClose, isMobile = false }: SidebarProps) {
  const location = useLocation();
  const { isDark } = useTheme();

  const content = (
    <div
      className={cn(
        "flex flex-col h-full",
        isDark ? "bg-sidebar" : "bg-sidebar",
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-sidebar-border">
        <NavLink
          to="/dashboard"
          className="flex items-center gap-2.5 group"
          onClick={isMobile ? onClose : undefined}
        >
          <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center accent-glow-sm">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="font-display font-bold text-sm text-sidebar-foreground tracking-tight">
              Shree Balaji
            </span>
            <span className="block text-[10px] text-muted-foreground font-mono tracking-widest uppercase">
              AI Platform
            </span>
          </div>
        </NavLink>
        {isMobile && (
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-smooth"
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={isMobile ? onClose : undefined}
              data-ocid={`nav.${item.label.toLowerCase().replace(" ", "_")}.link`}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-smooth group",
                isActive
                  ? "bg-primary/15 text-primary border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/20",
              )}
            >
              <Icon
                className={cn(
                  "w-4 h-4 shrink-0 transition-smooth",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-foreground",
                )}
              />
              <span>{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-sidebar-border">
        <div className="glass-effect-dark rounded-lg p-3">
          <p className="text-xs font-medium text-muted-foreground">
            Shree Balaji Enterprises
          </p>
          <p className="text-[10px] text-muted-foreground/60 mt-0.5">
            +91 9867692722
          </p>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        {isOpen && (
          <div
            role="button"
            tabIndex={0}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onClose();
            }}
            aria-label="Close sidebar"
          />
        )}
        <aside
          className={cn(
            "fixed top-0 left-0 z-50 h-full w-64 transform transition-transform duration-300 ease-in-out lg:hidden",
            isOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          {content}
        </aside>
      </>
    );
  }

  return (
    <aside className="hidden lg:flex lg:flex-col w-64 shrink-0 border-r border-sidebar-border h-screen sticky top-0">
      {content}
    </aside>
  );
}
