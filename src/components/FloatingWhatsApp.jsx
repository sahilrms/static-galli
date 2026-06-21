import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp({
  phone
}) {

  const whatsappUrl =
    `https://wa.me/${phone.replace(/\D/g, "")}`;

  return (

    <a
      href={whatsappUrl}
      target="_blank"
      className="
      fixed
      bottom-6
      right-6
      z-[999]
      bg-green-500
      text-white
      p-4
      rounded-full
      shadow-2xl
      hover:scale-110
      transition
      "
    >

      <MessageCircle size={30} />

    </a>

  );
}