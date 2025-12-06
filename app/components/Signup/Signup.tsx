"use client";

import { FormEvent, useEffect, useState } from "react";

export default function Signup() {
  const FULL_NAME_MIN_LENGTH = 2;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  function validateFullName(fullName: string = "") {
    if (fullName.trim().length < FULL_NAME_MIN_LENGTH) {
      setError(`Name must be at least ${FULL_NAME_MIN_LENGTH} characters.`);
      return false;
    }
    return true;
  }

  function validateEmail(email: string = "") {
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  }

  function validatePassword(password: string = "") {
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    return true;
  }

  const validateAll = () => {
    if (!validateFullName(fullName)) return false;
    if (!validateEmail(email)) return false;
    if (!validatePassword(password)) return false;

    setError("");
    return true;
  };

  useEffect(() => {
    validateAll(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullName, email, password]);

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    alert("Signup successful (demo)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md p-8  border-2 border-gray-300 rounded-2xl shadow-2xl"
      >
        <h1 className="text-2xl font-semibold mb-6 text-center">Sign up</h1>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <label htmlFor="fullName" className="mb-2 text-sm">
          Full Name
        </label>
        <input
          id="fullName"
          value={fullName}
          onChange={handleFullNameChange}
          placeholder="Please provide your full name"
          className="w-full p-2 mb-4 border rounded-md"
        />

        <label htmlFor="email" className="block mb-2 text-sm">
          Email
        </label>
        <input
          id="email"
          value={email}
          onChange={handleEmailChange}
          // type="email"
          placeholder="you@example.com"
          className="w-full p-2 mb-4 border rounded-md"
        />

        <label className="block mb-2 text-sm">Password</label>
        <input
          value={password}
          onChange={handlePasswordChange}
          type="password"
          placeholder="At least 6 characters"
          className="w-full p-2 mb-4 border rounded-md"
        />

        <button
          className={
            `w-full py-2 text-white rounded-md` +
            (error
              ? " bg-gray-400 cursor-not-allowed"
              : " bg-green-600 hover:bg-green-700")
          }
          type="submit"
          disabled={!!error}
        >
          Sign up
        </button>

        <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <a className="text-blue-600 underline" href="/login">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
