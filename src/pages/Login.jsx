import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginPageSvg from "../assets/LoginPage.svg";
import ThinkMentorLogo from "../assets/ThinkMentorLogo";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  // Validation functions
  const validateEmail = (email) => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      return "Email is required";
    }
    if (trimmedEmail.length > 254) {
      return "Email is too long (max 254 characters)";
    }
    // Comprehensive email regex
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(trimmedEmail)) {
      return "Please enter a valid email address";
    }
    // Check for valid domain extension
    const domainParts = trimmedEmail.split("@")[1]?.split(".");
    if (
      !domainParts ||
      domainParts.length < 2 ||
      domainParts[domainParts.length - 1].length < 2
    ) {
      return "Please enter a valid email domain";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password) {
      return "Password is required";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters";
    }
    if (password.length > 128) {
      return "Password is too long (max 128 characters)";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "Password must contain at least one special character";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate on change if field has been touched
    if (touched[name]) {
      if (name === "email") {
        setErrors({ ...errors, email: validateEmail(value) });
      } else if (name === "password") {
        setErrors({ ...errors, password: validatePassword(value) });
      }
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });

    // Validate on blur
    if (name === "email") {
      setErrors({ ...errors, email: validateEmail(value) });
    } else if (name === "password") {
      setErrors({ ...errors, password: validatePassword(value) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    setTouched({
      email: true,
      password: true,
    });

    // If no errors, submit
    if (!emailError && !passwordError) {
      if (
        formData.email === "superadmin@thinkmentor.com" &&
        formData.password === "Superadmin@123"
      ) {
        navigate("/superadmin/dashboard");
      } else if (
        formData.email === "admin@thinkmentor.com" &&
        formData.password === "Admin@123"
      ) {
        navigate("/admin/dashboard");
      } else if (
        formData.email === "adminstrator@thinkmentor.com" &&
        formData.password === "Adminstrator@123"
      ) {
        navigate("/adminstrator/dashboard");
      } else if (
        formData.email === "teacher@thinkmentor.com" &&
        formData.password === "Teacher@123"
      ) {
        navigate("/teacher/dashboard");
      } else if (
        formData.email === "student@thinkmentor.com" &&
        formData.password === "Student@123"
      ) {
        navigate("/student/dashboard");
      } else if (
        formData.email === "parent@thinkmentor.com" &&
        formData.password === "Parent@123"
      ) {
        navigate("/parent/dashboard");
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col tablet:flex-row">
      {/* Left Side - Illustration */}
      <div className="hidden tablet:flex tablet:w-1/2 bg-gray-50 items-center justify-center p-6 tablet-large:p-8 laptop:p-12">
        <div className="max-w-md laptop:max-w-lg">
          <img
            src={LoginPageSvg}
            alt="Login illustration"
            className="w-full h-auto"
          />
          <div className="text-center mt-4 laptop:mt-8">
            <h2 className="text-xl laptop:text-2xl font-bold text-black mb-2">
              Welcome Back to ThinkMentor
            </h2>
            <p className="text-gray-500 text-sm laptop:text-base">
              Your personalized learning platform for success
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full tablet:w-1/2 flex items-center justify-center p-4 mobile:p-5 mobile-large:p-6 phablet:p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-6 phablet:mb-8">
            <div className="inline-flex items-center gap-2 mobile-large:gap-3 mb-2">
              <ThinkMentorLogo className="w-10 h-10 mobile-large:w-12 mobile-large:h-12" />
              <h1 className="text-xl mobile-large:text-2xl font-bold text-black">
                Think
                <span className="text-primary">Mentor</span>
              </h1>
            </div>
            <p className="text-gray-500 text-xs mobile-large:text-sm">
              Welcome back! Please sign in to continue
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 mobile-large:p-6 phablet:p-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 phablet:space-y-5"
            >
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className={`w-5 h-5 ${
                        errors.email && touched.email
                          ? "text-red-400"
                          : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your email"
                    className={`w-full pl-12 pr-4 py-3 bg-gray-50 border rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.email && touched.email
                        ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                        : "border-gray-200 focus:ring-primary/20 focus:border-primary"
                    }`}
                  />
                  {errors.email && touched.email && (
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                {errors.email && touched.email && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className={`w-5 h-5 ${
                        errors.password && touched.password
                          ? "text-red-400"
                          : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your password"
                    className={`w-full pl-12 pr-12 py-3 bg-gray-50 border rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.password && touched.password
                        ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                        : "border-gray-200 focus:ring-primary/20 focus:border-primary"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && touched.password && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-sm font-medium text-primary hover:text-primary-hover transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/40 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Sign In
              </button>
            </form>
          </div>

          {/* Demo Credentials Block */}
          <div className="mt-6 p-4 bg-linear-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="w-5 h-5 text-amber-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-semibold text-amber-800">
                Demo Credentials
              </span>
              <span className="text-xs text-amber-600 ml-auto">
                Click to auto-fill
              </span>
            </div>
            <div className="grid grid-cols-1 mobile-large:grid-cols-2 gap-2 text-xs">
              {[
                {
                  role: "Super Admin",
                  email: "superadmin@thinkmentor.com",
                  password: "Superadmin@123",
                  color: "bg-purple-100 border-purple-200 hover:bg-purple-200",
                },
                {
                  role: "Admin",
                  email: "admin@thinkmentor.com",
                  password: "Admin@123",
                  color: "bg-blue-100 border-blue-200 hover:bg-blue-200",
                },
                {
                  role: "Administrator",
                  email: "adminstrator@thinkmentor.com",
                  password: "Adminstrator@123",
                  color: "bg-indigo-100 border-indigo-200 hover:bg-indigo-200",
                },
                {
                  role: "Teacher",
                  email: "teacher@thinkmentor.com",
                  password: "Teacher@123",
                  color: "bg-green-100 border-green-200 hover:bg-green-200",
                },
                {
                  role: "Student",
                  email: "student@thinkmentor.com",
                  password: "Student@123",
                  color: "bg-cyan-100 border-cyan-200 hover:bg-cyan-200",
                },
                {
                  role: "Parent",
                  email: "parent@thinkmentor.com",
                  password: "Parent@123",
                  color: "bg-pink-100 border-pink-200 hover:bg-pink-200",
                },
              ].map((cred) => (
                <button
                  key={cred.role}
                  type="button"
                  onClick={() => {
                    setFormData({ email: cred.email, password: cred.password });
                    setErrors({ email: "", password: "" });
                    setTouched({ email: false, password: false });
                  }}
                  className={`${cred.color} border rounded-lg px-3 py-2.5 text-left transition-all duration-200 cursor-pointer group`}
                >
                  <div className="font-semibold text-gray-800 mb-1 flex items-center gap-1.5">
                    <svg
                      className="w-3.5 h-3.5 text-gray-500 group-hover:text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    {cred.role}
                  </div>
                  <div className="text-gray-600 truncate">{cred.email}</div>
                  <div className="text-gray-500 font-mono">{cred.password}</div>
                </button>
              ))}
            </div>
            <p className="text-xs text-amber-600 mt-3 text-center">
              Click any role above to auto-fill credentials
            </p>
          </div>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-primary hover:text-primary-hover transition-colors"
            >
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
