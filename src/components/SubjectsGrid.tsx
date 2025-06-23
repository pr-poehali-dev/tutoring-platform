import Icon from "@/components/ui/icon";

const subjects = [
  {
    name: "Математика",
    icon: "Calculator",
    students: "500+ учеников",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Английский",
    icon: "Languages",
    students: "400+ учеников",
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Физика",
    icon: "Atom",
    students: "300+ учеников",
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Химия",
    icon: "Flask",
    students: "250+ учеников",
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "История",
    icon: "Scroll",
    students: "200+ учеников",
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Биология",
    icon: "Leaf",
    students: "180+ учеников",
    color: "bg-emerald-100 text-emerald-600",
  },
];

const SubjectsGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-4">
            Популярные предметы
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите предмет и найдите лучших репетиторов в вашем городе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover-scale cursor-pointer"
            >
              <div
                className={`w-12 h-12 ${subject.color} rounded-xl flex items-center justify-center mb-4`}
              >
                <Icon name={subject.icon as any} size={24} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-2">
                {subject.name}
              </h3>
              <p className="text-gray-500 text-sm">{subject.students}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsGrid;
