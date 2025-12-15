"use client";
import React, { useMemo, useState, useEffect } from 'react';

// Configuration for the film roll pattern dimensions
const CONFIG = {
    frameWidth: 80,    // Width of a single film strip column (Scaled down from 180)
    frameHeight: 60,    // Height of a single frame (Scaled down from 135)
    sprocketSize: 3,    // Size of the sprocket holes (slightly smaller)
    sprocketGap: 6,    // Vertical gap between sprockets (90 / 15 = 6, divides evenly)
    baseColor: 'rgba(0, 0, 0, 1)',
    frameColor: '#000000ff',
    lineColor: '#000000ff',
    stripGap: -3,       // Vertical gap between film strips
};

const FilmRollBackground = () => {
    const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: `${e.clientX}px`, y: `${e.clientY}px` });
        };

        const handleTouchMove = (e) => {
            if (e.touches[0]) {
                setMousePos({ x: `${e.touches[0].clientX}px`, y: `${e.touches[0].clientY}px` });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    // Generate the SVG pattern as a data URI string
    const backgroundPattern = useMemo(() => {
        // The pattern tile width includes the strip width PLUS the gap
        const stripW = CONFIG.frameWidth;
        const gap = CONFIG.stripGap;
        const w = stripW + gap;
        const h = CONFIG.frameHeight;

        // Calculate sprocket positions
        // We place sprockets along the left and right edges of the "strip"
        const sprockets = [];
        const sprocketCount = h / CONFIG.sprocketGap; // Should be an integer now

        for (let i = 0; i < sprocketCount; i++) {
            const y = i * CONFIG.sprocketGap + (CONFIG.sprocketGap / 2);

            // Left sprocket column
            sprockets.push(
                `<rect x="6" y="${y - CONFIG.sprocketSize * 0.75}" width="${CONFIG.sprocketSize}" height="${CONFIG.sprocketSize * 1.5}" rx="1" fill="#333" opacity="0.5" />`
            );

            // Right sprocket column
            sprockets.push(
                `<rect x="${stripW - 9}" y="${y - CONFIG.sprocketSize * 0.75}" width="${CONFIG.sprocketSize}" height="${CONFIG.sprocketSize * 1.5}" rx="1" fill="#333" opacity="0.5" />`
            );
        }

        const svgString = `
      <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="filmPattern" x="0" y="0" width="${w}" height="${h}" patternUnits="userSpaceOnUse">
            <!-- Film Strip Background (Only covers the strip width, leaving gap transparent) -->
            <rect width="${stripW}" height="${h}" fill="${CONFIG.baseColor}" />
            
            <!-- Horizontal Divider Line (Perforated Effect) -->
            <!-- Placed at y=0 (Top) to tile perfectly with the bottom of previous frame -->
            <line x1="16" y1="0" x2="${stripW - 16}" y2="0" stroke="#333" stroke-width="2" stroke-dasharray="2 3" opacity="0.6" />
            
            <!-- Vertical Connectors (Top) -->
            <!-- Connects the top of the frame to the horizontal perforated line above -->
            <line x1="16" y1="0" x2="16" y2="8" stroke="${CONFIG.lineColor}" stroke-width="1" />
            <line x1="${stripW - 16}" y1="0" x2="${stripW - 16}" y2="8" stroke="${CONFIG.lineColor}" stroke-width="1" />
            
            <!-- The Inner Frame (The "Image" area of the film) -->
            <!-- Adjusted padding for smaller frame size: x=16, y=8 -->
            <rect x="16" y="8" width="${stripW - 32}" height="${h - 16}" fill="${CONFIG.frameColor}" rx="2" />

            <!-- Horizontal Divider Line (Perforated Effect) -->
            <!-- Positioned at the bottom gap, constrained to frame width -->
            <line x1="16" y1="${h - 2}" x2="${stripW - 16}" y2="${h - 2}" stroke="#333" stroke-width="3" stroke-dasharray="3 2" opacity="0.6" />
            
            <!-- Vertical Divider Lines (edges of the strip) -->
            <line x1="0" y1="0" x2="0" y2="${h}" stroke="${CONFIG.lineColor}" stroke-width="1" opacity="0.5" />
            <line x1="${stripW}" y1="0" x2="${stripW}" y2="${h}" stroke="${CONFIG.lineColor}" stroke-width="1" opacity="0.5" />

            <!-- Sprocket Holes -->
            ${sprockets.join('')}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#filmPattern)" />
      </svg>
    `
            .replace(/\n/g, '')
            .replace(/\s+/g, ' ')
            .trim();

        // Encode SVG for CSS background
        return `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}")`;
    }, []);

    return (
        <div className="absolute inset-0 z-0 bg-black">
            {/* Styles for the animation */}
            <style>{`
        @keyframes filmScroll {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 ${CONFIG.frameHeight}px; 
            /* Move exactly one frame height to loop perfectly */
          }
        }
        
        @keyframes filmGrain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(-10%, 5%); }
          30% { transform: translate(5%, -10%); }
          40% { transform: translate(-5%, 15%); }
          50% { transform: translate(-10%, 5%); }
          60% { transform: translate(15%, 0); }
          70% { transform: translate(0, 10%); }
          80% { transform: translate(-15%, 0); }
          90% { transform: translate(10%, 5%); }
        }
      `}</style>

            {/* The Animated Pattern Layer - Wrapped to prevent overflow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute inset-0 w-full h-[200%] md:h-[150%]"
                    style={{
                        backgroundImage: backgroundPattern,
                        backgroundRepeat: 'repeat',
                        animation: 'filmScroll 4s linear infinite', // Adjust '4s' to change speed
                        willChange: 'background-position',
                    }}
                />
            </div>

            {/* Interactive Vignette Overlay (Follows Mouse/Touch) - Sticky to stay in viewport */}
            <div
                className="sticky top-0 left-0 w-full h-screen pointer-events-none transition-all duration-75 ease-out"
                style={{
                    background: `radial-gradient(circle at ${mousePos.x} ${mousePos.y}, rgba(0,0,0,0) 15%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.95) 100%)`
                }}
            />

            {/* Noise/Grain Overlay (Adds texture) - Already has overflow-hidden */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay overflow-hidden">
                <div
                    className="w-[200%] h-[200%] absolute top-[-50%] left-[-50%]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        animation: 'filmGrain 0.5s steps(5) infinite'
                    }}
                />
            </div>

            {/* Optional: subtle vertical scanning line artifacts for retro feel */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, .5) 51%)',
                    backgroundSize: '100% 4px'
                }}
            />
        </div>
    );
};

export default FilmRollBackground;