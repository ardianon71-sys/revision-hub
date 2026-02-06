import { useParams, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { categories, getAllTopics } from "@/data/content";
import { useProgress } from "@/hooks/useProgress";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronLeft, ChevronRight, Eye, EyeOff } from "lucide-react";

const TopicPage = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const { isRevised, toggleRevised } = useProgress();

  const allTopics = useMemo(() => getAllTopics(), []);
  const currentIndex = allTopics.findIndex(({ topic }) => topic.id === topicId);
  const current = currentIndex >= 0 ? allTopics[currentIndex] : null;

  const prev = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const next = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});

  if (!current) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">Topic not found.</p>
        <Button variant="link" onClick={() => navigate("/")}>Go Home</Button>
      </div>
    );
  }

  const { topic, category } = current;

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#" onClick={(e) => { e.preventDefault(); navigate(`/topic/${category.topics[0].id}`); }}>
              {category.icon} {category.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{topic.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Title + Mark as revised */}
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">{topic.title}</h1>
        <label className="flex items-center gap-2 cursor-pointer shrink-0 text-sm">
          <Checkbox
            checked={isRevised(topic.id)}
            onCheckedChange={() => toggleRevised(topic.id)}
          />
          <span className="text-muted-foreground">Revised</span>
        </label>
      </div>

      {/* Definition */}
      <section>
        <h2 className="text-lg font-semibold mb-2">📖 What is this?</h2>
        <p className="text-muted-foreground leading-relaxed">{topic.definition}</p>
      </section>

      {/* Why it matters */}
      <section>
        <h2 className="text-lg font-semibold mb-2">💡 Why it matters</h2>
        <p className="text-muted-foreground leading-relaxed">{topic.whyItMatters}</p>
      </section>

      {/* Syntax */}
      <section>
        <h2 className="text-lg font-semibold mb-3">🔧 Syntax & Patterns</h2>
        <div className="space-y-3">
          {topic.syntax.map((code, i) => (
            <pre key={i} className="code-block">{code}</pre>
          ))}
        </div>
      </section>

      {/* Examples */}
      <section>
        <h2 className="text-lg font-semibold mb-3">📝 Examples from Notes</h2>
        <div className="space-y-3">
          {topic.examples.map((code, i) => (
            <pre key={i} className="code-block">{code}</pre>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      {topic.commonMistakes && topic.commonMistakes.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold mb-2">⚠️ Common Mistakes</h2>
          <ul className="space-y-2">
            {topic.commonMistakes.map((m, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                <span className="text-destructive shrink-0">✗</span>
                {m}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Quick Recap */}
      <section>
        <h2 className="text-lg font-semibold mb-2">⚡ Quick Recap</h2>
        <ul className="space-y-1.5">
          {topic.recap.map((r, i) => (
            <li key={i} className="flex gap-2 text-sm text-muted-foreground">
              <span className="text-accent shrink-0">•</span>
              {r}
            </li>
          ))}
        </ul>
      </section>

      {/* Practice Questions */}
      {topic.practiceQuestions.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold mb-3">🧠 Practice Questions</h2>
          <div className="space-y-3">
            {topic.practiceQuestions.map((q, i) => (
              <Card key={i}>
                <CardContent className="p-4 space-y-3">
                  <p className="font-medium text-sm">{q.question}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt) => (
                      <div
                        key={opt}
                        className={`text-xs px-3 py-2 rounded-md border ${
                          revealedAnswers[i] && opt === q.answer
                            ? "border-accent bg-accent/10 text-accent font-medium"
                            : "border-border"
                        }`}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs"
                    onClick={() =>
                      setRevealedAnswers((prev) => ({ ...prev, [i]: !prev[i] }))
                    }
                  >
                    {revealedAnswers[i] ? (
                      <><EyeOff className="h-3 w-3 mr-1" /> Hide Answer</>
                    ) : (
                      <><Eye className="h-3 w-3 mr-1" /> Show Answer</>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t">
        {prev ? (
          <Button variant="outline" size="sm" onClick={() => navigate(`/topic/${prev.topic.id}`)}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">{prev.topic.title}</span>
            <span className="sm:hidden">Previous</span>
          </Button>
        ) : <div />}
        {next ? (
          <Button variant="outline" size="sm" onClick={() => navigate(`/topic/${next.topic.id}`)}>
            <span className="hidden sm:inline">{next.topic.title}</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        ) : <div />}
      </div>
    </div>
  );
};

export default TopicPage;
