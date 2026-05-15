module {
  public type UserId = Principal;
  public type Timestamp = Int;

  public type SubscriptionTier = {
    #free;
    #basic;
    #pro;
    #enterprise;
  };

  public type BusinessCategory = {
    #RealEstate;
    #Salon;
    #Coaching;
    #Clinic;
    #Gym;
    #Restaurant;
  };

  public type AgentTone = {
    #professional;
    #friendly;
    #formal;
    #casual;
  };

  public type AgentLanguage = {
    #english;
    #hindi;
    #marathi;
  };

  public type AgentStatus = {
    #active;
    #paused;
  };

  public type LeadSource = {
    #AICall;
    #Manual;
  };

  public type LeadStatus = {
    #New;
    #Qualified;
    #Scheduled;
    #Closed;
  };

  public type LeadPriority = {
    #Low;
    #Medium;
    #High;
  };

  public type CallStatus = {
    #Completed;
    #Missed;
    #Transferred;
  };
};
