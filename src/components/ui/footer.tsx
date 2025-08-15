"use client";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="contact" className="relative w-full overflow-hidden text-neutral-200 min-h-[500px]">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80"
        alt="footer background"
        fill
        priority
        className="object-cover object-center select-none pointer-events-none"
      />

      {/* Glassmorphism pill */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-10 rounded-full bg-white/25 backdrop-blur-lg shadow-xl" />

      {/* 
        MODIFIED LINE:
        - Changed 'relative' to 'absolute inset-0' to make this layer fill the entire footer.
        - Added 'flex flex-col justify-between' to position the main content at the top 
          and the copyright bar at the bottom.
      */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between backdrop-blur-sm bg-gradient-to-b from-primary/60 via-secondary/40 to-background/90">
        {/* Main content area (no changes here) */}
        <div className="max-w-7xl mx-auto px-6 py-24 grid gap-10 md:grid-cols-6 text-sm">
          {/* Logo & blurb */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link href="/" className="text-2xl font-semibold tracking-wide">Kymatos</Link>
            <p className="text-neutral-400 max-w-xs">
              Elevating your digital presence with cutting-edge design & development.
            </p>
          </div>

          {/* Columns */}
          <div className="flex flex-col gap-3">
            <h4 className="text-neutral-100 font-semibold mb-1">Pillars</h4>
            <Link href="#" className="hover:text-white transition-colors">Ideate</Link>
            <Link href="#" className="hover:text-white transition-colors">Build</Link>
            <Link href="#" className="hover:text-white transition-colors">Deploy</Link>
            <Link href="#" className="hover:text-white transition-colors">Scale</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-neutral-100 font-semibold mb-1">Products</h4>
            <Link href="#" className="hover:text-white transition-colors">Editor</Link>
            <Link href="#" className="hover:text-white transition-colors">Analytics</Link>
            <Link href="#" className="hover:text-white transition-colors">Gateway</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-neutral-100 font-semibold mb-1">Resources</h4>
            <Link href="#" className="hover:text-white transition-colors">Docs</Link>
            <Link href="#" className="hover:text-white transition-colors">API</Link>
            <Link href="#" className="hover:text-white transition-colors">Blog</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-neutral-100 font-semibold mb-1">Connect</h4>
            <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">X (Twitter)</Link>
          </div>
        </div>

        {/* Bottom bar (no changes here) */}
        <div className="border-t border-white/10 py-6 text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} Kymatos. All rights reserved.
        </div>
      </div>
    </footer>
  );
};