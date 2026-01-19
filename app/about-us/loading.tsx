import { Skeleton } from '@/components/Skeleton';

export default function AboutUsLoading() {
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
        <div className="w-full max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <Skeleton className="h-14 w-80 mx-auto" />
            <Skeleton className="h-6 w-96 mx-auto max-w-full" />
          </div>

          {/* Origin Story */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <Skeleton className="h-10 w-64 mb-6" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-[#3E2723] to-[#8D4004] text-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <Skeleton className="h-10 w-64 mb-6 bg-white/20" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full bg-white/20" />
              <Skeleton className="h-4 w-full bg-white/20" />
              <Skeleton className="h-4 w-5/6 bg-white/20" />
              <Skeleton className="h-4 w-full bg-white/20" />
            </div>
          </div>

          {/* Values */}
          <div className="mb-12">
            <Skeleton className="h-10 w-64 mb-8 mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <Skeleton className="w-16 h-16 mx-auto mb-4" variant="circular" />
                  <Skeleton className="h-6 w-32 mx-auto mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mx-auto" />
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="bg-[#F5E6D3]/50 rounded-2xl p-8 mb-12">
            <Skeleton className="h-8 w-96 mx-auto max-w-full" />
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
