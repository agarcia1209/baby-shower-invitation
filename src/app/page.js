"use client";

import { useState, useEffect, useRef } from "react";
import { Calendar, MapPin, Gift, Clock } from "lucide-react";

export default function BabyShowerInvitation() {
  const targetDate = "2026-07-25T16:00:00";
  const [timeLeft, setTimeLeft] = useState({});
  const [hasEntered, setHasEntered] = useState(false); // Controls the entry screen
  const videoRef = useRef(null); // References our video element directly

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

  // Handles the magical moment they enter the site
  const handleEnterSite = () => {
    setHasEntered(true);
    if (videoRef.current) {
      videoRef.current.muted = false; // UNMUTES THE SOUND safely!
      videoRef.current.play().catch((error) => {
        console.log("Autoplay audio handling:", error);
      });
    }
  };

  return (
    <div className="min-h-screen text-[#7a7279] font-sans selection:bg-rose-100 relative overflow-x-hidden">
      {/* 🌟 OVERLAY ENTRY SCREEN (Disappears beautifully when clicked) */}
      {!hasEntered && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#fdf6f6] to-[#fffbf7] p-4 text-center">
          <div className="max-w-md mx-auto space-y-6 bg-white/40 backdrop-blur-md p-10 rounded-3xl border border-rose-100/40 shadow-sm animate-fade-in">
            <span className="font-cursive text-5xl md:text-6xl text-[#df8fa7] block">
              Te invitamos a florecer...
            </span>
            <p className="text-neutral-500 font-light tracking-wide text-sm">
              Haz clic abajo para abrir la invitación de baby Mia
            </p>
            <button
              onClick={handleEnterSite}
              className="bg-[#6b586c] hover:bg-[#574658] text-white text-md font-bold tracking-wider uppercase px-12 py-4 rounded-full shadow-md hover:scale-[1.02] transition-all duration-300 ease-out"
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
          muted={!hasEntered} // Starts muted, then flips dynamically based on state
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/floral-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* 1. HERO SECTION */}
      <header className="relative flex flex-col items-center justify-center text-center px-4 pt-48 md:pt-64 pb-16 max-w-3xl mx-auto z-10">
        <span className="font-cursive text-5xl md:text-7xl text-[#df8fa7] pt-10 font-bold mb-4 block drop-shadow-xs">
          Una princesa viene en camino...
        </span>

        <h1 className="text-4xl md:text-6xl font-serif text-[#6b586c] font-extrabold tracking-tight mb-6 mt-2 leading-tight">
          Mia's Baby shower
        </h1>

        <p className="text-md md:text-xl text-[#7a7279] max-w-xl mx-auto mb-12 tracking-wide leading-relaxed font-light bg-white/25 backdrop-blur-xs px-6 py-3 rounded-2xl inline-block border border-white/40">
          La dulce espera está por terminar y nuestros corazones se llenan de
          alegría. Te invitamos a compartir la emoción por la llegada de nuestra
          hermosa bebé Mia.
        </p>

        {/* Countdown */}
        <div className="flex gap-4 justify-center my-4 w-full max-w-md">
          {Object.keys(timeLeft).length > 0 ? (
            Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="flex flex-col items-center bg-white/25 backdrop-blur-md p-5 rounded-2xl shadow-xs border border-rose-100/40 flex-1"
              >
                <span className="text-3xl md:text-4xl font-bold text-[#df8fa7]">
                  {value}
                </span>
                <span className="text-xxs uppercase tracking-widest text-[#a397a1] font-bold mt-1">
                  {unit}
                </span>
              </div>
            ))
          ) : (
            <div className="text-2xl font-medium text-[#df8fa7] font-cursive bg-white/80 backdrop-blur-md px-10 py-5 rounded-2xl shadow-xs">
              ¡Llegó el gran día! 🎉
            </div>
          )}
        </div>

        <a
          href="#rsvp"
          className="mt-12 bg-[#6b586c]/80 hover:bg-[#574658] text-white text-sm font-semibold tracking-wider uppercase px-10 py-4 rounded-full shadow-sm hover:scale-[1.01] transition-all duration-200 ease-out"
        >
          RSVP
        </a>
      </header>

      <main className="max-w-4xl mx-auto px-4 pb-24 space-y-12 relative z-10">
        {/* 2. EVENT DETAILS CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date & Time */}
          <div className="bg-white/25 backdrop-blur-md p-8 rounded-3xl shadow-xs border border-white/50 flex items-start space-x-5 transition-all duration-300 hover:shadow-sm">
            <div className="bg-rose-50/60 p-4 rounded-xl text-[#df8fa7] shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#6b586c] mb-2">
                Fecha
              </h3>
              <p className="text-[#4a4249] text-lg font-semibold">
                Sábado, 25 de Julio, 2026
              </p>
              <p className="text-[#7a7279] text-md mt-1">4:00 PM</p>
              <button
                onClick={() => {
                  const gCalUrl =
                    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
                    "&text=" +
                    encodeURIComponent("Baby Shower Celebration - Mia") +
                    // Removed the 'Z' at the end to send raw local times (16:00 to 20:00)
                    "&dates=20260725T160000/20260725T200000" +
                    // Explicitly forces the Edmonton time zone
                    "&ctz=" +
                    encodeURIComponent("America/Edmonton") +
                    "&details=" +
                    encodeURIComponent(
                      "¡La dulce espera está por terminar! Te invitamos a compartir la emoción por la llegada de nuestra hermosa bebé Mia.",
                    ) +
                    "&location=" +
                    encodeURIComponent("16818 31 Ave SW, Edmonton, AB");

                  window.open(gCalUrl, "_blank");
                }}
                className="text-sm text-[#df8fa7] font-bold mt-4 flex items-center hover:underline cursor-pointer"
              >
                <Clock className="w-4 h-4 mr-1.5" /> Agregar al Calendario
              </button>
            </div>
          </div>
          {/* Location */}
          <div className="bg-white/25 backdrop-blur-md p-8 rounded-3xl shadow-xs border border-white/50 flex items-start space-x-5 transition-all duration-300 hover:shadow-sm">
            <div className="bg-rose-50/60 p-4 rounded-xl text-[#df8fa7] shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#6b586c] mb-2">
                Lugar
              </h3>
              <p className="text-[#4a4249] text-lg font-semibold">
                16818 31 Ave SW
              </p>
              <p className="text-[#7a7279] text-md">Edmonton, AB</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=16818+31+Ave+SW+Edmonton+AB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#df8fa7] font-bold mt-4 inline-flex items-center hover:underline"
              >
                Abrir en Google Maps →
              </a>
            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE REGISTRY HUB */}
        <section className="bg-white/25 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/50 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-rose-50/60 p-4 rounded-full text-[#df8fa7]">
              <Gift className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-3xl font-serif font-bold text-[#6b586c] mb-1">
            Gift Registries
          </h2>
          <p className="font-cursive text-4xl text-[#df8fa7] mb-4 block">
            Regalos & Deseos
          </p>
          <p className="text-[#7a7279] max-w-md mx-auto mb-10 text-md leading-relaxed">
            Agradecemos de corazón tu apoyo y cariño en esta hermosa etapa. Aquí
            te dejamos algunas ideas para Mia.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <a
              href="https://amazon.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white/80 rounded-2xl border border-neutral-100 shadow-2xs font-semibold text-[#7a7279] hover:border-[#df8fa7] hover:text-[#df8fa7] hover:-translate-y-0.5 transition-all duration-200 text-md"
            >
              Amazon Registry
            </a>
            <a
              href="https://target.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white/80 rounded-2xl border border-neutral-100 shadow-2xs font-semibold text-[#7a7279] hover:border-[#df8fa7] hover:text-[#df8fa7] hover:-translate-y-0.5 transition-all duration-200 text-md"
            >
              Toys R US Registry
            </a>
          </div>
        </section>

        {/* 4. RSVP CONTAINER */}
        <section
          id="rsvp"
          className="bg-[#6b586c]/80 text-white p-10 md:p-16 rounded-3xl shadow-md text-center relative overflow-hidden"
        >
          <div className="relative z-10 max-w-md mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-2">
              Confirmar asistencia
            </h2>
            <p className="font-cursive text-4xl text-rose-200 mb-4">
              ¡Esperamos verte!
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

    // Make sure to add your copied Web App string back here!
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
        <p className="text-xl font-semibold text-rose-100">¡Muchas gracias!</p>
        <p className="text-sm text-neutral-200 mt-1">
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
        className="w-full bg-white text-neutral-900 placeholder-neutral-400 text-md px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#df8fa7] transition-all duration-200 disabled:opacity-50"
      />

      {status === "error" && (
        <p className="text-xs text-rose-200 font-semibold text-left pl-1">
          Hubo un problema. Por favor intenta de nuevo.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting" || !name.trim()}
        className="w-full bg-white text-[#6b586c] text-md font-bold py-4 px-8 rounded-xl hover:bg-neutral-50 active:scale-[0.99] transition-all shadow-xs disabled:opacity-50"
      >
        {status === "submitting" ? "Enviando..." : "Confirmar Asistencia"}
      </button>
    </form>
  );
}
