import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Activity,
    Pill,
    BookOpen,
    BarChart2,
    Info,
    Menu,
    X,
    LayoutDashboard
} from 'lucide-react';
import Logo from './Logo';

const SidebarItem = ({ to, icon: Icon, label }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${isActive
                ? 'bg-gradient-to-r from-sky-500/20 to-transparent text-sky-400 border-l-4 border-sky-400 shadow-lg shadow-sky-900/20'
                : 'text-slate-400 hover:text-white hover:bg-white/5 hover:translate-x-1'
            }`
        }
    >
        <Icon size={20} className="group-hover:text-sky-400 transition-colors" />
        <span className="font-medium tracking-wide">{label}</span>
    </NavLink>
);

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-[#F0F4F8] overflow-hidden font-sans">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-trust-blue text-white transform transition-transform duration-300 ease-out lg:translate-x-0 lg:static lg:inset-0 shadow-2xl
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                <div className="flex flex-col h-full">
                    {/* Logo Area */}
                    <div className="h-24 flex items-center justify-center px-6 border-b border-white/5 bg-black/10">
                        <Logo size="normal" />
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="lg:hidden absolute right-4 text-slate-400 hover:text-white"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
                        <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Menu</p>
                        <SidebarItem to="/" icon={Activity} label="Symptom Check" />
                        <SidebarItem to="/medicines" icon={Pill} label="Medicine Base" />

                        <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-wider mt-8 mb-4">Insights</p>
                        <SidebarItem to="/stats" icon={BarChart2} label="Statistics" />
                        <SidebarItem to="/education" icon={BookOpen} label="Education Hub" />
                        <SidebarItem to="/about" icon={Info} label="About Project" />
                    </nav>

                    {/* Footer */}
                    <div className="p-6 border-t border-white/5 bg-black/20">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-xs font-bold shadow-lg">
                                AG
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-white">AMR Guard</p>
                                <p className="text-xs text-slate-400">v1.0.0 &bull; India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden relative">
                {/* Top Header (Mobile only mainly, or for search/profile) */}
                <header className="flex items-center justify-between h-16 px-6 bg-white/80 backdrop-blur-md border-b border-slate-200 lg:hidden z-30 sticky top-0">
                    <div className="flex items-center">
                        <span className="font-bold text-trust-blue text-lg">AMR Guard</span>
                    </div>
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="text-trust-blue p-2 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                        <Menu size={24} />
                    </button>
                </header>

                <main className="flex-1 overflow-y-auto bg-[#F0F4F8]">
                    <div className="max-w-7xl mx-auto p-4 lg:p-8 animate-fade-in-up">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
