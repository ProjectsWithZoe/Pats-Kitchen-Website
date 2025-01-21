export default function About() {
  const values = [
    {
      title: "Quality",
      description:
        "Fresh, high-quality ingredients for nutritious and flavorful meals",
    },
    {
      title: "Customization",
      description: "Tailored solutions to meet your unique dietary needs",
    },
    {
      title: "Convenience",
      description: "Making mealtime stress-free and enjoyable",
    },
    {
      title: "Creativity",
      description: "Innovative dishes and presentations that delight",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="./couple-cooking.jpg"
              alt="Kitchen"
              className="rounded-lg shadow-lg w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="border-l-4 border-amber-600 pl-4 hover:border-amber-700 transition-colors"
                >
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
