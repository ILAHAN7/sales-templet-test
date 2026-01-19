import { Skeleton } from '@/components/Skeleton';

export default function FounderLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6D3] to-white">
      {/* Navbar Skeleton */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Skeleton className="h-8 w-32" />
            <div className="hidden md:flex gap-4">
              <Skeleton className="h-10 w-20" />
              <Skeleton className="h-10 w-20" />
              <Skeleton className="h-10 w-20" />
              <Skeleton className="h-10 w-20" />
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <div className="w-full max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-14 w-80 mx-auto" />
            <Skeleton className="h-6 w-96 mx-auto max-w-full" />
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-12 mb-16">
            {/* Profile Image */}
            <div className="w-full lg:w-1/3">
              <Skeleton className="w-full aspect-square rounded-3xl" />
            </div>

            {/* Bio */}
            <div className="w-full lg:w-2/3 space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-br from-[#3E2723] to-[#8D4004] text-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <Skeleton className="h-10 w-40 mb-6 bg-white/20" />
            <Skeleton className="h-6 w-full mb-3 bg-white/20" />
            <Skeleton className="h-6 w-5/6 bg-white/20" />
          </div>

          {/* Credentials */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <Skeleton className="h-10 w-48 mb-8 mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-start gap-3">
                  <Skeleton className="w-6 h-6 mt-1" variant="circular" />
                  <Skeleton className="h-5 flex-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Skeleton className="h-14 w-48 mx-auto rounded-lg" />
          </div>
        </div>
      </main>
    </div>
  );
}
