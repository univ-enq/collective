import React, { useState } from "react";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingEvents = [];

  const completedEvents = [
    {
      id: 1,
      title:
        "Ambedkar's Vision: Social Justice and the Quest for Economic Democracy",
      date: "2025-04-14",
      time: "05:00 PM – 06:00 PM (IST)",
      location: "Virtual Event",
      type: "Seminar",
      description:
        "An insightful research seminar featuring distinguished speakers sharing their expertise and research findings.",
      speakers: ["Mr. Anand Mehra"],
      moderator: "Assistant Professor, Eternal University",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80",
    },
    {
      id: 2,
      title: "Webinar on International Women's Day 2025",
      date: "2025-03-08",
      time: "5:00 PM - 6:00 PM",
      location: "Virtual Event",
      type: "Lecture",
      description:
        "Part of our ongoing academic lecture series featuring renowned researchers and their groundbreaking work.",
      speakers: ["Dr. Madhu Bala"],
      moderator: "Dr. Jyoti Diwakar",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 3,
      title: "Webinar on Gandhi, Environment, and Sustainability",
      date: "2025-03-23",
      time: "05:00 PM - 06:00 PM (IST)",
      location: "Virtual Event",
      type: "Presentation",
      description:
        "A comprehensive research presentation showcasing innovative methodologies and findings in the field.",
      speakers: ["Dr. Meena Kumari"],
      moderator: "Mr. Jitendra K. Paswan",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getEventTypeColor = (type) => {
    const colors = {
      Conference: "bg-blue-500/20 text-blue-400 border-blue-500/50",
      Workshop: "bg-green-500/20 text-green-400 border-green-500/50",
      Symposium: "bg-purple-500/20 text-purple-400 border-purple-500/50",
      Seminar: "bg-orange-500/20 text-orange-400 border-orange-500/50",
      Showcase: "bg-pink-500/20 text-pink-400 border-pink-500/50",
      Lecture: "bg-indigo-500/20 text-indigo-400 border-indigo-500/50",
      Presentation: "bg-teal-500/20 text-teal-400 border-teal-500/50",
    };
    return colors[type] || "bg-gray-500/20 text-gray-400 border-gray-500/50";
  };

  const EventCard = ({ event, isCompleted = false }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${getEventTypeColor(
              event.type
            )}`}
          >
            {event.type}
          </span>
        </div>
        {isCompleted && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-500/20 text-gray-400 border border-gray-500/50">
              Completed
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {event.title}
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            {formatDate(event.date)}
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {event.time}
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {event.location}
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {event.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Speaker:</h4>
          <div className="flex flex-wrap gap-2 mb-3">
            {event.speakers.map((speaker, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
              >
                {speaker}
              </span>
            ))}
          </div>
          {event.moderator && (
            <>
              <h4 className="text-sm font-semibold text-white mb-2">
                Moderator:
              </h4>
              <span className="px-2 py-1 bg-blue-700/30 text-blue-300 text-xs rounded-md">
                {event.moderator}
              </span>
            </>
          )}
        </div>

        {!isCompleted && (
          <div className="flex items-center justify-between">
            {event.registrationOpen ? (
              <span className="text-sm text-green-400 font-semibold">
                Registration Open
              </span>
            ) : (
              <span className="text-sm text-red-400 font-semibold">
                Registration Closed
              </span>
            )}
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm rounded-lg transition-all duration-300 transform hover:scale-105">
              {event.registrationOpen ? "Register Now" : "Learn More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Events
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our research conferences, workshops, and academic events.
            Join us in advancing knowledge and fostering collaboration.
          </p>
        </div>

        {/* Toggle Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "upcoming"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab("completed")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "completed"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                Completed Events
              </button>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === "upcoming"
            ? upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            : completedEvents.map((event) => (
                <EventCard key={event.id} event={event} isCompleted={true} />
              ))}
        </div>

        {/* Empty State */}
        {((activeTab === "upcoming" && upcomingEvents.length === 0) ||
          (activeTab === "completed" && completedEvents.length === 0)) && (
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              No {activeTab} events found
            </h3>
            <p className="text-gray-500">
              {activeTab === "upcoming"
                ? "Stay tuned for upcoming events!"
                : "Past events will appear here once completed."}
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">
              Want to organize an event?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We welcome proposals for conferences, workshops, and seminars.
              Contact our events team to discuss your ideas.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Events Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
