// Hero section data
export const heroImages = [
  "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

// Text generation data
export const infoWords = "We are a creative studio that specializes in digital experiences, branding, and innovative design solutions.";

// Timeline data
export const timelineData = [
  {
    title: "2020",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Founded our creative studio with a vision to transform digital experiences.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1464822759844-d150baec013c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="startup"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="team"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Expanded our services to include web development and mobile applications.
        </p>
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="development"
          width={500}
          height={500}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Launched our first major product and gained recognition in the industry.
        </p>
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="product launch"
          width={500}
          height={500}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>
    ),
  },
];

// Industries data for infinite moving cards
export const industriesData = [
  {
    quote: "Technology",
    name: "Web Development",
    title: "Modern Solutions",
  },
  {
    quote: "Design",
    name: "UI/UX Design",
    title: "User-Centered",
  },
  {
    quote: "Innovation",
    name: "Digital Strategy",
    title: "Future-Ready",
  },
  {
    quote: "Creativity",
    name: "Brand Identity",
    title: "Memorable",
  },
  {
    quote: "Excellence",
    name: "Quality Assurance",
    title: "Reliable",
  },
];

// Team testimonials data
export const teamData = [
  {
    quote: "Leading our creative vision with passion and innovation.",
    name: "Alex Johnson",
    designation: "Creative Director",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Transforming ideas into beautiful digital experiences.",
    name: "Sarah Chen",
    designation: "Lead Designer",
    src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Building robust and scalable solutions for the future.",
    name: "Michael Rodriguez",
    designation: "Senior Developer",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Navigation items for floating dock
export const navItems = [
  {
    title: "Home",
    icon: "🏠",
    href: "#hero",
  },
  {
    title: "About",
    icon: "ℹ️",
    href: "#about",
  },
  {
    title: "Services",
    icon: "⚙️",
    href: "#services",
  },
  {
    title: "Portfolio",
    icon: "💼",
    href: "#portfolio",
  },
  {
    title: "Team",
    icon: "👥",
    href: "#team",
  },
  {
    title: "Contact",
    icon: "📧",
    href: "#contact",
  },
];

// Sample arcs data for WorldMap component
export const sampleArcs = [
  {
    start: { lat: 40.7128, lng: -74.0060, label: "New York" },
    end: { lat: 51.5074, lng: -0.1278, label: "London" },
  },
  {
    start: { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
    end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
  },
  {
    start: { lat: 52.5200, lng: 13.4050, label: "Berlin" },
    end: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
  },
  {
    start: { lat: 48.8566, lng: 2.3522, label: "Paris" },
    end: { lat: 19.0760, lng: 72.8777, label: "Mumbai" },
  },
];
