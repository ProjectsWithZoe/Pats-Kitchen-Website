import {
  ChefHat,
  Package,
  Users,
  Clock,
  UtensilsCrossed,
  Leaf,
  Heart,
  Cake,
  Users2,
} from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-8 md:py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-amber-600 text-3xl md:text-4xl font-bold text-center mb-6 md:mb-16">
          Pat's Kitchen
        </h2>

        {/* Meal Prep Services */}
        <div className="mb-12 md:mb-20">
          <div className="text-center mb-8 md:mb-10">
            <ChefHat className="w-12 h-12 md:w-16 md:h-16 text-amber-600 mx-auto mb-3 md:mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Meal Prep Services
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Healthy, ready-to-eat meals tailored to your lifestyle and
              preferences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Clock className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-semibold text-lg md:text-xl mb-2">
                Weekly Plans
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Customized meal plans delivered weekly, saving you time and
                effort in the kitchen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Leaf className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-semibold text-lg md:text-xl mb-2">
                Dietary Options
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Accommodating various dietary needs including vegetarian,
                gluten-free, and portion-controlled meals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-semibold text-lg md:text-xl mb-2">
                Health Focused
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Nutritious meals designed for optimal health and wellness
                without sacrificing taste.
              </p>
            </div>
          </div>
        </div>

        {/* Meal Boxes */}
        <div className="mb-12 md:mb-20">
          <div className="text-center mb-8 md:mb-10">
            <Package className="w-12 h-12 md:w-16 md:h-16 text-amber-600 mx-auto mb-3 md:mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Meal Boxes
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Curated boxes for every occasion and time of day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <UtensilsCrossed className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-semibold text-lg md:text-xl mb-2">
                Snack Boxes
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Delightful selection of bite-sized treats perfect for sharing or
                quick breaks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Package className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-semibold text-lg md:text-xl mb-2">
                Breakfast Boxes
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Start your day right with our hearty and wholesome breakfast
                selections.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Package className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-semibold text-lg md:text-xl mb-2">
                Picnic Boxes
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Perfect for outdoor adventures and casual gatherings with
                friends and family.
              </p>
            </div>
          </div>
        </div>

        {/* Small-Scale Catering */}
        <div className="mb-12 md:mb-20">
          <div className="text-center mb-8 md:mb-10">
            <Users className="w-12 h-12 md:w-16 md:h-16 text-amber-600 mx-auto mb-3 md:mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Small-Scale Catering
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Personalized catering solutions for your special occasions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Cake className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-semibold text-lg md:text-xl mb-2">
                Special Events
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Perfect for birthdays, anniversaries, and family gatherings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Users2 className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-semibold text-lg md:text-xl mb-2">
                Corporate Meetings
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Professional catering services for business meetings and
                corporate events.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <ChefHat className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-semibold text-lg md:text-xl mb-2">
                Custom Menus
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Tailored menus that perfectly match your event's theme and
                requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 max-w-5xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
            Who We Serve
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <Users2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Busy Professionals</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Convenient meal solutions for those with demanding schedules.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Families</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Variety of meals without the hassle of planning and
                  preparation.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Heart className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">
                  Health-Conscious Individuals
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Customized meals for specific dietary needs and preferences.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Event Organizers</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Perfect solutions for small-scale gatherings and events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
