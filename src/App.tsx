import React, { useState } from "react";
import { 
  Coins, FileCode, Sliders, Eye, BookOpen, Info, Sparkles, Cpu, Layers, Terminal 
} from "lucide-react";
import { initialQuestions } from "./data";
import { QuizQuestion } from "./types";
import KioskSimulator from "./components/KioskSimulator";
import CodeExporter from "./components/CodeExporter";
import EducatorWorkbench from "./components/EducatorWorkbench";

export default function App() {
  // Master state carrying standard quiz questions
  const [questions, setQuestions] = useState<QuizQuestion[]>(initialQuestions);
  const [activeTab, setActiveTab] = useState<"exporter" | "educator">("exporter");

  // Handler to update a question in state
  const handleUpdateQuestion = (updatedQuestion: QuizQuestion) => {
    setQuestions((prevQuestions) => 
      prevQuestions.map((q) => q.id === updatedQuestion.id ? updatedQuestion : q)
    );
  };

  // Handler to restore curated questions to their default standards
  const handleResetQuestions = () => {
    setQuestions(initialQuestions);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-650 selection:text-white">
      
      {/* GLOBAL BANNER HEADER */}
      <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            {/* Gallery Branding Icon */}
            <div className="bg-gradient-to-tr from-amber-500 to-indigo-600 p-2.5 rounded-xl text-slate-950 shadow-lg shadow-indigo-950/20 flex items-center justify-center">
              <Coins className="h-5 w-5 text-slate-100 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  Museum Kiosk Suite v1.4
                </span>
                <span className="bg-teal-500/10 text-teal-400 border border-teal-500/20 text-[9px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
                  Unity 2022+ Ready
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-slate-100">
                Numismatics & Economics Terminal Simulator
              </h1>
            </div>
          </div>

          {/* Quick status bar */}
          <div className="flex items-center gap-3.5 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5 bg-slate-900/80 p-2 rounded-lg border border-slate-850">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>C# Exporter Active</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/80 p-2 rounded-lg border border-slate-850">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              <span>Local State Synchronized</span>
            </div>
          </div>

        </div>
      </header>

      {/* DUAL WORKSPACE LAYOUT */}
      <main className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-grow w-full space-y-8">
        
        {/* WIDESCREEN 1920x1080 TERMINAL SIMULATOR SECTION */}
        <section className="bg-slate-905/40 p-5 sm:p-6 rounded-3xl border border-slate-800/80 backdrop-blur-sm shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-emerald-400" />
              <span className="text-[11px] font-bold text-slate-350 uppercase tracking-widest font-mono">
                Simulated 1920x1080 Landscape Kiosk Touchscreen (Visitor View)
              </span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
              <span>Aspect Ratio: 16:9 Landscape Video Profile</span>
            </div>
          </div>

          {/* Mounted Physical Kiosk Simulator */}
          <KioskSimulator 
            questions={questions} 
            onResetQuestions={handleResetQuestions} 
          />
          
          {/* Hardware Specs Footnote */}
          <div className="mt-5 p-4 bg-slate-950/80 border border-slate-800/50 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
            <div className="flex gap-3 items-center">
              <Info className="h-5 w-5 text-indigo-400 flex-shrink-0" />
              <p className="text-[11px] text-slate-400 leading-relaxed max-w-3xl">
                <strong>Simulating Landscape Bezel Controls:</strong> Optimised for 1920x1080 landscape tables or capacitive pedestal screens installed directly beside glass gallery casework. The wide grid allows multi-column accessibility, larger gesture bounds, and simultaneous adult/child focus panels.
              </p>
            </div>
          </div>
        </section>

        {/* WORKBENCH AND SCHEMATIC CONTROLS SECTION */}
        <section className="space-y-6">
          
          {/* Primary navigation bar to toggle between Developer and Educator workspaces */}
          <div className="bg-slate-900 p-1.5 rounded-2xl border border-slate-800 flex justify-between gap-2.5">
            
            <div className="flex gap-2">
              <button
                id="tab_trigger_exporter"
                onClick={() => setActiveTab("exporter")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                  activeTab === "exporter"
                    ? "bg-indigo-600 text-slate-105 shadow-lg shadow-indigo-950"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-850"
                }`}
              >
                <Cpu className="h-4 w-4" />
                Unity C# Scripts Exporter
              </button>

              <button
                id="tab_trigger_educator"
                onClick={() => setActiveTab("educator")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                  activeTab === "educator"
                    ? "bg-indigo-650 text-slate-105 shadow-lg shadow-indigo-950"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-850"
                }`}
              >
                <BookOpen className="h-4 w-4" />
                Educator Customization Hub
              </button>
            </div>

            {/* Simple active indicators */}
            <div className="hidden sm:flex items-center gap-1 text-[10px] text-slate-500 font-mono pr-2 select-none uppercase">
              <Terminal className="h-3.5 w-3.5" />
              <span>Ready to compile</span>
            </div>
          </div>

          {/* TAB CONTENT PANEL */}
          <div className="transition-all duration-300">
            {activeTab === "exporter" ? (
              <div className="space-y-4 animate-fade-in">
                <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800">
                  <h3 className="font-sans font-semibold text-slate-250 text-xs uppercase tracking-wider mb-1">
                    Unity Developer Guide
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Copy the custom ScriptableObject container and the complete MonoBehaviour manager below. The scripts automate screen loading, scoring, reeding validation triggers, and audio feedbacks, using native TMPro formatting!
                  </p>
                </div>
                
                {/* Code Block Tab Component */}
                <CodeExporter questions={questions} />
              </div>
            ) : (
              <div className="space-y-4 animate-fade-in">
                {/* Educator panel customizer */}
                <EducatorWorkbench 
                  questions={questions} 
                  onUpdateQuestion={handleUpdateQuestion}
                  onResetQuestions={handleResetQuestions}
                />
              </div>
            )}
          </div>

        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950/50 border-t border-slate-900 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <p className="text-xs text-slate-500 font-mono">
            Designed for the Numismatics & Economics Gallery Touchscreen Project. Curated with museum educational methodologies and strict Unity C# styling guidelines.
          </p>
          <p className="text-[10px] text-slate-600">
            Powered by React, Tailwind CSS, & Multi-Layer Web Audio Synthesizer.
          </p>
        </div>
      </footer>

    </div>
  );
}
