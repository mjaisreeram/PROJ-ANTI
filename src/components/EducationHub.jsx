import React from 'react';
import { BookOpen, FileText, Globe, AlertOctagon, Lightbulb } from 'lucide-react';

const EducationHub = () => {
    return (
        <div className="space-y-8 max-w-5xl mx-auto animate-fade-in-up">

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-trust-blue to-slate-900 text-white p-10 lg:p-12 rounded-3xl shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:bg-sky-500/30 transition-colors duration-700"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl transform -translate-x-10 translate-y-10"></div>

                <div className="relative z-10 max-w-2xl">
                    <div className="flex items-center space-x-2 text-sky-400 font-bold tracking-widest uppercase text-xs mb-4">
                        <span className="w-8 h-0.5 bg-sky-400"></span>
                        <span>Phase-2 Research</span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                        The Silent Pandemic: <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-emerald-300">Antimicrobial Resistance</span>
                    </h1>
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                        Investigating the critical impact of drug-resistant pathogens in the Indian healthcare landscape. Bridging the gap between clinical data and public action.
                    </p>
                    <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-6 py-3 rounded-xl font-semibold transition-all">
                        Download Key Findings
                    </button>
                </div>

                <Globe className="absolute right-10 bottom-10 text-white/5 transform scale-150 rotate-12 group-hover:rotate-45 transition-transform duration-1000 ease-in-out" size={300} />
            </div>

            {/* Grid Content */}
            <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 text-sky-600">
                        <FileText size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Abstract</h2>
                    <p className="text-slate-600 leading-relaxed">
                        This module explores the escalating threat of drug-resistant pathogens in India.
                        By bridging clinical data with public awareness, we aim to reduce misuse of antibiotics
                        and promote stewardship. Our research indicates a direct correlation between
                        unregulated over-the-counter sales and rising resistance rates across urban centers.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-red-500">
                        <AlertOctagon size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Problem Statement</h2>
                    <p className="text-slate-600 leading-relaxed">
                        India is termed the "AMR Capital of the World." The lack of stringent
                        regulations and public knowledge has led to a "Silent Pandemic" where commonly
                        treatable infections are becoming fatal. This platform addresses the information
                        gap serving as a digital intervention tool to visualize the scale of the crisis.
                    </p>
                </div>
            </div>

            {/* Introduction Card */}
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-sky-400 to-trust-blue"></div>
                <div className="flex items-start space-x-6">
                    <div className="hidden lg:block p-4 bg-slate-50 rounded-2xl">
                        <Lightbulb className="text-amber-400" size={32} />
                    </div>
                    <div className="prose prose-slate max-w-none">
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">Introduction to the Crisis</h2>
                        <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                            Antimicrobial Resistance (AMR) occurs when bacteria, viruses, fungi, and parasites change over time and no longer respond to medicines making infections harder to treat and increasing the risk of disease spread, severe illness and death.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            As a result of drug resistance, antibiotics and other antimicrobial medicines become ineffective and infections become increasingly difficult or impossible to treat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationHub;
