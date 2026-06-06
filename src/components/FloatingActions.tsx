"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { HiArrowUp, HiX, HiChat, HiChevronRight } from "react-icons/hi";

const PHONE_NUMBER = "8801717680772";
const TELEGRAM_USERNAME = "hasanemam1717gmail";

const quickReplies = [
  {
    label: "💼  I have a project idea",
    message: "Hi Hasan! I have a project idea I'd like to discuss.",
  },
  {
    label: "🤝  Let's collaborate",
    message: "Hey Hasan! I'm interested in collaborating on a project.",
  },
  {
    label: "❓  I have a question",
    message: "Hi Hasan! I have a quick question about your services.",
  },
  {
    label: "💻  Hiring / Freelance",
    message: "Hi Hasan! I'd like to talk about a freelance opportunity.",
  },
];

type ActivePopup = "whatsapp" | "telegram" | null;

export default function FloatingActions() {
  const [activePopup, setActivePopup] = useState<ActivePopup>(null);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closePopup = () => setActivePopup(null);
  const togglePopup = (type: ActivePopup) =>
    setActivePopup((prev) => (prev === type ? null : type));

  const openChat = (type: "whatsapp" | "telegram", message: string) => {
    const base =
      type === "whatsapp"
        ? `https://wa.me/${PHONE_NUMBER}`
        : `https://t.me/${TELEGRAM_USERNAME}`;
    window.open(`${base}?text=${encodeURIComponent(message)}`, "_blank");
    closePopup();
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-5 right-3 sm:right-5 z-[60] flex flex-col items-end gap-2.5">
      {/* ── Telegram Popup ── */}
      <AnimatePresence>
        {activePopup === "telegram" && (
          <ChatPopup
            key="telegram-popup"
            type="telegram"
            onClose={closePopup}
            onQuickReply={(msg) => openChat("telegram", msg)}
            onCustom={() =>
              openChat(
                "telegram",
                "Hi Hasan! I'd like to chat with you about...",
              )
            }
          />
        )}
      </AnimatePresence>

      {/* ── WhatsApp Popup ── */}
      <AnimatePresence>
        {activePopup === "whatsapp" && (
          <ChatPopup
            key="whatsapp-popup"
            type="whatsapp"
            onClose={closePopup}
            onQuickReply={(msg) => openChat("whatsapp", msg)}
            onCustom={() =>
              openChat(
                "whatsapp",
                "Hi Hasan! I'd like to chat with you about...",
              )
            }
          />
        )}
      </AnimatePresence>

      {/* ── Buttons Stack ── */}
      <div className="flex flex-col items-end gap-2.5">
        {/* Telegram */}
        <FloatingButton
          isOpen={activePopup === "telegram"}
          onClick={() => togglePopup("telegram")}
          gradient="from-sky-500 to-blue-600"
          shadowColor="shadow-sky-500/25"
          ariaLabel="Telegram"
          pulseColor="bg-sky-500/40"
        >
          <FaTelegramPlane size={20} />
        </FloatingButton>

        {/* WhatsApp */}
        <FloatingButton
          isOpen={activePopup === "whatsapp"}
          onClick={() => togglePopup("whatsapp")}
          gradient="from-green-500 to-green-600"
          shadowColor="shadow-green-500/25"
          ariaLabel="WhatsApp"
          pulseColor="bg-green-500/40"
        >
          <FaWhatsapp size={20} />
        </FloatingButton>

        {/* Scroll to Top */}
        <AnimatePresence>
          {showScroll && (
            <motion.button
              key="scroll-btn"
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-600/20 hover:shadow-purple-600/30 flex items-center justify-center transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <HiArrowUp
                size={18}
                className="text-white group-hover:-translate-y-0.5 transition-transform"
              />
              <span className="absolute right-14 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-gray-900 dark:bg-white/10 text-white text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Back to top
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── Floating Action Button ── */
function FloatingButton({
  isOpen,
  onClick,
  gradient,
  shadowColor,
  ariaLabel,
  pulseColor,
  children,
}: {
  isOpen: boolean;
  onClick: () => void;
  gradient: string;
  shadowColor: string;
  ariaLabel: string;
  pulseColor: string;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${gradient} shadow-lg ${shadowColor} hover:shadow-md flex items-center justify-center transition-all duration-300`}
      aria-label={isOpen ? `Close ${ariaLabel}` : `Open ${ariaLabel}`}
    >
      {isOpen ? <HiX className="text-white" size={20} /> : children}
      <span
        className={`absolute inset-0 rounded-full ${pulseColor} animate-ping opacity-40`}
      />
    </motion.button>
  );
}

/* ── Chat Popup ── */
function ChatPopup({
  type,
  onClose,
  onQuickReply,
  onCustom,
}: {
  type: "whatsapp" | "telegram";
  onClose: () => void;
  onQuickReply: (msg: string) => void;
  onCustom: () => void;
}) {
  const isWhatsApp = type === "whatsapp";
  const gradient = isWhatsApp
    ? "from-green-500 to-green-600"
    : "from-sky-500 to-blue-600";
  const hoverColor = isWhatsApp
    ? "group-hover:text-green-500"
    : "group-hover:text-sky-500";
  const title = isWhatsApp ? "Hasan Emam" : "Hasan Emam";
  const status = isWhatsApp
    ? "Typically replies within 1 hour"
    : "Typically replies within a few hours";
  const greeting = isWhatsApp
    ? "👋 Hi! How can I help you?"
    : "👋 Hey! Let's talk on Telegram.";
  const placeholder = "Choose a quick option or start a free-form chat.";
  const btnLabel = isWhatsApp
    ? "Send a Custom Message"
    : "Send a Custom Message";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="w-[calc(100vw-24px)] sm:w-80 bg-white dark:bg-[#0a0a1a] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl shadow-black/20 overflow-hidden origin-bottom-right mb-1"
    >
      {/* Header */}
      <div
        className={`bg-gradient-to-r ${gradient} p-4 flex items-center gap-3`}
      >
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          {isWhatsApp ? (
            <FaWhatsapp className="text-white" size={18} />
          ) : (
            <FaTelegramPlane className="text-white" size={16} />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-bold text-sm truncate">{title}</p>
          <p className="text-white/70 text-[11px] truncate">{status}</p>
        </div>
        <button
          onClick={onClose}
          className="text-white/70 hover:text-white transition-colors shrink-0"
        >
          <HiX size={18} />
        </button>
      </div>

      {/* Body */}
      <div className="p-4">
        <p className="text-xs text-gray-500 dark:text-white/40 mb-3">
          {greeting}
        </p>
        <p className="text-xs text-gray-400 dark:text-white/30 mb-4">
          {placeholder}
        </p>

        <div className="space-y-1.5">
          {quickReplies.map((reply) => (
            <button
              key={reply.label}
              onClick={() => onQuickReply(reply.message)}
              className={`w-full text-left px-3 py-2.5 text-xs font-medium text-gray-700 dark:text-white/70 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-100 dark:border-white/5 rounded-xl transition-all flex items-center justify-between group`}
            >
              <span className="truncate">{reply.label}</span>
              <HiChevronRight
                size={14}
                className={`shrink-0 text-gray-300 dark:text-white/20 ${hoverColor} transition-colors`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={onCustom}
          className={`w-full mt-3 px-3 py-2.5 text-xs font-semibold text-white bg-gradient-to-r ${gradient} rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2`}
        >
          <HiChat size={14} />
          {btnLabel}
        </button>
      </div>
    </motion.div>
  );
}
