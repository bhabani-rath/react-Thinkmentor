import React, { useEffect } from "react";
import { FiX } from "react-icons/fi";

const Modal = ({ isOpen, onClose, title, children, size = "md" }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-[95%] phablet:max-w-md",
    md: "max-w-[95%] phablet:max-w-lg",
    lg: "max-w-[95%] tablet:max-w-2xl",
    xl: "max-w-[95%] tablet:max-w-4xl",
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/50 dark:bg-black/70 transition-opacity"
        onClick={onClose}
      />
      <div className="flex min-h-full items-center justify-center p-2 phablet:p-4">
        <div
          className={`relative bg-white dark:bg-dark-surface rounded-xl shadow-xl w-full ${sizeClasses[size]} transform transition-all`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-4 phablet:px-6 py-3 phablet:py-4 border-b border-gray-200 dark:border-dark-border">
            <h3 className="text-base phablet:text-lg font-semibold text-gray-900 dark:text-dark-text">
              {title}
            </h3>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 dark:text-dark-text-muted hover:text-gray-600 dark:hover:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-surface-hover rounded-lg transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
          <div className="px-4 phablet:px-6 py-3 phablet:py-4 max-h-[70vh] phablet:max-h-[80vh] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
