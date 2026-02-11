import React, { useState } from 'react';
import { Search, AlertCircle, ShieldCheck, AlertTriangle } from 'lucide-react';

const medicines = [
    { name: 'Amoxicillin', risk: 'High', description: 'Used for bacterial infections. High resistance observed in India due to overuse.', color: 'red' },
    { name: 'Azithromycin', risk: 'Medium', description: 'Commonly prescribed, but resistance is rising rapidly.', color: 'orange' },
    { name: 'Ciprofloxacin', risk: 'High', description: 'Fluoroquinolone antibiotic. Significant resistance in urinary tract infections.', color: 'red' },
    { name: 'Doxycycline', risk: 'Low', description: 'Effective for specific infections, lower resistance rates currently.', color: 'green' },
    { name: 'Metronidazole', risk: 'Medium', description: 'Used to treat certain bacterial and parasitic infections. Moderate resistance.', color: 'orange' },
];

const RiskBadge = ({ level }) => {
    const styles = {
        High: 'bg-red-50 text-red-600 border-red-100 ring-red-500/10',
        Medium: 'bg-orange-50 text-orange-600 border-orange-100 ring-orange-500/10',
        Low: 'bg-emerald-50 text-emerald-600 border-emerald-100 ring-emerald-500/10',
    };

    const icons = {
        High: AlertCircle,
        Medium: AlertTriangle,
        Low: ShieldCheck,
    };

    const Icon = icons[level];

    return (
        <span className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold border ring-1 ${styles[level]}`}>
            <Icon size={14} strokeWidth={2.5} />
            <span>{level} Risk</span>
        </span>
    );
};

const MedicineBase = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredMedicines = medicines.filter(med =>
        med.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8 animate-fade-in-up">
            {/* Search Header */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h2 className="text-3xl font-extrabold text-trust-blue tracking-tight">Medicine Knowledge Base</h2>
                    <p className="text-slate-500 mt-1">Real-time antibiotic resistance data for India</p>
                </div>
                <div className="relative w-full md:w-96 group">
                    <input
                        type="text"
                        placeholder="Search antibiotic..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-400 focus:bg-white transition-all shadow-sm"
                    />
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-sky-500 transition-colors" size={20} />
                </div>
            </div>

            {/* Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredMedicines.map((med) => (
                    <div key={med.name} className="group bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-sky-900/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors">{med.name}</h3>
                            <RiskBadge level={med.risk} />
                        </div>

                        <p className="text-slate-500 text-sm leading-relaxed mb-4">
                            {med.description}
                        </p>

                        <div className="flex items-center text-xs font-semibold text-slate-400 mt-auto pt-4 border-t border-slate-50">
                            <span className="w-2 h-2 rounded-full bg-slate-300 mr-2"></span>
                            <span>Active Data Source</span>
                        </div>
                    </div>
                ))}
                {filteredMedicines.length === 0 && (
                    <div className="col-span-full flex flex-col items-center justify-center py-16 text-slate-400">
                        <Search size={48} className="mb-4 opacity-20" />
                        <p className="text-lg">No medicines found matching "{searchTerm}"</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MedicineBase;
