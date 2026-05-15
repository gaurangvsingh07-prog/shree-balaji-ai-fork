import Debug "mo:core/Debug";
import AccessControl "mo:caffeineai-authorization/access-control";
import Map "mo:core/Map";
import AgentTypes "../types/agents";

mixin (
  accessControlState : AccessControl.AccessControlState,
  agents : Map.Map<Text, AgentTypes.AgentConfig>,
  agentState : { var nextId : Nat },
) {
  public shared ({ caller }) func createAgent(businessId : Text, input : AgentTypes.AgentConfigInput) : async AgentTypes.AgentConfigView {
    Debug.todo();
  };

  public query ({ caller }) func getAgent(agentId : Text) : async ?AgentTypes.AgentConfigView {
    Debug.todo();
  };

  public query ({ caller }) func listAgentsByBusiness(businessId : Text) : async [AgentTypes.AgentConfigView] {
    Debug.todo();
  };

  public shared ({ caller }) func updateAgent(agentId : Text, input : AgentTypes.AgentConfigUpdate) : async ?AgentTypes.AgentConfigView {
    Debug.todo();
  };

  public shared ({ caller }) func deleteAgent(agentId : Text) : async Bool {
    Debug.todo();
  };
};
