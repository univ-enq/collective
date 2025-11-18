import React from "react";
import sahilImg from "../assets/Sahil Kumar Sakshi.jpg";
import { Link } from "react-router-dom";

const TechnicalAdvisor = () => {
  const profileData = {
    name: "Sahil Kumar Sakshi",
    title: "Technical Advisor",
    image: sahilImg,
    // removed email; use external profiles below
    freelancer: "https://www.freelancer.in/u/sahilkumarsakshi",
    linkedin: "https://www.linkedin.com/in/sahil-kumar-sakshi-155615338/",
    bio: "Sahil Kumar Sakshi serves as the Technical Advisor for Collective Knowledge, bringing over 3 years of extensive experience in software development, system architecture, and technical strategy. With a strong background in full-stack development, cloud computing, and emerging technologies, he leads our technical initiatives and ensures the platform maintains cutting-edge capabilitie while remaining scalable and secure. His expertise spans across various programming languages, frameworks, and technologies including modern web development, database management, API design, and DevOps practices. Sahil has been instrumental in architecting our research platform's technical infrastructure, implementing robust security measures, and optimizing system performance to handle complex research data and collaborative workflows. He works closely with researchers and administrators to understand their technical needs and translates them into innovative solutions that enhance productivity and research outcomes. His forward-thinking approach to technology adoption has helped establish a solid technical foundation that supports our organization's growth and enables seamless integration with partner institutions and research networks.",
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/people"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Team
          </Link>
        </div>

        {/* Profile Header */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 overflow-hidden shadow-2xl mb-8">
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-red-600/20 to-pink-600/20"></div>
            <div className="absolute inset-0 opacity-30">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundRepeat: "repeat",
                }}
              ></div>
            </div>

            <div className="relative p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <img
                      src={profileData.image}
                      alt={profileData.name}
                      className="relative w-48 h-48 rounded-full border-4 border-white/20 shadow-2xl object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
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
                </div>

                {/* Profile Information */}
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                    {profileData.name}
                  </h1>
                  <p className="text-2xl text-orange-200 font-semibold mb-4">
                    {profileData.title}
                  </p>

                  {/* Contact Information */}
                  <div className="flex items-center justify-center lg:justify-start gap-4 text-gray-300 mb-6">
                    <a
                      href={profileData.freelancer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-amber-200 hover:underline"
                    >
                      <svg
                        className="w-4 h-4 text-amber-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10 2h4a2 2 0 012 2v2h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h2V4a2 2 0 012-2zm0 4V4h4v2h-4z" />
                      </svg>
                      Freelancer
                    </a>

                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-300 hover:underline"
                    >
                      <svg
                        className="w-4 h-4 text-blue-400"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.336-.026-3.056-1.864-3.056-1.866 0-2.152 1.458-2.152 2.966v5.694h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.561 2.84-1.561 3.038 0 3.6 2 3.6 4.59v5.604z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Biography Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <svg
              className="w-8 h-8 text-orange-400"
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
            About Sahil Kumar Sakshi
          </h2>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg mb-6 text-justify">
              {profileData.bio}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">
                  Software Development
                </h3>
              </div>
              <p className="text-gray-300 text-sm">
                Full-stack development with modern frameworks and technologies
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">
                  System Architecture
                </h3>
              </div>
              <p className="text-gray-300 text-sm">
                Designing scalable and robust technical infrastructure
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-pink-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Technical Strategy</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Leading technology adoption and innovation initiatives
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Cloud Computing</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Expertise in cloud platforms and scalable infrastructure
                solutions
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Security & DevOps</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Implementing robust security measures and DevOps practices
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">
                  Database Management
                </h3>
              </div>
              <p className="text-gray-300 text-sm">
                Advanced database design and optimization for research data
              </p>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="mt-8 flex justify-center">
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalAdvisor;
