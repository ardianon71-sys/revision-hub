import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import HomePage from "./pages/HomePage";
import TopicPage from "./pages/TopicPage";
import QuizPage from "./pages/QuizPage";
import InterviewPage from "./pages/InterviewPage";
import PracticePage from "./pages/PracticePage";
import QuickRevisionPage from "./pages/QuickRevisionPage";
import CheatsheetsPage from "./pages/CheatsheetsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/topic/:topicId" element={<TopicPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/interview" element={<InterviewPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/quick-revision" element={<QuickRevisionPage />} />
            <Route path="/cheatsheets" element={<CheatsheetsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
