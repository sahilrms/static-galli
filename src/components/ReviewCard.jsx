export default function ReviewCard({
  review
}) {

  return (
    <div
      className="
      glass
      rounded-3xl
      p-8
      h-full
      "
    >

      <div className="text-2xl mb-4">
        {"⭐".repeat(review.rating)}
      </div>

      <p className="text-zinc-300">
        "{review.text}"
      </p>

      <div className="mt-6 font-semibold">
        — {review.name}
      </div>

    </div>
  );
}