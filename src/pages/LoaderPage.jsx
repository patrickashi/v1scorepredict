export default function LoaderPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0920]">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">Loading...</h1>
      {/* Skeleton UI */}
      <div className="w-full max-w-xl space-y-6">
        <div className="h-10 bg-[#181730] rounded-lg animate-pulse" />
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-[#181730] rounded-full animate-pulse" />
          <div className="flex-1 h-8 bg-[#181730] rounded-lg animate-pulse" />
          <div className="w-16 h-16 bg-[#181730] rounded-full animate-pulse" />
        </div>
        <div className="h-8 bg-[#181730] rounded-lg animate-pulse" />
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#181730] rounded-full animate-pulse" />
              <div className="flex-1 h-6 bg-[#181730] rounded-lg animate-pulse" />
              <div className="w-20 h-6 bg-[#181730] rounded-lg animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}