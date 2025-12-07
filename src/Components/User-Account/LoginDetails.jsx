// LoginDetails.jsx
import React, { useState } from "react";

export default function LoginDetails({ name, email, password, setName, setEmail, setPassword,  }) {
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState("");
  const [msg, setMsg] = useState("");

  const saveChanges = (e) => {
    e.preventDefault();

    setName(newName);
    setEmail(newEmail);
    setPassword(newPassword);
    setMsg("Updated successfully!");
  };

  return (
    <div className="w-full mx-auto border shadow border-gray-300 py-4 px-2 md:w-2xl lg:w-4xl">
      <h2 className="my-3 font-bold font-poppins">Login Details</h2>

      <form onSubmit={saveChanges}>
      <div className="space-y-3 md:flex md:gap-3">
        <div className="space-x-2">
          <label className="font-semibold">Username</label>
          <input
            className="border rounded-sm pl-2 py-0.5 border-gray-400 text-gray-800"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>

        <div className="space-x-2">
          <label className="font-semibold">Email Address</label>
          <input
            type="email"
            className="border rounded-sm pl-2 border-gray-400 text-gray-800 py-0.5"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>

        <div className="space-x-2">
          <label className="font-semibold">Password</label>
          <input
            type="password"
            className="border rounded-sm pl-2 border-gray-400 text-gray-800 py-0.5"
            value={password}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
      </div>

        <div className="flex justify-end">
          <button className="bg-red-800 text-white mt-4 py-1 px-2 font-semibold rounded-md">
          Save Changes
        </button>
        </div>

        {msg && <p className="text-sm text-green-600 mt-2">{msg}</p>}
      </form>
    </div>
  );
};


