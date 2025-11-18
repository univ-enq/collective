import React from "react";

const episodes = [
  {
    id: 1,
    title: "Episode 1 — Launching Collective Knowledge",
    description:
      "An introduction to Collective Knowledge: mission, team, and first projects.",
    date: "2025-11-01",
    audio: "",
    link: "#",
  },
  {
    id: 2,
    title: "Episode 2 — Research Collaboration",
    description:
      "How we build interdisciplinary teams and run collaborative research programs.",
    date: "2025-10-15",
    audio: "",
    link: "#",
  },
];

const Podcast = () => {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Collective Knowledge Podcast
      </h1>
      <p className="text-gray-300 mb-8">
        Conversations with researchers, founders, and community members about
        impactful work across disciplines.
      </p>

      <div className="space-y-6">
        {episodes.map((ep) => (
          <div
            key={ep.id}
            className="relative bg-gray-800/50 p-4 rounded-lg border border-gray-700"
          >
            {/* Date badge top-right */}
            {ep.date && (
              <div className="absolute top-3 right-3 bg-black/50 text-xs text-white px-2 py-1 rounded">
                {new Date(ep.date).toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' })}
              </div>
            )}

            <div className="md:flex md:items-center md:justify-between">
              <div>
                <h3 className="text-xl text-white font-semibold">{ep.title}</h3>
                <p className="text-gray-400">{ep.description}</p>
              </div>

              <div className="mt-4 md:mt-0 flex items-center gap-4">
                {ep.audio ? (
                  <audio controls src={ep.audio} className="w-56" />
                ) : (
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    disabled
                    aria-disabled
                  >
                    Audio Not Available
                  </button>
                )}

                <a
                  href={ep.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 underline"
                >
                  Show notes
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcast;
