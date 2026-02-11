export default function WhoThisIsFor() {
    return (
        <section className="bg-slate-950 pt-6 pb-24 px-6 text-center">
            {/* Full-width divider */}
            <div className="w-full h-px bg-slate-800 mb-8" />

            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-semibold text-slate-100">
                    This is for you if…
                </h2>

                <p className="mt-4 text-lg text-slate-400 mx-auto">
                    You’re serious about improving your career outcomes and willing
                    to approach the process with clarity and intent.
                </p>

                {/* List container */}
                <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900/40 p-6">
                    <ul className="space-y-4 text-slate-300">
                        <li className="flex justify-center gap-3">
                            <span className="text-slate-600 text-lg leading-none">•</span>
                            <span>
                                You’re a student or fresher who wants direction, not shortcuts
                            </span>
                        </li>

                        <li className="flex justify-center gap-3">
                            <span className="text-slate-600 text-lg leading-none">•</span>
                            <span>
                                You’re early in your career and stuck in repeated ATS rejections
                            </span>
                        </li>

                        <li className="flex justify-center gap-3">
                            <span className="text-slate-600 text-lg leading-none">•</span>
                            <span>
                                You have experience but feel under-positioned or overlooked
                            </span>
                        </li>

                        <li className="flex justify-center gap-3">
                            <span className="text-slate-600 text-lg leading-none">•</span>
                            <span>
                                You’re planning a role or career shift and need repositioning
                            </span>
                        </li>

                        <li className="flex justify-center gap-3">
                            <span className="text-slate-600 text-lg leading-none">•</span>
                            <span>
                                You value outcomes, clarity, and long-term growth over quick fixes
                            </span>
                        </li>
                    </ul>
                </div>

                <p className="mt-6 text-sm text-slate-500 mx-auto">
                    If you see yourself in this list, you’ll likely find our approach useful.
                </p>
            </div>
        </section>
    );
}
