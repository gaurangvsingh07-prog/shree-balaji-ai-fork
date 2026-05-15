import Debug "mo:core/Debug";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Time "mo:core/Time";
import CommonTypes "../types/common";
import UserTypes "../types/users";

module {
  public func create(
    users : Map.Map<CommonTypes.UserId, UserTypes.UserProfile>,
    caller : CommonTypes.UserId,
    data : UserTypes.UserProfileData,
  ) : UserTypes.UserProfileView {
    Debug.todo();
  };

  public func getById(
    users : Map.Map<CommonTypes.UserId, UserTypes.UserProfile>,
    userId : CommonTypes.UserId,
  ) : ?UserTypes.UserProfileView {
    Debug.todo();
  };

  public func update(
    users : Map.Map<CommonTypes.UserId, UserTypes.UserProfile>,
    caller : CommonTypes.UserId,
    data : UserTypes.UserProfileData,
  ) : ?UserTypes.UserProfileView {
    Debug.todo();
  };

  public func delete(
    users : Map.Map<CommonTypes.UserId, UserTypes.UserProfile>,
    caller : CommonTypes.UserId,
  ) : Bool {
    Debug.todo();
  };

  public func toView(profile : UserTypes.UserProfile) : UserTypes.UserProfileView {
    Debug.todo();
  };
};
