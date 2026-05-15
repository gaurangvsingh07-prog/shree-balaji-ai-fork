import Debug "mo:core/Debug";
import AccessControl "mo:caffeineai-authorization/access-control";
import Map "mo:core/Map";
import LeadTypes "../types/leads";

mixin (
  accessControlState : AccessControl.AccessControlState,
  leads : Map.Map<Text, LeadTypes.LeadRecord>,
  leadState : { var nextId : Nat },
) {
  public shared ({ caller }) func createLead(input : LeadTypes.LeadRecordInput) : async LeadTypes.LeadRecordView {
    Debug.todo();
  };

  public query ({ caller }) func getLead(leadId : Text) : async ?LeadTypes.LeadRecordView {
    Debug.todo();
  };

  public query ({ caller }) func listLeadsByBusiness(businessId : Text) : async [LeadTypes.LeadRecordView] {
    Debug.todo();
  };

  public shared ({ caller }) func updateLead(leadId : Text, input : LeadTypes.LeadRecordUpdate) : async ?LeadTypes.LeadRecordView {
    Debug.todo();
  };

  public shared ({ caller }) func deleteLead(leadId : Text) : async Bool {
    Debug.todo();
  };
};
