import Debug "mo:core/Debug";
import AccessControl "mo:caffeineai-authorization/access-control";
import Map "mo:core/Map";
import CallTypes "../types/calls";

mixin (
  accessControlState : AccessControl.AccessControlState,
  callLogs : Map.Map<Text, CallTypes.CallLog>,
  callState : { var nextId : Nat },
) {
  public shared ({ caller }) func createCallLog(input : CallTypes.CallLogInput) : async CallTypes.CallLogView {
    Debug.todo();
  };

  public query ({ caller }) func getCallLog(callId : Text) : async ?CallTypes.CallLogView {
    Debug.todo();
  };

  public query ({ caller }) func listCallLogsByBusiness(businessId : Text) : async [CallTypes.CallLogView] {
    Debug.todo();
  };

  public shared ({ caller }) func deleteCallLog(callId : Text) : async Bool {
    Debug.todo();
  };
};
