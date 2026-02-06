import { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Search, Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/hooks/useTheme";
import { categories, getAllTopics } from "@/data/content";

interface HeaderProps {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
}

export function Header({ onToggleSidebar, sidebarOpen }: HeaderProps) {
  const { dark, toggle } = useTheme();
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const allTopics = useMemo(() => getAllTopics(), []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allTopics.filter(
      ({ topic, category }) =>
        topic.title.toLowerCase().includes(q) ||
        topic.definition.toLowerCase().includes(q) ||
        topic.recap.some((r) => r.toLowerCase().includes(q)) ||
        category.title.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query, allTopics]);

  return (
    <header className="sticky top-0 z-50 flex h-14 items-center gap-3 border-b bg-card/80 backdrop-blur-md px-4">
      <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="shrink-0">
        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <h1
        className="text-lg font-bold cursor-pointer shrink-0 hidden sm:block"
        onClick={() => navigate("/")}
      >
        📚 Ardi's Revision
      </h1>

      <div className="relative flex-1 max-w-md ml-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search topics..."
          className="pl-9 h-9"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
        />
        {showResults && results.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-card border rounded-lg shadow-lg overflow-hidden max-h-80 overflow-y-auto">
            {results.map(({ topic, category }) => (
              <button
                key={topic.id}
                className="w-full text-left px-4 py-2.5 hover:bg-muted/60 flex items-center gap-2 text-sm"
                onMouseDown={() => {
                  navigate(`/topic/${topic.id}`);
                  setQuery("");
                  setShowResults(false);
                }}
              >
                <span className="text-xs">{category.icon}</span>
                <span className="font-medium">{topic.title}</span>
                <span className="text-xs text-muted-foreground ml-auto">{category.title}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <Button variant="ghost" size="icon" onClick={toggle} className="shrink-0">
        {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
    </header>
  );
}
