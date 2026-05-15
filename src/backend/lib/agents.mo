import Debug "mo:core/Debug";
import Map "mo:core/Map";
import CommonTypes "../types/common";
import AgentTypes "../types/agents";

module {
  public func create(
    agents : Map.Map<Text, AgentTypes.AgentConfig>,
    state : { var nextId : Nat },
    businessId : Text,
    input : AgentTypes.AgentConfigInput,
  ) : AgentTypes.AgentConfigView {
    Debug.todo();
  };

  public func getById(
    agents : Map.Map<Text, AgentTypes.AgentConfig>,
    agentId : Text,
  ) : ?AgentTypes.AgentConfigView {
    Debug.todo();
  };

  public func listByBusiness(
    agents : Map.Map<Text, AgentTypes.AgentConfig>,
    businessId : Text,
  ) : [AgentTypes.AgentConfigView] {
    Debug.todo();
  };

  public func update(
    agents : Map.Map<Text, AgentTypes.AgentConfig>,
    agentId : Text,
    input : AgentTypes.AgentConfigUpdate,
  ) : ?AgentTypes.AgentConfigView {
    Debug.todo();
  };

  public func delete(
    agents : Map.Map<Text, AgentTypes.AgentConfig>,
    agentId : Text,
  ) : Bool {
    Debug.todo();
  };

  public func toView(agent : AgentTypes.AgentConfig) : AgentTypes.AgentConfigView {
    Debug.todo();
  };
};
