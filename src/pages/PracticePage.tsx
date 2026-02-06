import { useState } from "react";
import { practiceTasks } from "@/data/content";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

const PracticePage = () => {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">📝 Practice Tasks</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Coding exercises from your notes — {practiceTasks.length} tasks
        </p>
      </div>

      <div className="space-y-4">
        {practiceTasks.map((task, i) => (
          <Card key={i}>
            <CardContent className="p-4 space-y-3">
              <h3 className="font-semibold">{task.title}</h3>
              <p className="text-sm text-muted-foreground">{task.description}</p>
              <div className="text-xs text-muted-foreground bg-muted/50 rounded-md p-2">
                💡 Hint: {task.hint}
              </div>
              {revealed[i] && (
                <pre className="code-block text-xs">{task.solution}</pre>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="text-xs"
                onClick={() => setRevealed((r) => ({ ...r, [i]: !r[i] }))}
              >
                {revealed[i] ? <><EyeOff className="h-3 w-3 mr-1" /> Hide Solution</> : <><Eye className="h-3 w-3 mr-1" /> Show Solution</>}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PracticePage;
