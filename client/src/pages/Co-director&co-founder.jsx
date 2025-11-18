import React from "react";
import { useNavigate } from "react-router-dom";

const CoDirectorCoFounder = () => {
  const navigate = useNavigate();

  const coDirectorData = {
    name: "Dr. Jyoti Diwakar",
    title: "Co-director & Co-founder",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    education: [],
    experience: "12+ years",
    specialization: "Educational Research, Policy Development, Academic Leadership",
    twitter: "jyotidiwakar",
    instagram: "jyotidiwakar",
    // email: "jyoti.diwakar@researchcenter.edu",
    bio: "",
    achievements: [],
    researchInterests: [],
  };

  const handleProfileClick = () => {
    navigate('/jyoti-diwakar');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Co-director & Co-founder
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet our dedicated co-director and co-founder who plays a vital role in shaping our research vision and academic excellence.
          </p>
        </div>

        {/* Co-director Profile Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 overflow-hidden shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
            {/* Main Profile Section */}
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-indigo-600/20"></div>
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
                  {/* Profile Image Section */}
                  <div className="flex-shrink-0">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <img
                        src={coDirectorData.image}
                        alt={coDirectorData.name}
                        className="relative w-40 h-40 rounded-full border-4 border-white/20 shadow-2xl object-cover group-hover:scale-105 transition-transform duration-300"
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
                    <button
                      onClick={handleProfileClick}
                      className="group inline-block"
                    >
                      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {coDirectorData.name}
                      </h2>
                    </button>

                    <div className="mb-6">
                      <p className="text-2xl text-purple-200 font-semibold mb-2">
                        {coDirectorData.title}
                      </p>
                      <p className="text-lg text-gray-300 mb-4">
                        {coDirectorData.specialization}
                      </p>

                      {/* Experience Badge */}
                      <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-4">
                        <svg
                          className="w-5 h-5 text-purple-400 mr-2"
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
                        <span className="text-white font-semibold">
                          {coDirectorData.experience} Experience
                        </span>
                      </div>

                      {/* Contact Information */}
                      <div className="mb-8">
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                          <svg
                            className="w-4 h-4 text-purple-400"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                          </svg>
                          <div className="flex items-center gap-3">
                            <a
                              href={`https://twitter.com/${coDirectorData.twitter}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-300 hover:underline"
                            >
                              @{coDirectorData.twitter}
                            </a>
                            <span className="text-gray-500">•</span>
                            <a
                              href={`https://instagram.com/${coDirectorData.instagram}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-pink-300 hover:underline flex items-center gap-2"
                            >
                              <svg
                                className="w-4 h-4 text-pink-400"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm4.5 5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm5-2a1.05 1.05 0 11-2.1 0 1.05 1.05 0 012.1 0z" />
                              </svg>
                              @{coDirectorData.instagram}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography Section */}
            {coDirectorData.bio && (
              <div className="px-12 pb-12">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <svg
                      className="w-6 h-6 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Biography
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {coDirectorData.bio}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoDirectorCoFounder;