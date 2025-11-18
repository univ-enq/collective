import React from "react";
import { Link } from "react-router-dom";

const JyotiDiwakar = () => {
  const profileData = {
    name: "Dr. Jyoti Diwakar",
    title: "Co-Director of Collective Knowledge",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    twitter: "to be updated soon",
    instagram: "to be updated soon",
    // email: "jyoti.diwakar@researchcenter.edu",
    bio: "Dr. Jyoti Diwakar is a distinguished scholar and educator in Political Science, with a Ph.D. from the University of Delhi. Her research focuses on caste, gender, and violence, particularly the intersectionality of Dalit women's experiences in India. Through her academic work and publications, she critically examines power structures and societal dynamics, contributing to global conversations on justice and equality. She has presented her research at esteemed international platforms, including the India China Institute, The New School with ten collaborators, New York (USA) and the Center for European and Asian Studies, Paris (France). As an educator, she has taught both postgraduate and undergraduate students at the University of Delhi, covering subjects such as public policy, political theory, nationalism, and international relations. Her extensive teaching experience reflects her dedication to mentoring students and fostering critical thinking. As the Director of Collective Knowledge, Dr. Diwakar brings her expertise to foster inclusive dialogue, bridge academic and policy gaps, and lead knowledge-sharing initiatives. Passionate about social transformation, she continues to shape critical discussions on caste, gender, and political structures, making significant contributions to academia and beyond.",
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/co-director-co-founder"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
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
            Back to Co-director & Co-founder
          </Link>
        </div>

        {/* Profile Header */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 overflow-hidden shadow-2xl mb-8">
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
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
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
                  <p className="text-2xl text-purple-200 font-semibold mb-4">
                    {profileData.title}
                  </p>

                  {/* Contact Information */}
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 mb-6">
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
                        href={`https://twitter.com/${profileData.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-300 hover:underline"
                      >
                        @{profileData.twitter}
                      </a>
                      <span className="text-gray-500">•</span>
                      <a
                        href={`https://instagram.com/${profileData.instagram}`}
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
                        @{profileData.instagram}
                      </a>
                    </div>
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
              className="w-8 h-8 text-purple-400"
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
            About Dr. Jyoti Diwakar
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Education</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Ph.D. in Political Science from University of Delhi
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
                <h3 className="text-white font-semibold">Research Focus</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Caste, gender, violence, and Dalit women's experiences
              </p>
            </div>

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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Leadership</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Co-Director of Collective Knowledge
              </p>
            </div>
          </div>

          {/* Bottom social buttons removed — inline social links remain above */}
        </div>
      </div>
    </div>
  );
};

export default JyotiDiwakar;
