import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";


export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        function handleMouseMove(e) {
            if (!heroRef.current) return;

            const rect = heroRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            heroRef.current.style.setProperty("--mouse-x", `${x}px`);
            heroRef.current.style.setProperty("--mouse-y", `${y}px`);
        }

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen bg-slate-950 overflow-hidden pt-16 sm:pt-20 flex items-center"
        >
            {/* Mouse-follow radial gradient */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.25), transparent 35%)",
                }}
            />

            {/* Ambient blobs */}
            <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

            {/* Hero content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mx-auto">
                    Career positioning that beats ATS and attracts recruiters.
                </h1>

                <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
                    We help freshers and experienced professionals escape ATS rejection,
                    target the right roles, and get noticed — using job-market intelligence
                    and human judgment.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/fresher"
                        className="px-6 py-3 bg-white text-slate-950 font-medium rounded-md hover:bg-slate-200 transition text-center"
                    >
                        I’m a Student / Fresher
                    </Link>

                    <Link
                        to="/experienced"
                        className="px-6 py-3 border border-slate-700 text-white font-medium rounded-md hover:border-slate-500 transition text-center"
                    >
                        I’m an Experienced Professional
                    </Link>
                </div>


                <p className="mt-6 text-sm text-slate-400">
                    We don’t work with everyone. Applications are reviewed before engagement.
                </p>
            </div>
        </section>
    );
}
