import React from "react";
import sahilImg from "../assets/Sahil Kumar Sakshi.jpg";
import manveeImg from "../assets/Manvee.jpg";
import { useNavigate } from "react-router-dom";

const People = () => {
  const navigate = useNavigate();

  const peopleData = [
    {
      id: 1,
      name: "Manvee",
      title: "Legal Advisor",
      image: manveeImg,
      specialization: "Legal Compliance, Intellectual Property, Contract Law",
      experience: "5+ years",
      // email removed
      description:
        "Expert in legal compliance and intellectual property matters, ensuring our research activities adhere to all regulatory requirements.",
      route: "/legal-advisor",
      gradientFrom: "from-emerald-600",
      gradientTo: "to-teal-600",
      accentColor: "emerald",
    },
    {
      id: 2,
      name: "Sahil Kumar Sakshi",
      title: "Technical Advisor",
      image: sahilImg,
      specialization:
        "Software Development, System Architecture, Technical Strategy",
      experience: "3+ years",
      // email removed
      description:
        "Leading our technical initiatives and ensuring robust, scalable solutions for our research platform and digital infrastructure.",
      route: "/technical-advisor",
      gradientFrom: "from-orange-600",
      gradientTo: "to-red-600",
      accentColor: "orange",
    },
  ];

  const handlePersonClick = (route) => {
    navigate(route);
  };

  const PersonCard = ({ person }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 overflow-hidden shadow-2xl hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-500 group">
      {/* Card Header */}
      <div className="relative">
        {/* Background Pattern */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${person.gradientFrom}/20 ${person.gradientTo}/20`}
        ></div>
        <div className="absolute inset-0 opacity-30">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          ></div>
        </div>

        <div className="relative p-8">
          <div className="flex flex-col items-center text-center">
            {/* Profile Image */}
            <div className="relative group mb-6">
              <div
                className={`absolute -inset-4 bg-gradient-to-r ${person.gradientFrom} ${person.gradientTo} rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
              ></div>
              <img
                src={person.image}
                alt={person.name}
                className="relative w-32 h-32 rounded-full border-4 border-white/20 shadow-2xl object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 w-10 h-10 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Profile Information */}
            <button
              onClick={() => handlePersonClick(person.route)}
              className="group/name inline-block mb-2"
            >
              <h3 className="text-2xl font-bold text-white group-hover/name:text-blue-400 transition-all duration-300">
                {person.name}
              </h3>
            </button>

            <p
              className={`text-lg text-${person.accentColor}-200 font-semibold mb-3`}
            >
              {person.title}
            </p>

            <p className="text-gray-300 text-sm mb-4">
              {person.specialization}
            </p>

            {/* Experience Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-4">
              <svg
                className={`w-4 h-4 text-${person.accentColor}-400 mr-2`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-white text-sm font-semibold">
                {person.experience} Experience
              </span>
            </div>

            {/* Contact Information */}
            {person.email ? (
              <div className="flex items-center gap-2 text-gray-300 mb-6">
                <svg
                  className={`w-4 h-4 text-${person.accentColor}-400`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href={`mailto:${person.email}`}
                  className="text-sm text-gray-200 hover:underline"
                >
                  {person.email}
                </a>
              </div>
            ) : null}

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {person.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated professionals who provide expert guidance and
            support to our research initiatives and organizational operations.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {peopleData.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our growing
              team. Explore opportunities to contribute to meaningful research
              and innovation.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
