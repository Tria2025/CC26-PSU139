export function LoadingScreen() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50">
      
      {/* Spinner */}
      <div className="h-12 w-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />

      {/* Text */}
      <p className="text-sm font-medium tracking-wide text-slate-600">
        Loading...
      </p>

    </div>
  );
}