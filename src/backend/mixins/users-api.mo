import Debug "mo:core/Debug";
import AccessControl "mo:caffeineai-authorization/access-control";
import Map "mo:core/Map";
import CommonTypes "../types/common";
import UserTypes "../types/users";

mixin (
  accessControlState : AccessControl.AccessControlState,
  users : Map.Map<CommonTypes.UserId, UserTypes.UserProfile>,
) {
  public shared ({ caller }) func saveCallerUserProfile(data : UserTypes.UserProfileData) : async UserTypes.UserProfileView {
    Debug.todo();
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserTypes.UserProfileView {
    Debug.todo();
  };

  public query ({ caller }) func getUserProfile(userId : CommonTypes.UserId) : async ?UserTypes.UserProfileView {
    Debug.todo();
  };

  public shared ({ caller }) func updateUserProfile(data : UserTypes.UserProfileData) : async ?UserTypes.UserProfileView {
    Debug.todo();
  };

  public shared ({ caller }) func deleteUserProfile() : async Bool {
    Debug.todo();
  };
};
