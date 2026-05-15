import { LeadPriority, LeadSource, LeadStatus } from "@/backend";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { LeadRecord } from "@/types";
import { MapPin, Phone, Plus, Search, Star, Users, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const mockLeads: LeadRecord[] = [
  {
    leadId: "lead-1",
    customerName: "Rajesh Kumar",
    phone: "+91 98765 43210",
    email: "rajesh.k@email.com",
    budget: "₹85 Lakhs",
    location: "Thane West",
    propertyType: "2BHK Apartment",
    buyingTimeline: "3 months",
    siteVisitInterest: true,
    priority: LeadPriority.High,
    status: LeadStatus.Qualified,
    source: LeadSource.AICall,
    notes:
      "Interested in ready possession. Budget flexible for right property.",
    businessId: "biz-1",
    createdAt: BigInt(Date.now() - 1000 * 60 * 30),
    updatedAt: BigInt(Date.now() - 1000 * 60 * 10),
  },
  {
    leadId: "lead-2",
    customerName: "Priya Sharma",
    phone: "+91 87654 32109",
    email: "priya.s@email.com",
    budget: "₹1.2 Crore",
    location: "Powai",
    propertyType: "3BHK Flat",
    buyingTimeline: "1 month",
    siteVisitInterest: true,
    priority: LeadPriority.High,
    status: LeadStatus.Scheduled,
    source: LeadSource.AICall,
    notes:
      "Site visit confirmed for Saturday 3 PM. Very interested in lake view.",
    businessId: "biz-1",
    createdAt: BigInt(Date.now() - 1000 * 60 * 60 * 2),
    updatedAt: BigInt(Date.now() - 1000 * 60 * 30),
  },
  {
    leadId: "lead-3",
    customerName: "Amit Patel",
    phone: "+91 76543 21098",
    budget: "₹60 Lakhs",
    location: "Dombivli East",
    propertyType: "1BHK",
    buyingTimeline: "6 months",
    siteVisitInterest: false,
    priority: LeadPriority.Medium,
    status: LeadStatus.New,
    source: LeadSource.AICall,
    notes: "First-time buyer. Needs more information about loan options.",
    businessId: "biz-1",
    createdAt: BigInt(Date.now() - 1000 * 60 * 60 * 5),
    updatedAt: BigInt(Date.now() - 1000 * 60 * 60 * 5),
  },
  {
    leadId: "lead-4",
    customerName: "Sunita Rao",
    phone: "+91 65432 10987",
    email: "sunita.r@gmail.com",
    budget: "₹2 Crore",
    location: "Navi Mumbai",
    propertyType: "4BHK Villa",
    buyingTimeline: "2 months",
    siteVisitInterest: true,
    priority: LeadPriority.High,
    status: LeadStatus.Qualified,
    source: LeadSource.Manual,
    notes: "Premium segment buyer. Looking for gated community with amenities.",
    businessId: "biz-1",
    createdAt: BigInt(Date.now() - 1000 * 60 * 60 * 8),
    updatedAt: BigInt(Date.now() - 1000 * 60 * 60 * 3),
  },
  {
    leadId: "lead-5",
    customerName: "Vikram Singh",
    phone: "+91 54321 09876",
    budget: "₹45 Lakhs",
    location: "Kalyan",
    propertyType: "Studio Apartment",
    buyingTimeline: "As soon as possible",
    siteVisitInterest: true,
    priority: LeadPriority.Low,
    status: LeadStatus.Closed,
    source: LeadSource.AICall,
    notes: "Property booked. Purchase completed.",
    businessId: "biz-1",
    createdAt: BigInt(Date.now() - 1000 * 60 * 60 * 24),
    updatedAt: BigInt(Date.now() - 1000 * 60 * 60 * 12),
  },
  {
    leadId: "lead-6",
    customerName: "Meena Joshi",
    phone: "+91 91234 56789",
    email: "meena.j@gmail.com",
    budget: "₹75 Lakhs",
    location: "Ulhasnagar",
    propertyType: "2BHK",
    buyingTimeline: "4 months",
    siteVisitInterest: false,
    priority: LeadPriority.Medium,
    status: LeadStatus.New,
    source: LeadSource.Manual,
    notes: "Comparing multiple projects. Needs follow-up.",
    businessId: "biz-1",
    createdAt: BigInt(Date.now() - 1000 * 60 * 60 * 10),
    updatedAt: BigInt(Date.now() - 1000 * 60 * 60 * 10),
  },
];

const COLUMNS: {
  status: LeadStatus;
  label: string;
  color: string;
  headerCls: string;
}[] = [
  {
    status: LeadStatus.New,
    label: "New",
    color: "border-border",
    headerCls: "bg-muted/60 text-muted-foreground",
  },
  {
    status: LeadStatus.Qualified,
    label: "Qualified",
    color: "border-chart-3/40",
    headerCls: "bg-chart-3/15 text-chart-3",
  },
  {
    status: LeadStatus.Scheduled,
    label: "Scheduled",
    color: "border-primary/40",
    headerCls: "bg-primary/15 text-primary",
  },
  {
    status: LeadStatus.Closed,
    label: "Closed",
    color: "border-accent/40",
    headerCls: "bg-accent/15 text-accent",
  },
];

const statusColors: Record<LeadStatus, string> = {
  [LeadStatus.New]: "bg-muted text-muted-foreground border-border",
  [LeadStatus.Qualified]: "bg-chart-3/20 text-chart-3 border-chart-3/30",
  [LeadStatus.Scheduled]: "bg-primary/20 text-primary border-primary/30",
  [LeadStatus.Closed]: "bg-accent/20 text-accent border-accent/30",
};

const priorityColors: Record<LeadPriority, string> = {
  [LeadPriority.High]: "text-destructive",
  [LeadPriority.Medium]: "text-chart-1",
  [LeadPriority.Low]: "text-muted-foreground",
};

interface AddLeadForm {
  customerName: string;
  phone: string;
  budget: string;
  location: string;
  propertyType: string;
}

const emptyForm: AddLeadForm = {
  customerName: "",
  phone: "+91 ",
  budget: "",
  location: "",
  propertyType: "",
};

export default function LeadsPage() {
  const [leads, setLeads] = useState(mockLeads);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<LeadRecord | null>(null);
  const [addOpen, setAddOpen] = useState(false);
  const [addForm, setAddForm] = useState<AddLeadForm>(emptyForm);
  const [movingId, setMovingId] = useState<string | null>(null);

  const filteredBySearch = (lead: LeadRecord) =>
    lead.customerName.toLowerCase().includes(search.toLowerCase()) ||
    (lead.location ?? "").toLowerCase().includes(search.toLowerCase());

  const moveLeadTo = (leadId: string, status: LeadStatus) => {
    setMovingId(leadId);
    setTimeout(() => {
      setLeads((prev) =>
        prev.map((l) => (l.leadId === leadId ? { ...l, status } : l)),
      );
      setMovingId(null);
    }, 200);
  };

  const handleAddLead = () => {
    if (!addForm.customerName || !addForm.phone) return;
    const newLead: LeadRecord = {
      leadId: `lead-${Date.now()}`,
      customerName: addForm.customerName,
      phone: addForm.phone,
      budget: addForm.budget || "TBD",
      location: addForm.location || undefined,
      propertyType: addForm.propertyType || "TBD",
      buyingTimeline: "TBD",
      siteVisitInterest: false,
      priority: LeadPriority.Medium,
      status: LeadStatus.New,
      source: LeadSource.Manual,
      notes: "",
      businessId: "biz-1",
      createdAt: BigInt(Date.now()),
      updatedAt: BigInt(Date.now()),
    };
    setLeads((prev) => [newLead, ...prev]);
    setAddForm(emptyForm);
    setAddOpen(false);
  };

  const otherStatuses = (current: LeadStatus) =>
    COLUMNS.filter((c) => c.status !== current);

  return (
    <div className="p-4 sm:p-6 space-y-5 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Lead CRM
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {leads.length} total leads
          </p>
        </div>
        <Button
          type="button"
          size="sm"
          data-ocid="leads.add_lead_button"
          onClick={() => setAddOpen(true)}
          className="gradient-accent text-white font-medium hover:opacity-90 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Lead
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search leads..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          data-ocid="leads.search_input"
          className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
        />
      </div>

      {/* Kanban Board */}
      <div className="overflow-x-auto pb-4">
        <div className="grid grid-cols-4 gap-4 min-w-[720px]">
          {COLUMNS.map((col) => {
            const colLeads = leads.filter(
              (l) => l.status === col.status && filteredBySearch(l),
            );
            return (
              <div key={col.status} className="flex flex-col gap-3">
                {/* Column Header */}
                <div
                  className={`flex items-center justify-between px-3 py-2 rounded-lg border ${col.color} ${col.headerCls}`}
                >
                  <span className="text-xs font-bold uppercase tracking-wide">
                    {col.label}
                  </span>
                  <span className="text-xs font-bold bg-background/40 rounded-full px-2 py-0.5">
                    {colLeads.length}
                  </span>
                </div>

                {/* Lead Cards */}
                <div
                  data-ocid={`leads.column.${col.status.toLowerCase()}`}
                  className="flex flex-col gap-3 min-h-[120px]"
                >
                  {colLeads.map((lead, i) => (
                    <motion.div
                      key={lead.leadId}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: movingId === lead.leadId ? 0 : 1,
                        y: 0,
                      }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                    >
                      <Card
                        data-ocid={`leads.item.${i + 1}`}
                        className="glass-effect-dark border-border hover:border-primary/30 transition-smooth p-4 cursor-pointer"
                        onClick={() => setSelected(lead)}
                        onKeyDown={(e) =>
                          (e.key === "Enter" || e.key === " ") &&
                          setSelected(lead)
                        }
                        tabIndex={0}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                            <Users className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <Star
                            className={`w-3 h-3 ${priorityColors[lead.priority]}`}
                            fill={
                              lead.priority === LeadPriority.High
                                ? "currentColor"
                                : "none"
                            }
                          />
                        </div>

                        <h3 className="font-display font-semibold text-foreground text-sm leading-snug">
                          {lead.customerName}
                        </h3>
                        <div className="mt-1 space-y-0.5">
                          <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                            <Phone className="w-2.5 h-2.5 shrink-0" />
                            <span className="truncate">{lead.phone}</span>
                          </div>
                          {lead.location && (
                            <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                              <MapPin className="w-2.5 h-2.5 shrink-0" />
                              <span className="truncate">{lead.location}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between mt-2.5 pt-2.5 border-t border-border/50">
                          <span className="text-xs font-semibold text-foreground">
                            {lead.budget}
                          </span>
                          <span className="text-[10px] text-muted-foreground truncate max-w-[60px]">
                            {lead.propertyType}
                          </span>
                        </div>

                        {/* Move to column buttons */}
                        <div
                          className="mt-2.5 flex flex-wrap gap-1"
                          onClick={(e) => e.stopPropagation()}
                          onKeyDown={(e) => e.stopPropagation()}
                        >
                          {otherStatuses(lead.status).map((target) => (
                            <button
                              key={target.status}
                              type="button"
                              data-ocid={`leads.move_${lead.leadId}_to_${target.status.toLowerCase()}`}
                              onClick={() =>
                                moveLeadTo(lead.leadId, target.status)
                              }
                              className="px-1.5 py-0.5 rounded text-[10px] font-medium border border-input bg-muted/20 text-muted-foreground hover:border-primary/40 hover:text-primary transition-smooth"
                            >
                              → {target.label}
                            </button>
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  ))}

                  {colLeads.length === 0 && (
                    <div
                      data-ocid={`leads.${col.status.toLowerCase()}.empty_state`}
                      className="flex flex-col items-center justify-center py-10 rounded-lg border border-dashed border-border/50 text-center"
                    >
                      <Users className="w-6 h-6 text-muted-foreground/40 mb-1.5" />
                      <p className="text-[11px] text-muted-foreground">
                        No leads
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lead Detail Dialog */}
      <Dialog
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <DialogContent className="max-w-md" data-ocid="leads.dialog">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              {selected?.customerName}
            </DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-3 pt-1">
              <div className="grid grid-cols-2 gap-3">
                <div className="glass-effect-dark rounded-lg p-3">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                    Budget
                  </p>
                  <p className="text-sm font-semibold text-foreground mt-0.5">
                    {selected.budget}
                  </p>
                </div>
                <div className="glass-effect-dark rounded-lg p-3">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                    Timeline
                  </p>
                  <p className="text-sm font-semibold text-foreground mt-0.5">
                    {selected.buyingTimeline}
                  </p>
                </div>
                <div className="glass-effect-dark rounded-lg p-3">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-foreground mt-0.5">
                    {selected.location}
                  </p>
                </div>
                <div className="glass-effect-dark rounded-lg p-3">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                    Property
                  </p>
                  <p className="text-sm font-semibold text-foreground mt-0.5">
                    {selected.propertyType}
                  </p>
                </div>
              </div>
              <div className="glass-effect-dark rounded-lg p-3">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">
                  Notes
                </p>
                <p className="text-sm text-muted-foreground">
                  {selected.notes}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className={`text-xs ${statusColors[selected.status]}`}
                >
                  {selected.status}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {selected.source}
                </Badge>
                {selected.siteVisitInterest && (
                  <Badge
                    variant="outline"
                    className="text-xs bg-chart-3/10 text-chart-3 border-chart-3/20"
                  >
                    Site Visit ✓
                  </Badge>
                )}
              </div>
              <Button
                type="button"
                className="w-full gradient-accent text-white font-medium hover:opacity-90"
                data-ocid="leads.close_button"
                onClick={() => setSelected(null)}
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Add Lead Dialog */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="max-w-md" data-ocid="leads.add_lead_dialog">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5 text-primary" />
              Add New Lead
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-1">
            <div>
              <label
                htmlFor="add-lead-name"
                className="block text-xs font-medium text-muted-foreground mb-1.5"
              >
                Customer Name *
              </label>
              <input
                id="add-lead-name"
                type="text"
                value={addForm.customerName}
                onChange={(e) =>
                  setAddForm((f) => ({ ...f, customerName: e.target.value }))
                }
                placeholder="e.g. Ravi Mehta"
                data-ocid="leads.add_name_input"
                className="w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
              />
            </div>
            <div>
              <label
                htmlFor="add-lead-phone"
                className="block text-xs font-medium text-muted-foreground mb-1.5"
              >
                Phone Number *
              </label>
              <input
                id="add-lead-phone"
                type="tel"
                value={addForm.phone}
                onChange={(e) =>
                  setAddForm((f) => ({ ...f, phone: e.target.value }))
                }
                placeholder="+91 9876543210"
                data-ocid="leads.add_phone_input"
                className="w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="add-lead-budget"
                  className="block text-xs font-medium text-muted-foreground mb-1.5"
                >
                  Budget
                </label>
                <input
                  id="add-lead-budget"
                  type="text"
                  value={addForm.budget}
                  onChange={(e) =>
                    setAddForm((f) => ({ ...f, budget: e.target.value }))
                  }
                  placeholder="₹50 Lakhs"
                  data-ocid="leads.add_budget_input"
                  className="w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                />
              </div>
              <div>
                <label
                  htmlFor="add-lead-location"
                  className="block text-xs font-medium text-muted-foreground mb-1.5"
                >
                  Location
                </label>
                <input
                  id="add-lead-location"
                  type="text"
                  value={addForm.location}
                  onChange={(e) =>
                    setAddForm((f) => ({ ...f, location: e.target.value }))
                  }
                  placeholder="Thane West"
                  data-ocid="leads.add_location_input"
                  className="w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="add-lead-property"
                className="block text-xs font-medium text-muted-foreground mb-1.5"
              >
                Property Type
              </label>
              <input
                id="add-lead-property"
                type="text"
                value={addForm.propertyType}
                onChange={(e) =>
                  setAddForm((f) => ({ ...f, propertyType: e.target.value }))
                }
                placeholder="2BHK Apartment"
                data-ocid="leads.add_property_input"
                className="w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
              />
            </div>
            <div className="flex gap-3 pt-1">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                data-ocid="leads.add_cancel_button"
                onClick={() => {
                  setAddOpen(false);
                  setAddForm(emptyForm);
                }}
              >
                <X className="w-4 h-4 mr-1.5" /> Cancel
              </Button>
              <Button
                type="button"
                className="flex-1 gradient-accent text-white font-semibold hover:opacity-90"
                data-ocid="leads.add_submit_button"
                disabled={!addForm.customerName || !addForm.phone}
                onClick={handleAddLead}
              >
                <Plus className="w-4 h-4 mr-1.5" /> Add Lead
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
