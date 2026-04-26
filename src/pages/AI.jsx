import {
  Bot,
  Database,
  Workflow,
  Stethoscope,
  Building2,
  LineChart,
  Settings,
  Layers,
  Cpu,
  Wrench,
  RefreshCw
} from "lucide-react";

import { Link } from "react-router-dom";

export default function AI() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
            AI systems that work in production — not just demos.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-400">
            We design and build AI-powered systems that solve real operational
            problems — from automation workflows to retrieval-based intelligence
            and agent-driven processes.
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-slate-800" />

      {/* WHAT WE BUILD */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            What we build
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/40 text-center">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-lg bg-slate-800 mb-4">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-medium">AI Agents</h3>
              <p className="mt-2 text-sm text-slate-400">
                Task-driven systems that automate workflows and reduce manual effort.
              </p>
            </div>

            <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/40 text-center">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-lg bg-slate-800 mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-medium">RAG Systems</h3>
              <p className="mt-2 text-sm text-slate-400">
                Retrieval-based intelligence built on your internal data.
              </p>
            </div>

            <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/40 text-center">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-lg bg-slate-800 mb-4">
                <Workflow className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-medium">Automation Pipelines</h3>
              <p className="mt-2 text-sm text-slate-400">
                End-to-end workflows from ingestion to decision layers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            Where this is applied
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="p-6 border border-slate-800 rounded-xl text-center">
              <Stethoscope className="w-6 h-6 mx-auto mb-3 text-white" />
              <h3 className="font-medium">Healthcare</h3>
              <p className="text-sm text-slate-400 mt-2">
                Document intelligence, patient workflows, knowledge systems.
              </p>
            </div>

            <div className="p-6 border border-slate-800 rounded-xl text-center">
              <Building2 className="w-6 h-6 mx-auto mb-3 text-white" />
              <h3 className="font-medium">Real Estate</h3>
              <p className="text-sm text-slate-400 mt-2">
                Lead qualification and matching systems.
              </p>
            </div>

            <div className="p-6 border border-slate-800 rounded-xl text-center">
              <LineChart className="w-6 h-6 mx-auto mb-3 text-white" />
              <h3 className="font-medium">Marketing</h3>
              <p className="text-sm text-slate-400 mt-2">
                Content pipelines and analytics automation.
              </p>
            </div>

            <div className="p-6 border border-slate-800 rounded-xl text-center">
              <Settings className="w-6 h-6 mx-auto mb-3 text-white" />
              <h3 className="font-medium">Internal Ops</h3>
              <p className="text-sm text-slate-400 mt-2">
                Knowledge systems and workflow automation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            How we work
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="p-6 border border-slate-800 rounded-xl text-center">
              <Layers className="w-6 h-6 mx-auto mb-3 text-white" />
              <h3 className="font-medium">Problem framing</h3>
              <p className="text-sm text-slate-400 mt-2">
                Start with business problems, not tools.
              </p>
            </div>

            <div className="p-6 border border-slate-800 rounded-xl text-center">
              <Cpu className="w-6 h-6 mx-auto mb-3 text-white" />
              <h3 className="font-medium">System design</h3>
              <p className="text-sm text-slate-400 mt-2">
                Define architecture and data flow.
              </p>
            </div>

            <div className="p-6 border border-slate-800 rounded-xl text-center">
              <Wrench className="w-6 h-6 mx-auto mb-3 text-white" />
              <h3 className="font-medium">Build & integration</h3>
              <p className="text-sm text-slate-400 mt-2">
                Implement and integrate into workflows.
              </p>
            </div>

            <div className="p-6 border border-slate-800 rounded-xl text-center">
              <RefreshCw className="w-6 h-6 mx-auto mb-3 text-white" />
              <h3 className="font-medium">Iteration</h3>
              <p className="text-sm text-slate-400 mt-2">
                Improve based on real usage.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 👇 INTERNSHIP ENTRY (NEW) */}
      <section className="py-20 px-6 border-t border-slate-800 text-center">
        <div className="max-w-2xl mx-auto">

          <p className="text-slate-400 text-sm">
            We occasionally take a small number of interns on active projects.
          </p>

          <p className="mt-3 text-slate-500 text-sm">
            This is not a training program — only candidates with basic
            fundamentals and project experience should apply.
          </p>

          <div className="mt-6">
            <Link
              to="/saha-internship"
              className="text-white underline hover:text-slate-300 transition"
            >
              View Internship Program
            </Link>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center border-t border-slate-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Let’s build something that actually works.
          </h2>

          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            If you have a real use case, we can help design and implement
            a system that delivers measurable value.
          </p>

          <div className="mt-8">
            <a
              href="mailto:your@email.com"
              className="px-6 py-3 bg-white text-slate-950 text-sm sm:text-base font-medium rounded-md hover:bg-slate-200 transition"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}