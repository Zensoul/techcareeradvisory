export default function ProcessOverview() {
    return (
        <section className="bg-slate-950 py-24 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Centered intro */}
                <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center">
                    How the process works
                </h2>

                <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto text-center">
                    Our approach is structured and deliberate. We don’t start with templates
                    or edits — we start by understanding context, intent, and role alignment.
                </p>

                {/* Left-aligned steps */}
                <div className="mt-16 space-y-14">
                    {/* Step 1 */}
                    <div>
                        <p className="text-sm text-slate-500 uppercase tracking-wide">
                            Step 1
                        </p>
                        <h3 className="mt-2 text-xl font-medium text-slate-200">
                            Role and profile clarity
                        </h3>
                        <p className="mt-2 text-slate-400 max-w-3xl">
                            We begin by identifying the roles you’re actually targeting and
                            how recruiters evaluate candidates for those positions. This
                            prevents generic positioning and misaligned applications.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div>
                        <p className="text-sm text-slate-500 uppercase tracking-wide">
                            Step 2
                        </p>
                        <h3 className="mt-2 text-xl font-medium text-slate-200">
                            Resume and LinkedIn analysis
                        </h3>
                        <p className="mt-2 text-slate-400 max-w-3xl">
                            Your existing résumé and LinkedIn profile are evaluated against
                            hiring signals, ATS behavior, and role-specific expectations.
                            Gaps in structure, language, and impact are identified clearly.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div>
                        <p className="text-sm text-slate-500 uppercase tracking-wide">
                            Step 3
                        </p>
                        <h3 className="mt-2 text-xl font-medium text-slate-200">
                            Strategic repositioning
                        </h3>
                        <p className="mt-2 text-slate-400 max-w-3xl">
                            Experience is reframed to highlight relevance, outcomes, and scope.
                            This is where most candidates see the biggest shift — not by adding
                            claims, but by changing emphasis and narrative.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div>
                        <p className="text-sm text-slate-500 uppercase tracking-wide">
                            Step 4
                        </p>
                        <h3 className="mt-2 text-xl font-medium text-slate-200">
                            ATS alignment and role targeting
                        </h3>
                        <p className="mt-2 text-slate-400 max-w-3xl">
                            The final profiles are aligned with ATS logic and recruiter scanning
                            behavior. Where appropriate, role-specific variations are created
                            to avoid dilution from broad or unfocused applications.
                        </p>
                    </div>
                </div>

                <p className="mt-16 text-slate-400 max-w-3xl">
                    Throughout the process, automation is used to support analysis and
                    consistency — but final decisions and positioning rely on human judgment.
                </p>
            </div>
        </section>
    );
}
