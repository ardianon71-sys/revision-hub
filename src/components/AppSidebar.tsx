import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { categories } from "@/data/content";
import { useProgress } from "@/hooks/useProgress";
import { Progress } from "@/components/ui/progress";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight, Home, HelpCircle, ListChecks, Zap, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface AppSidebarProps {
  open: boolean;
  onClose: () => void;
}

export function AppSidebar({ open, onClose }: AppSidebarProps) {
  const { percentage } = useProgress();
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={cn(
          "fixed top-14 left-0 bottom-0 z-40 w-72 bg-sidebar border-r overflow-y-auto transition-transform duration-200",
          "lg:sticky lg:top-14 lg:z-auto lg:h-[calc(100vh-3.5rem)]",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:hidden"
        )}
      >
        <div className="p-4 space-y-4">
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Revision Progress</span>
              <span className="font-semibold text-foreground">{percentage}%</span>
            </div>
            <Progress value={percentage} className="h-2" />
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            <NavLink
              to="/"
              end
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
              activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
              onClick={onClose}
            >
              <Home className="h-4 w-4" />
              Home
            </NavLink>

            {categories.map((cat) => (
              <CategoryGroup key={cat.id} category={cat} onClose={onClose} currentPath={location.pathname} />
            ))}

            <div className="pt-2 border-t border-sidebar-border mt-2">
              <NavLink
                to="/interview"
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                onClick={onClose}
              >
                <HelpCircle className="h-4 w-4" />
                Interview Questions
              </NavLink>
              <NavLink
                to="/practice"
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                onClick={onClose}
              >
                <ListChecks className="h-4 w-4" />
                Practice Tasks
              </NavLink>
              <NavLink
                to="/quick-revision"
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                onClick={onClose}
              >
                <Zap className="h-4 w-4" />
                Quick Revision
              </NavLink>
              <NavLink
                to="/cheatsheets"
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                onClick={onClose}
              >
                <FileText className="h-4 w-4" />
                Cheatsheets
              </NavLink>
              <NavLink
                to="/quiz"
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                onClick={onClose}
              >
                🎲
                Random Quiz
              </NavLink>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}

function CategoryGroup({
  category,
  onClose,
  currentPath,
}: {
  category: (typeof categories)[0];
  onClose: () => void;
  currentPath: string;
}) {
  const isActive = category.topics.some(
    (t) => currentPath === `/topic/${t.id}`
  );
  const [open, setOpen] = useState(isActive);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="flex items-center gap-2 px-3 py-2 rounded-md text-sm w-full hover:bg-sidebar-accent transition-colors text-sidebar-foreground">
        <span>{category.icon}</span>
        <span className="font-medium">{category.title}</span>
        <ChevronRight
          className={cn(
            "h-3.5 w-3.5 ml-auto transition-transform",
            open && "rotate-90"
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="ml-5 border-l border-sidebar-border pl-2 space-y-0.5 my-1">
          {category.topics.map((topic) => (
            <NavLink
              key={topic.id}
              to={`/topic/${topic.id}`}
              className="block px-3 py-1.5 rounded-md text-xs text-sidebar-foreground hover:bg-sidebar-accent transition-colors truncate"
              activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
              onClick={onClose}
            >
              {topic.title}
            </NavLink>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
