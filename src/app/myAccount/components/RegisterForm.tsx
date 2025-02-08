"use client";
import { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="border p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <p className="text-sm text-gray-500">
          A link to set a new password will be sent to your email.
        </p>

        <button type="submit" className="w-full bg-black text-white py-2 rounded-md">
          Register
        </button>
      </form>
    </div>
  );
}
