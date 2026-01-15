import React, { useState, useRef, useCallback } from "react";
import {
  FiUpload,
  FiEdit,
  FiFolder,
  FiFile,
  FiSearch,
  FiFilter,
  FiEye,
  FiDownload,
  FiClock,
  FiCheckCircle,
  FiLoader,
  FiX,
  FiTrash2,
  FiAlertCircle,
  FiCheck,
} from "react-icons/fi";

const ContentHub = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    subject: "",
    class: "",
    status: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [viewContent, setViewContent] = useState(null);
  const fileInputRef = useRef(null);

  // Form state for upload
  const [uploadForm, setUploadForm] = useState({
    board: "",
    class: "",
    subject: "",
    chapter: "",
    topic: "",
  });

  // Sample data for dropdowns
  const boards = ["CBSE", "ICSE", "State Board", "IB"];
  const classes = [
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
  ];
  const subjects = [
    "Mathematics",
    "Science",
    "English",
    "Social Science",
    "Hindi",
  ];

  // Recent uploads for OCR Review with state management
  const [recentUploads, setRecentUploads] = useState([
    {
      id: 1,
      name: "Mathematics_Chapter_3.pdf",
      date: "2024-01-15 10:30 AM",
      status: "ready",
      ocrContent:
        "Chapter 3: Fractions\n\n3.1 Introduction to Fractions\nA fraction represents a part of a whole. It consists of two numbers:\n- Numerator: The top number (parts we have)\n- Denominator: The bottom number (total parts)\n\n3.2 Types of Fractions\n1. Proper Fractions: numerator < denominator (e.g., 3/4)\n2. Improper Fractions: numerator > denominator (e.g., 5/3)\n3. Mixed Fractions: whole number + proper fraction (e.g., 2 1/2)\n\n3.3 Equivalent Fractions\nFractions that represent the same value:\n1/2 = 2/4 = 3/6 = 4/8\n\n3.4 Adding Fractions\nTo add fractions with the same denominator:\na/c + b/c = (a+b)/c\n\nExample: 2/5 + 1/5 = 3/5",
    },
    {
      id: 2,
      name: "Science_Photosynthesis.pdf",
      date: "2024-01-15 11:00 AM",
      status: "processing",
      ocrContent: null,
    },
    {
      id: 3,
      name: "English_Grammar_Notes.pdf",
      date: "2024-01-14 02:45 PM",
      status: "approved",
      ocrContent:
        "Grammar Notes: Parts of Speech\n\n1. Nouns\nA noun is a word that represents a person, place, thing, or idea.\nExamples: teacher, school, book, happiness\n\n2. Verbs\nA verb is a word that describes an action, state, or occurrence.\nExamples: run, think, is, became\n\n3. Adjectives\nAn adjective describes or modifies a noun.\nExamples: beautiful, tall, intelligent, red\n\n4. Adverbs\nAn adverb modifies a verb, adjective, or other adverb.\nExamples: quickly, very, extremely, well",
    },
  ]);

  // Content library data with state management
  const [contentLibrary, setContentLibrary] = useState([
    {
      id: 1,
      title: "Fractions - Complete Chapter",
      subject: "Mathematics",
      class: "Class 6",
      chapter: "Fractions",
      pages: 24,
      uploadDate: "2024-01-10",
      status: "approved",
    },
    {
      id: 2,
      title: "Photosynthesis Notes",
      subject: "Science",
      class: "Class 7",
      chapter: "Photosynthesis",
      pages: 12,
      uploadDate: "2024-01-12",
      status: "approved",
    },
    {
      id: 3,
      title: "English Grammar Rules",
      subject: "English",
      class: "Class 8",
      chapter: "Grammar",
      pages: 18,
      uploadDate: "2024-01-14",
      status: "approved",
    },
    {
      id: 4,
      title: "Algebra Basics",
      subject: "Mathematics",
      class: "Class 9",
      chapter: "Algebra",
      pages: 32,
      uploadDate: "2024-01-08",
      status: "approved",
    },
    {
      id: 5,
      title: "Chemical Reactions",
      subject: "Science",
      class: "Class 10",
      chapter: "Chemistry",
      pages: 28,
      uploadDate: "2024-01-05",
      status: "approved",
    },
  ]);

  const tabs = [
    { id: "upload", label: "Upload Content", icon: FiUpload },
    { id: "ocr", label: "OCR Review", icon: FiEdit },
    { id: "library", label: "Content Library", icon: FiFolder },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "ready":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 rounded-full">
            <FiClock className="w-3 h-3" />
            Ready for Review
          </span>
        );
      case "processing":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 rounded-full">
            <FiLoader className="w-3 h-3 animate-spin" />
            Processing
          </span>
        );
      case "approved":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400 rounded-full">
            <FiCheckCircle className="w-3 h-3" />
            Approved
          </span>
        );
      default:
        return null;
    }
  };

  const handleFormChange = (field, value) => {
    setUploadForm({ ...uploadForm, [field]: value });
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors({ ...formErrors, [field]: "" });
    }
  };

  // File handling functions
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const validateFile = (file) => {
    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "application/zip",
    ];
    const maxSize = 30 * 1024 * 1024; // 30MB

    if (!allowedTypes.includes(file.type)) {
      return "Invalid file type. Only PDF, JPG, PNG, and ZIP are allowed.";
    }
    if (file.size > maxSize) {
      return "File size exceeds 30MB limit.";
    }
    return null;
  };

  const simulateUpload = (fileId) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 20;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setUploadedFiles((prev) =>
          prev.map((f) => (f.id === fileId ? { ...f, status: "complete" } : f))
        );
      }
      setUploadProgress((prev) => ({
        ...prev,
        [fileId]: Math.min(progress, 100),
      }));
    }, 300);
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  }, []);

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    processFiles(files);
  };

  const processFiles = (files) => {
    files.forEach((file) => {
      const error = validateFile(file);
      const fileId = Date.now() + Math.random();
      const newFile = {
        id: fileId,
        name: file.name,
        size: file.size,
        type: file.type,
        status: error ? "error" : "uploading",
        error: error,
      };
      setUploadedFiles((prev) => [...prev, newFile]);
      if (!error) {
        simulateUpload(fileId);
      }
    });
  };

  const removeFile = (fileId) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== fileId));
    setUploadProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[fileId];
      return newProgress;
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const validateForm = () => {
    const errors = {};
    if (!uploadForm.board) errors.board = "Board is required";
    if (!uploadForm.class) errors.class = "Class is required";
    if (!uploadForm.subject) errors.subject = "Subject is required";
    if (!uploadForm.chapter) errors.chapter = "Chapter is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitUpload = () => {
    if (!validateForm()) return;

    const completedFiles = uploadedFiles.filter((f) => f.status === "complete");
    if (completedFiles.length === 0) {
      alert("Please upload at least one file before submitting.");
      return;
    }

    // Add to recent uploads for OCR review
    completedFiles.forEach((file) => {
      const newUpload = {
        id: Date.now() + Math.random(),
        name: file.name,
        date: new Date().toLocaleString(),
        status: "processing",
        ocrContent: null,
        metadata: { ...uploadForm },
      };
      setRecentUploads((prev) => [newUpload, ...prev]);

      // Simulate OCR processing completion after 3 seconds
      setTimeout(() => {
        setRecentUploads((prev) =>
          prev.map((u) =>
            u.id === newUpload.id
              ? {
                  ...u,
                  status: "ready",
                  ocrContent: `Extracted content from ${
                    file.name
                  }\n\nSubject: ${uploadForm.subject}\nClass: ${
                    uploadForm.class
                  }\nChapter: ${uploadForm.chapter}\nTopic: ${
                    uploadForm.topic || "N/A"
                  }\n\n[OCR extracted text would appear here...]`,
                }
              : u
          )
        );
      }, 3000);
    });

    // Reset form
    setUploadedFiles([]);
    setUploadForm({
      board: "",
      class: "",
      subject: "",
      chapter: "",
      topic: "",
    });
    setUploadSuccess(true);
    setTimeout(() => setUploadSuccess(false), 3000);
  };

  // OCR Review functions
  const handleApprove = (uploadId) => {
    const upload = recentUploads.find((u) => u.id === uploadId);
    if (!upload) return;

    // Update status to approved
    setRecentUploads((prev) =>
      prev.map((u) => (u.id === uploadId ? { ...u, status: "approved" } : u))
    );

    // Add to content library
    const newContent = {
      id: Date.now(),
      title: upload.name.replace(/\.[^/.]+$/, "").replace(/_/g, " "),
      subject: upload.metadata?.subject || "General",
      class: upload.metadata?.class || "Class 6",
      chapter: upload.metadata?.chapter || "Chapter 1",
      pages: Math.floor(Math.random() * 30) + 5,
      uploadDate: new Date().toISOString().split("T")[0],
      status: "approved",
    };
    setContentLibrary((prev) => [newContent, ...prev]);
    setSelectedDocument(null);
  };

  const handleReject = (uploadId) => {
    setRecentUploads((prev) => prev.filter((u) => u.id !== uploadId));
    setSelectedDocument(null);
  };

  // Content Library filtering
  const filteredContent = contentLibrary.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.chapter.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSubject = !filters.subject || item.subject === filters.subject;
    const matchesClass = !filters.class || item.class === filters.class;
    const matchesStatus = !filters.status || item.status === filters.status;

    return matchesSearch && matchesSubject && matchesClass && matchesStatus;
  });

  const handleDownload = (content) => {
    // Simulate download
    const blob = new Blob(
      [
        `Content: ${content.title}\n\nThis is a simulated download for demonstration purposes.`,
      ],
      { type: "text/plain" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${content.title.replace(/\s+/g, "_")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleView = (content) => {
    setViewContent(content);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-1">
          Content Hub
        </h1>
        <p className="text-gray-500 dark:text-dark-text-secondary">
          Upload, review, and manage your teaching content
        </p>
      </div>

      {/* Success Message */}
      {uploadSuccess && (
        <div className="mb-4 p-4 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30 rounded-xl flex items-center gap-3">
          <FiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          <p className="text-green-700 dark:text-green-400 font-medium">
            Content uploaded successfully! It will be processed for OCR review.
          </p>
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white dark:bg-dark-surface text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-bg"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
              {tab.id === "ocr" &&
                recentUploads.filter((u) => u.status === "ready").length >
                  0 && (
                  <span className="ml-1 px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full">
                    {recentUploads.filter((u) => u.status === "ready").length}
                  </span>
                )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border">
        {/* Upload Content Tab */}
        {activeTab === "upload" && (
          <div className="p-6">
            {/* Drag and Drop Area */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-12 text-center transition-all cursor-pointer mb-6 ${
                isDragging
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-500/10"
                  : "border-gray-300 dark:border-dark-border hover:border-blue-400 dark:hover:border-blue-500"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.zip"
                onChange={handleFileSelect}
                className="hidden"
              />
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 mb-4 ${
                    isDragging
                      ? "text-blue-500"
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                >
                  <FiUpload className="w-full h-full" />
                </div>
                <p className="text-gray-700 dark:text-dark-text font-medium mb-1">
                  {isDragging
                    ? "Drop files here"
                    : "Drag and drop files here, or click to browse"}
                </p>
                <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                  Supported formats: PDF, JPG, PNG, ZIP (Max 30MB per file)
                </p>
              </div>
            </div>

            {/* Uploaded Files List */}
            {uploadedFiles.length > 0 && (
              <div className="mb-6 space-y-2">
                <h4 className="text-sm font-medium text-gray-700 dark:text-dark-text mb-2">
                  Uploaded Files
                </h4>
                {uploadedFiles.map((file) => (
                  <div
                    key={file.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border ${
                      file.status === "error"
                        ? "border-red-200 bg-red-50 dark:border-red-500/30 dark:bg-red-500/10"
                        : "border-gray-200 bg-gray-50 dark:border-dark-border dark:bg-dark-bg"
                    }`}
                  >
                    <FiFile
                      className={`w-5 h-5 ${
                        file.status === "error"
                          ? "text-red-500"
                          : "text-blue-500"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-dark-text truncate">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-dark-text-secondary">
                        {formatFileSize(file.size)}
                      </p>
                      {file.status === "uploading" && (
                        <div className="mt-1 w-full bg-gray-200 dark:bg-dark-border rounded-full h-1.5">
                          <div
                            className="bg-blue-500 h-1.5 rounded-full transition-all"
                            style={{
                              width: `${uploadProgress[file.id] || 0}%`,
                            }}
                          />
                        </div>
                      )}
                      {file.status === "error" && (
                        <p className="text-xs text-red-500 mt-1">
                          {file.error}
                        </p>
                      )}
                    </div>
                    {file.status === "complete" && (
                      <FiCheckCircle className="w-5 h-5 text-green-500" />
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(file.id);
                      }}
                      className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <FiX className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Content Metadata Form */}
            <div className="bg-gray-50 dark:bg-dark-bg rounded-xl p-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-dark-text mb-4">
                Content Metadata (Required)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Board */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1.5">
                    Board <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={uploadForm.board}
                    onChange={(e) => handleFormChange("board", e.target.value)}
                    className={`w-full px-4 py-2.5 bg-white dark:bg-dark-surface border rounded-lg text-gray-900 dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 ${
                      formErrors.board
                        ? "border-red-500"
                        : "border-gray-200 dark:border-dark-border"
                    }`}
                  >
                    <option value="">Select Board</option>
                    {boards.map((board) => (
                      <option key={board} value={board}>
                        {board}
                      </option>
                    ))}
                  </select>
                  {formErrors.board && (
                    <p className="text-xs text-red-500 mt-1">
                      {formErrors.board}
                    </p>
                  )}
                </div>

                {/* Class */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1.5">
                    Class <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={uploadForm.class}
                    onChange={(e) => handleFormChange("class", e.target.value)}
                    className={`w-full px-4 py-2.5 bg-white dark:bg-dark-surface border rounded-lg text-gray-900 dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 ${
                      formErrors.class
                        ? "border-red-500"
                        : "border-gray-200 dark:border-dark-border"
                    }`}
                  >
                    <option value="">Select Class</option>
                    {classes.map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                  {formErrors.class && (
                    <p className="text-xs text-red-500 mt-1">
                      {formErrors.class}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1.5">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={uploadForm.subject}
                    onChange={(e) =>
                      handleFormChange("subject", e.target.value)
                    }
                    className={`w-full px-4 py-2.5 bg-white dark:bg-dark-surface border rounded-lg text-gray-900 dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 ${
                      formErrors.subject
                        ? "border-red-500"
                        : "border-gray-200 dark:border-dark-border"
                    }`}
                  >
                    <option value="">Select Subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  {formErrors.subject && (
                    <p className="text-xs text-red-500 mt-1">
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                {/* Chapter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1.5">
                    Chapter <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={uploadForm.chapter}
                    onChange={(e) =>
                      handleFormChange("chapter", e.target.value)
                    }
                    placeholder="e.g., Fractions"
                    className={`w-full px-4 py-2.5 bg-white dark:bg-dark-surface border rounded-lg text-gray-900 dark:text-dark-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 ${
                      formErrors.chapter
                        ? "border-red-500"
                        : "border-gray-200 dark:border-dark-border"
                    }`}
                  />
                  {formErrors.chapter && (
                    <p className="text-xs text-red-500 mt-1">
                      {formErrors.chapter}
                    </p>
                  )}
                </div>

                {/* Topic */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1.5">
                    Topic (Optional)
                  </label>
                  <input
                    type="text"
                    value={uploadForm.topic}
                    onChange={(e) => handleFormChange("topic", e.target.value)}
                    placeholder="e.g., Equivalent Fractions"
                    className="w-full px-4 py-2.5 bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-lg text-gray-900 dark:text-dark-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleSubmitUpload}
                  className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
                >
                  Upload Content
                </button>
              </div>
            </div>
          </div>
        )}

        {/* OCR Review Tab */}
        {activeTab === "ocr" && (
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Uploads List */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-dark-text mb-4">
                  Recent Uploads ({recentUploads.length})
                </h3>
                <div className="space-y-3 max-h-[500px] overflow-y-auto">
                  {recentUploads.length === 0 ? (
                    <div className="text-center py-8 text-gray-500 dark:text-dark-text-secondary">
                      No uploads yet. Upload content to see it here.
                    </div>
                  ) : (
                    recentUploads.map((upload) => (
                      <div
                        key={upload.id}
                        onClick={() => setSelectedDocument(upload)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                          selectedDocument?.id === upload.id
                            ? "border-blue-500 bg-blue-50 dark:bg-blue-500/10"
                            : "border-gray-200 dark:border-dark-border hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-dark-surface"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="font-medium text-gray-900 dark:text-dark-text mb-1 truncate">
                              {upload.name}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-dark-text-secondary">
                              {upload.date}
                            </p>
                          </div>
                          {getStatusBadge(upload.status)}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Document Preview Area */}
              <div className="flex flex-col min-h-[500px] bg-gray-50 dark:bg-dark-bg rounded-xl border border-gray-200 dark:border-dark-border">
                {selectedDocument ? (
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="p-4 border-b border-gray-200 dark:border-dark-border">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-dark-text">
                            {selectedDocument.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                            {selectedDocument.date}
                          </p>
                        </div>
                        {getStatusBadge(selectedDocument.status)}
                      </div>
                    </div>

                    {/* OCR Content */}
                    <div className="flex-1 p-4 overflow-y-auto">
                      {selectedDocument.status === "processing" ? (
                        <div className="flex flex-col items-center justify-center h-full">
                          <FiLoader className="w-8 h-8 text-amber-500 animate-spin mb-3" />
                          <p className="text-gray-500 dark:text-dark-text-secondary">
                            Processing OCR...
                          </p>
                        </div>
                      ) : selectedDocument.ocrContent ? (
                        <pre className="text-sm text-gray-700 dark:text-dark-text whitespace-pre-wrap font-mono bg-white dark:bg-dark-surface p-4 rounded-lg border border-gray-200 dark:border-dark-border">
                          {selectedDocument.ocrContent}
                        </pre>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full">
                          <FiAlertCircle className="w-8 h-8 text-gray-400 mb-3" />
                          <p className="text-gray-500 dark:text-dark-text-secondary">
                            No OCR content available
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    {selectedDocument.status === "ready" && (
                      <div className="p-4 border-t border-gray-200 dark:border-dark-border flex gap-3">
                        <button
                          onClick={() => handleApprove(selectedDocument.id)}
                          className="flex-1 px-4 py-2.5 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                        >
                          <FiCheck className="w-4 h-4" />
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(selectedDocument.id)}
                          className="flex-1 px-4 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                        >
                          <FiTrash2 className="w-4 h-4" />
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full p-6">
                    <FiEdit className="w-12 h-12 text-gray-300 dark:text-gray-600 mb-4" />
                    <p className="text-gray-500 dark:text-dark-text-secondary">
                      Select a document to review OCR output
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Content Library Tab */}
        {activeTab === "library" && (
          <div className="p-6">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              <div className="relative flex-1">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search content library..."
                  className="w-full pl-12 pr-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg text-gray-900 dark:text-dark-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 border rounded-lg transition-colors ${
                  showFilters
                    ? "bg-blue-50 dark:bg-blue-500/10 border-blue-300 dark:border-blue-500 text-blue-600 dark:text-blue-400"
                    : "bg-white dark:bg-dark-surface border-gray-200 dark:border-dark-border text-gray-700 dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-bg"
                }`}
              >
                <FiFilter className="w-4 h-4" />
                Filters
                {(filters.subject || filters.class || filters.status) && (
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                )}
              </button>
            </div>

            {/* Filter Panel */}
            {showFilters && (
              <div className="mb-6 p-4 bg-gray-50 dark:bg-dark-bg rounded-xl border border-gray-200 dark:border-dark-border">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <select
                    value={filters.subject}
                    onChange={(e) =>
                      setFilters({ ...filters, subject: e.target.value })
                    }
                    className="px-4 py-2 bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-lg text-gray-900 dark:text-dark-text"
                  >
                    <option value="">All Subjects</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  <select
                    value={filters.class}
                    onChange={(e) =>
                      setFilters({ ...filters, class: e.target.value })
                    }
                    className="px-4 py-2 bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-lg text-gray-900 dark:text-dark-text"
                  >
                    <option value="">All Classes</option>
                    {classes.map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() =>
                      setFilters({ subject: "", class: "", status: "" })
                    }
                    className="px-4 py-2 text-sm text-gray-600 dark:text-dark-text-secondary hover:text-gray-900 dark:hover:text-dark-text"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            )}

            {/* Results Count */}
            <p className="text-sm text-gray-500 dark:text-dark-text-secondary mb-4">
              Showing {filteredContent.length} of {contentLibrary.length} items
            </p>

            {/* Content List */}
            <div className="space-y-4">
              {filteredContent.length === 0 ? (
                <div className="text-center py-12 text-gray-500 dark:text-dark-text-secondary">
                  No content found matching your criteria.
                </div>
              ) : (
                filteredContent.map((content) => (
                  <div
                    key={content.id}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                  >
                    {/* Document Icon */}
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FiFile className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>

                    {/* Content Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 dark:text-dark-text mb-1">
                        {content.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                        {content.subject} • {content.class} • {content.chapter}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs text-blue-600 dark:text-blue-400">
                          {content.pages} pages
                        </span>
                        <span className="text-xs text-gray-400 dark:text-dark-text-secondary">
                          Uploaded: {content.uploadDate}
                        </span>
                        {getStatusBadge(content.status)}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleView(content)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors"
                        title="View"
                      >
                        <FiEye className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDownload(content)}
                        className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-500/10 rounded-lg transition-colors"
                        title="Download"
                      >
                        <FiDownload className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* View Content Modal */}
      {viewContent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-dark-surface rounded-2xl max-w-lg w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-dark-border flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 dark:text-dark-text">
                Content Details
              </h2>
              <button
                onClick={() => setViewContent(null)}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-bg"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiFile className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-1">
                    {viewContent.title}
                  </h3>
                  {getStatusBadge(viewContent.status)}
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 dark:bg-dark-bg rounded-xl">
                    <p className="text-xs text-gray-500 dark:text-dark-text-secondary mb-1">
                      Subject
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-dark-text">
                      {viewContent.subject}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-dark-bg rounded-xl">
                    <p className="text-xs text-gray-500 dark:text-dark-text-secondary mb-1">
                      Class
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-dark-text">
                      {viewContent.class}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-dark-bg rounded-xl">
                    <p className="text-xs text-gray-500 dark:text-dark-text-secondary mb-1">
                      Chapter
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-dark-text">
                      {viewContent.chapter}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-dark-bg rounded-xl">
                    <p className="text-xs text-gray-500 dark:text-dark-text-secondary mb-1">
                      Pages
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-dark-text">
                      {viewContent.pages}
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-dark-bg rounded-xl">
                  <p className="text-xs text-gray-500 dark:text-dark-text-secondary mb-1">
                    Upload Date
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-dark-text">
                    {viewContent.uploadDate}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 dark:border-dark-border flex gap-3">
              <button
                onClick={() => {
                  handleDownload(viewContent);
                  setViewContent(null);
                }}
                className="flex-1 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <FiDownload className="w-4 h-4" />
                Download
              </button>
              <button
                onClick={() => setViewContent(null)}
                className="flex-1 py-2.5 border border-gray-200 dark:border-dark-border text-gray-700 dark:text-dark-text font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-dark-bg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentHub;
