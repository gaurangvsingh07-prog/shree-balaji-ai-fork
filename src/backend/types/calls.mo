import Common "common";

module {
  public type CallLog = {
    callId : Text;
    businessId : Text;
    var agentId : ?Text;
    callerPhone : Text;
    calleePhone : Text;
    durationSeconds : Nat;
    callStatus : Common.CallStatus;
    var transcriptSnippet : ?Text;
    var recordingUrl : ?Text;
    createdAt : Common.Timestamp;
  };

  // Shared-safe input type for create
  public type CallLogInput = {
    businessId : Text;
    agentId : ?Text;
    callerPhone : Text;
    calleePhone : Text;
    durationSeconds : Nat;
    callStatus : Common.CallStatus;
    transcriptSnippet : ?Text;
    recordingUrl : ?Text;
  };

  // Shared-safe view type for API responses
  public type CallLogView = {
    callId : Text;
    businessId : Text;
    agentId : ?Text;
    callerPhone : Text;
    calleePhone : Text;
    durationSeconds : Nat;
    callStatus : Common.CallStatus;
    transcriptSnippet : ?Text;
    recordingUrl : ?Text;
    createdAt : Common.Timestamp;
  };
};
