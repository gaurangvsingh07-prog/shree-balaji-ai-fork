import type {
  AgentConfigView,
  AgentLanguage,
  AgentStatus,
  AgentTone,
  BusinessCategory,
  BusinessProfileView,
  CallLogView,
  CallStatus,
  LeadPriority,
  LeadRecordView,
  LeadSource,
  LeadStatus,
  SubscriptionTier,
  UserProfileView,
  UserRole,
} from "@/backend";

export type {
  UserProfileView as UserProfile,
  BusinessProfileView as BusinessProfile,
  AgentConfigView as AgentConfig,
  LeadRecordView as LeadRecord,
  CallLogView as CallLog,
  BusinessCategory,
  AgentLanguage,
  AgentTone,
  AgentStatus,
  CallStatus,
  LeadPriority,
  LeadSource,
  LeadStatus,
  SubscriptionTier,
  UserRole,
};

export interface NavItem {
  label: string;
  path: string;
  icon: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: string;
  features: string[];
  highlighted: boolean;
  tier: SubscriptionTier;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  createdAt: Date;
}
