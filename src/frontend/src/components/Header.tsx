import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/hooks/useAuth";
import type { Notification } from "@/types";
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  Moon,
  Settings,
  Sun,
  User,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "New Lead Captured",
    message: "AI Agent captured a new real estate lead: Rajesh Kumar",
    type: "success",
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 5),
  },
  {
    id: "2",
    title: "Site Visit Scheduled",
    message: "Priya Sharma scheduled a site visit for tomorrow 3 PM",
    type: "info",
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 30),
  },
  {
    id: "3",
    title: "AI Agent Active",
    message: "Real Estate Pro agent is now handling incoming calls",
    type: "info",
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
  },
];

interface HeaderProps {
  onMenuClick: () => void;
  title?: string;
}

export function Header({ onMenuClick, title }: HeaderProps) {
  const { toggleTheme, isDark } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(mockNotifications);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <header className="h-16 border-b border-border bg-card/80 backdrop-blur-md flex items-center px-4 gap-4 sticky top-0 z-30">
      {/* Mobile Menu */}
      <button
        type="button"
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-smooth"
        data-ocid="header.menu_button"
        aria-label="Open sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Title */}
      {title && (
        <h1 className="hidden sm:block text-lg font-display font-semibold text-foreground">
          {title}
        </h1>
      )}

      <div className="flex-1" />

      {/* Actions */}
      <div className="flex items-center gap-2">
        {/* Theme Toggle */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          data-ocid="header.theme_toggle"
          className="text-muted-foreground hover:text-foreground"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              data-ocid="header.notifications_button"
              className="relative text-muted-foreground hover:text-foreground"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-primary text-[9px] font-bold text-primary-foreground flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-80"
            data-ocid="header.notifications_dropdown"
          >
            <DropdownMenuLabel className="flex items-center justify-between">
              <span>Notifications</span>
              {unreadCount > 0 && (
                <button
                  type="button"
                  onClick={markAllRead}
                  className="text-xs text-primary hover:underline"
                >
                  Mark all read
                </button>
              )}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.map((n) => (
              <DropdownMenuItem
                key={n.id}
                className="flex flex-col items-start gap-1 p-3 cursor-pointer"
              >
                <div className="flex items-center gap-2 w-full">
                  {!n.read && (
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  )}
                  <span
                    className={`text-sm font-medium ${n.read ? "text-muted-foreground" : "text-foreground"}`}
                  >
                    {n.title}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground pl-3.5">
                  {n.message}
                </p>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Avatar */}
        {isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                className="flex items-center gap-2 px-2 text-muted-foreground hover:text-foreground"
                data-ocid="header.user_menu"
              >
                <Avatar className="w-7 h-7">
                  <AvatarFallback className="text-xs bg-primary/20 text-primary font-semibold">
                    SB
                  </AvatarFallback>
                </Avatar>
                <ChevronDown className="w-3 h-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48"
              data-ocid="header.user_dropdown"
            >
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => navigate("/settings")}
                data-ocid="header.profile_link"
              >
                <User className="w-4 h-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigate("/settings")}
                data-ocid="header.settings_link"
              >
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={logout}
                data-ocid="header.logout_button"
                className="text-destructive focus:text-destructive"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            type="button"
            size="sm"
            onClick={() => navigate("/login")}
            data-ocid="header.login_button"
            className="gradient-accent text-white font-medium"
          >
            Sign In
          </Button>
        )}
      </div>
    </header>
  );
}
