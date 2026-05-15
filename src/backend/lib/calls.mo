import Debug "mo:core/Debug";
import Map "mo:core/Map";
import CommonTypes "../types/common";
import CallTypes "../types/calls";

module {
  public func create(
    callLogs : Map.Map<Text, CallTypes.CallLog>,
    state : { var nextId : Nat },
    input : CallTypes.CallLogInput,
  ) : CallTypes.CallLogView {
    Debug.todo();
  };

  public func getById(
    callLogs : Map.Map<Text, CallTypes.CallLog>,
    callId : Text,
  ) : ?CallTypes.CallLogView {
    Debug.todo();
  };

  public func listByBusiness(
    callLogs : Map.Map<Text, CallTypes.CallLog>,
    businessId : Text,
  ) : [CallTypes.CallLogView] {
    Debug.todo();
  };

  public func delete(
    callLogs : Map.Map<Text, CallTypes.CallLog>,
    callId : Text,
  ) : Bool {
    Debug.todo();
  };

  public func toView(log : CallTypes.CallLog) : CallTypes.CallLogView {
    Debug.todo();
  };
};
