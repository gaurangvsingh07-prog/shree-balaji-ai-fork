import Common "common";

module {
  public type LeadRecord = {
    leadId : Text;
    businessId : Text;
    var agentId : ?Text;
    var customerName : Text;
    var phone : Text;
    var email : ?Text;
    var budget : ?Text;
    var location : ?Text;
    var propertyType : ?Text;
    var buyingTimeline : ?Text;
    var siteVisitInterest : Bool;
    source : Common.LeadSource;
    var status : Common.LeadStatus;
    var notes : Text;
    var priority : Common.LeadPriority;
    createdAt : Common.Timestamp;
    var updatedAt : Common.Timestamp;
  };

  // Shared-safe input type for create
  public type LeadRecordInput = {
    businessId : Text;
    agentId : ?Text;
    customerName : Text;
    phone : Text;
    email : ?Text;
    budget : ?Text;
    location : ?Text;
    propertyType : ?Text;
    buyingTimeline : ?Text;
    siteVisitInterest : Bool;
    source : Common.LeadSource;
    notes : Text;
    priority : Common.LeadPriority;
  };

  // Shared-safe input type for update
  public type LeadRecordUpdate = {
    agentId : ?Text;
    customerName : Text;
    phone : Text;
    email : ?Text;
    budget : ?Text;
    location : ?Text;
    propertyType : ?Text;
    buyingTimeline : ?Text;
    siteVisitInterest : Bool;
    status : Common.LeadStatus;
    notes : Text;
    priority : Common.LeadPriority;
  };

  // Shared-safe view type for API responses
  public type LeadRecordView = {
    leadId : Text;
    businessId : Text;
    agentId : ?Text;
    customerName : Text;
    phone : Text;
    email : ?Text;
    budget : ?Text;
    location : ?Text;
    propertyType : ?Text;
    buyingTimeline : ?Text;
    siteVisitInterest : Bool;
    source : Common.LeadSource;
    status : Common.LeadStatus;
    notes : Text;
    priority : Common.LeadPriority;
    createdAt : Common.Timestamp;
    updatedAt : Common.Timestamp;
  };
};
