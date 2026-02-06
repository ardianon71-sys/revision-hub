import { useNavigate } from "react-router-dom";
import { useProgress } from "@/hooks/useProgress";
import { categories, revisionPlanner, getAllTopics } from "@/data/content";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

const HomePage = () => {
  const { percentage, revisedCount, totalTopics, isRevised } = useProgress();
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          📚 Ardi's Web Dev Revision
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Your personal study hub — all your bootcamp notes in one place. Revise HTML, CSS, JavaScript & Git at your own pace.
        </p>
      </div>

      {/* Progress */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Overall Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{revisedCount} of {totalTopics} topics revised</span>
            <span className="font-bold text-lg" style={{ color: `hsl(var(--primary))` }}>{percentage}%</span>
          </div>
          <Progress value={percentage} className="h-3" />
        </CardContent>
      </Card>

      {/* Quick Links */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Jump Into a Section</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <Card
              key={cat.id}
              className="cursor-pointer hover:border-primary/50 hover:shadow-md transition-all"
              onClick={() => navigate(`/topic/${cat.topics[0].id}`)}
            >
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">{cat.icon}</div>
                <div className="font-medium text-sm">{cat.title}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {cat.topics.length} topics
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "🎲 Random Quiz", path: "/quiz" },
          { label: "❓ Interview Q's", path: "/interview" },
          { label: "⚡ Quick Revision", path: "/quick-revision" },
          { label: "📋 Cheatsheets", path: "/cheatsheets" },
        ].map((item) => (
          <Button
            key={item.path}
            variant="outline"
            className="h-auto py-3 flex-col gap-1"
            onClick={() => navigate(item.path)}
          >
            <span className="text-sm">{item.label}</span>
          </Button>
        ))}
      </div>

      {/* 7-Day Planner */}
      <div>
        <h2 className="text-xl font-semibold mb-4">📅 7-Day Revision Planner</h2>
        <div className="space-y-3">
          {revisionPlanner.map((day) => {
            const dayTopics = getAllTopics().filter(({ topic }) =>
              day.topicIds.includes(topic.id)
            );
            const completed = dayTopics.every(({ topic }) => isRevised(topic.id));
            const partial = dayTopics.some(({ topic }) => isRevised(topic.id));

            return (
              <Card key={day.day} className={completed ? "border-accent/50 bg-accent/5" : ""}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold shrink-0 ${completed ? "bg-accent text-accent-foreground" : partial ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                      {completed ? "✓" : day.day}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{day.title}</div>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {dayTopics.map(({ topic }) => (
                          <button
                            key={topic.id}
                            className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                            onClick={() => navigate(`/topic/${topic.id}`)}
                          >
                            {isRevised(topic.id) ? (
                              <CheckCircle2 className="h-3 w-3 text-accent" />
                            ) : (
                              <Circle className="h-3 w-3 text-muted-foreground" />
                            )}
                            <span className="truncate max-w-[120px]">{topic.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="shrink-0"
                      onClick={() => navigate(`/topic/${day.topicIds[0]}`)}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
