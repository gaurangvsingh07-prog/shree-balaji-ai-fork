import Debug "mo:core/Debug";
import Map "mo:core/Map";
import CommonTypes "../types/common";
import LeadTypes "../types/leads";

module {
  public func create(
    leads : Map.Map<Text, LeadTypes.LeadRecord>,
    state : { var nextId : Nat },
    input : LeadTypes.LeadRecordInput,
  ) : LeadTypes.LeadRecordView {
    Debug.todo();
  };

  public func getById(
    leads : Map.Map<Text, LeadTypes.LeadRecord>,
    leadId : Text,
  ) : ?LeadTypes.LeadRecordView {
    Debug.todo();
  };

  public func listByBusiness(
    leads : Map.Map<Text, LeadTypes.LeadRecord>,
    businessId : Text,
  ) : [LeadTypes.LeadRecordView] {
    Debug.todo();
  };

  public func update(
    leads : Map.Map<Text, LeadTypes.LeadRecord>,
    leadId : Text,
    input : LeadTypes.LeadRecordUpdate,
  ) : ?LeadTypes.LeadRecordView {
    Debug.todo();
  };

  public func delete(
    leads : Map.Map<Text, LeadTypes.LeadRecord>,
    leadId : Text,
  ) : Bool {
    Debug.todo();
  };

  public func toView(lead : LeadTypes.LeadRecord) : LeadTypes.LeadRecordView {
    Debug.todo();
  };
};
