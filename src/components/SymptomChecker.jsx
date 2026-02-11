import React, { useState } from 'react';
import { Activity, AlertTriangle, CheckCircle, Search, ArrowRight, ShieldAlert } from 'lucide-react';

const SymptomChecker = () => {
    const [symptom, setSymptom] = useState('');
    const [result, setResult] = useState(null);

    const analyzeSymptom = () => {
        const lowerSymptom = symptom.toLowerCase();

        // Simulated Logic
        if (lowerSymptom.includes('urinary') || lowerSymptom.includes('uti') || lowerSymptom.includes('pneumonia') || lowerSymptom.includes('bacterial') || lowerSymptom.includes('infection')) {
            setResult({
                type: 'consult',
                title: 'Antibiotics MAY be required',
                message: 'Potential Bacterial Infection',
                detail: 'Your symptoms match patterns often associated with bacterial infections. However, misuse accelerates resistance. Please consult a doctor for a confirmed test before starting any medication.',
                color: 'text-orange-600',
                borderColor: 'border-orange-200',
                bg: 'bg-orange-50',
                gradient: 'from-orange-500 to-red-500',
                icon: AlertTriangle
            });
        } else if (lowerSymptom.includes('cold') || lowerSymptom.includes('flu') || lowerSymptom.includes('throat') || lowerSymptom.includes('runny') || lowerSymptom.includes('viral') || lowerSymptom.includes('cough')) {
            setResult({
                type: 'viral',
                title: 'Antibiotics likely NOT needed',
                message: 'Likely Viral Infection',
                detail: 'Most such cases are viral. Antibiotics DO NOT kill viruses. Taking them now will only build resistance in your body, making them ineffective when you truly need them later.',
                color: 'text-emerald-700',
                borderColor: 'border-emerald-200',
                bg: 'bg-emerald-50',
                gradient: 'from-emerald-400 to-green-600',
                icon: CheckCircle
            });
        } else {
            setResult({
                type: 'unknown',
                title: 'Consult a Healthcare Provider',
                message: 'Diagnosis Unclear',
                detail: 'Your symptoms require professional evaluation. Please visit a certified doctor for a proper diagnosis. Do not self-medicate.',
                color: 'text-sky-700',
                borderColor: 'border-sky-200',
                bg: 'bg-sky-50',
                gradient: 'from-sky-400 to-blue-600',
                icon: ShieldAlert
            });
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Header Hero */}
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-trust-blue tracking-tight">
                    Symptom <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Checker</span>
                </h1>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                    Not every illness needs antibiotics. Use our AI-powered tool to check if your symptoms are likely viral or bacterial.
                </p>
            </div>

            {/* Input Card */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-400"></div>

                <div className="relative z-10">
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 ml-1">
                        Describe your symptoms
                    </label>
                    <div className="relative group">
                        <input
                            type="text"
                            value={symptom}
                            onChange={(e) => setSymptom(e.target.value)}
                            placeholder="e.g., 'Sore throat and runny nose'..."
                            className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100 transition-all outline-none text-xl text-slate-700 placeholder:text-slate-400 shadow-inner"
                            onKeyDown={(e) => e.key === 'Enter' && analyzeSymptom()}
                        />
                        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-sky-500 transition-colors" size={24} />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={analyzeSymptom}
                            disabled={!symptom.trim()}
                            className="flex items-center space-x-2 bg-gradient-to-r from-trust-blue to-slate-800 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-sky-500/30 hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none"
                        >
                            <span>Analyze Now</span>
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Result Card */}
            {result && (
                <div className={`p-8 rounded-3xl border ${result.borderColor} ${result.bg} animate-fade-in-up relative overflow-hidden shadow-lg`}>
                    {/* Ambient Background Glow */}
                    <div className={`absolute -right-10 -top-10 w-64 h-64 rounded-full opacity-10 bg-gradient-to-br ${result.gradient} blur-3xl`}></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className={`p-5 rounded-2xl bg-white shadow-md text-white bg-gradient-to-br ${result.gradient}`}>
                            <result.icon size={40} />
                        </div>
                        <div className="flex-1">
                            <p className={`text-sm font-bold uppercase tracking-wide opacity-80 mb-1 ${result.color}`}>{result.title}</p>
                            <h3 className="text-3xl font-bold text-slate-800 mb-3">{result.message}</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">{result.detail}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SymptomChecker;
