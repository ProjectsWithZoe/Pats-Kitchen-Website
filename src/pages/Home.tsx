import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import { MessageCircle } from "lucide-react";

export default function Home() {
  const handleWhatsAppClick = () => {
    // Replace this with your actual WhatsApp business number
    const phoneNumber = "+254796049015";
    const message =
      "Hi Pat! I'm interested in your catering services! May I have some more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white relative">
        {/* WhatsApp Float Button */}
        <button
          onClick={handleWhatsAppClick}
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-3 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with us
          </span>
        </button>
        <Hero />
        <Services />
        <About />
        <Contact />
        <footer className="bg-amber-50 py-6 md:py-8">
          <div className="container mx-auto px-4 text-center text-gray-600 text-sm md:text-base">
            <p>© 2024 Pat's Kitchen. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
