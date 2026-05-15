import Common "common";

module {
  public type AgentConfig = {
    agentId : Text;
    businessId : Text;
    var agentName : Text;
    var useCase : Common.BusinessCategory;
    var tone : Common.AgentTone;
    var language : Common.AgentLanguage;
    var customInstructions : Text;
    var status : Common.AgentStatus;
    createdAt : Common.Timestamp;
  };

  // Shared-safe input type for create
  public type AgentConfigInput = {
    agentName : Text;
    useCase : Common.BusinessCategory;
    tone : Common.AgentTone;
    language : Common.AgentLanguage;
    customInstructions : Text;
  };

  // Shared-safe input type for update
  public type AgentConfigUpdate = {
    agentName : Text;
    useCase : Common.BusinessCategory;
    tone : Common.AgentTone;
    language : Common.AgentLanguage;
    customInstructions : Text;
    status : Common.AgentStatus;
  };

  // Shared-safe view type for API responses
  public type AgentConfigView = {
    agentId : Text;
    businessId : Text;
    agentName : Text;
    useCase : Common.BusinessCategory;
    tone : Common.AgentTone;
    language : Common.AgentLanguage;
    customInstructions : Text;
    status : Common.AgentStatus;
    createdAt : Common.Timestamp;
  };
};
