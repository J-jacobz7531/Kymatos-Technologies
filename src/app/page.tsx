"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ImagesSlider } from "@/components/ui/images-slider";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AppleCardsCarousel } from "@/components/ui/apple-cards-carousel";
import { Timeline } from "@/components/ui/timeline";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { PinContainer } from "@/components/ui/pin-container";
import { FloatingDock } from "@/components/ui/floating-dock";

// Dynamically import WorldMap component to avoid SSR issues
const WorldMap = dynamic(() => import("@/components/ui/world-globe").then(mod => ({ default: mod.WorldMap })), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center text-white">Loading Globe...</div>
});
import {
  heroImages,
  infoWords,
  timelineData,
  industriesData,
  teamData,
  navItems,
  sampleArcs,
} from "@/data/sections-data";

export default function HomePage() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.9,
  };
  const sampleArcs = [
    { order: 1, startLat: 34.0522, startLng: -118.2437, endLat: 40.7128, endLng: -74.0060, arcAlt: 0.3, color: "#ffffff" },
    { order: 1, startLat: 51.5072, startLng: -0.1276, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.5, color: "#ffffff" },
  ];

  return (
    <main className="min-h-screen bg-black text-white w-full">
      {/* --- Floating Navigation --- */}
      <FloatingDock items={navItems} desktopClassName="fixed bottom-10 left-1/2 -translate-x-1/2 z-50" mobileClassName="fixed bottom-4 right-4 z-50" />

      {/* --- Section 1: Hero --- */}
      <section id="home" className="h-screen w-full">
        <ImagesSlider images={heroImages} overlay>
          <div className="z-50 flex flex-col justify-center items-center text-center p-4">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              Your Vision, Amplified
            </h1>
            <p className="font-extralight text-sm md:text-lg mt-4 text-neutral-300 max-w-2xl">
              We build stunning digital experiences that captivate, engage, and convert.
            </p>
          </div>
        </ImagesSlider>
      </section>

      {/* --- Section 2: Intro Text --- */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <TextGenerateEffect words={infoWords} className="text-2xl md:text-4xl" />
      </section>

      {/* --- Section 3: Work Showcase --- */}
      <section id="work" className="bg-neutral-950 py-20">
        <AppleCardsCarousel />
      </section>
      
      {/* --- Section 4: Our Journey --- */}
      <section id="journey" className="py-20">
        <Timeline data={timelineData} />
      </section>
      
      {/* --- Section 5: Industries / Applications --- */}
      <section id="industries" className="py-20 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
          Industries We Transform
        </h2>
        <InfiniteMovingCards items={industriesData} direction="right" speed="slow" />
      </section>
      
      {/* --- Section 6: About the Team --- */}
      <section id="about" className="bg-neutral-950 py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
          Meet Our Innovators
        </h2>
        <AnimatedTestimonials testimonials={teamData} autoplay/>
      </section>

      {/* --- Section 7: Global Presence --- */}
      <section id="global" className="relative w-full h-screen bg-black py-20 overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
          Global Presence
        </h2>
        <div className="relative w-full h-[80vh] flex items-center justify-center">
          <WorldMap dots={sampleArcs} lineColor="#0ea5e9" />
          <div className="absolute bottom-10 text-center pointer-events-none">
            <h2 className="text-2xl md:text-4xl font-bold">We Operate Globally</h2>
            <p className="text-neutral-400">Connecting creativity across continents.</p>
          </div>
        </div>
      </section>

      {/* --- Section 8: Contact & Footer --- */}
      <footer id="contact" className="relative flex flex-col items-center w-full py-20 bg-black overflow-hidden px-4">
        <div className="z-10 text-center mb-10 md:mb-0">
          <PinContainer
            title="Visit our office"
            href="https://www.google.com/maps"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                Our Headquarters
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  Located in the heart of the tech hub. Drop by for a coffee.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>
      </footer>
    </main>
  );
}
