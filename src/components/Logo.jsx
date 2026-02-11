import React from 'react';
import { Pill, Share2 } from 'lucide-react';

const Logo = ({ size = "normal" }) => {
    const isLarge = size === "large";

    return (
        <div className="flex flex-col items-center">

            {/* Capsule Icon */}
            <div className="relative flex items-center justify-center mb-2">

                {/* Ocean Blue Background */}
                <div className={`${isLarge ? "w-20 h-20" : "w-12 h-12"
                    } bg-cyan-600 rounded-full absolute -rotate-12`} />

                <div className={`${isLarge ? "w-20 h-20" : "w-12 h-12"
                    } bg-white/20 rounded-full absolute rotate-12 border-2 border-cyan-400`} />

                {/* Icons */}
                <div className="relative z-10 flex items-center justify-center">
                    <Pill
                        className="text-white rotate-12 drop-shadow-lg"
                        size={isLarge ? 36 : 22}
                        strokeWidth={1.5}
                    />
                    <Share2
                        className="text-white absolute"
                        size={isLarge ? 20 : 14}
                        strokeWidth={2}
                    />
                </div>
            </div>

            {/* Brand Name */}
            <h1
                className={`font-bold tracking-tight text-center text-cyan-600 ${isLarge ? "text-4xl" : "text-xl"
                    }`}
            >
                Antibiotic
            </h1>

            {/* Optional Tagline */}
            {isLarge && (
                <p className="text-slate-400 text-sm mt-1 uppercase tracking-wider">
                    Resistance Guard
                </p>
            )}
        </div>
    );
};

export default Logo;
