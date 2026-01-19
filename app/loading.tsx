import { Skeleton } from '@/components/Skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6D3] to-white">
      {/* Navbar Skeleton */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Skeleton className="h-8 w-32" />
            <div className="flex gap-4">
              <Skeleton className="h-10 w-20" />
              <Skeleton className="h-10 w-20" />
              <Skeleton className="h-10 w-20" />
              <Skeleton className="h-10 w-20" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section Skeleton */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-16">
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="w-full flex flex-col items-center justify-center text-center space-y-8">
            <Skeleton className="h-16 w-96 max-w-full" />
            <Skeleton className="h-8 w-64 max-w-full" />
            <Skeleton className="h-14 w-48 rounded-lg" />
            
            {/* Business Card Skeleton */}
            <div className="mt-20 w-full max-w-md">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#F5E6D3]">
                <div className="flex items-center gap-6">
                  <Skeleton className="w-20 h-20" variant="circular" />
                  <div className="flex-1 space-y-3">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections Skeleton */}
      <section className="w-full py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-12 w-64 mx-auto" />
            <Skeleton className="h-6 w-48 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
