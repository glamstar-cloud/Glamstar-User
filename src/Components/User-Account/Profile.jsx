import React, { useState, useRef } from "react";
import Upload from '../../../Icons/upload.png'

export default function Profile({ name, email, avatar, setAvatar}) {
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(avatar);

  const pickImage = () => fileRef.current.click();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
    setAvatar(url); //send image back to parent
  }

  return (
    <div className="w-full mx-auto border shadow border-gray-300 py-4 px-2 md:w-2xl lg:w-4xl">
      <h1 className="mb-3 font-bold font-poppins">Your Profile</h1>

      {/* Profile Image Section */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={
              preview ||
              "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=User"
            }
            alt="Profile"
            className="w-25 h-25 rounded-full object-cover border"
          />

          <input
            type="file"
            ref={fileRef}
            onChange={handleImageChange}
            className="hidden"
            accept="image/*"
          />
        </div>

        <div>
          {/* Username */}
        <div>
          <div className="font-semibold ">{name}</div>
        </div>

        {/* Email (not editable) */}
        <div>
          <div className="text-xs">{email}</div>
        </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
            onClick={pickImage}
            className="flex items-center gap-1 border border-gray-400  text-xs px-2 py-1 rounded-xl font-medium cursor-pointer"
          ><img src={Upload} alt="Upload to cloud" className="w-4 h-4" />
            Change Avatar
          </button>
      </div>
    </div>
  );
};

