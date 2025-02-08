"use client";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="border p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Log In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Username or Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div className="flex items-center">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        <button type="submit" className="w-full bg-black text-white py-2 rounded-md">
          Log In
        </button>
      </form>
    </div>
  );
}
