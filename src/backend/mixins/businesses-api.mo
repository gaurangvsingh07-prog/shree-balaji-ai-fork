import Debug "mo:core/Debug";
import AccessControl "mo:caffeineai-authorization/access-control";
import Map "mo:core/Map";
import CommonTypes "../types/common";
import BusinessTypes "../types/businesses";

mixin (
  accessControlState : AccessControl.AccessControlState,
  businesses : Map.Map<Text, BusinessTypes.BusinessProfile>,
  businessState : { var nextId : Nat },
) {
  public shared ({ caller }) func createBusiness(input : BusinessTypes.BusinessProfileInput) : async BusinessTypes.BusinessProfileView {
    Debug.todo();
  };

  public query ({ caller }) func getBusiness(businessId : Text) : async ?BusinessTypes.BusinessProfileView {
    Debug.todo();
  };

  public query ({ caller }) func listMyBusinesses() : async [BusinessTypes.BusinessProfileView] {
    Debug.todo();
  };

  public shared ({ caller }) func updateBusiness(businessId : Text, input : BusinessTypes.BusinessProfileInput) : async ?BusinessTypes.BusinessProfileView {
    Debug.todo();
  };

  public shared ({ caller }) func deleteBusiness(businessId : Text) : async Bool {
    Debug.todo();
  };
};
