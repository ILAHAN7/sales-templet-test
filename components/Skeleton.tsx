interface SkeletonProps {
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text';
  animation?: 'pulse' | 'wave';
  style?: React.CSSProperties;
}

export function Skeleton({ 
  className = '', 
  variant = 'rectangular',
  animation = 'pulse',
  style
}: SkeletonProps) {
  const baseClasses = 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]';
  
  const animationClasses = animation === 'wave' 
    ? 'animate-[wave_1.5s_ease-in-out_infinite]' 
    : 'animate-pulse';
  
  const variantClasses = {
    rectangular: 'rounded-md',
    circular: 'rounded-full',
    text: 'rounded h-4',
  };

  return (
    <div 
      className={`${baseClasses} ${animationClasses} ${variantClasses[variant]} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="w-full bg-white rounded-3xl shadow-lg overflow-hidden">
      <Skeleton className="w-full aspect-square" variant="rectangular" />
      <div className="p-6">
        <Skeleton className="h-8 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-5" />
        <div className="space-y-2 mb-6">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
    </div>
  );
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton 
          key={i} 
          className="h-4" 
          style={{ width: i === lines - 1 ? '85%' : '100%' }}
        />
      ))}
    </div>
  );
}

export function SkeletonButton() {
  return <Skeleton className="h-12 w-32 rounded-lg" />;
}

export function SkeletonAvatar({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
  };
  
  return <Skeleton className={sizeClasses[size]} variant="circular" />;
}
