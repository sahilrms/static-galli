export default function Sticker({
  text,
  image,
  className = "",
}) {
  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      
      {/* Black sticker box */}
      <div
        className="
          bg-black/70
          border
          border-white/20
          backdrop-blur-md
          px-4
          py-3
          rounded-xl
          rotate-[-6deg]
          text-center
          uppercase
          font-bold
          shadow-xl
        "
      >
        {text}
      </div>

      {/* Image below sticker */}
      {image && (
        <img
          src={image}
          alt=""
             className="hidden md:block w-48 h-48 mt-2 ml-4 rotate-[-6deg] object-contain"
        />
      )}
    </div>
  );
}
