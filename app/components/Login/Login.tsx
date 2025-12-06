"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function validateEmail(e: string) {
    return /\S+@\S+\.\S+/.test(e);
  }

  const onSubmit = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setError("");
    // demo action
    alert("Login successful (demo)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow"
      >
        <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <label className="block mb-2 text-sm">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="you@example.com"
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2 text-sm">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="At least 6 characters"
          className="w-full p-2 mb-4 border rounded"
        />

        <button type="submit">Login</button>

        <p className="text-sm mt-4 text-center">
          Don’t have an account?{" "}
          <a className="text-blue-600 underline" href="/signup">
            Signup
          </a>
        </p>
      </form>
    </div>
  );
}
