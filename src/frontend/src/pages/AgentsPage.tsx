import {
  AgentLanguage,
  AgentStatus,
  AgentTone,
  BusinessCategory,
} from "@/backend";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { AgentConfig } from "@/types";
import { Bot, Globe, Pause, Play, Plus, Trash2, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const mockAgents: AgentConfig[] = [
  {
    agentId: "agent-1",
    agentName: "Real Estate Pro",
    useCase: BusinessCategory.RealEstate,
    language: AgentLanguage.english,
    tone: AgentTone.professional,
    status: AgentStatus.active,
    customInstructions:
      "Focus on luxury properties in Thane and Navi Mumbai. Always ask for site visit interest.",
    businessId: "biz-1",
    createdAt: BigInt(Date.now() - 1000 * 60 * 60 * 24 * 5),
  },
  {
    agentId: "agent-2",
    agentName: "Hindi Support Agent",
    useCase: BusinessCategory.RealEstate,
    language: AgentLanguage.hindi,
    tone: AgentTone.friendly,
    status: AgentStatus.active,
    customInstructions: "हिंदी में ग्राहकों से बात करें। बजट और लोकेशन पूछें।",
    businessId: "biz-1",
    createdAt: BigInt(Date.now() - 1000 * 60 * 60 * 24 * 2),
  },
  {
    agentId: "agent-3",
    agentName: "Marathi Local Agent",
    useCase: BusinessCategory.RealEstate,
    language: AgentLanguage.marathi,
    tone: AgentTone.friendly,
    status: AgentStatus.paused,
    customInstructions: "मराठी मध्ये ग्राहकांशी संवाद साधा.",
    businessId: "biz-1",
    createdAt: BigInt(Date.now() - 1000 * 60 * 60 * 24),
  },
];

const languageLabels: Record<AgentLanguage, string> = {
  english: "English",
  hindi: "हिंदी",
  marathi: "मराठी",
};

const toneLabels: Record<AgentTone, string> = {
  professional: "Professional",
  friendly: "Friendly",
  formal: "Formal",
  casual: "Casual",
};

export default function AgentsPage() {
  const [agents, setAgents] = useState(mockAgents);
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState("");
  const [newLang, setNewLang] = useState<AgentLanguage>(AgentLanguage.english);
  const [newTone, setNewTone] = useState<AgentTone>(AgentTone.professional);
  const [newInstructions, setNewInstructions] = useState("");

  const toggleStatus = (agentId: string) => {
    setAgents((prev) =>
      prev.map((a) =>
        a.agentId === agentId
          ? {
              ...a,
              status:
                a.status === AgentStatus.active
                  ? AgentStatus.paused
                  : AgentStatus.active,
            }
          : a,
      ),
    );
  };

  const deleteAgent = (agentId: string) => {
    setAgents((prev) => prev.filter((a) => a.agentId !== agentId));
  };

  const createAgent = () => {
    if (!newName.trim()) return;
    const newAgent: AgentConfig = {
      agentId: `agent-${Date.now()}`,
      agentName: newName,
      useCase: BusinessCategory.RealEstate,
      language: newLang,
      tone: newTone,
      status: AgentStatus.active,
      customInstructions: newInstructions,
      businessId: "biz-1",
      createdAt: BigInt(Date.now()),
    };
    setAgents((prev) => [...prev, newAgent]);
    setShowCreate(false);
    setNewName("");
    setNewInstructions("");
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            AI Agents
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {agents.length} agents configured
          </p>
        </div>
        <Button
          type="button"
          size="sm"
          onClick={() => setShowCreate(true)}
          data-ocid="agents.create_agent_button"
          className="gradient-accent text-white font-medium hover:opacity-90"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Agent
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {agents.map((agent, i) => (
          <motion.div
            key={agent.agentId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card
              data-ocid={`agents.item.${i + 1}`}
              className="glass-effect-dark border-border hover:border-primary/30 transition-smooth p-5 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <Badge
                  variant="outline"
                  className={`text-xs ${
                    agent.status === AgentStatus.active
                      ? "bg-chart-3/15 text-chart-3 border-chart-3/30"
                      : "bg-muted text-muted-foreground border-border"
                  }`}
                >
                  {agent.status === AgentStatus.active ? (
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-chart-3 animate-pulse" />
                      Active
                    </span>
                  ) : (
                    "Paused"
                  )}
                </Badge>
              </div>

              <div>
                <h3 className="font-display font-semibold text-foreground">
                  {agent.agentName}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Globe className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {languageLabels[agent.language]}
                  </span>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="text-xs text-muted-foreground">
                    {toneLabels[agent.tone]}
                  </span>
                </div>
              </div>

              {agent.customInstructions && (
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {agent.customInstructions}
                </p>
              )}

              <div className="flex items-center gap-2 mt-auto">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs border-border hover:border-primary/40"
                  onClick={() => toggleStatus(agent.agentId)}
                  data-ocid={`agents.toggle.${i + 1}`}
                >
                  {agent.status === AgentStatus.active ? (
                    <>
                      <Pause className="w-3 h-3 mr-1.5" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 mr-1.5" />
                      Activate
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-destructive border-destructive/30 hover:bg-destructive/10 text-xs"
                  onClick={() => deleteAgent(agent.agentId)}
                  data-ocid={`agents.delete_button.${i + 1}`}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}

        {/* Empty state */}
        {agents.length === 0 && (
          <div
            data-ocid="agents.empty_state"
            className="md:col-span-2 xl:col-span-3 flex flex-col items-center justify-center py-16 text-center"
          >
            <Bot className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="font-display font-semibold text-foreground mb-2">
              No agents yet
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Create your first AI voice agent to start automating calls.
            </p>
            <Button
              type="button"
              onClick={() => setShowCreate(true)}
              data-ocid="agents.empty_create_button"
              className="gradient-accent text-white font-medium"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Agent
            </Button>
          </div>
        )}
      </div>

      {/* Create Dialog */}
      <Dialog open={showCreate} onOpenChange={setShowCreate}>
        <DialogContent className="max-w-md" data-ocid="agents.create_dialog">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Create AI Agent
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <div>
              <label
                htmlFor="agent-name"
                className="block text-xs font-medium text-muted-foreground mb-1.5"
              >
                Agent Name *
              </label>
              <input
                id="agent-name"
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="e.g. Real Estate Pro Agent"
                data-ocid="agents.name_input"
                className="w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
              />
            </div>
            <div>
              <label
                htmlFor="agent-language"
                className="block text-xs font-medium text-muted-foreground mb-1.5"
              >
                Language
              </label>
              <div id="agent-language" className="flex gap-2">
                {Object.values(AgentLanguage).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setNewLang(lang)}
                    className={`flex-1 py-2 rounded-lg text-xs font-medium border transition-smooth ${
                      newLang === lang
                        ? "border-primary bg-primary/15 text-primary"
                        : "border-input bg-muted/20 text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    {languageLabels[lang]}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label
                htmlFor="agent-tone"
                className="block text-xs font-medium text-muted-foreground mb-1.5"
              >
                Tone
              </label>
              <div id="agent-tone" className="grid grid-cols-2 gap-2">
                {Object.values(AgentTone).map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setNewTone(tone)}
                    className={`py-2 rounded-lg text-xs font-medium border transition-smooth ${
                      newTone === tone
                        ? "border-primary bg-primary/15 text-primary"
                        : "border-input bg-muted/20 text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    {toneLabels[tone]}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label
                htmlFor="agent-instructions"
                className="block text-xs font-medium text-muted-foreground mb-1.5"
              >
                Custom Instructions
              </label>
              <textarea
                id="agent-instructions"
                value={newInstructions}
                onChange={(e) => setNewInstructions(e.target.value)}
                placeholder="Specific instructions for this agent..."
                rows={3}
                data-ocid="agents.instructions_textarea"
                className="w-full px-4 py-2.5 rounded-lg bg-muted/30 border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth resize-none"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => setShowCreate(false)}
                data-ocid="agents.cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="button"
                className="flex-1 gradient-accent text-white font-medium hover:opacity-90"
                onClick={createAgent}
                disabled={!newName.trim()}
                data-ocid="agents.confirm_button"
              >
                Create Agent
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
