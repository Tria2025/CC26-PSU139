import heroImage from '../../assets/hero.png';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="container-custom scroll-mt-24 pt-4 pb-14 grid lg:grid-cols-2 gap-8 items-center min-h-[85vh]"
    >
      {/* LEFT CONTENT */}
      <div>

        {/* Badge */}
        <div className="inline-flex items-center px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-7 shadow-sm">
          Future Ready Work & Economy
        </div>

        {/* HERO TITLE */}
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-slate-900 max-w-4xl">

          <span className="block">
            Temukan
          </span>

          {/* Highlight Gradient */}
          <span className="block bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent pb-2">
            Karier Impian
          </span>

          {/* Typing Animation */}
          <span className="block text-slate-900 mt-1">

            <TypeAnimation
              sequence={[
                'dengan AI',
                2000,

                'untuk Masa Depanmu',
                2000,

                'berbasis Teknologi Modern',
                2000,

                'sesuai Skill dan Passion',
                2000,
              ]}
              wrapper="span"
              speed={65}
              deletionSpeed={45}
              repeat={Infinity}
              cursor={true}
              className="inline-block"
            />

          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl">
          Upload CV Anda dan dapatkan rekomendasi pekerjaan terbaik
          berdasarkan skill, pengalaman, dan teknologi AI modern.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 mt-8">

          <button
            onClick={() => navigate('/analyze')}
            className="hero-primary-button"
          >
            <span>Mulai Analisis CV</span>
          </button>

          <button
            onClick={() => {
              document
                .getElementById('workflow')
                ?.scrollIntoView({
                  behavior: 'smooth',
                });
            }}
            className="hero-secondary-button"
          >
            <span>Cara Kerja</span>
          </button>

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="relative">

        {/* Glow */}
        <div className="absolute inset-0 bg-blue-300 opacity-30 blur-3xl rounded-full animate-pulse" />

        {/* Floating Blur */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-200/40 rounded-full blur-3xl animate-bounce" />

        {/* Hero Image */}
        <img
          src={heroImage}
          alt="Hero"
          className="relative rounded-[40px] shadow-2xl hover:scale-[1.02] transition-transform duration-500"
        />

      </div>

    </section>
  );
}