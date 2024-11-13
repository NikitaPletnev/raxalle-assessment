"use client";

import { Props } from "next/script";
import React, { PropsWithChildren, useRef, useEffect } from "react";

export function ContentBox({ children, ...props }: PropsWithChildren<Props>) {
    const contentBoxRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (contentBoxRef.current) {
                const { left, top, width, height } = contentBoxRef.current.getBoundingClientRect();
                const x = e.clientX - left - width / 2;
                const y = e.clientY - top - height / 2;
                const shadowX = (-x / 10).toFixed(2);
                const shadowY = (-y / 10).toFixed(2);
                
                contentBoxRef.current.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.4)`;
            }
        };
        
        const contentBox = contentBoxRef.current;
        if (contentBox) {
            contentBox.addEventListener("mousemove", handleMouseMove);
        }
        
        return () => {
            if (contentBox) {
                contentBox.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, []);
    
    return (
        <div
            ref={contentBoxRef}
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl text-center transition-all duration-300 ease-out"
            {...props}
        >
            {children}
        </div>
    );
}
