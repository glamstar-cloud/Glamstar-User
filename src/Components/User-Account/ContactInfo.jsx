import React, { useState } from 'react'

export default function ContactInfo({phone, location, gender, setPhone, setLocation, setGender}) {
  const [newPhone, setNewPhone] = useState(phone);
  const [newLocation, setNewLocation] = useState(location);
  const [newGender, setNewGender] = useState(gender);
  const [msg, setMsg] = useState("")

  const saveChanges = (e) => {
    e.preventDefault();

    setPhone(newPhone);
    setLocation(newLocation);
    setGender(newGender);
    setMsg("Updated successfully!");
  };
  return (
  <>
    <div className="w-full mx-auto border shadow border-gray-300 py-4 px-2 md:w-2xl lg:w-4xl">
      <h2 className="my-3 font-bold font-poppins">Other Informations</h2>

      <form onSubmit={saveChanges}>
        <div className="space-y-3 md:flex md:gap-3">
          <div className="space-x-2">
            <label className="font-semibold">Phone Number</label>
            <input
            className="border rounded-sm pl-2 py-0.5 border-gray-400 text-gray-800"
            type='tel'
              value={newPhone}
              onChange={(e) => setNewPhone(e.target.value)}
            />
          </div>

          <div className="space-x-2">
            <label className="font-semibold">Location</label>
            <input
            className="border rounded-sm pl-2 border-gray-400 text-gray-800 py-0.5"
              value={newLocation}
              onChange={(e) => setNewLocation(e.target.value)}
            />
          </div>

          <div className="space-x-2">
            <label className="font-semibold">Gender</label>
          <div className="flex gap-5">
  {/* Male */}
  <label className="flex items-center gap-1">
    <span>Male</span>
    <input
      type="radio"
      name="gender"
      value="male"
      checked={newGender === "male"}
      onChange={(e) => setNewGender(e.target.value)}
      className="cursor-pointer"
    />
  </label>

  {/* Female */}
  <label className="flex items-center gap-1">
    <span>Female</span>
    <input
      type="radio"
      name="gender"
      value="female"
      checked={newGender === "female"}
      onChange={(e) => setNewGender(e.target.value)}
      className="cursor-pointer"
    />
  </label>
</div>

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
  </>
  )
}
