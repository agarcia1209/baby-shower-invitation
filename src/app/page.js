"use client";

import { useState, useEffect, useRef } from "react";
import { Calendar, MapPin, Gift, Clock } from "lucide-react";

export default function BabyShowerInvitation() {
  const targetDate = "2026-11-14T15:00:00";
  const [timeLeft, setTimeLeft] = useState({});
  const [hasEntered, setHasEntered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      let tempTime = {};

      if (difference > 0) {
        tempTime = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        };
      }
      return tempTime;
    };

    setTimeLeft(calculateTime());
    const timer = setInterval(() => setTimeLeft(calculateTime()), 60000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const handleEnterSite = () => {
    setHasEntered(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch((error) => {
        console.log("Autoplay audio handling:", error);
      });
    }
  };

  return (
    <div className="min-h-screen text-[#8c7b74] font-sans selection:bg-[#fae6e9] relative overflow-x-hidden">
      {/* 🌟 OVERLAY ENTRY SCREEN */}
      {!hasEntered && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#fdf6f6] to-[#fffbf7] p-4 text-center">
          <div className="max-w-md mx-auto space-y-6 bg-white/40 backdrop-blur-md p-10 rounded-3xl border border-[#e6b4bc]/40 shadow-sm animate-fade-in">
            <span className="font-cursive text-5xl md:text-6xl text-[#e6b4bc] block">
              Un pequeño sueño está a punto de hacerse realidad...
            </span>
            <p className="text-[#8c7b74]/70 font-light tracking-wide text-sm">
              Haz clic abajo para abrir la invitación de baby Alicia
            </p>
            <button
              onClick={handleEnterSite}
              className="bg-[#b38b72] hover:bg-[#9c765f] text-white text-md font-bold tracking-wider uppercase px-12 py-4 rounded-full shadow-md hover:scale-[1.02] transition-all duration-300 ease-out"
            >
              Abrir Invitación
            </button>
          </div>
        </div>
      )}

      {/* FULL SCREEN LOOPING VIDEO BACKGROUND */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden select-none pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={!hasEntered}
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bunny-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* 1. HERO SECTION */}
      <header className="relative flex flex-col items-center justify-center text-center px-4 pt-48 md:pt-64 pb-16 max-w-3xl mx-auto z-10">
        <span className="font-cursive text-5xl md:text-7xl text-[#e6b4bc] pt-10 font-bold mb-4 block drop-shadow-xs">
          Un cuento de amor está por comenzar...
        </span>

        <h1 className="text-4xl md:text-6xl font-serif text-[#b38b72] font-extrabold tracking-tight mb-6 mt-2 leading-tight">
          Alicia's Baby shower
        </h1>

        <p className="text-md md:text-xl text-[#8c7b74] max-w-xl mx-auto mb-12 tracking-wide leading-relaxed font-light bg-white/30 backdrop-blur-xs px-6 py-3 rounded-2xl inline-block border border-white/50">
          Una dulce espera está llegando a su momento más bonito... Nuestra
          pequeña Alicia está en camino, y queremos celebrar contigo este amor
          que ya llena nuestros corazones.
        </p>

        {/* Countdown */}
        <div className="flex gap-4 justify-center my-4 w-full max-w-md">
          {Object.keys(timeLeft).length > 0 ? (
            Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="flex flex-col items-center bg-white/30 backdrop-blur-md p-5 rounded-2xl shadow-xs border border-[#e6b4bc]/30 flex-1"
              >
                <span className="text-3xl md:text-4xl font-bold text-[#e6b4bc]">
                  {value}
                </span>
                <span className="text-xxs uppercase tracking-widest text-[#bfaea7] font-bold mt-1">
                  {unit}
                </span>
              </div>
            ))
          ) : (
            <div className="text-2xl font-medium text-[#e6b4bc] font-cursive bg-white/80 backdrop-blur-md px-10 py-5 rounded-2xl shadow-xs">
              ¡Llegó el gran día! 🎉
            </div>
          )}
        </div>

        <a
          href="#rsvp"
          className="mt-12 bg-[#b38b72]/90 hover:bg-[#9c765f] text-white text-sm font-semibold tracking-wider uppercase px-10 py-4 rounded-full shadow-sm hover:scale-[1.01] transition-all duration-200 ease-out"
        >
          Confirmar asistencia
        </a>
      </header>

      <main className="max-w-4xl mx-auto px-4 pb-24 space-y-12 relative z-10">
        {/* 2. EVENT DETAILS CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date & Time */}
          <div className="bg-white/30 backdrop-blur-md p-8 rounded-3xl shadow-xs border border-white/50 flex items-start space-x-5 transition-all duration-300 hover:shadow-sm">
            <div className="bg-[#fcf0f2]/80 p-4 rounded-xl text-[#e6b4bc] shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#b38b72] mb-2">
                Fecha
              </h3>
              <p className="text-[#5c4c45] text-lg font-semibold">
                Sábado, 14 de Noviembre 2026
              </p>
              <p className="text-[#8c7b74] text-md mt-1">3:00 PM</p>
              <button
                onClick={() => {
                  const gCalUrl =
                    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
                    "&text=" +
                    encodeURIComponent("Baby Shower Celebration - Alicia") +
                    "&dates=20261114T150000/20261114T190000" +
                    "&ctz=" +
                    encodeURIComponent("America/Medellin") +
                    "&details=" +
                    encodeURIComponent(
                      "Una dulce espera está llegando a su momento más bonito... Nuestra pequeña Alicia está en camino, y queremos celebrar contigo este amor que ya llena nuestros corazones.",
                    ) +
                    "&location=" +
                    encodeURIComponent("Cra 48 #16 A Sur - 43");

                  window.open(gCalUrl, "_blank");
                }}
                className="text-sm text-[#e6b4bc] font-bold mt-4 flex items-center hover:underline cursor-pointer"
              >
                <Clock className="w-4 h-4 mr-1.5" /> Agregar al Calendario
              </button>
            </div>
          </div>
          {/* Location */}
          <div className="bg-white/30 backdrop-blur-md p-8 rounded-3xl shadow-xs border border-white/50 flex items-start space-x-5 transition-all duration-300 hover:shadow-sm">
            <div className="bg-[#fcf0f2]/80 p-4 rounded-xl text-[#e6b4bc] shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#b38b72] mb-2">
                Lugar
              </h3>
              <p className="text-[#5c4c45] text-lg font-semibold">
                Cra 48 # 16 A Sur-43
              </p>
              <p className="text-[#8c7b74] text-md"> Azuleda del Campestre</p>
              <a
                href="https://maps.app.goo.gl/mrb4vgi4qgYGGBME8?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#e6b4bc] font-bold mt-4 inline-flex items-center hover:underline"
              >
                Abrir en Google Maps →
              </a>
            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE REGISTRY HUB */}
        <section className="bg-white/30 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/50 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-[#fcf0f2]/80 p-4 rounded-full text-[#e6b4bc]">
              <Gift className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-3xl font-serif font-bold text-[#b38b72] mb-1">
            Lista de Regalos
          </h2>
          <p className="font-cursive text-4xl text-[#e6b4bc] mb-4 block">
            Regalos & Deseos
          </p>
          <p className="text-[#8c7b74] max-w-md mx-auto mb-10 text-md leading-relaxed">
            Tu compañía será el regalo más bonito para celebrar la llegada de nuestra bebé. Si deseas tener un detalle con ella, hemos preparado una lista de regalos con mucho cariño
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center max-w-2xl mx-auto">
            <a
              href="https://www.amazon.com/baby-reg/alicia-estrada-november-2026-envigado/320WJKV5ZLHZM?ref_=cm_sw_r_apann_dp_K66WN28R4SEMT3J04CKP&language=en-US"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white/80 rounded-2xl border border-neutral-100 shadow-2xs font-semibold text-[#8c7b74] hover:border-[#e6b4bc] hover:text-[#e6b4bc] hover:-translate-y-0.5 transition-all duration-200 text-md"
            >
              Amazon Registry
            </a>
            <a
              href="https://www.walmart.ca/en/registry/BR/e05248b2-614c-44c8-a061-a25f57e734c3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white/80 rounded-2xl border border-neutral-100 shadow-2xs font-semibold text-[#8c7b74] hover:border-[#e6b4bc] hover:text-[#e6b4bc] hover:-translate-y-0.5 transition-all duration-200 text-md"
            >
              Walmart
            </a>
            <a
              href="https://www.westcoastkids.ca/giftregistry/view/index/id/QL9WUN/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white/80 rounded-2xl border border-neutral-100 shadow-2xs font-semibold text-[#8c7b74] hover:border-[#e6b4bc] hover:text-[#e6b4bc] hover:-translate-y-0.5 transition-all duration-200 text-md"
            >
              WestCoast Kids
            </a>
          </div>
        </section>

        {/* 4. RSVP CONTAINER */}
        <section
          id="rsvp"
          className="bg-[#b38b72]/85 text-white p-10 md:p-16 rounded-3xl shadow-md text-center relative overflow-hidden"
        >
          <div className="relative z-10 max-w-md mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-2">
              Confirmar asistencia
            </h2>
            <p className="font-cursive text-4xl text-[#f5d5db] mb-4">
              ¡Te Esperamos!
            </p>

            <RsvpForm />
          </div>
        </section>
      </main>
    </div>
  );
}

function RsvpForm() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    setStatus("submitting");

    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbxiwO9voJaxjbUbAPekB1PgSFYtdPdK0Yd8lqsmW86r-OlfLbcsc3vFDxtlNCan--c/exec";

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim() }),
      });

      setStatus("success");
      setName("");
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white/10 backdrop-blur-xs p-6 rounded-2xl border border-white/20">
        <p className="text-xl font-semibold text-[#f5d5db]">¡Muchas gracias!</p>
        <p className="text-sm text-white/90 mt-1">
          Tu asistencia ha sido registrada con éxito. 💕
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ingresa tu nombre completo"
        disabled={status === "submitting"}
        required
        className="w-full bg-white text-[#5c4c45] placeholder-neutral-400 text-md px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e6b4bc] transition-all duration-200 disabled:opacity-50"
      />

      {status === "error" && (
        <p className="text-xs text-[#f5d5db] font-semibold text-left pl-1">
          Hubo un problema. Por favor intenta de nuevo.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting" || !name.trim()}
        className="w-full bg-white text-[#b38b72] text-md font-bold py-4 px-8 rounded-xl hover:bg-[#fcf0f2] active:scale-[0.99] transition-all shadow-xs disabled:opacity-50"
      >
        {status === "submitting" ? "Enviando..." : "Confirmar Asistencia"}
      </button>
    </form>
  );
}