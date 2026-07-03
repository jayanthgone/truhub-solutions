import { useEffect, useState } from "react";

export type Project = {
  id: string;
  title: string;
  desc: string;
  link: string;
};

export const DEFAULT_PROJECTS: Project[] = [
  { id: "1", title: "Nova Finance", desc: "Fintech platform with real-time analytics dashboards.", link: "https://example.com" },
  { id: "2", title: "Lumen Studio", desc: "Creative agency site with immersive scroll storytelling.", link: "https://example.com" },
  { id: "3", title: "Orbit Commerce", desc: "Headless e-commerce experience with 3D product views.", link: "https://example.com" },
  { id: "4", title: "Pulse Health", desc: "Wellness app landing with cinematic hero animations.", link: "https://example.com" },
  { id: "5", title: "Vertex SaaS", desc: "B2B SaaS marketing site with high-converting funnels.", link: "https://example.com" },
  { id: "6", title: "Echo Media", desc: "Editorial platform with rich media and dynamic layouts.", link: "https://example.com" },
];

const KEY = "truhub.portfolio.v1";

export function loadProjects(): Project[] {
  if (typeof window === "undefined") return DEFAULT_PROJECTS;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return DEFAULT_PROJECTS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length) return parsed;
    return DEFAULT_PROJECTS;
  } catch {
    return DEFAULT_PROJECTS;
  }
}

export function saveProjects(projects: Project[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(projects));
  window.dispatchEvent(new Event("truhub:portfolio-updated"));
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS);

  useEffect(() => {
    setProjects(loadProjects());
    const onUpdate = () => setProjects(loadProjects());
    window.addEventListener("truhub:portfolio-updated", onUpdate);
    window.addEventListener("storage", onUpdate);
    return () => {
      window.removeEventListener("truhub:portfolio-updated", onUpdate);
      window.removeEventListener("storage", onUpdate);
    };
  }, []);

  return projects;
}
