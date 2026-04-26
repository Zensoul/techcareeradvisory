import { useState } from "react";

export default function ApplySaha() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Saha AI Internship Application
          </h1>
          <p className="mt-4 text-slate-400">
            This application is reviewed manually. Please answer thoughtfully.
          </p>
        </div>

        {/* Form */}
        <form
          action="https://formsubmit.co/ca8682fac0a8a5574cc248d56e5445ad"
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="mt-12 space-y-10"
        >
          {/* 🔥 REQUIRED HIDDEN FIELDS */}
          <input type="hidden" name="_subject" value="New Internship Application" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          {/* BASIC INFO */}
          <div>
            <h2 className="text-lg font-medium mb-4">Basic Information</h2>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full p-3 bg-slate-900 border border-slate-800 rounded-md"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-3 bg-slate-900 border border-slate-800 rounded-md"
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-3 bg-slate-900 border border-slate-800 rounded-md"
              />
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h2 className="text-lg font-medium mb-4">Education</h2>

            <div className="space-y-4">
              <input
                type="text"
                name="college"
                placeholder="College / University"
                className="w-full p-3 bg-slate-900 border border-slate-800 rounded-md"
              />

              <input
                type="text"
                name="degree"
                placeholder="Degree / Course"
                className="w-full p-3 bg-slate-900 border border-slate-800 rounded-md"
              />
            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <h2 className="text-lg font-medium mb-4">Projects & Work</h2>

            <div className="space-y-4">
              <input
                type="text"
                name="github"
                placeholder="GitHub Profile Link"
                className="w-full p-3 bg-slate-900 border border-slate-800 rounded-md"
              />

              <textarea
                name="projects"
                placeholder="Describe 1-2 projects you have built"
                rows="4"
                className="w-full p-3 bg-slate-900 border border-slate-800 rounded-md"
              />
            </div>
          </div>

          {/* TECHNICAL SKILLS */}
          <div>
            <h2 className="text-lg font-medium mb-4">Technical Skills</h2>

            <div className="space-y-4">
              <input
                type="text"
                name="frontend"
                placeholder="Frontend (React, HTML, CSS...)"
                className="w-full p-3 bg-slate-900 border border-slate-800 rounded-md"
              />

              <input
                type="text"
                name="backend"
                placeholder="Backend (Node, FastAPI, DB...)"
                className="w-full p-3 bg-slate-900 border border-slate-800 rounded-md"
              />
            </div>
          </div>

          {/* TRACK */}
          <div>
            <h2 className="text-lg font-medium mb-4">Preferred Track</h2>

            <select
              name="track"
              className="w-full p-3 bg-slate-900 border border-slate-800 rounded-md"
              required
            >
              <option value="">Select Track</option>
              <option value="backend">Backend</option>
              <option value="ai">AI / ML</option>
              <option value="frontend">Frontend</option>
              <option value="qa">QA / DevOps</option>
            </select>
          </div>

          {/* AVAILABILITY */}
          <div>
            <h2 className="text-lg font-medium mb-4">Availability</h2>

            <select
              name="hours"
              className="w-full p-3 bg-slate-900 border border-slate-800 rounded-md"
              required
            >
              <option value="">Weekly Availability</option>
              <option value="10">10–15 hours</option>
              <option value="20">15–25 hours</option>
              <option value="30">25–40 hours</option>
            </select>
          </div>

          {/* WHY */}
          <div>
            <h2 className="text-lg font-medium mb-4">Final Question</h2>

            <textarea
              name="why"
              placeholder="Why do you want to work on this project?"
              rows="5"
              className="w-full p-3 bg-slate-900 border border-slate-800 rounded-md"
              required
            />
          </div>

          {/* SUBMIT */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-white text-slate-950 font-medium rounded-md hover:bg-slate-200 transition"
            >
              Submit Application
            </button>
          </div>

          {/* SUCCESS MESSAGE */}
          {submitted && (
            <p className="text-green-400 text-center mt-4">
              Application submitted successfully. Please check your email for confirmation.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}