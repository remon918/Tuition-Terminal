"use client";

import { useState } from "react";
import { Card, Input, Button } from "@heroui/react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const loginData = Object.fromEntries(formData.entries());

    // console.log(loginData);

    const { data, error } = await authClient.signIn.email({
      ...loginData,
    });

    if (!error) {
      toast.success("Login Successful! Redirecting...");
      window.location.href = "/";
    }

    if (error) {
      toast.error(error.message || "Login Failed");
    }
  };

  const passwordRules = [
    {
      label: "At least 8 characters",
      valid: password.length >= 8,
    },
    {
      label: "At least 1 number",
      valid: /\d/.test(password),
    },
    {
      label: "At least 1 lowercase letter",
      valid: /[a-z]/.test(password),
    },
    {
      label: "At least 1 uppercase letter",
      valid: /[A-Z]/.test(password),
    },
  ];

  return (
    <div className="flex items-center justify-center px-3 py-6">
      <Card className="w-full max-w-lg rounded-md border border-gray-200 shadow-md">
        <div className="p-5 md:p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-[#243B63]">Welcome Back</h1>

            <p className="text-sm text-gray-500 mt-1">
              Login to continue your journey
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleLogin}
            className="border-t border-gray-200 pt-5 space-y-4"
          >
            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-[#243B63] mb-1.5">
                <Mail size={16} />
                Email
              </label>

              <div className="w-full border-2 border-gray-300 rounded-md">
                <Input
                  type="email"
                  placeholder="john@example.com"
                  radius="sm"
                  size="md"
                  className="w-full"
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-[#243B63] mb-1.5">
                <Lock size={16} />
                Password
              </label>

              <div className="relative w-full border-2 border-gray-300 rounded-md">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  radius="sm"
                  size="md"
                  className="w-full"
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Forgot Password */}
              <p className="text-sm text-gray-600 mt-2">
                <Link
                  href={"/forgot-password"}
                  className="text-red-500 hover:underline"
                >
                  Forgot your password?
                </Link>
              </p>

              {/* Password Rules */}
              <div className="mt-4 border-t border-gray-200 pt-3">
                <h3 className="text-sm font-medium text-black mb-2">
                  Password must contain:
                </h3>

                <div className="space-y-1.5">
                  {passwordRules.map((rule, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 text-sm ${
                        rule.valid ? "text-green-600" : "text-gray-600"
                      }`}
                    >
                      <span className="text-lg leading-none">
                        {rule.valid ? "✓" : "×"}
                      </span>

                      <span>{rule.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full h-11 text-base font-semibold bg-linear-to-r from-teal-500 to-teal-400 hover:bg-linear-to-r hover:from-teal-400 hover:to-teal-500 text-white rounded-lg hover:scale-101 duration-300"
              radius="sm"
            >
              Login
            </Button>

            {/* Google Button */}
            <Button
              onClick={handleGoogleLogin}
              type="button"
              variant="bordered"
              radius="sm"
              className="w-full h-11 text-gray-800 font-medium border-2 border-gray-300 rounded-lg hover:scale-101 duration-300 hover:bg-gray-200"
            >
              <FcGoogle />
              Continue With Google
            </Button>

            {/* Signup */}
            <p className="text-sm text-gray-700 text-center pt-1">
              Don&apos;t have an account?{" "}
              <span className="text-red-500 underline cursor-pointer">
                <Link href={"/signup"}>Signup</Link>
              </span>
            </p>
          </form>
        </div>
      </Card>
    </div>
  );
}
