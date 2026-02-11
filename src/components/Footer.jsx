export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <p className="text-lg font-medium text-white">
                            Tech Career Advisory
                        </p>
                        <p className="mt-3 text-sm text-slate-400">
                            Career positioning and profile strategy for professionals navigating
                            modern hiring systems.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-16">
                        <div>
                            <p className="text-sm font-medium text-slate-300">
                                Company
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-slate-400">
                                <li>About</li>
                                <li>Process</li>
                                <li>Who It’s For</li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-slate-300">
                                Legal
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-slate-400">
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom line */}
                <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} Tech Career Advisory. All rights reserved.
                    </p>

                    <p className="text-xs text-slate-500">
                        Built with intention. Not for everyone.
                    </p>
                </div>
            </div>
        </footer>
    );
}
