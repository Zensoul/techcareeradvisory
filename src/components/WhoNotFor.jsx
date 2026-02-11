export default function WhoNotFor() {
    return (
        <section className="bg-slate-950 pt-16 pb-24 px-6 text-center">
            {/* Full-width divider */}
            <div className="w-full h-px bg-slate-800 mb-10" />

            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-semibold text-slate-100">
                    This is not for everyone.
                </h2>

                <p className="mt-4 text-lg text-slate-400 mx-auto">
                    We work best with people who are realistic, committed, and serious
                    about their next career move.
                </p>

                {/* Soft list container */}
                <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900/40 p-6">
                    <ul className="space-y-4 text-slate-300">
                        <li className="flex justify-center gap-3">
                            <span className="text-slate-600 text-lg leading-none">•</span>
                            <span>If you’re looking for job guarantees or placements</span>
                        </li>

                        <li className="flex justify-center gap-3">
                            <span className="text-slate-600 text-lg leading-none">•</span>
                            <span>If you want a quick résumé edit without strategy</span>
                        </li>

                        <li className="flex justify-center gap-3">
                            <span className="text-slate-600 text-lg leading-none">•</span>
                            <span>If you’re unwilling to invest time or effort</span>
                        </li>

                        <li className="flex justify-center gap-3">
                            <span className="text-slate-600 text-lg leading-none">•</span>
                            <span>If you’re applying randomly without role clarity</span>
                        </li>

                        <li className="flex justify-center gap-3">
                            <span className="text-slate-600 text-lg leading-none">•</span>
                            <span>If you’re only comparing prices, not outcomes</span>
                        </li>
                    </ul>
                </div>

                <p className="mt-6 text-sm text-slate-500 mx-auto">
                    If this feels too selective, we’re probably not the right fit —
                    and that’s intentional.
                </p>
            </div>
        </section>
    );
}
