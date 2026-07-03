import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  DEFAULT_PROJECTS,
  loadProjects,
  saveProjects,
  type Project,
} from "@/lib/portfolio-store";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
  head: () => ({
    meta: [{ title: "Admin · TruHub Solutions" }],
  }),
});

const ADMIN_PASS = "truhub2026";
const AUTH_KEY = "truhub.admin.authed";

function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(AUTH_KEY) === "1") setAuthed(true);
    setProjects(loadProjects());
  }, []);

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (pw === ADMIN_PASS) {
              sessionStorage.setItem(AUTH_KEY, "1");
              setAuthed(true);
              setErr("");
            } else {
              setErr("Incorrect password");
            }
          }}
          className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.02] p-8"
          style={{ boxShadow: "0 0 60px rgba(0,212,255,0.15)" }}
        >
          <h1 className="font-display font-bold text-2xl mb-2">Founder Admin</h1>
          <p className="text-sm text-white/50 mb-6">
            Enter password to edit portfolio projects.
          </p>
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white outline-none focus:border-[#00D4FF]"
            autoFocus
          />
          {err && <p className="mt-3 text-sm text-red-400">{err}</p>}
          <button
            type="submit"
            className="mt-6 w-full px-6 py-3 rounded-full font-medium"
            style={{
              background: "#00D4FF",
              color: "#0A0A0A",
              boxShadow: "0 0 20px rgba(0,212,255,0.4)",
            }}
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

  const update = (id: string, patch: Partial<Project>) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...patch } : p)),
    );
  };

  const addProject = () => {
    setProjects((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: "New Project",
        desc: "Project description",
        link: "https://",
      },
    ]);
  };

  const remove = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const persist = () => {
    saveProjects(projects);
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  const reset = () => {
    if (!confirm("Reset to default portfolio?")) return;
    setProjects(DEFAULT_PROJECTS);
    saveProjects(DEFAULT_PROJECTS);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="border-b border-white/10 sticky top-0 bg-[#0A0A0A]/90 backdrop-blur z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="font-display font-bold text-xl">Portfolio Editor</h1>
            <p className="text-xs text-white/50">
              Changes are saved locally in this browser.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {saved && (
              <span className="text-sm" style={{ color: "#00D4FF" }}>
                ✓ Saved
              </span>
            )}
            <button
              onClick={reset}
              className="text-sm text-white/60 hover:text-white px-3 py-2"
            >
              Reset
            </button>
            <button
              onClick={persist}
              className="px-5 py-2 rounded-full font-medium"
              style={{
                background: "#00D4FF",
                color: "#0A0A0A",
                boxShadow: "0 0 20px rgba(0,212,255,0.4)",
              }}
            >
              Save changes
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-6">
        {projects.map((p, i) => (
          <div
            key={p.id}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-white/40">
                #{String(i + 1).padStart(2, "0")}
              </span>
              <button
                onClick={() => remove(p.id)}
                className="text-xs text-red-400 hover:text-red-300"
              >
                Delete
              </button>
            </div>
            <label className="block text-xs text-white/50 mb-1">Title</label>
            <input
              value={p.title}
              onChange={(e) => update(p.id, { title: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 mb-3"
            />
            <label className="block text-xs text-white/50 mb-1">
              Description
            </label>
            <textarea
              value={p.desc}
              onChange={(e) => update(p.id, { desc: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 mb-3"
            />
            <label className="block text-xs text-white/50 mb-1">Link URL</label>
            <input
              value={p.link}
              onChange={(e) => update(p.id, { link: e.target.value })}
              placeholder="https://..."
              className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10"
            />
          </div>
        ))}

        <button
          onClick={addProject}
          className="w-full py-4 rounded-2xl border border-dashed border-white/20 text-white/60 hover:text-white hover:border-[#00D4FF] transition"
        >
          + Add project
        </button>
      </main>
    </div>
  );
}
