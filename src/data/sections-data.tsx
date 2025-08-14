import {
  IconHome,
  IconBriefcase,
  IconTimeline,
  IconUsers,
  IconMail,
} from "@tabler/icons-react";
import React from "react";

// Data for Hero Image Slider
export const heroImages = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
];

// Data for Text Generate Effect
export const infoWords = "We are a creative studio that builds beautiful and functional digital experiences. We partner with brands and businesses that are not afraid to push boundaries.";

// Dummy Content for Apple Cards
const DummyContent = () => (
    <>
      {[...new Array(1).fill(1)].map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              This is a detailed description of the project.
            </span>{" "}
            It showcases our ability to deliver stunning visuals and intuitive user interfaces. Here, we can talk about the technologies used, the challenges overcome, and the value delivered to the client.
          </p>
          <img
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4"
          />
        </div>
      ))}
    </>
);

// Data for Apple Cards Carousel (Work Showcase)
export const workData = [
    { category: "Artificial Intelligence", title: "AI-Powered Analytics Platform", src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop", content: <DummyContent /> },
    { category: "Productivity", title: "Next-Gen Productivity Suite", src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop", content: <DummyContent /> },
    { category: "UX/UI Design", title: "Immersive VR Experience Design", src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop", content: <DummyContent /> },
    { category: "Mobile App", title: "Cross-Platform Navigation App", src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop", content: <DummyContent /> },
];

// Data for Timeline
export const timelineData = [
  { title: "2022 - Idea", content: <p className="text-neutral-400">The journey began with a simple idea: to create unparalleled digital experiences. We assembled a small, passionate team and started sketching out our vision.</p> },
  { title: "2023 - First Project", content: <p className="text-neutral-400">We landed our first major client and successfully launched an AI-powered analytics platform, setting a new standard in the industry and proving our capabilities.</p> },
  { title: "2024 - Expansion", content: <p className="text-neutral-400">Our team grew, and so did our ambitions. We expanded into new markets, including VR and mobile development, and our work gained international recognition.</p> },
  { title: "Present - The Future", content: <p className="text-neutral-400">We continue to innovate and push the boundaries of technology and design, with a strong roadmap of exciting projects and partnerships for the years to come.</p> },
];

// Data for Infinite Moving Cards (Industries)
export const industriesData = [
  { quote: "Virtual Reality in Healthcare: Revolutionizing surgical training and patient therapy through immersive simulations.", name: "Healthcare", title: "Application" },
  { quote: "Augmented Reality in Retail: Allowing customers to visualize products in their own space before buying.", name: "Retail & E-commerce", title: "Application" },
  { quote: "Interactive Learning in Education: Creating engaging and gamified educational content for students of all ages.", name: "Education", title: "Application" },
  { quote: "Architectural Visualization: Enabling architects and clients to walk through buildings before they are built.", name: "Real Estate", title: "Application" },
  { quote: "Immersive Gaming & Entertainment: Building the next generation of games and interactive stories.", name: "Entertainment", title: "Application" },
];

// Data for Animated Testimonials (Team Section)
export const teamData = [
  { quote: "Leading the charge with a vision for innovative and user-centric design.", name: "Jane Doe", designation: "Founder & CEO", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop" },
  { quote: "The mastermind behind our robust and scalable technical architecture.", name: "John Smith", designation: "Lead Developer", src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=500&fit=crop" },
  { quote: "Crafting beautiful and intuitive interfaces that users love to interact with.", name: "Alex Johnson", designation: "Head of Design", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop" },
];

// Data for Floating Dock
export const navItems = [
    { title: "Home", href: "#home", icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { title: "Work", href: "#work", icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { title: "Journey", href: "#journey", icon: <IconTimeline className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { title: "About", href: "#about", icon: <IconUsers className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { title: "Contact", href: "#contact", icon: <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" /> },
];
