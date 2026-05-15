import Common "common";

module {
  public type AIPersonality = {
    tone : Common.AgentTone;
    language : Common.AgentLanguage;
  };

  public type BusinessProfile = {
    businessId : Text;
    userId : Common.UserId;
    var businessName : Text;
    var category : Common.BusinessCategory;
    var phone : Text;
    var email : Text;
    var whatsapp : ?Text;
    var address : Text;
    var logoUrl : ?Text;
    var aiPersonality : AIPersonality;
    createdAt : Common.Timestamp;
  };

  // Shared-safe input type for create/update
  public type BusinessProfileInput = {
    businessName : Text;
    category : Common.BusinessCategory;
    phone : Text;
    email : Text;
    whatsapp : ?Text;
    address : Text;
    logoUrl : ?Text;
    aiPersonality : AIPersonality;
  };

  // Shared-safe view type for API responses
  public type BusinessProfileView = {
    businessId : Text;
    userId : Common.UserId;
    businessName : Text;
    category : Common.BusinessCategory;
    phone : Text;
    email : Text;
    whatsapp : ?Text;
    address : Text;
    logoUrl : ?Text;
    aiPersonality : AIPersonality;
    createdAt : Common.Timestamp;
  };
};
