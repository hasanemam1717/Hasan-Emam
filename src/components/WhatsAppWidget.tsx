"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiX, HiChat, HiChevronRight } from "react-icons/hi";

const PHONE_NUMBER = "8801717680772"; // Your number — no + or spaces
const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER}`;
const WHATSAPP_MESSAGE = "Hi Hasan! I'd like to chat with you about...";

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

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleQuickReply = (message: string) => {
    const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  const handleOpenChat = () => {
    const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-3 sm:right-5 z-[60] flex flex-col items-end gap-3">
      {/* ── Chat Popup ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[calc(100vw-24px)] sm:w-80 bg-white dark:bg-[#0a0a1a] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl shadow-black/20 overflow-hidden origin-bottom-right"
          >
            {/* ── Header ── */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <FaWhatsapp className="text-white" size={20} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Hasan Emam</p>
                <p className="text-green-100 text-[11px]">
                  Typically replies within 1 hour
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="ml-auto text-white/80 hover:text-white transition-colors"
              >
                <HiX size={18} />
              </button>
            </div>

            {/* ── Body ── */}
            <div className="p-4">
              <p className="text-xs text-gray-500 dark:text-white/40 mb-3">
                👋 Hi! How can I help you?
              </p>
              <p className="text-xs text-gray-400 dark:text-white/30 mb-4">
                Choose a quick option or start a free-form chat.
              </p>

              <div className="space-y-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.label}
                    onClick={() => handleQuickReply(reply.message)}
                    className="w-full text-left px-3 py-2.5 text-xs font-medium text-gray-700 dark:text-white/70 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-100 dark:border-white/5 rounded-xl transition-all flex items-center justify-between group"
                  >
                    <span>{reply.label}</span>
                    <HiChevronRight
                      size={14}
                      className="text-gray-300 dark:text-white/20 group-hover:text-green-500 transition-colors"
                    />
                  </button>
                ))}
              </div>

              {/* ── Custom message ── */}
              <button
                onClick={handleOpenChat}
                className="w-full mt-3 px-3 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-xl hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-2"
              >
                <HiChat size={14} />
                Send a Custom Message
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FAB Button ── */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 flex items-center justify-center transition-all duration-300 hover:scale-105"
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
      >
        {isOpen ? (
          <HiX className="text-white" size={24} />
        ) : (
          <FaWhatsapp className="text-white" size={22} />
        )}

        {/* ── Pulse ring ── */}
        <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping opacity-40" />
      </motion.button>
    </div>
  );
}
