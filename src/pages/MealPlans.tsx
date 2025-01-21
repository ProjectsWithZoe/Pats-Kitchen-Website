import React from "react";
import { ChefHat } from "lucide-react";

interface MealPlan {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const mealPlans: MealPlan[] = [
  {
    id: 1,
    title: "Weekly Meal Prep",
    category: "All-day",
    imageUrl: "../meal-prep.jpg",
    description:
      "A week of nutritious meals including mains, stews, salads and snacks. Includes a comprehensive shopping list",
  },
  {
    id: 2,
    title: "Meal Boxes",
    category: "Variety",
    imageUrl: "../Meal-boxes.png",
    description:
      "Various meal boxes including breakfast box, snack box and picnic box.",
  },
  {
    id: 3,
    title: "Snack box",
    category: "Snacks",
    imageUrl: "../snacks.jpg",
    description: "Plant-based dinner options packed with flavor and nutrients.",
  },
];

export default function MealPlans() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  return (
    <div className="pt-16 bg-amber-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <ChefHat className="w-8 h-8 text-amber-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Previous Meal Plans
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our collection of previously crafted meal plans. Each plan
            is thoughtfully designed to provide balanced nutrition while
            satisfying your taste buds.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mealPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48 md:h-64">
                <img
                  src={plan.imageUrl}
                  alt={plan.title}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setSelectedImage(plan.imageUrl)}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {plan.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Enlarged meal plan"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-100"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
