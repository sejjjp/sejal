import React, { useState } from "react";
import { CaseStudyModal } from "./CaseStudyModal";
import { PDFViewerModal } from "./PDFViewerModal";
import { mohfwCaseStudy } from "../data/caseStudies";
import { FileText, Sparkles } from "lucide-react";

export function CaseStudyDemo() {
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [pdfModalOpen, setPdfModalOpen] = useState(false);

  // Sample PDF URL - replace with your actual MOHFW PDF URL
  const samplePdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-gray-900 mb-4">
            MOHFW Case Study Preview
          </h1>
          <p className="text-xl text-gray-600">
            ✨ Now showing your actual case study content with
            the hero image from your PDF!
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Share the rest of the pages to continue building the
            complete case study
          </p>
        </div>

        {/* Single Preview Button */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-2xl">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl text-gray-900">
                  MOHFW Redesign Case Study
                </h2>
                <p className="text-sm text-purple-600">
                  Interactive Modal Preview
                </p>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Click below to preview your MOHFW case study with
              the content from the first 3 pages you provided.
              The modal features your hero image, problem
              statement, and user goals section.
            </p>

            <div className="space-y-2 mb-6 bg-green-50 p-4 rounded-xl border border-green-200">
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-sm text-gray-700">
                  Hero section with your actual cover image
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-sm text-gray-700">
                  Problem statement from page 2
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-sm text-gray-700">
                  Users & Goals section from page 3
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">→</span>
                <span className="text-sm text-gray-700">
                  Ready for more content as you share additional
                  pages
                </span>
              </div>
            </div>

            <button
              onClick={() => setPdfModalOpen(true)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105 shadow-lg"
            >
              Preview Your Case Study
            </button>
          </div>
        </div>

        {/* Options Grid - Collapsed for reference */}
        <details className="mb-12">
          <summary className="text-center text-gray-600 cursor-pointer hover:text-gray-900 transition-colors mb-4">
            Want to see Option B (PDF Viewer) too? Click here
          </summary>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Option A: Custom Case Study Modal */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-2xl">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl text-gray-900">
                    Option A
                  </h2>
                  <p className="text-sm text-purple-600">
                    Recommended
                  </p>
                </div>
              </div>

              <h3 className="text-xl mb-3 text-gray-900">
                Custom Interactive Modal
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A beautifully designed, full-screen modal with
                sections for problem, solution, process, and
                results. Includes image galleries and smooth
                animations.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm text-gray-700">
                    Professional & immersive experience
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm text-gray-700">
                    Better storytelling with sections
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm text-gray-700">
                    Smooth animations & interactions
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm text-gray-700">
                    Mobile responsive
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm text-gray-700">
                    More engaging than PDF
                  </span>
                </div>
              </div>

              {/* <button
                onClick={() => setCustomModalOpen(true)}
                className="w-full bg-purple-600 text-white py-4 rounded-2xl hover:bg-purple-700 transition-all hover:scale-105 shadow-lg"
              >
                Preview Option A
              </button> */}
            </div>

            {/* Option B: PDF Viewer Modal */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-2xl">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl text-gray-900">
                    Option B
                  </h2>
                  <p className="text-sm text-blue-600">
                    Quick & Simple
                  </p>
                </div>
              </div>

              <h3 className="text-xl mb-3 text-gray-900">
                PDF Viewer Modal
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Opens your existing PDF case study in a
                full-screen viewer with download and navigation
                options. Quick to implement if your PDF is
                ready.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm text-gray-700">
                    Use existing PDF as-is
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm text-gray-700">
                    Fast implementation
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm text-gray-700">
                    Download & open options
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm text-gray-700">
                    Next/Previous navigation
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">
                    ⚠
                  </span>
                  <span className="text-sm text-gray-700">
                    Less interactive than Option A
                  </span>
                </div>
              </div>

              <button
                onClick={() => setPdfModalOpen(true)}
                className="w-full bg-blue-600 text-white py-4 rounded-2xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
              >
                Preview Option B
              </button>
            </div>
          </div>
        </details>

        {/* Recommendation Box */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 border-2 border-purple-300">
          <h3 className="text-2xl text-gray-900 mb-4">
            💡 My Recommendation
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Go with Option A (Custom Modal)</strong> for
            a more professional and engaging portfolio
            experience. It tells your design story better and
            allows viewers to understand your process
            step-by-step.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Use Option B if you're short on time and already
            have a beautifully designed PDF ready. You can
            always upgrade to Option A later by extracting
            content from your PDF.
          </p>
        </div>

        {/* Implementation Note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            Click the buttons above to see live demos of both
            options
          </p>
        </div>
      </div>

      {/* Modals */}
      <CaseStudyModal
        isOpen={customModalOpen}
        onClose={() => setCustomModalOpen(false)}
        caseStudy={mohfwCaseStudy}
      />

      <PDFViewerModal
        isOpen={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
        pdfUrl={samplePdfUrl}
        projectTitle="MOHFW Dashboard Redesign"
      />
    </div>
  );
}