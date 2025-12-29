"use client";

import toast from "react-hot-toast";

export default function CopyEmail() {
  const email = "12cargo@12cargo.ru";

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(email);
    toast.success("Email скопирован");
  };

  return (
    <span
      onClick={copyToClipboard}
      className="cursor-pointer hover:text-red-600 text-blue-800 font-bold"
    >
      {email}
    </span>
  );
}
