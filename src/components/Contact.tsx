import { Phone, Mail, Instagram, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg">
              We'd love to hear from you! Reach out through any of these
              channels.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <a
              href="tel:+254796049015"
              className="group flex flex-col items-center p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-amber-50 p-3 rounded-full mb-3 group-hover:bg-amber-100 transition-colors">
                <Phone className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-semibold text-base mb-1">Phone</h3>
              <p className="text-gray-600 text-sm text-center">
                +254 796049015
              </p>
              <span className="mt-2 text-xs text-amber-600 group-hover:text-amber-700">
                Call us now
              </span>
            </a>

            <a
              href="mailto:patskitchenn@gmail.com"
              className="group flex flex-col items-center p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-amber-50 p-3 rounded-full mb-3 group-hover:bg-amber-100 transition-colors">
                <Mail className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-semibold text-base mb-1">Email</h3>
              <p className="text-gray-600 text-sm text-center break-all">
                patskitchenn@gmail.com
              </p>
              <span className="mt-2 text-xs text-amber-600 group-hover:text-amber-700">
                Send us a message
              </span>
            </a>

            <a
              href="https://www.instagram.com/pats_kitchen"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-amber-50 p-3 rounded-full mb-3 group-hover:bg-amber-100 transition-colors">
                <Instagram className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-semibold text-base mb-1">Instagram</h3>
              <p className="text-gray-600 text-sm text-center">@pats_kitchen</p>
              <span className="mt-2 text-xs text-amber-600 group-hover:text-amber-700">
                Follow us
              </span>
            </a>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-amber-600 mr-2" />
                <h3 className="font-semibold">Location</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Nairobi, Kenya
                <br />
                Available for delivery within city limits
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-amber-600 mr-2" />
                <h3 className="font-semibold">Business Hours</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Monday - Friday: 8:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 3:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
