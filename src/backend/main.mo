import Map "mo:core/Map";
import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import CommonTypes "types/common";
import UserTypes "types/users";
import BusinessTypes "types/businesses";
import AgentTypes "types/agents";
import LeadTypes "types/leads";
import CallTypes "types/calls";
import UsersMixin "mixins/users-api";
import BusinessesMixin "mixins/businesses-api";
import AgentsMixin "mixins/agents-api";
import LeadsMixin "mixins/leads-api";
import CallsMixin "mixins/calls-api";

actor {
  // Authorization
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Users domain
  let users = Map.empty<CommonTypes.UserId, UserTypes.UserProfile>();
  include UsersMixin(accessControlState, users);

  // Businesses domain
  let businesses = Map.empty<Text, BusinessTypes.BusinessProfile>();
  let businessState = { var nextId : Nat = 0 };
  include BusinessesMixin(accessControlState, businesses, businessState);

  // Agents domain
  let agents = Map.empty<Text, AgentTypes.AgentConfig>();
  let agentState = { var nextId : Nat = 0 };
  include AgentsMixin(accessControlState, agents, agentState);

  // Leads domain
  let leads = Map.empty<Text, LeadTypes.LeadRecord>();
  let leadState = { var nextId : Nat = 0 };
  include LeadsMixin(accessControlState, leads, leadState);

  // Call logs domain
  let callLogs = Map.empty<Text, CallTypes.CallLog>();
  let callState = { var nextId : Nat = 0 };
  include CallsMixin(accessControlState, callLogs, callState);
};

