import React, { useState, useEffect } from "react";
import researchImg from "../assets/Research Proposal Dated 30 April 2025.jpg";
import regPdf from "../assets/Extension-last-date-online-registration-PhD-Programme.pdf";
import democracyPdf from "../assets/Democracy School2025-1.pdf";

const LatestNews = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState(null);

  const openModal = (src) => {
    setModalSrc(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalSrc(null);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Latest News</h1>
          <p className="text-xl text-gray-300">
            Stay updated with the latest news and developments from our research
            center.
          </p>
        </div>

        <div className="space-y-6">
          {/* Democracy School: Call For Applications (newest) */}
          <article className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="absolute top-4 right-4 bg-black/50 text-xs text-white px-2 py-1 rounded">
              28 Oct 2025
            </div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Call For Applications — Democracy School 2025
            </h2>
            <p className="text-gray-300 mb-4">
              Applications are open for the Democracy School 2025. Please
              download the full notice for details on eligibility, dates, and
              application procedure.
            </p>
            <a
              href={democracyPdf}
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
              target="_blank"
              rel="noreferrer"
            >
              Download Notice (PDF)
            </a>
          </article>

          <article className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 flex flex-col md:flex-row gap-6 items-start">
            <div className="absolute top-4 right-4 bg-black/50 text-xs text-white px-2 py-1 rounded">
              25 Oct 2025
            </div>
            <div className="w-full md:w-1/3">
              <button
                onClick={() => openModal(researchImg)}
                className="w-full focus:outline-none"
              >
                <img
                  src={researchImg}
                  alt="Research Proposal"
                  className="w-full h-40 object-cover rounded-md"
                />
              </button>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Research Proposal — Department of Political Science, University
                of Delhi
              </h2>

              <p className="text-gray-300 mb-2">
                The Department of Political Science at the University of Delhi
                announces an open call for research proposals focused on
                contemporary political theory and public policy. Scholars and
                postgraduate students are invited to submit concise proposals
                for consideration.
              </p>
            </div>
          </article>

          <article className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="absolute top-4 right-4 bg-black/50 text-xs text-white px-2 py-1 rounded">
              24 Oct 2025
            </div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Webinar: PhD Admission Process – University of Delhi
            </h2>

            <div className="text-gray-300 mb-4">
              <p className="mb-1">
                🎓 Webinar on:{" "}
                <strong>PhD Admission Process – University of Delhi</strong>
              </p>
              <p className="mb-1">
                🗓 Date: <strong>24th October 2025</strong>
              </p>
              <p className="mb-1">
                ⏰ Time: <strong>04:00 PM – 05:00 PM</strong>
              </p>
              <p className="mb-1">
                📍 Platform: <strong>Google Meet</strong>
              </p>
              <p className="mb-1">
                🔗 Join Link:{" "}
                <a
                  href="https://meet.google.com/fez-qazx-wjw"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 underline"
                >
                  https://meet.google.com/fez-qazx-wjw
                </a>
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-300">
                <strong>Speaker:</strong> Mr. Krishna Yadav – Research Scholar
                (PhD), Department of Political Science, University of Delhi
              </p>
              <p className="text-gray-300">
                <strong>Moderator:</strong> Mr. Mukesh Thakur – Research Scholar
                (PhD), Department of Political Science, University of Delhi
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg text-white font-semibold mb-2">
                What you will learn
              </h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Eligibility & Admission Process</li>
                <li>Interview Tips</li>
                <li>Q&amp;A with Research Scholars</li>
              </ul>
            </div>

            <p className="text-gray-400">
              📬 For enquiries:{" "}
              <a
                href="mailto:enquiry.univ@ckedu.org"
                className="text-blue-400 underline"
              >
                enquiry.univ@ckedu.org
              </a>
            </p>

            <p className="text-gray-400 mt-4">
              🧑‍💻 Don’t miss this chance — share with students preparing for PhD!
            </p>
          </article>

          <article className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="absolute top-4 right-4 bg-black/50 text-xs text-white px-2 py-1 rounded">
              16 Oct 2025
            </div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Extension: Last date for online registration — PhD Programme
            </h2>
            <p className="text-gray-300 mb-4">
              The University has extended the last date for online registration
              for the PhD Programme. Please download the official notice below
              for full details and revised deadlines.
            </p>
            <a
              href={regPdf}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              target="_blank"
              rel="noreferrer"
            >
              Download Notice (PDF)
            </a>
          </article>
          
        </div>
        {/* Image Modal / Lightbox */}
        {modalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-2 -right-2 bg-white text-gray-900 rounded-full p-2 shadow-lg"
                aria-label="Close image"
              >
                ✕
              </button>
              <img
                src={modalSrc}
                alt="Enlarged"
                className="w-full h-auto rounded-md max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestNews;
