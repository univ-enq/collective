import React from "react";
import manveeImg from "../assets/Manvee.jpg";
import { Link } from "react-router-dom";

const LegalAdvisor = () => {
  const profileData = {
    name: "Manvee",
    title: "Legal Advisor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    // email removed
    twitter: "manvee",
    linkedin: "https://www.linkedin.com/in/manvee",
    image: manveeImg,
    bio: "Manvee is an upcoming Technology & Data Protection Lawyer and the Founder & Manager of LL.B Mania (Legal Blog). Her expertise lies in Technology, Media & Telecommunications law. She has gained valuable experience through internships with renowned top-tier law firms such as Nishith Desai Associates, Luthra and Luthra Law Offices, Spice Route Legal, IndusLaw, Lakshmikumaran & Sridharan Attorneys, Ikigai Law, Saikrishna & Associates, Scriboard Advocates, and Panda Law, as well as policy firms like The Esya Center & The Koan Advisory. She was a Finalist of the National Essay Writing Competition on Online Gaming organized by NUJS Kolkata in 2023. Manvee has an extensive publication record with reputed International and National Forums & Leading Dailies, including the Times of India, MNLU Law Review, Taxmann, and HeinOnline. Her work also appears in Scopus Indexed Journals and Book Chapters in leading publications. In her free time, you will find her playing Throwball or Volleyball in the playground. She is also a former National Level High Jumper and Long Jumper.",
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/people"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
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
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-teal-600/20 to-green-600/20"></div>
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
                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
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
                  <p className="text-2xl text-emerald-200 font-semibold mb-4">
                    {profileData.title}
                  </p>

                  {/* Contact Information */}
                  <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-300 mb-6">
                    <a
                      href={`https://twitter.com/${profileData.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-sky-300 hover:underline"
                    >
                      <svg
                        className="w-4 h-4 text-sky-400"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                      @{profileData.twitter}
                    </a>

                    <span className="text-gray-500">•</span>

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
              className="w-8 h-8 text-emerald-400"
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
            About Manvee
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
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Technology Law</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Specializing in Technology, Media & Telecommunications law
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-teal-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Publications</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Extensive publications in Times of India, MNLU Law Review,
                Taxmann, HeinOnline
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
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Legal Blog</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Founder & Manager of LL.B Mania (Legal Blog)
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">
                  Top-Tier Experience
                </h3>
              </div>
              <p className="text-gray-300 text-sm">
                Internships with Nishith Desai Associates, Luthra & Luthra,
                IndusLaw
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.0 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">
                  Sports Achievements
                </h3>
              </div>
              <p className="text-gray-300 text-sm">
                Former National Level High Jumper and Long Jumper
              </p>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="mt-8 flex justify-center">
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25"
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

export default LegalAdvisor;
