export default function ProblemSection() {
    return (
        <section className="bg-slate-100/90 pt-16 pb-24 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
                    Why most qualified candidates get ignored
                </h2>

                <p className="mt-4 text-lg text-slate-700 max-w-3xl">
                    Rejections today are rarely about talent or effort. They’re the result
                    of how modern hiring systems interpret relevance — and most candidates
                    unknowingly signal the wrong things.
                </p>

                <div className="mt-12 space-y-10">
                    <div>
                        <h3 className="text-xl font-medium text-slate-800">
                            ATS systems don’t evaluate potential
                        </h3>
                        <p className="mt-2 text-slate-700 max-w-3xl">
                            Applicant Tracking Systems are designed to filter for alignment,
                            not intelligence. If your résumé doesn’t closely match the role’s
                            language and structure, it never reaches a human — regardless
                            of your actual capability.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium text-slate-800">
                            Recruiters scan for relevance, not effort
                        </h3>
                        <p className="mt-2 text-slate-700 max-w-3xl">
                            Most résumés get seconds of attention. Recruiters look for quick
                            signals: role fit, scope, impact, and context. Generic descriptions
                            and unfocused experience dilute those signals immediately.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium text-slate-800">
                            Random applications weaken your profile
                        </h3>
                        <p className="mt-2 text-slate-700 max-w-3xl">
                            Applying broadly without a clear role strategy creates inconsistent
                            positioning. Over time, this makes your profile harder to categorize
                            — both for systems and for recruiters.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium text-slate-800">
                            Most résumés describe work, not outcomes
                        </h3>
                        <p className="mt-2 text-slate-700 max-w-3xl">
                            Listing responsibilities is common. Demonstrating impact is rare.
                            Without quantified outcomes and clear narrative framing, strong
                            experience blends into the background.
                        </p>
                    </div>
                </div>

                <p className="mt-12 text-slate-700 max-w-3xl">
                    Until these issues are addressed deliberately, even strong candidates
                    continue to get filtered out — quietly and consistently.
                </p>
            </div>
        </section>
    );
}
