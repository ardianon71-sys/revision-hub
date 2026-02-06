import { useState } from "react";
import { interviewQuestions } from "@/data/content";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

const InterviewPage = () => {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">❓ Interview Questions</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Collected from all your bootcamp notes — {interviewQuestions.length} questions
        </p>
      </div>

      <div className="space-y-3">
        {interviewQuestions.map((q, i) => (
          <Card key={i}>
            <CardContent className="p-4 space-y-2">
              <div className="flex items-start justify-between gap-3">
                <p className="font-medium text-sm">{q.question}</p>
                <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded shrink-0">
                  {q.source}
                </span>
              </div>
              {revealed[i] && (
                <p className="text-sm text-muted-foreground bg-muted/50 rounded-md p-3 leading-relaxed">
                  {q.answer}
                </p>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="text-xs"
                onClick={() => setRevealed((r) => ({ ...r, [i]: !r[i] }))}
              >
                {revealed[i] ? <><EyeOff className="h-3 w-3 mr-1" /> Hide</> : <><Eye className="h-3 w-3 mr-1" /> Show Answer</>}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InterviewPage;
