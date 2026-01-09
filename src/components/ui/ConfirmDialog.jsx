import React from "react";
import Modal from "./Modal";
import { FiAlertTriangle } from "react-icons/fi";

const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Delete",
  message = "Are you sure you want to delete this item? This action cannot be undone.",
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="sm">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <FiAlertTriangle className="w-12 h-12 text-red-500" />
        </div>
        <p className="text-gray-600 dark:text-dark-text-secondary mb-6">
          {message}
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-600 dark:text-dark-text-secondary text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-dark-surface-hover transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmDialog;
