import { Skeleton } from '@/components/Skeleton';

export default function ProductDetailLoading() {
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
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product Image Skeleton */}
            <div className="w-full lg:w-1/2">
              <Skeleton className="w-full aspect-square rounded-3xl" />
            </div>

            {/* Product Details Skeleton */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#F5E6D3]">
                {/* Title */}
                <Skeleton className="h-12 w-3/4 mb-6" />
                
                {/* Description */}
                <div className="space-y-3 mb-8">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-5/6" />
                </div>

                {/* Features Section */}
                <div className="mb-8">
                  <Skeleton className="h-8 w-40 mb-4" />
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Skeleton className="w-5 h-5 mt-1" variant="circular" />
                        <Skeleton className="h-5 flex-1" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Perfect For Section */}
                <div className="border-t border-[#F5E6D3] pt-6 mb-8">
                  <Skeleton className="h-7 w-32 mb-4" />
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <Skeleton key={i} className="h-9 w-24 rounded-full" />
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4">
                  <Skeleton className="flex-1 h-14 rounded-lg" />
                  <Skeleton className="flex-1 h-14 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
