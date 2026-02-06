import { categories } from "@/data/content";
import { useNavigate } from "react-router-dom";

const QuickRevisionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">⚡ Quick Revision</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Short bullet-point summaries of every topic — scroll through everything fast
        </p>
      </div>

      {categories.map((cat) => (
        <div key={cat.id}>
          <h2 className="text-xl font-bold mb-4">
            {cat.icon} {cat.title}
          </h2>
          <div className="space-y-4">
            {cat.topics.map((topic) => (
              <div key={topic.id} className="border rounded-lg p-4 space-y-2">
                <h3
                  className="font-semibold text-sm cursor-pointer hover:text-primary transition-colors"
                  onClick={() => navigate(`/topic/${topic.id}`)}
                >
                  {topic.title} →
                </h3>
                <ul className="space-y-1">
                  {topic.recap.map((point, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex gap-2">
                      <span className="text-accent shrink-0">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickRevisionPage;
