export default function SahaInternship() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="pt-28 sm:pt-32 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
            Saha AI — Software Engineering Internship
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-400">
            This is a structured, project-based internship where you contribute
            to a real system. You are expected to come with basic fundamentals
            and a willingness to learn by doing.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Designed for freshers who want real-world experience early in their careers.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-400">
            <span className="border border-slate-800 px-3 py-1 rounded-md">8 Weeks</span>
            <span className="border border-slate-800 px-3 py-1 rounded-md">Remote</span>
            <span className="border border-slate-800 px-3 py-1 rounded-md">Saha AI Project</span>
            <span className="border border-slate-800 px-3 py-1 rounded-md">15 Interns</span>
          </div>

        </div>
      </section>

      <div className="w-full h-px bg-slate-800" />

      {/* 🔥 WHAT YOU ARE BUILDING (NEW - HIGH IMPACT) */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl font-semibold">
            What you are building
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Saha is an AI-powered sobriety companion designed for real-world use.
            This is not a demo system — it is built to support users in high-stakes moments.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">

            <div className="p-6 border border-slate-800 rounded-xl">
              <h3 className="font-medium">AI Orchestrator System</h3>
              <p className="text-sm text-slate-400 mt-2">
                A multi-stage decision pipeline handling crisis detection,
                memory retrieval, and response generation.
              </p>
            </div>

            <div className="p-6 border border-slate-800 rounded-xl">
              <h3 className="font-medium">Production Backend</h3>
              <p className="text-sm text-slate-400 mt-2">
                FastAPI system running on AWS EC2 with authentication,
                schedulers, and real-time processing.
              </p>
            </div>

            <div className="p-6 border border-slate-800 rounded-xl">
              <h3 className="font-medium">Memory Architecture</h3>
              <p className="text-sm text-slate-400 mt-2">
                Multi-layer memory storing user context, patterns, and emotional signals.
              </p>
            </div>

            <div className="p-6 border border-slate-800 rounded-xl">
              <h3 className="font-medium">Live Interaction System</h3>
              <p className="text-sm text-slate-400 mt-2">
                Real-time chat interface designed for moments like cravings and distress.
              </p>
            </div>

          </div>

          <p className="mt-12 text-slate-400 text-sm max-w-2xl mx-auto">
            This system is closer to a decision engine than a chatbot.
          </p>

        </div>
      </section>

      {/* WHAT YOU'LL WORK ON */}
      <section className="py-20 px-6 border-t border-slate-800">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl font-semibold">
            What you’ll actually work on
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            You will be assigned to a specific engineering track and expected to
            contribute to real components of the system.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="p-6 border border-slate-800 rounded-xl">
              <h3 className="font-medium">Backend Engineering</h3>
              <p className="text-sm text-slate-400 mt-2">
                APIs, database schema, authentication, schedulers, AWS systems.
              </p>
            </div>

            <div className="p-6 border border-slate-800 rounded-xl">
              <h3 className="font-medium">AI / ML Engineering</h3>
              <p className="text-sm text-slate-400 mt-2">
                Prompt systems, orchestrator pipelines, memory engines, LLM logic.
              </p>
            </div>

            <div className="p-6 border border-slate-800 rounded-xl">
              <h3 className="font-medium">Frontend Engineering</h3>
              <p className="text-sm text-slate-400 mt-2">
                App screens, API integration, real-device testing.
              </p>
            </div>

            <div className="p-6 border border-slate-800 rounded-xl">
              <h3 className="font-medium">QA / DevOps</h3>
              <p className="text-sm text-slate-400 mt-2">
                Testing, CI/CD, server monitoring, backups, security.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHO THIS IS NOT FOR */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-semibold">
            This is not for everyone
          </h2>

          <div className="mt-8 space-y-4 text-slate-400 text-sm">
            <p>If you’re starting from absolute zero with no coding experience</p>
            <p>If you’ve only followed tutorials but never built your own projects</p>
            <p>If you’re looking for step-by-step teaching or basic training</p>
            <p>If you cannot commit consistent weekly effort</p>
          </div>

        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-semibold">
            This is for you if…
          </h2>

          <div className="mt-8 space-y-4 text-slate-400 text-sm">
            <p>You’ve built small projects (even if imperfect)</p>
            <p>You understand basic programming concepts</p>
            <p>You’re willing to learn by building and solving problems</p>
            <p>You want real-world exposure beyond college curriculum</p>
          </div>

        </div>
      </section>

      {/* SELECTION PROCESS */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl font-semibold">
            Selection process
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">

            <div className="p-5 border border-slate-800 rounded-lg">
              <p className="text-sm text-slate-400">Step 1</p>
              <h3 className="mt-1 font-medium">Application review</h3>
            </div>

            <div className="p-5 border border-slate-800 rounded-lg">
              <p className="text-sm text-slate-400">Step 2</p>
              <h3 className="mt-1 font-medium">Technical task</h3>
            </div>

            <div className="p-5 border border-slate-800 rounded-lg">
              <p className="text-sm text-slate-400">Step 3</p>
              <h3 className="mt-1 font-medium">Interview</h3>
            </div>

            <div className="p-5 border border-slate-800 rounded-lg">
              <p className="text-sm text-slate-400">Step 4</p>
              <h3 className="mt-1 font-medium">Offer</h3>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center border-t border-slate-800">
        <div className="max-w-2xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-semibold">
            If you’ve read this far, you’re probably a fit.
          </h2>

          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            We only take 15 interns. Applications are reviewed carefully.
          </p>

          <div className="mt-8">
            <a
              href="/apply-saha"
              className="px-6 py-3 bg-white text-slate-950 font-medium rounded-md hover:bg-slate-200 transition"
            >
              Apply for Internship
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}