"use client";

import {Props} from "next/script";
import React, {PropsWithChildren} from "react";

export function Container({ children, ...props }: PropsWithChildren<Props>) {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 p-8 flex flex-col items-center"  {...props}>
            {...children}
        </div>
    )
}
