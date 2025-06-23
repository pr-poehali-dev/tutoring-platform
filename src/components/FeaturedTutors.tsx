import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const tutors = [
  {
    name: "Анна Петрова",
    subject: "Математика",
    rating: 4.9,
    reviews: 127,
    price: "1500 ₽/час",
    experience: "5 лет опыта",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    verified: true,
  },
  {
    name: "Дмитрий Козлов",
    subject: "Физика",
    rating: 4.8,
    reviews: 89,
    price: "1800 ₽/час",
    experience: "7 лет опыта",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    verified: true,
  },
  {
    name: "Елена Смирнова",
    subject: "Английский",
    rating: 4.9,
    reviews: 156,
    price: "1200 ₽/час",
    experience: "8 лет опыта",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    verified: true,
  },
];

const FeaturedTutors = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-4">
            Лучшие репетиторы
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Проверенные преподаватели с высокими рейтингами и положительными
            отзывами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover-scale"
            >
              <div className="flex items-center mb-4">
                <img
                  src={tutor.avatar}
                  alt={tutor.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="flex items-center mb-1">
                    <h3 className="text-lg font-montserrat font-semibold text-gray-800">
                      {tutor.name}
                    </h3>
                    {tutor.verified && (
                      <Icon
                        name="CheckCircle"
                        className="ml-2 text-primary"
                        size={16}
                      />
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{tutor.subject}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  <Icon
                    name="Star"
                    className="text-yellow-400 fill-current mr-1"
                    size={16}
                  />
                  <span className="text-sm font-medium text-gray-800">
                    {tutor.rating}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">
                    ({tutor.reviews} отзывов)
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <Badge variant="secondary" className="mb-2">
                  {tutor.experience}
                </Badge>
                <div className="text-xl font-montserrat font-bold text-primary">
                  {tutor.price}
                </div>
              </div>

              <Button className="w-full gradient-bg text-white hover:opacity-90">
                <Icon name="MessageCircle" className="mr-2" size={16} />
                Написать репетитору
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Смотреть всех репетиторов
            <Icon name="ArrowRight" className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTutors;
