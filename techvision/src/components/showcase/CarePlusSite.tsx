import { useState } from "react";
import {
  Activity,
  Baby,
  CalendarDays,
  Check,
  Clock,
  HeartPulse,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Thermometer,
} from "lucide-react";

const SERVICES = [
  { icon: Stethoscope, label: "General medicine" },
  { icon: Baby, label: "Pediatrics" },
  { icon: HeartPulse, label: "Heart health" },
  { icon: Activity, label: "Diabetes care" },
  { icon: Syringe, label: "Vaccinations" },
  { icon: Thermometer, label: "Fever clinic" },
];

const DOCTORS = [
  { id: "rao", name: "Dr. Anita Rao", role: "General Physician" },
  { id: "iyer", name: "Dr. Suresh Iyer", role: "Pediatrician" },
];

const DATES = [
  { id: "today", label: "Today", sub: "18 Jul" },
  { id: "tomorrow", label: "Tomorrow", sub: "19 Jul" },
  { id: "mon", label: "Monday", sub: "20 Jul" },
];

const SLOTS = ["9:30 AM", "10:15 AM", "11:00 AM", "4:30 PM", "5:15 PM", "6:00 PM"];

/** Demo homepage for Care Plus Clinic — calm, clean healthcare brand. */
export default function CarePlusSite() {
  const [doctor, setDoctor] = useState(DOCTORS[0]);
  const [date, setDate] = useState(DATES[0]);
  const [slot, setSlot] = useState<string | null>(null);

  return (
    <div className="bg-white font-sans text-slate-700">
      {/* Nav */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-100 bg-white/95 px-6 py-4 backdrop-blur sm:px-10">
        <p className="flex items-center gap-2 text-lg font-bold text-teal-700">
          <span className="grid size-8 place-items-center rounded-lg bg-teal-600 text-white">
            <HeartPulse className="size-4.5" />
          </span>
          Care Plus Clinic
        </p>
        <nav className="hidden gap-7 text-sm font-medium text-slate-500 sm:flex">
          <span className="text-teal-700">Home</span>
          <span>Services</span>
          <span>Doctors</span>
          <span>Contact</span>
        </nav>
        <button
          type="button"
          className="rounded-lg bg-teal-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-500"
        >
          Book appointment
        </button>
      </header>

      {/* Hero */}
      <section className="grid items-center gap-10 bg-gradient-to-b from-teal-50/80 to-white px-6 py-16 sm:px-10 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3.5 py-1.5 text-xs font-semibold text-teal-800">
            <Clock className="size-3.5" /> Open today · 9 AM – 8 PM
          </p>
          <h1 className="mt-5 text-4xl leading-tight font-bold tracking-tight text-slate-900 sm:text-5xl">
            Your family's health,
            <br />
            in <span className="text-teal-600">caring hands</span>.
          </h1>
          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-slate-600">
            A neighbourhood clinic in Indiranagar with experienced doctors,
            honest advice, and appointments that actually run on time.
          </p>
          <div className="mt-7 flex flex-wrap gap-6 text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-teal-600" /> 15+ years of practice
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays className="size-4 text-teal-600" /> Same-day slots
            </span>
          </div>
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=60"
            alt="Doctor consulting with a patient"
            className="mt-8 h-52 w-full rounded-2xl object-cover shadow-md"
            loading="lazy"
          />
        </div>

        {/* Interactive appointment booking widget */}
        <div className="rounded-3xl bg-white p-7 shadow-xl ring-1 ring-slate-200">
          <p className="text-lg font-bold text-slate-900">Book an appointment</p>
          <p className="mt-1 text-xs text-slate-500">
            Choose a doctor, day, and time — takes under a minute.
          </p>

          <p className="mt-5 text-xs font-semibold tracking-wide text-slate-500 uppercase">Doctor</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {DOCTORS.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => { setDoctor(d); setSlot(null); }}
                aria-pressed={doctor.id === d.id}
                className={`rounded-xl border p-3 text-left transition-colors ${
                  doctor.id === d.id
                    ? "border-teal-600 bg-teal-50"
                    : "border-slate-200 hover:border-teal-300"
                }`}
              >
                <p className="text-sm font-semibold text-slate-800">{d.name}</p>
                <p className="text-xs text-slate-500">{d.role}</p>
              </button>
            ))}
          </div>

          <p className="mt-5 text-xs font-semibold tracking-wide text-slate-500 uppercase">Day</p>
          <div className="mt-2 flex gap-2">
            {DATES.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => { setDate(d); setSlot(null); }}
                aria-pressed={date.id === d.id}
                className={`grow rounded-xl border px-3 py-2.5 text-center transition-colors ${
                  date.id === d.id
                    ? "border-teal-600 bg-teal-50"
                    : "border-slate-200 hover:border-teal-300"
                }`}
              >
                <p className="text-sm font-semibold text-slate-800">{d.label}</p>
                <p className="text-[0.7rem] text-slate-500">{d.sub}</p>
              </button>
            ))}
          </div>

          <p className="mt-5 text-xs font-semibold tracking-wide text-slate-500 uppercase">Time</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {SLOTS.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => setSlot(time)}
                aria-pressed={slot === time}
                className={`rounded-lg border py-2 text-sm font-medium transition-colors ${
                  slot === time
                    ? "border-teal-600 bg-teal-600 text-white"
                    : "border-slate-200 text-slate-600 hover:border-teal-400"
                }`}
              >
                {time}
              </button>
            ))}
          </div>

          <button
            type="button"
            disabled={!slot}
            className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-colors ${
              slot
                ? "bg-teal-600 text-white hover:bg-teal-500"
                : "cursor-not-allowed bg-slate-100 text-slate-400"
            }`}
          >
            <Check className="size-4" />
            {slot
              ? `Confirm ${date.label.toLowerCase()} at ${slot}`
              : "Select a time slot"}
          </button>
          <p className="mt-3 text-center text-[0.7rem] text-slate-400">
            Free rescheduling · SMS & WhatsApp reminders
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-slate-100 px-6 py-14 sm:px-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          How we can help
        </h2>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.label}
              className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-colors hover:border-teal-200 hover:bg-teal-50/50"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-teal-100 text-teal-700">
                <service.icon className="size-5" strokeWidth={1.75} />
              </span>
              <p className="text-sm font-semibold text-slate-700">{service.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-teal-600 px-6 py-10 text-white sm:px-10">
        <div className="grid gap-6 text-center sm:grid-cols-3">
          {[
            ["25,000+", "patients cared for"],
            ["< 10 min", "average wait time"],
            ["4.8 ★", "Google rating"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-3xl font-bold">{value}</p>
              <p className="mt-1 text-sm text-teal-100">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs text-slate-500 sm:px-10">
        <p className="flex items-center gap-2">
          <MapPin className="size-3.5 text-teal-600" /> 44, 100 Ft Road, Indiranagar, Bangalore
        </p>
        <p className="flex items-center gap-2">
          <Phone className="size-3.5 text-teal-600" /> +91 80 4123 5678 · Emergencies: 24/7
        </p>
        <p className="font-semibold text-teal-700">Care Plus © 2026</p>
      </footer>
    </div>
  );
}
