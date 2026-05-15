import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Bell,
  Building2,
  Globe,
  Lock,
  Mail,
  Phone,
  Save,
  Shield,
  User,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: "Vijay Singh",
    email: "vijay.r.singh1980@gmail.com",
    phone: "+91 9867692722",
    businessName: "Shree Balaji Enterprises",
    address:
      "Shop No. 33, Kaveri Building, Lodha Heaven, Nilje, Dombivli, Maharashtra 421204",
    language: "English",
    notificationsEmail: true,
    notificationsWhatsApp: true,
    notificationsMissedCalls: true,
  });

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-2xl mx-auto">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">
          Settings
        </h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Manage your account and business preferences
        </p>
      </div>

      {/* Profile */}
      <Card className="glass-effect-dark border-border p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center">
            <User className="w-4 h-4 text-primary" />
          </div>
          <h2 className="font-display font-semibold text-foreground">
            Profile
          </h2>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="settings-name"
                className="block text-xs font-medium text-muted-foreground mb-1.5"
              >
                Full Name
              </label>
              <input
                id="settings-name"
                type="text"
                value={profile.name}
                onChange={(e) =>
                  setProfile((p) => ({ ...p, name: e.target.value }))
                }
                data-ocid="settings.name_input"
                className="w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
              />
            </div>
            <div>
              <label
                htmlFor="settings-email"
                className="block text-xs font-medium text-muted-foreground mb-1.5"
              >
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  id="settings-email"
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile((p) => ({ ...p, email: e.target.value }))
                  }
                  data-ocid="settings.email_input"
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="settings-phone"
                className="block text-xs font-medium text-muted-foreground mb-1.5"
              >
                Phone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  id="settings-phone"
                  type="tel"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile((p) => ({ ...p, phone: e.target.value }))
                  }
                  data-ocid="settings.phone_input"
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="settings-language"
                className="block text-xs font-medium text-muted-foreground mb-1.5"
              >
                Language
              </label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <select
                  id="settings-language"
                  value={profile.language}
                  onChange={(e) =>
                    setProfile((p) => ({ ...p, language: e.target.value }))
                  }
                  data-ocid="settings.language_select"
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth appearance-none"
                >
                  <option value="English">English</option>
                  <option value="Hindi">हिंदी</option>
                  <option value="Marathi">मराठी</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Business */}
      <Card className="glass-effect-dark border-border p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center">
            <Building2 className="w-4 h-4 text-accent" />
          </div>
          <h2 className="font-display font-semibold text-foreground">
            Business Details
          </h2>
        </div>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="settings-business-name"
              className="block text-xs font-medium text-muted-foreground mb-1.5"
            >
              Business Name
            </label>
            <input
              id="settings-business-name"
              type="text"
              value={profile.businessName}
              onChange={(e) =>
                setProfile((p) => ({ ...p, businessName: e.target.value }))
              }
              data-ocid="settings.business_name_input"
              className="w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
            />
          </div>
          <div>
            <label
              htmlFor="settings-address"
              className="block text-xs font-medium text-muted-foreground mb-1.5"
            >
              Address
            </label>
            <textarea
              id="settings-address"
              value={profile.address}
              onChange={(e) =>
                setProfile((p) => ({ ...p, address: e.target.value }))
              }
              rows={3}
              data-ocid="settings.address_textarea"
              className="w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth resize-none"
            />
          </div>
        </div>
      </Card>

      {/* Notifications */}
      <Card className="glass-effect-dark border-border p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg bg-chart-2/15 flex items-center justify-center">
            <Bell className="w-4 h-4 text-chart-2" />
          </div>
          <h2 className="font-display font-semibold text-foreground">
            Notifications
          </h2>
        </div>
        <div className="space-y-4">
          {(
            [
              {
                key: "notificationsEmail",
                label: "Email Notifications",
                desc: "Lead summaries and daily reports",
              },
              {
                key: "notificationsWhatsApp",
                label: "WhatsApp Alerts",
                desc: "Instant lead and call notifications",
              },
              {
                key: "notificationsMissedCalls",
                label: "Missed Call Alerts",
                desc: "Get notified when AI misses a call",
              },
            ] as const
          ).map((item, i) => (
            <div key={item.key}>
              {i > 0 && <Separator className="mb-4" />}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setProfile((p) => ({ ...p, [item.key]: !p[item.key] }))
                  }
                  data-ocid={`settings.${item.key}_toggle`}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-smooth ${
                    profile[item.key] ? "bg-primary" : "bg-muted"
                  }`}
                  aria-label={item.label}
                >
                  <span
                    className={`inline-block h-3.5 w-3.5 rounded-full bg-primary-foreground shadow transition-transform ${
                      profile[item.key]
                        ? "translate-x-[18px]"
                        : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Security */}
      <Card className="glass-effect-dark border-border p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-chart-3/15 flex items-center justify-center">
            <Shield className="w-4 h-4 text-chart-3" />
          </div>
          <h2 className="font-display font-semibold text-foreground">
            Security
          </h2>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 border border-border">
          <Lock className="w-4 h-4 text-chart-3 shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">
              Internet Identity
            </p>
            <p className="text-xs text-muted-foreground">
              Your account is secured with decentralized identity
            </p>
          </div>
          <Badge
            variant="outline"
            className="text-xs bg-chart-3/10 text-chart-3 border-chart-3/20"
          >
            Active
          </Badge>
        </div>
      </Card>

      <Button
        type="button"
        size="lg"
        onClick={handleSave}
        data-ocid="settings.save_button"
        className="w-full gradient-accent text-white font-semibold hover:opacity-90 transition-smooth"
      >
        <Save className="w-4 h-4 mr-2" /> Save Settings
      </Button>
    </div>
  );
}
