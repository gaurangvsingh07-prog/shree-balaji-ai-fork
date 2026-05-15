import Debug "mo:core/Debug";
import Map "mo:core/Map";
import List "mo:core/List";
import CommonTypes "../types/common";
import BusinessTypes "../types/businesses";

module {
  public func create(
    businesses : Map.Map<Text, BusinessTypes.BusinessProfile>,
    state : { var nextId : Nat },
    userId : CommonTypes.UserId,
    input : BusinessTypes.BusinessProfileInput,
  ) : BusinessTypes.BusinessProfileView {
    Debug.todo();
  };

  public func getById(
    businesses : Map.Map<Text, BusinessTypes.BusinessProfile>,
    businessId : Text,
  ) : ?BusinessTypes.BusinessProfileView {
    Debug.todo();
  };

  public func listByUser(
    businesses : Map.Map<Text, BusinessTypes.BusinessProfile>,
    userId : CommonTypes.UserId,
  ) : [BusinessTypes.BusinessProfileView] {
    Debug.todo();
  };

  public func update(
    businesses : Map.Map<Text, BusinessTypes.BusinessProfile>,
    businessId : Text,
    caller : CommonTypes.UserId,
    input : BusinessTypes.BusinessProfileInput,
  ) : ?BusinessTypes.BusinessProfileView {
    Debug.todo();
  };

  public func delete(
    businesses : Map.Map<Text, BusinessTypes.BusinessProfile>,
    businessId : Text,
    caller : CommonTypes.UserId,
  ) : Bool {
    Debug.todo();
  };

  public func toView(profile : BusinessTypes.BusinessProfile) : BusinessTypes.BusinessProfileView {
    Debug.todo();
  };
};
