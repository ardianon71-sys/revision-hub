import { useState, useMemo } from "react";
import { getAllQuizQuestions } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const QuizPage = () => {
  const allQuestions = useMemo(() => getAllQuizQuestions(), []);
  const [current, setCurrent] = useState(() => randomIndex(allQuestions.length));
  const [selected, setSelected] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  function randomIndex(max: number) {
    return Math.floor(Math.random() * max);
  }

  const q = allQuestions[current];

  function handleSelect(opt: string) {
    if (showAnswer) return;
    setSelected(opt);
    setShowAnswer(true);
    setScore((s) => ({
      correct: s.correct + (opt === q.answer ? 1 : 0),
      total: s.total + 1,
    }));
  }

  function handleNext() {
    setCurrent(randomIndex(allQuestions.length));
    setSelected(null);
    setShowAnswer(false);
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold">🎲 Random Quiz</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Test your knowledge with random questions from all topics
        </p>
      </div>

      {/* Score */}
      <div className="text-center text-sm text-muted-foreground">
        Score: <span className="font-bold text-foreground">{score.correct}</span> / {score.total}
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="text-xs text-muted-foreground">Topic: {q.topicTitle}</div>
          <p className="font-semibold text-lg">{q.question}</p>
          <div className="grid gap-2">
            {q.options.map((opt) => {
              let classes = "text-left w-full px-4 py-3 rounded-lg border text-sm transition-colors ";
              if (showAnswer) {
                if (opt === q.answer) classes += "border-accent bg-accent/10 text-accent font-medium";
                else if (opt === selected) classes += "border-destructive bg-destructive/10 text-destructive";
                else classes += "border-border opacity-50";
              } else {
                classes += "border-border hover:border-primary/50 hover:bg-muted/50 cursor-pointer";
              }
              return (
                <button key={opt} className={classes} onClick={() => handleSelect(opt)}>
                  {opt}
                </button>
              );
            })}
          </div>
          {showAnswer && (
            <div className="flex items-center justify-between pt-2">
              <span className={`text-sm font-medium ${selected === q.answer ? "text-accent" : "text-destructive"}`}>
                {selected === q.answer ? "✓ Correct!" : "✗ Wrong!"}
              </span>
              <Button onClick={handleNext}>Next Question →</Button>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="text-center">
        <Button variant="outline" onClick={() => { setScore({ correct: 0, total: 0 }); handleNext(); }}>
          Reset Score
        </Button>
      </div>
    </div>
  );
};

export default QuizPage;
