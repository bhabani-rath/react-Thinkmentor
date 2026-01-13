import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../locales/en";
import hi from "../locales/hi";
import od from "../locales/od";

const translations = {
  en,
  hi,
  od,
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get saved language from localStorage or default to English
    const savedLanguage = localStorage.getItem("thinkmentor-language");
    return savedLanguage || "en";
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem("thinkmentor-language", language);
  }, [language]);

  // Get translation for a key path (e.g., "dashboard.title")
  const t = (keyPath) => {
    const keys = keyPath.split(".");
    let value = translations[language];

    for (const key of keys) {
      if (value && typeof value === "object" && key in value) {
        value = value[key];
      } else {
        // Fallback to English if translation not found
        let fallback = translations.en;
        for (const k of keys) {
          if (fallback && typeof fallback === "object" && k in fallback) {
            fallback = fallback[k];
          } else {
            return keyPath; // Return key path if no translation found
          }
        }
        return fallback;
      }
    }

    return value;
  };

  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage);
    }
  };

  // Translate data values (for table cell content)
  // Maps common values to their translation keys
  const dataKeyMap = {
    // Boards
    CBSE: "data.cbse",
    ICSE: "data.icse",
    "State Board": "data.stateBoard",
    // Classes
    "Class 9": "data.class9",
    "Class 10": "data.class10",
    "Class 11": "data.class11",
    "Class 12": "data.class12",
    // Subjects
    Science: "data.science",
    Mathematics: "data.mathematics",
    Physics: "data.physics",
    Chemistry: "data.chemistry",
    Biology: "data.biology",
    English: "data.english",
    // Chapters
    "Chemical Reactions": "data.chemicalReactions",
    Algebra: "data.algebra",
    Motion: "data.motion",
    "Organic Chemistry": "data.organicChemistry",
    "Cell Structure": "data.cellStructure",
    Light: "data.light",
    // Status
    Active: "data.active",
    Inactive: "data.inactive",
    Published: "data.published",
    Draft: "data.draft",
    "Under Review": "data.underReview",
    // Grades
    "Grade 9": "data.grade9",
    "Grade 10": "data.grade10",
    "Grade 11": "data.grade11",
    "Grade 12": "data.grade12",
    // Roles
    Admin: "data.admin",
    Teacher: "data.teacher",
    Student: "data.student",
    Parent: "data.parent",
    Adminstrator: "data.administrator",
    // Permissions
    "Full Access": "data.fullAccess",
    "Content Management": "data.contentManagement",
    "Read Only": "data.readOnly",
    "Reports & Analytics": "data.reportsAnalytics",
  };

  // Function to translate data values
  const translateData = (value) => {
    if (value === null || value === undefined) return value;
    const stringValue = String(value);
    const key = dataKeyMap[stringValue];
    if (key) {
      return t(key);
    }
    return stringValue;
  };

  const availableLanguages = [
    { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
    { code: "hi", name: "Hindi", nativeName: "हिंदी", flag: "🇮🇳" },
    { code: "od", name: "Odia", nativeName: "ଓଡ଼ିଆ", flag: "🇮🇳" },
  ];

  const value = {
    language,
    setLanguage: changeLanguage,
    t,
    translateData,
    availableLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
