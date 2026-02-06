import { useState, useCallback, useEffect } from "react";
import { getAllTopics } from "@/data/content";

const STORAGE_KEY = "ardi-revision-progress";

export function useProgress() {
  const [revised, setRevised] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(revised));
  }, [revised]);

  const toggleRevised = useCallback((topicId: string) => {
    setRevised((prev) => ({ ...prev, [topicId]: !prev[topicId] }));
  }, []);

  const isRevised = useCallback((topicId: string) => !!revised[topicId], [revised]);

  const totalTopics = getAllTopics().length;
  const revisedCount = Object.values(revised).filter(Boolean).length;
  const percentage = totalTopics > 0 ? Math.round((revisedCount / totalTopics) * 100) : 0;

  return { isRevised, toggleRevised, percentage, revisedCount, totalTopics };
}
