import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Timestamp = bigint;
export interface BusinessProfileInput {
    aiPersonality: AIPersonality;
    businessName: string;
    whatsapp?: string;
    email: string;
    logoUrl?: string;
    address: string;
    category: BusinessCategory;
    phone: string;
}
export interface AgentConfigInput {
    customInstructions: string;
    tone: AgentTone;
    useCase: BusinessCategory;
    agentName: string;
    language: AgentLanguage;
}
export interface CallLogView {
    callerPhone: string;
    callStatus: CallStatus;
    businessId: string;
    recordingUrl?: string;
    createdAt: Timestamp;
    agentId?: string;
    transcriptSnippet?: string;
    durationSeconds: bigint;
    callId: string;
    calleePhone: string;
}
export interface BusinessProfileView {
    businessId: string;
    userId: UserId;
    createdAt: Timestamp;
    aiPersonality: AIPersonality;
    businessName: string;
    whatsapp?: string;
    email: string;
    logoUrl?: string;
    address: string;
    category: BusinessCategory;
    phone: string;
}
export type UserId = Principal;
export interface AIPersonality {
    tone: AgentTone;
    language: AgentLanguage;
}
export interface AgentConfigUpdate {
    status: AgentStatus;
    customInstructions: string;
    tone: AgentTone;
    useCase: BusinessCategory;
    agentName: string;
    language: AgentLanguage;
}
export interface CallLogInput {
    callerPhone: string;
    callStatus: CallStatus;
    businessId: string;
    recordingUrl?: string;
    agentId?: string;
    transcriptSnippet?: string;
    durationSeconds: bigint;
    calleePhone: string;
}
export interface AgentConfigView {
    status: AgentStatus;
    businessId: string;
    customInstructions: string;
    createdAt: Timestamp;
    tone: AgentTone;
    useCase: BusinessCategory;
    agentName: string;
    agentId: string;
    language: AgentLanguage;
}
export interface UserProfileView {
    userId: UserId;
    createdAt: Timestamp;
    subscriptionTier: SubscriptionTier;
    email: string;
}
export interface UserProfileData {
    subscriptionTier: SubscriptionTier;
    email: string;
}
export interface LeadRecordInput {
    customerName: string;
    propertyType?: string;
    source: LeadSource;
    businessId: string;
    agentId?: string;
    email?: string;
    siteVisitInterest: boolean;
    notes: string;
    buyingTimeline?: string;
    priority: LeadPriority;
    phone: string;
    budget?: string;
    location?: string;
}
export interface LeadRecordView {
    customerName: string;
    status: LeadStatus;
    propertyType?: string;
    source: LeadSource;
    businessId: string;
    createdAt: Timestamp;
    agentId?: string;
    email?: string;
    updatedAt: Timestamp;
    leadId: string;
    siteVisitInterest: boolean;
    notes: string;
    buyingTimeline?: string;
    priority: LeadPriority;
    phone: string;
    budget?: string;
    location?: string;
}
export interface LeadRecordUpdate {
    customerName: string;
    status: LeadStatus;
    propertyType?: string;
    agentId?: string;
    email?: string;
    siteVisitInterest: boolean;
    notes: string;
    buyingTimeline?: string;
    priority: LeadPriority;
    phone: string;
    budget?: string;
    location?: string;
}
export enum AgentLanguage {
    hindi = "hindi",
    marathi = "marathi",
    english = "english"
}
export enum AgentStatus {
    active = "active",
    paused = "paused"
}
export enum AgentTone {
    professional = "professional",
    friendly = "friendly",
    casual = "casual",
    formal = "formal"
}
export enum BusinessCategory {
    Gym = "Gym",
    Salon = "Salon",
    Coaching = "Coaching",
    RealEstate = "RealEstate",
    Clinic = "Clinic",
    Restaurant = "Restaurant"
}
export enum CallStatus {
    Transferred = "Transferred",
    Missed = "Missed",
    Completed = "Completed"
}
export enum LeadPriority {
    Low = "Low",
    High = "High",
    Medium = "Medium"
}
export enum LeadSource {
    AICall = "AICall",
    Manual = "Manual"
}
export enum LeadStatus {
    New = "New",
    Closed = "Closed",
    Qualified = "Qualified",
    Scheduled = "Scheduled"
}
export enum SubscriptionTier {
    pro = "pro",
    enterprise = "enterprise",
    free = "free",
    basic = "basic"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createAgent(businessId: string, input: AgentConfigInput): Promise<AgentConfigView>;
    createBusiness(input: BusinessProfileInput): Promise<BusinessProfileView>;
    createCallLog(input: CallLogInput): Promise<CallLogView>;
    createLead(input: LeadRecordInput): Promise<LeadRecordView>;
    deleteAgent(agentId: string): Promise<boolean>;
    deleteBusiness(businessId: string): Promise<boolean>;
    deleteCallLog(callId: string): Promise<boolean>;
    deleteLead(leadId: string): Promise<boolean>;
    deleteUserProfile(): Promise<boolean>;
    getAgent(agentId: string): Promise<AgentConfigView | null>;
    getBusiness(businessId: string): Promise<BusinessProfileView | null>;
    getCallLog(callId: string): Promise<CallLogView | null>;
    getCallerUserProfile(): Promise<UserProfileView | null>;
    getCallerUserRole(): Promise<UserRole>;
    getLead(leadId: string): Promise<LeadRecordView | null>;
    getUserProfile(userId: UserId): Promise<UserProfileView | null>;
    isCallerAdmin(): Promise<boolean>;
    listAgentsByBusiness(businessId: string): Promise<Array<AgentConfigView>>;
    listCallLogsByBusiness(businessId: string): Promise<Array<CallLogView>>;
    listLeadsByBusiness(businessId: string): Promise<Array<LeadRecordView>>;
    listMyBusinesses(): Promise<Array<BusinessProfileView>>;
    saveCallerUserProfile(data: UserProfileData): Promise<UserProfileView>;
    updateAgent(agentId: string, input: AgentConfigUpdate): Promise<AgentConfigView | null>;
    updateBusiness(businessId: string, input: BusinessProfileInput): Promise<BusinessProfileView | null>;
    updateLead(leadId: string, input: LeadRecordUpdate): Promise<LeadRecordView | null>;
    updateUserProfile(data: UserProfileData): Promise<UserProfileView | null>;
}
