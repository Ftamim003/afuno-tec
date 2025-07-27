"use client";

import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

type GuestType = {
  name: string;
  id: string;
  phone: string;
  email: string;
  country: string;
  status: string;
};

type EditGuestModalProps = {
  isOpen: boolean;
  onClose: () => void;
  guestData: GuestType | null;
  onSave: (updatedGuest: GuestType) => void;
};

const EditGuestModal: React.FC<EditGuestModalProps> = ({
  isOpen,
  onClose,
  guestData,
  onSave,
}) => {
  const [formData, setFormData] = useState<GuestType>({
    name: "",
    id: "",
    phone: "",
    email: "",
    country: "",
    status: "",
  });

  useEffect(() => {
    if (guestData) setFormData(guestData);
  }, [guestData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-[90%] md:w-[600px] p-6 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-[#8A8A8A]">Edit Guest</h2>
          <button onClick={onClose} className="cursor-pointer">
            <IoMdClose size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="space-y-4">
  {/* Guest Name & ID Card */}
  <div className="flex gap-2">
    <div className="w-full">
      <p className="mb-1 text-[#292D32]">Guest Name</p>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md bg-[#F0EEEE]"
        placeholder="Name"
      />
    </div>
    <div className="w-full">
      <p className="mb-1 text-[#292D32]">ID Card</p>
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded bg-[#F0EEEE]"
        placeholder="ID Card"
      />
    </div>
  </div>

  {/* Phone & Email */}
  <div className="flex gap-2">
    <div className="w-full">
      <p className="mb-1 text-[#292D32]">Phone Number</p>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded bg-[#F0EEEE]"
        placeholder="Phone"
      />
    </div>
    <div className="w-full">
      <p className="mb-1 text-[#292D32]">Email</p>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded bg-[#F0EEEE]"
        placeholder="Email"
      />
    </div>
  </div>

  {/* Country & Status */}
  <div className="flex gap-2">
    <div className="w-full">
      <p className="mb-1 text-[#292D32]">Country</p>
      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded bg-[#F0EEEE]"
      >
        <option value="">Select Country</option>
        <option value="Bangladesh">Bangladesh</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>
    </div>

    <div className="w-full">
      <p className="mb-1">Status</p>
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded bg-[#F0EEEE]"
      >
        <option value="">Select Status</option>
        <option value="Single">Single</option>
        <option value="Married">Married</option>
        <option value="Divorced">Divorced</option>
      </select>
    </div>
  </div>
</div>


          <div className="flex justify-end mt-6">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditGuestModal;
