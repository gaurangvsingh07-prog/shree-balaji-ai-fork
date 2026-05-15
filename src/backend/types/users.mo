import Common "common";

module {
  public type UserProfile = {
    userId : Common.UserId;
    var email : Text;
    createdAt : Common.Timestamp;
    var subscriptionTier : Common.SubscriptionTier;
  };

  // Shared-safe API type (no var fields)
  public type UserProfileData = {
    email : Text;
    subscriptionTier : Common.SubscriptionTier;
  };

  public type UserProfileView = {
    userId : Common.UserId;
    email : Text;
    createdAt : Common.Timestamp;
    subscriptionTier : Common.SubscriptionTier;
  };
};
