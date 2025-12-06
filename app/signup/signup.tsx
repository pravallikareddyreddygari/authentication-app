"use client";
import { useState, FormEvent } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function validateEmail(e: string) {
    return /\S+@\S+\.\S+/.test(e);
  }

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (name.trim().length < 5) {
      setError("Name must be at least 5 characters.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setError("");
    // demo action
    alert("Signup successful (demo)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow"
      >
        <h1 className="text-2xl font-semibold mb-6 text-center">Signup</h1>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <label className="block mb-2 text-sm">Full name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your full name"
          className="w-full p-2 mb-4 border rounded"
        />

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

        <button className="w-full py-2 bg-green-600 text-white rounded">
          Signup
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
