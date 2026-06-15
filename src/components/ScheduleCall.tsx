"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiCalendar,
  HiClock,
  HiChevronLeft,
  HiChevronRight,
  HiCheckCircle,
  HiMail,
  HiPhone,
} from "react-icons/hi";
import { FiSend, FiUser, FiMessageSquare } from "react-icons/fi";
import toast from "react-hot-toast";
import { BiCopy } from "react-icons/bi";

// ── Available time slots ──
const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];

// ── Months ──
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function ScheduleCall() {
  const today = useMemo(() => new Date(), []);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<"calendar" | "details" | "confirmed">(
    "calendar",
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  // ── Calendar helpers ──
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const isPastDate = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const compare = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
    return date < compare;
  };

  const isToday_date = (day: number) => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const handleDateSelect = (day: number) => {
    if (isPastDate(day)) return;
    setSelectedDate(new Date(currentYear, currentMonth, day));
    setSelectedTime(null);
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      setStep("details");
    }
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          date: selectedDate?.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          }),
          time: selectedTime,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      toast.success("Call scheduled! Check your email for confirmation.");
      setSubmitting(false);
      setStep("confirmed");
    } catch (err: unknown) {
      toast.error(
        err instanceof Error
          ? err.message
          : "Failed to schedule call. Please try again.",
      );
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setStep("calendar");
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: "", email: "", message: "" });
  };

  // ── Calendar grid ──
  const calendarDays = useMemo(() => {
    const days: (number | null)[] = [];
    for (let i = 0; i < firstDayOfMonth; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);
    return days;
  }, [firstDayOfMonth, daysInMonth]);

  const isDateSelected = (day: number) =>
    selectedDate?.getDate() === day &&
    selectedDate?.getMonth() === currentMonth &&
    selectedDate?.getFullYear() === currentYear;

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <section className="relative bg-gradient-to-b from-[#000000] to-[#040f4a] py-16 md:py-24 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-[10%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-[10%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3"
          >
            Let&apos;s Connect
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
          >
            Schedule a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              One-to-One Call
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-4 text-lg text-white/60 max-w-2xl mx-auto"
          >
            Pick a date and time that works for you, and I&apos;ll be there.
            Let&apos;s discuss your project, ideas, or just have a chat.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-5 mx-auto h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
          />
        </motion.div>

        {/* ── Step Progress Indicator ── */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10">
          {[
            { label: "Date & Time", key: "calendar" },
            { label: "Your Details", key: "details" },
            { label: "Confirmed", key: "confirmed" },
          ].map((s, i) => (
            <div key={s.key} className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                    step === s.key
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/30"
                      : step === "confirmed" ||
                          (step === "details" && i < 2) ||
                          (step === "calendar" && i < 1)
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-white/5 text-white/30 border border-white/10"
                  }`}
                >
                  {step === "confirmed" && i < 2 ? (
                    <HiCheckCircle size={16} />
                  ) : (
                    i + 1
                  )}
                </div>
                <span
                  className={`hidden sm:inline text-sm font-medium ${
                    step === s.key
                      ? "text-white"
                      : step === "confirmed" ||
                          (step === "details" && i < 2) ||
                          (step === "calendar" && i < 1)
                        ? "text-green-400"
                        : "text-white/30"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < 2 && (
                <div
                  className={`w-8 sm:w-12 h-px ${
                    step === "confirmed" || (step === "details" && i === 0)
                      ? "bg-gradient-to-r from-blue-500 to-purple-500"
                      : "bg-white/10"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* ── Main Card ── */}
        <AnimatePresence mode="wait">
          {step === "calendar" && (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl max-w-4xl mx-auto"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* ── Calendar ── */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={prevMonth}
                      className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all"
                    >
                      <HiChevronLeft size={20} />
                    </button>
                    <h3 className="text-lg font-bold text-white">
                      {MONTHS[currentMonth]} {currentYear}
                    </h3>
                    <button
                      onClick={nextMonth}
                      className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all"
                    >
                      <HiChevronRight size={20} />
                    </button>
                  </div>

                  {/* Day headers */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {DAYS.map((d) => (
                      <div
                        key={d}
                        className="text-center text-xs font-medium text-white/40 py-2"
                      >
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* Date grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((day, i) =>
                      day === null ? (
                        <div key={`empty-${i}`} />
                      ) : (
                        <button
                          key={day}
                          disabled={isPastDate(day)}
                          onClick={() => handleDateSelect(day)}
                          className={`relative aspect-square flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-200 ${
                            isPastDate(day)
                              ? "text-white/10 cursor-not-allowed"
                              : isDateSelected(day)
                                ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/30"
                                : isToday_date(day)
                                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                  : "text-white/70 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {day}
                        </button>
                      ),
                    )}
                  </div>
                </div>

                {/* ── Time Slots ── */}
                <div className="lg:w-72">
                  <div className="flex items-center gap-2 mb-4">
                    <HiClock className="text-blue-400" size={18} />
                    <h3 className="text-base font-bold text-white">
                      Available Times
                    </h3>
                  </div>
                  {!selectedDate ? (
                    <p className="text-white/40 text-sm">
                      Please select a date to view available time slots.
                    </p>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
                      {TIME_SLOTS.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                            selectedTime === time
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                              : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/[0.08] hover:text-white"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Continue button */}
                  <button
                    onClick={handleContinue}
                    disabled={!selectedDate || !selectedTime}
                    className={`mt-6 w-full py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                      selectedDate && selectedTime
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/25 hover:shadow-purple-600/30 cursor-pointer"
                        : "bg-white/5 text-white/30 cursor-not-allowed"
                    }`}
                  >
                    Continue
                    <FiSend size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === "details" && (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto"
            >
              {/* Selected info */}
              <div className="flex flex-wrap items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 mb-6">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <HiCalendar className="text-blue-400" size={18} />
                  <span>{formattedDate}</span>
                </div>
                <div className="w-px h-5 bg-white/10 hidden sm:block" />
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <HiClock className="text-purple-400" size={18} />
                  <span>{selectedTime}</span>
                </div>
                <button
                  onClick={() => setStep("calendar")}
                  className="ml-auto text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  Change
                </button>
              </div>

              <form onSubmit={handleConfirm} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">
                    <FiUser className="inline mr-1.5" size={14} />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    placeholder="Write your name here..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">
                    <HiMail className="inline mr-1.5" size={14} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    placeholder="Enter your email address..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">
                    <FiMessageSquare className="inline mr-1.5" size={14} />
                    Message / Topic (optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={3}
                    placeholder="Tell me what you'd like to discuss..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep("calendar")}
                    className="flex-1 px-6 py-3 bg-white/5 border border-white/10 text-white/70 rounded-xl hover:bg-white/10 transition-all text-sm font-medium"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-purple-600/30 transition-all text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Scheduling...
                      </>
                    ) : (
                      <>
                        <HiCheckCircle size={18} />
                        Confirm Booking
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {step === "confirmed" && (
            <motion.div
              key="confirmed"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl max-w-lg mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/30"
              >
                <HiCheckCircle className="text-white" size={44} />
              </motion.div>

              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                You&apos;re All Set!
              </h2>
              <p className="text-white/60 text-sm md:text-base mb-6 max-w-sm mx-auto">
                Your call has been scheduled. I&apos;ll send a confirmation to{" "}
                <span className="text-blue-400 font-medium">
                  {formData.email}
                </span>{" "}
                shortly.
              </p>

              {/* Summary */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5 mb-8 space-y-2">
                <div className="flex items-center justify-center gap-2 text-sm text-white/70">
                  <HiCalendar className="text-blue-400" size={16} />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-white/70">
                  <HiClock className="text-purple-400" size={16} />
                  <span>{selectedTime}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-white/5 border border-white/10 text-white/70 rounded-xl hover:bg-white/10 transition-all text-sm font-medium"
                >
                  Schedule Another
                </button>
                {/* <a
                  href={`mailto:hasanimam0854@gmail.com?subject=Scheduling%20Call%20-%20${formattedDate}&body=Hi%20Hasan,%0A%0AI%20have%20scheduled%20a%20call%20with%20you.%0ADate:%20${formattedDate}%0ATime:%20${selectedTime}%0A%0AMessage:%20${formData.message}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-purple-600/30 transition-all text-sm font-bold"
                >
                  <HiMail size={18} />
                  Send Email
                </a> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Alternative Contact Info ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-white/50"
        >
          <button
            onClick={() => {
              navigator.clipboard.writeText("hasanimam0854@gmail.com");
              toast.success("Email copied to clipboard!");
            }}
            className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer group"
          >
            <HiMail size={18} />
            hasanemam1717@gmail.com
            <BiCopy
              size={15}
              className="opacity-40 group-hover:opacity-100 transition-opacity"
            />
          </button>
          <span className="hidden md:inline w-px h-4 bg-white/10" />
          <button
            onClick={() => {
              navigator.clipboard.writeText("01717680772");
              toast.success("Phone number copied to clipboard!");
            }}
            className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer group"
          >
            <HiPhone size={18} />
            01717680772
            <BiCopy
              size={15}
              className="opacity-40 group-hover:opacity-100 transition-opacity"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
