import { useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Check,
  GraduationCap,
  LineChart,
  Phone,
  Star,
  Users,
} from "lucide-react";

const PROGRAMS = [
  {
    id: "middle",
    label: "Class 6–8",
    tagline: "Strong foundations, zero fear of maths.",
    subjects: ["Mathematics", "Science", "English", "Hindi"],
    batch: "Mon–Fri · 4:30 – 6:30 PM",
    fee: "₹1,800 / month",
  },
  {
    id: "secondary",
    label: "Class 9–10 (Boards)",
    tagline: "Board-exam mastery with weekly mock tests.",
    subjects: ["Mathematics", "Science", "Social Studies", "English"],
    batch: "Mon–Sat · 5:00 – 8:00 PM",
    fee: "₹2,500 / month",
  },
  {
    id: "senior",
    label: "Class 11–12 (JEE/NEET)",
    tagline: "Concept-first coaching for competitive exams.",
    subjects: ["Physics", "Chemistry", "Maths / Biology"],
    batch: "Tue–Sun · 6:00 – 9:00 PM",
    fee: "₹4,200 / month",
  },
];

const RESULTS = [
  { name: "Aarav S.", score: "97.2%", note: "Class 10 Boards" },
  { name: "Meera K.", score: "AIR 812", note: "JEE Mains" },
  { name: "Rohan T.", score: "95.8%", note: "Class 12 Boards" },
];

/** Demo homepage for Bright Future Tuitions — bright, friendly academic brand. */
export default function BrightFutureSite() {
  const [program, setProgram] = useState(PROGRAMS[1]);

  return (
    <div className="bg-amber-50 font-sans text-slate-800">
      {/* Nav */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white/90 px-6 py-4 backdrop-blur sm:px-10">
        <p className="flex items-center gap-2 text-lg font-bold text-indigo-700">
          <GraduationCap className="size-6 text-indigo-600" />
          Bright Future
        </p>
        <nav className="hidden gap-7 text-sm font-medium text-slate-500 sm:flex">
          <span className="text-indigo-700">Home</span>
          <span>Programs</span>
          <span>Results</span>
          <span>Parent Portal</span>
        </nav>
        <button
          type="button"
          className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
        >
          Free demo class
        </button>
      </header>

      {/* Hero */}
      <section className="grid items-center gap-10 px-6 py-16 sm:px-10 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-amber-200/70 px-3.5 py-1.5 text-xs font-semibold text-amber-800">
            <Star className="size-3.5 fill-amber-500 text-amber-500" />
            Rated 4.9 by 300+ Delhi parents
          </p>
          <h1 className="mt-5 text-4xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Every child can be a{" "}
            <span className="relative text-indigo-600">
              topper
              <svg viewBox="0 0 120 12" className="absolute -bottom-2 left-0 w-full" aria-hidden="true">
                <path d="M3 9c30-6 84-6 114-3" fill="none" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h1>
          <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-slate-600">
            Small batches, caring teachers, and a parent portal that shows you
            exactly how your child is progressing — every single week.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
            >
              Book a free demo <ArrowRight className="size-4" />
            </button>
            <button
              type="button"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-indigo-400"
            >
              Download syllabus
            </button>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <Users className="size-4 text-indigo-500" /> Max 15 per batch
            </span>
            <span className="flex items-center gap-2">
              <Award className="size-4 text-indigo-500" /> 12 years of results
            </span>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=60"
            alt="Students learning together at desks"
            className="h-72 w-full rounded-3xl object-cover shadow-lg sm:h-80"
            loading="lazy"
          />
          {/* Parent-portal progress card */}
          <div className="absolute -bottom-6 -left-2 w-60 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-200 sm:-left-6">
            <p className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <LineChart className="size-3.5 text-indigo-500" />
              Parent portal · Weekly report
            </p>
            {[
              ["Mathematics", "92%", "w-[92%]"],
              ["Science", "84%", "w-[84%]"],
              ["English", "88%", "w-[88%]"],
            ].map(([subject, score, width]) => (
              <div key={subject} className="mt-2.5">
                <div className="flex justify-between text-[0.7rem] font-medium text-slate-600">
                  <span>{subject}</span>
                  <span className="text-indigo-600">{score}</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-slate-100">
                  <div className={`h-full rounded-full bg-indigo-500 ${width}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs — interactive tabs */}
      <section className="bg-white px-6 py-14 sm:px-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Find the right batch
        </h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {PROGRAMS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setProgram(p)}
              aria-pressed={program.id === p.id}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                program.id === p.id
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 rounded-3xl bg-indigo-50/70 p-7 ring-1 ring-indigo-100 sm:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-lg font-bold text-indigo-900">{program.tagline}</p>
            <ul className="mt-4 grid grid-cols-2 gap-2.5">
              {program.subjects.map((subject) => (
                <li key={subject} className="flex items-center gap-2 text-sm text-slate-700">
                  <BookOpen className="size-4 text-indigo-500" />
                  {subject}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">Batch timing</p>
            <p className="mt-1 text-sm font-semibold text-slate-800">{program.batch}</p>
            <p className="mt-4 text-xs font-semibold tracking-wide text-slate-500 uppercase">Fee</p>
            <p className="mt-1 text-2xl font-extrabold text-indigo-700">{program.fee}</p>
            <button
              type="button"
              className="mt-4 w-full rounded-full bg-amber-400 py-2.5 text-sm font-bold text-amber-950 transition-colors hover:bg-amber-300"
            >
              Reserve a seat
            </button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 py-14 sm:px-10">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Recent results
          </h2>
          <p className="text-sm font-semibold text-indigo-600">2025–26 session</p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {RESULTS.map((result) => (
            <div key={result.name} className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
              <p className="text-3xl font-extrabold text-indigo-700">{result.score}</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">{result.name}</p>
              <p className="text-xs text-slate-500">{result.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-indigo-600 px-7 py-6 text-white">
          <div>
            <p className="text-lg font-bold">Seats for the new session are filling fast.</p>
            <p className="text-sm text-indigo-200">Free demo class every Saturday, 11 AM.</p>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-indigo-700 transition-colors hover:bg-amber-100"
          >
            <Check className="size-4" /> Book my child's seat
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-white px-6 py-6 text-xs text-slate-500 sm:px-10">
        <p className="flex items-center gap-2 font-semibold text-indigo-700">
          <GraduationCap className="size-4" /> Bright Future Tuitions · Lajpat Nagar, Delhi
        </p>
        <p className="flex items-center gap-2">
          <Phone className="size-3.5" /> +91 98111 45678 · © 2026
        </p>
      </footer>
    </div>
  );
}
