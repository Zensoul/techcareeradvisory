import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
          Two paths. One principle: clarity.
        </h1>

        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
          We build AI systems for businesses — and help professionals position
          themselves to win in modern hiring.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
          
          <Link
            to="/ai"
            className="px-8 py-4 bg-white text-slate-950 rounded-md font-medium hover:bg-slate-200 transition"
          >
            I’m a Business
          </Link>

          <Link
            to="/advisory"
            className="px-8 py-4 border border-slate-700 text-white rounded-md font-medium hover:border-slate-500 transition"
          >
            I’m a Professional
          </Link>

        </div>
      </div>
    </div>
  );
}