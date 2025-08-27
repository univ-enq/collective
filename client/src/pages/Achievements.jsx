import React, { useState } from "react";
import { Link } from "react-router-dom";

const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const achievements = [
    {
      id: 1,
      title: "Excellence in Research Award 2024",
      category: "awards",
      year: "2024",
      description:
        "Recognized for outstanding contributions to interdisciplinary research and innovation in sustainable technology solutions.",
      recipient: "Dr. Deepak Kumar",
      organization: "National Research Council",
      image:
        "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "Individual",
    },
    {
      id: 2,
      title: "Best Research Paper Award",
      category: "publications",
      year: "2024",
      description:
        "Published groundbreaking research on AI applications in environmental monitoring, receiving international recognition.",
      recipient: "Research Team",
      organization: "International Conference on AI & Environment",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "Team",
    },
    {
      id: 3,
      title: "Innovation Grant - $500,000",
      category: "grants",
      year: "2024",
      description:
        "Secured major funding for developing next-generation sustainable energy solutions and smart grid technologies.",
      recipient: "Research Center",
      organization: "Department of Science & Technology",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "Institutional",
    },
    {
      id: 4,
      title: "Young Researcher Excellence Award",
      category: "awards",
      year: "2023",
      description:
        "Outstanding achievement by our doctoral student for innovative research in machine learning applications.",
      recipient: "Ms. Priya Sharma",
      organization: "IEEE Computer Society",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "Student",
    },
    {
      id: 5,
      title: "International Collaboration Achievement",
      category: "collaborations",
      year: "2024",
      description:
        "Successfully established research partnerships with 5 international universities for joint research programs.",
      recipient: "International Relations Team",
      organization: "Global Research Network",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80",
      type: "Institutional",
    },
    {
      id: 6,
      title: "Patent Filed - Smart Energy Management",
      category: "patents",
      year: "2024",
      description:
        "Successfully filed patent for innovative smart energy management system with AI-driven optimization.",
      recipient: "Dr. Alex Kumar & Team",
      organization: "Patent Office",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      type: "Team",
    },
    {
      id: 7,
      title: "Community Impact Award",
      category: "community",
      year: "2023",
      description:
        "Recognized for significant contributions to local community through technology education and outreach programs.",
      recipient: "Outreach Team",
      organization: "City Council",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      type: "Team",
    },
    {
      id: 8,
      title: "Top 10 Research Publications",
      category: "publications",
      year: "2024",
      description:
        "Achieved milestone of 10 high-impact publications in top-tier international journals within a single year.",
      recipient: "Faculty & Researchers",
      organization: "Various Journals",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "Institutional",
    },
  ];

  const categories = [
    { id: "all", name: "All Achievements", icon: "🏆" },
    { id: "awards", name: "Awards", icon: "🥇" },
    { id: "publications", name: "Publications", icon: "📚" },
    { id: "grants", name: "Grants", icon: "💰" },
    { id: "patents", name: "Patents", icon: "⚡" },
    { id: "collaborations", name: "Collaborations", icon: "🤝" },
    { id: "community", name: "Community", icon: "🌟" },
  ];

  const stats = [
    { label: "Total Awards", value: "25+", icon: "🏆" },
    { label: "Research Grants", value: "$2.5M+", icon: "💰" },
    { label: "Publications", value: "150+", icon: "📚" },
    { label: "Patents Filed", value: "12", icon: "⚡" },
  ];

  const filteredAchievements =
    activeCategory === "all"
      ? achievements
      : achievements.filter(
          (achievement) => achievement.category === activeCategory
        );

  const getTypeColor = (type) => {
    const colors = {
      Individual: "bg-blue-500/20 text-blue-400 border-blue-500/50",
      Team: "bg-green-500/20 text-green-400 border-green-500/50",
      Student: "bg-purple-500/20 text-purple-400 border-purple-500/50",
      Institutional: "bg-orange-500/20 text-orange-400 border-orange-500/50",
    };
    return colors[type] || "bg-gray-500/20 text-gray-400 border-gray-500/50";
  };

  const AchievementCard = ({ achievement }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(
              achievement.type
            )}`}
          >
            {achievement.type}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-900/70 text-white border border-gray-600">
            {achievement.year}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {achievement.title}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-300 text-sm">
            <svg
              className="w-4 h-4 mr-2 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            {achievement.recipient}
          </div>

          <div className="flex items-center text-gray-300 text-sm">
            <svg
              className="w-4 h-4 mr-2 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            {achievement.organization}
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4">{achievement.description}</p>

        <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm rounded-lg transition-all duration-300 transform hover:scale-105">
          View Details
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Achievements
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Celebrating our research center's accomplishments, milestones, and
            contributions to advancing knowledge and innovation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 text-center hover:border-gray-600 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredAchievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>

        {/* Empty State */}
        {filteredAchievements.length === 0 && (
          <div className="text-center py-16">
            <svg
              className="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              No achievements found in this category
            </h3>
            <p className="text-gray-500">
              Try selecting a different category to view more achievements.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">
              Join Our Success Story
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Be part of our journey towards excellence. Explore opportunities
              to contribute to groundbreaking research and achieve recognition
              in your field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Join Our Team
              </button>
              <Link
                to="/internships"
                className="px-8 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center"
              >
                View Opportunities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
