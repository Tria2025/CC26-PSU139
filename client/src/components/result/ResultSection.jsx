import { Sparkles } from 'lucide-react';

import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { JobCard } from './JobCard';

export function ResultSection({
  results,
  onBack,
  onAnalyzeNew,
}) {
  if (!results?.length) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">

        <Navbar />

        <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl font-bold mb-4">
            Belum Ada Hasil Analisis
          </h1>

          <p className="text-gray-500 mb-8">
            Upload CV terlebih dahulu
            untuk mendapatkan
            rekomendasi karier.
          </p>

          <button
            onClick={onAnalyzeNew}
            className="primary-button"
          >
            Mulai Analisis
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12 flex-1 w-full">
        {/* BREADCRUMB */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <button
            onClick={onBack}
            className="transition hover:text-blue-600"
          >
            Home
          </button>

          <span>/</span>

          <button
            onClick={onAnalyzeNew}
            className="transition hover:text-blue-600"
          >
            Analyze CV
          </button>

          <span>/</span>

          <span className="font-medium text-slate-700">
            Result
          </span>
        </div>

        <div className="relative overflow-hidden rounded-[36px] border border-white/40 bg-white/70 p-8 shadow-xl backdrop-blur-xl md:p-10">
          {/* Glow */}
          <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="relative z-10">

            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                <Sparkles className="h-4 w-4" />
                CareerPath AI Result
              </div>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Rekomendasi Karier
              </h1>

              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Berikut hasil analisis AI terhadap CV Anda berdasarkan skill, pengalaman, dan potensi karier terbaik.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          {results.length > 0 ? (
            <div className="grid gap-6">
              {results.map(
                (job) => (
                  <JobCard
                    key={
                      job.id ||
                      `${job.title}-${job.location}`
                    }
                    job={job}
                  />
                )
              )}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              Tidak ada rekomendasi pekerjaan ditemukan.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}