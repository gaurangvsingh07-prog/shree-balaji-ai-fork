import { createActor } from "@/backend";
import type {
  AgentConfigInput,
  AgentConfigUpdate,
  BusinessProfileInput,
  CallLogInput,
  LeadRecordInput,
  LeadRecordUpdate,
  UserProfileData,
} from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useUserProfile() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useBusinessProfile() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["businesses"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listMyBusinesses();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAgents(businessId?: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["agents", businessId],
    queryFn: async () => {
      if (!actor || !businessId) return [];
      return actor.listAgentsByBusiness(businessId);
    },
    enabled: !!actor && !isFetching && !!businessId,
  });
}

export function useLeads(businessId?: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["leads", businessId],
    queryFn: async () => {
      if (!actor || !businessId) return [];
      return actor.listLeadsByBusiness(businessId);
    },
    enabled: !!actor && !isFetching && !!businessId,
  });
}

export function useCalls(businessId?: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["calls", businessId],
    queryFn: async () => {
      if (!actor || !businessId) return [];
      return actor.listCallLogsByBusiness(businessId);
    },
    enabled: !!actor && !isFetching && !!businessId,
  });
}

export function useSaveUserProfile() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: UserProfileData) => {
      if (!actor) throw new Error("Not connected");
      return actor.saveCallerUserProfile(data);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["userProfile"] }),
  });
}

export function useCreateBusiness() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: BusinessProfileInput) => {
      if (!actor) throw new Error("Not connected");
      return actor.createBusiness(input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["businesses"] }),
  });
}

export function useCreateAgent() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      businessId,
      input,
    }: { businessId: string; input: AgentConfigInput }) => {
      if (!actor) throw new Error("Not connected");
      return actor.createAgent(businessId, input);
    },
    onSuccess: (_, vars) =>
      qc.invalidateQueries({ queryKey: ["agents", vars.businessId] }),
  });
}

export function useUpdateAgent() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      agentId,
      input,
    }: { agentId: string; input: AgentConfigUpdate }) => {
      if (!actor) throw new Error("Not connected");
      return actor.updateAgent(agentId, input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["agents"] }),
  });
}

export function useDeleteAgent() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (agentId: string) => {
      if (!actor) throw new Error("Not connected");
      return actor.deleteAgent(agentId);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["agents"] }),
  });
}

export function useCreateLead() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: LeadRecordInput) => {
      if (!actor) throw new Error("Not connected");
      return actor.createLead(input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["leads"] }),
  });
}

export function useUpdateLead() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      leadId,
      input,
    }: { leadId: string; input: LeadRecordUpdate }) => {
      if (!actor) throw new Error("Not connected");
      return actor.updateLead(leadId, input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["leads"] }),
  });
}

export function useCreateCallLog() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: CallLogInput) => {
      if (!actor) throw new Error("Not connected");
      return actor.createCallLog(input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["calls"] }),
  });
}
