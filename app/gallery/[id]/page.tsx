"use client";

import React, {useEffect, useState} from "react";
import {Container} from "../../../lib/components/Container";
import {ContentBox} from "../../../lib/components/ContentBox";
import {getStaticProps} from "../../helpers/getStaticProps";
import Header from "../../../lib/components/Header";

export default function Page() {
    
    const [examples, setExamples] = useState<{fileInput: string, fileOutput: string} | null>(null)
    
    useEffect(() => {
        setExamples(getStaticProps(window.location.pathname.at(-1)))
    },[])
    
    return (
        <Container>
           <Header/>
            <ContentBox>
                <h2 className="text-3xl font-bold mb-4 text-center">This is Example: 1</h2>
                
                {examples && (
                    <div className="space-y-8">
                        {/* Before Processing */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-red-600">Before Processing:</h3>
                            <pre className="font-mono bg-red-100 p-4 rounded-lg border border-red-300 text-left whitespace-pre-wrap">
                                {JSON.stringify(JSON.parse(examples.fileInput), null, 2)}
                            </pre>
                        </div>
                        
                        {/* After Processing */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-green-600">After Processing:</h3>
                            <pre className="font-mono bg-green-100 p-4 rounded-lg border border-green-300 text-left whitespace-pre-wrap">
                                {JSON.stringify(JSON.parse(examples.fileOutput), null, 2)}
                            </pre>
                        </div>
                    </div>
                )}
            </ContentBox>
        </Container>
    );
}
