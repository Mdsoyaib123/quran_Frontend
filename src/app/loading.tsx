export default function Loading() {
  return (
    <main className="max-w-5xl mx-auto p-4 sm:p-6 animate-pulse">
      {/* Title */}
      <div className="h-8 w-52 bg-gray-200 rounded-md mb-6"></div>

      {/* Grid Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-white shadow border border-gray-100"
          >
            <div className="flex justify-between items-center gap-4">
              <div className="flex-1 space-y-3">
                <div className="h-5 w-40 bg-gray-200 rounded-md"></div>
                <div className="h-4 w-24 bg-gray-100 rounded-md"></div>
              </div>

              <div className="h-8 w-16 bg-gray-200 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}