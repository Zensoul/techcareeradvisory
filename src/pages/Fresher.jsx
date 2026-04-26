export default function Fresher() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-semibold">
            Starting your career without clarity is expensive.
          </h1>

          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Most students and fresh graduates apply randomly, tweak their resume endlessly,
            and hope something works. That approach wastes time — and weakens your positioning.
          </p>

          <div className="mt-10">
            <a
              href="/apply?type=fresher"
              className="px-8 py-4 bg-white text-slate-950 font-medium rounded-md hover:bg-slate-200 transition"
            >
              Apply as a Fresher
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-slate-800" />

      {/* Problem */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold">
            The real problem isn’t your résumé.
          </h2>

          <p className="mt-6 text-slate-400 text-lg">
            It’s lack of positioning. Recruiters don’t hire “hardworking students.”
            They hire candidates who clearly match a role. Without clarity, your
            applications blend into thousands of others.
          </p>

          <div className="mt-12 space-y-10">
            <div>
              <h3 className="text-xl font-medium text-slate-200">
                Random applications dilute your profile
              </h3>
              <p className="mt-2 text-slate-400">
                Applying to multiple unrelated roles makes your narrative unclear.
                Systems and recruiters struggle to categorize you.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-slate-200">
                Generic resumes signal low alignment
              </h3>
              <p className="mt-2 text-slate-400">
                Templates and buzzwords don’t communicate value. Recruiters scan
                for relevance — not formatting tricks.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-slate-200">
                ATS systems filter by alignment, not effort
              </h3>
              <p className="mt-2 text-slate-400">
                If your resume doesn’t mirror role expectations, it never reaches
                a human reviewer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold">
            What we do differently
          </h2>

          <p className="mt-6 text-slate-400 text-lg">
            We don’t “edit resumes.” We build role-aligned positioning.
          </p>

          <div className="mt-12 space-y-8 text-slate-300">
            <p>• Define a clear target role before rewriting anything</p>
            <p>• Align your experience with hiring signals</p>
            <p>• Quantify academic, project, and internship impact</p>
            <p>• Optimize for ATS and recruiter scanning behavior</p>
            <p>• Create focused versions for specific roles</p>
          </div>
        </div>
      </section>

      {/* Qualification */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold">
            This is for you if…
          </h2>

          <div className="mt-10 space-y-4 text-slate-300">
            <p>You’re serious about your first role</p>
            <p>You’re willing to focus on one direction</p>
            <p>You value long-term positioning over shortcuts</p>
          </div>

          <p className="mt-12 text-sm text-slate-500">
            If you’re looking for guaranteed placements or instant results,
            this isn’t the right fit.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-950 py-24 px-6 text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold">
            Build your career intentionally.
          </h2>

          <p className="mt-6 text-slate-400">
            If you’re ready to approach your first role strategically,
            apply below. Applications are reviewed before engagement.
          </p>

          <div className="mt-10">
            <a
              href="/apply?type=fresher"
              className="px-8 py-4 bg-white text-slate-950 font-medium rounded-md hover:bg-slate-200 transition"
            >
              Apply as a Fresher
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
