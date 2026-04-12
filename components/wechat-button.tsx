"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function WeChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="p-3 rounded-full bg-white shadow-md text-[#2D3436] hover:text-[#00B894] hover:shadow-lg transition-all duration-200"
        aria-label="WeChat"
      >
        <MessageCircle size={22} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
            >
              <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-[#2D3436]">WeChat</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-full hover:bg-[#F5F5F0] transition-colors"
                  >
                    <X size={20} className="text-[#636E72]" />
                  </button>
                </div>
                <img
                  src="/wechat-qr.jpg"
                  alt="WeChat QR Code"
                  className="w-48 h-48 mx-auto rounded-lg"
                />
                <p className="text-center text-sm text-[#636E72] mt-4">
                  Scan to add me on WeChat
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
