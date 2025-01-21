export default function Hero() {
  return (
    <section id="home" className="pt-16">
      <div
        className="relative h-[80vh] md:h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
                Elevating Your Dining Experience
              </h1>
              <p className="text-lg md:text-xl mb-6 md:mb-8">
                Discover the perfect blend of convenience and culinary
                excellence with Pat's personalized meal solutions.
              </p>
              <a
                href="#contact"
                className="inline-block bg-amber-600 text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
