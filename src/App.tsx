import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import ExperienceDetail from "./pages/ExperienceDetail";
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/experience/:slug" element={<ExperienceDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
