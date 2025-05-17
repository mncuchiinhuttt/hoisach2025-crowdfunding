export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex space-x-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-6 h-6 rounded-full bg-[#DAF8CB] animate-bounce"
            style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: "1s"
            }}
          />
        ))}
      </div>
    </div>
  )
}