"use client";

import { FormEvent, useEffect } from "react";
import { setUserLoggedInStatus, users } from "../data/users";

import Link from "next/link";
import { useRouter } from "next/navigation";
import useValidation from "../hooks/useValidation";

export default function Login() {
  const router = useRouter();

  const {
    email,
    password,
    validateEmail,
    validatePassword,
    error,
    setError,
    handleEmailChange,
    handlePasswordChange,
  } = useValidation();

  const validateAll = () => {
    if (!validateEmail(email)) return false;
    if (!validatePassword(password)) return false;

    setError("");
    return true;
  };

  useEffect(() => {
    validateAll(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      alert("Login successful (demo)");
      setUserLoggedInStatus(true);
      router.push("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to the Authentication App!
      </h1>
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md p-8 border-2 border-gray-300 rounded-2xl shadow-2xl"
      >
        <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <label htmlFor="email" className="block mb-2 text-sm">
          Email
        </label>
        <input
          id="email"
          value={email}
          autoComplete="off"
          onChange={handleEmailChange}
          placeholder="you@example.com"
          className="w-full p-2 mb-4 border rounded-md"
        />

        <label className="block mb-2 text-sm">Password</label>
        <input
          value={password}
          autoComplete="off"
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
              : " bg-blue-600 hover:bg-blue-700")
          }
          type="submit"
          disabled={!!error}
        >
          Login
        </button>

        <p className="text-sm mt-4 text-center">
          Don`t have an account?{" "}
          <Link className="text-blue-600 underline" href="/signup">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
