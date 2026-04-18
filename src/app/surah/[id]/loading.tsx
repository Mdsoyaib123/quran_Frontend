export default function Loading() {
  return (
    <main className="max-w-4xl mx-auto p-4 sm:p-6 animate-pulse">
      {/* Header */}
      <div className="mb-8">
        <div className="h-8 w-2/3 bg-gray-200 rounded-md mb-3"></div>
        <div className="h-4 w-1/3 bg-gray-100 rounded-md"></div>
      </div>

      {/* Verse Skeleton Cards */}
      <div className="space-y-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 space-y-4"
          >
            {/* Arabic line */}
            <div className="flex justify-end">
              <div className="h-8 w-3/4 bg-gray-200 rounded-md"></div>
            </div>

            {/* Translation lines */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded-md"></div>
              <div className="h-4 w-5/6 bg-gray-100 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}