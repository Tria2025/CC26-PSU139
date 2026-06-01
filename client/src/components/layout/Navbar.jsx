import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

/* =========================
   Data Navigasi
========================= */
const navLinks = [
  { label: 'Home', type: 'section', target: 'home' },
  { label: 'About', type: 'section', target: 'about' },
  { label: 'Workflow', type: 'section', target: 'workflow' },
  { label: 'Team', type: 'page', target: '/team' },
  { label: 'Contact', type: 'page', target: '/contact' },
];

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  /* =========================
     Handle Navigasi
  ========================= */
  const handleNavigate = ({
    type,
    target,
  }) => {

    /* Jika menuju section */
    if (type === 'section') {

      /* Jika bukan landing page */
      if (location.pathname !== '/') {

        navigate('/', {
          state: {
            scrollTo: target,
          },
        });

      } else {

        /* Scroll ke section */
        document
          .getElementById(target)
          ?.scrollIntoView({
            behavior: 'smooth',
          });

      }

    } else {

      /* Jika menuju halaman */
      navigate(target);

    }

    /* Tutup mobile menu */
    setMobileOpen(false);
  };

  /* =========================
     Tutup Mobile Menu
     Saat Desktop
  ========================= */
  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }

    };

    window.addEventListener(
      'resize',
      handleResize
    );

    return () =>
      window.removeEventListener(
        'resize',
        handleResize
      );

  }, []);

  /* =========================
     Lock Scroll Saat
     Mobile Menu Aktif
  ========================= */
  useEffect(() => {

    document.body.style.overflow =
      mobileOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow =
        'auto';
    };

  }, [mobileOpen]);

  return (
    <>
      {/* =========================
          Navbar
      ========================= */}
      <nav className="sticky top-0 z-50">

        <div className="container-custom pt-5">

          <div className="flex items-center justify-between px-5 py-3 rounded-3xl border border-white/30 bg-white/65 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)]">

            {/* =========================
                Logo
            ========================= */}
            <button
              onClick={() =>
                handleNavigate({
                  type: 'section',
                  target: 'home',
                })
              }
              className="flex items-center gap-3"
            >

              <img
                src="/careerpath-icon.png"
                alt="CareerPath AI"
                className="w-11 h-11 object-contain"
              />
              
              <h1 className="text-2xl font-bold text-slate-900">
                CareerPath AI
              </h1>

            </button>

            {/* =========================
                Desktop Menu
            ========================= */}
            <div className="hidden md:flex items-center gap-2">

              {navLinks.map((item, index) => {

                const isActive =
                  item.type === 'page' &&
                  location.pathname === item.target;

                return (
                  <div
                    key={item.label}
                    className="flex items-center"
                  >

                    {/* Item Menu */}
                    <button
                      onClick={() =>
                        handleNavigate(item)
                      }
                      className={`
                        px-5 py-2 rounded-2xl text-sm font-medium transition-all duration-300
                        ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                            : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                        }
                      `}
                    >
                      {item.label}
                    </button>

                    {/* Divider setelah Workflow */}
                    {index === 2 && (
                      <div className="w-px h-6 bg-slate-300 mx-3" />
                    )}

                  </div>
                );
              })}

              {/* Tombol CTA */}
              <button
                onClick={() =>
                  navigate('/analyze')
                }
                className="ml-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-300/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-300/40 active:scale-95"
              >
                Analyze CV
              </button>

            </div>

            {/* =========================
                Tombol Mobile
            ========================= */}
            <button
              onClick={() =>
                setMobileOpen(
                  !mobileOpen
                )
              }
              className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition"
            >

              {mobileOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}

            </button>

          </div>

        </div>

      </nav>

      {/* =========================
          Overlay Mobile
      ========================= */}
      <div
        onClick={() =>
          setMobileOpen(false)
        }
        className={`
          fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden
          transition-all duration-300
          ${
            mobileOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible'
          }
        `}
      />

      {/* =========================
          Mobile Menu
      ========================= */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[290px]
          bg-white/80 backdrop-blur-2xl
          border-l border-white/20
          shadow-2xl z-50 md:hidden
          transition-transform duration-300
          ${
            mobileOpen
              ? 'translate-x-0'
              : 'translate-x-full'
          }
        `}
      >

        <div className="p-6 flex flex-col gap-3">

          {/* Tombol Close */}
          <div className="flex justify-end mb-3">

            <button
              onClick={() =>
                setMobileOpen(false)
              }
              className="p-2 rounded-xl hover:bg-slate-100"
            >

              <X className="w-6 h-6 text-slate-700" />

            </button>

          </div>

          {/* Menu Navigasi */}
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() =>
                handleNavigate(item)
              }
              className="w-full text-left px-5 py-3 rounded-2xl text-slate-700 font-medium transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
            >
              {item.label}
            </button>
          ))}

          {/* Tombol CTA */}
          <button
            onClick={() =>
              navigate('/analyze')
            }
            className="mt-4 w-full px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-300/40 transition-all duration-300 hover:scale-[1.02]"
          >
            Analyze CV
          </button>

        </div>

      </div>
    </>
  );
}