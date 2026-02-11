export default function TwoPathSection() {
    return (
        <section className="bg-slate-950 py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center">
                    Different stages need different positioning
                </h2>

                <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto center-aligned">
                    Career strategy is not one-size-fits-all. Where you are today
                    determines how your profile should be positioned — and what
                    recruiters need to see first.
                </p>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Student / Fresher */}
                    <div className="rounded-xl border border-slate-800 p-8">
                        <h3 className="text-xl font-medium text-slate-100">
                            Students & Freshers
                        </h3>

                        <p className="mt-3 text-slate-400">
                            Early-stage candidates are rarely rejected for lack of potential.
                            They’re filtered out because their profiles don’t clearly signal
                            role fit, fundamentals, or intent.
                        </p>

                        <ul className="mt-6 space-y-3 text-slate-300">
                            <li>• Clarifying target roles and expectations</li>
                            <li>• Structuring projects and internships for relevance</li>
                            <li>• Building ATS-friendly resumes from limited experience</li>
                            <li>• Avoiding generic “entry-level” positioning</li>
                        </ul>
                    </div>

                    {/* Experienced Professionals */}
                    <div className="rounded-xl border border-slate-800 p-8">
                        <h3 className="text-xl font-medium text-slate-100">
                            Experienced Professionals
                        </h3>

                        <p className="mt-3 text-slate-400">
                            Mid-career and senior professionals are often invisible not because
                            of weak experience, but because their impact is poorly framed or
                            misaligned with the roles they’re targeting.
                        </p>

                        <ul className="mt-6 space-y-3 text-slate-300">
                            <li>• Repositioning experience for specific roles</li>
                            <li>• Translating work into measurable outcomes</li>
                            <li>• Aligning resumes and LinkedIn with hiring signals</li>
                            <li>• Reducing noise from unfocused applications</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
