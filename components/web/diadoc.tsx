"use client";

import toast from "react-hot-toast";

export default function CopyEmail() {
  const diadoc = "2BM-1656119812-165601001-202109011022152610084";

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(diadoc);
    toast.success("Diadoc скопирован");
  };

  return (
    <span
      onClick={copyToClipboard}
      className="cursor-pointer hover:text-red-600 text-blue-800"
    >
      {diadoc}
    </span>
  );
}
