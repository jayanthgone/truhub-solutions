import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      {introDone && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Story />
            <section id="services" className="py-20 px-6 text-center">
              <p className="text-sm tracking-[0.3em]" style={{ color: "#00D4FF" }}>
                WHAT WE DO
              </p>
              <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl">
                Strategy · Design · Engineering
              </h2>
            </section>
            <Portfolio />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
