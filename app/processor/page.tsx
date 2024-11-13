"use client";

import { Button } from "@/lib/components/Button";
import { TextArea } from "@/lib/components/TextArea";
import React, { useState } from "react";
import {Container} from "../../lib/components/Container";
import {ContentBox} from "../../lib/components/ContentBox";
import Header from "../../lib/components/Header";
import {process} from "./action"

export default function Page() {
    const [output, setOutput] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        
        try {
            const formData = new FormData(e.target as HTMLFormElement);
            const result = await process("", formData);
            
            if (result === "Failed to process template" || result === "Invalid template") {
                setError(result);
            } else {
                setOutput(JSON.stringify(result, null, 2));
            }
        } catch (err) {
            setError("Failed to process JSON. Please check the input and try again.");
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <Container>
            <Header/>
            <ContentBox>
                <h2 className="text-3xl font-bold mb-6 text-center">JSON Processor</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="template" className="block text-lg font-medium mb-2">
                            Input JSON Template:
                        </label>
                        <TextArea name="template" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    {error && <p className="text-red-600 text-sm">{error}</p>}
                    <Button type="submit" disabled={loading} className={`w-full py-3 ${loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300`}>
                        {loading ? "Processing..." : "Process"}
                    </Button>
                    <div>
                        <label htmlFor="output" className="block text-lg font-medium mb-2">
                            Output:
                        </label>
                        <div id="output" className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 whitespace-pre-wrap">
                            {output}
                        </div>
                    </div>
                </form>
            </ContentBox>
        </Container>
    );
}
