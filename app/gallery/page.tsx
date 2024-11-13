import Link from "next/link";
import React from "react";
import {Container} from "../../lib/components/Container";
import {ContentBox} from "../../lib/components/ContentBox";
import Header from "../../lib/components/Header";

async function getExamples() {
    return [
        { id: 1, title: "Variable Replacement Example", description: "Shows how variables can be replaced in the JSON template." },
        { id: 2, title: "Conditional Statement Example", description: "Demonstrates using conditional statements to include/exclude parts of the JSON." },
        { id: 3, title: "Loop Processing Example", description: "Illustrates how loops can be used to generate multiple entries based on a collection." }
    ];
}

export default async function Page() {
    const examples = await getExamples();
    return (
        <Container>
            <Header/>
            <ContentBox>
                <h2 className="text-3xl font-bold mb-6 text-center">JSON Gallery</h2>
                <div className="space-y-4">
                    {examples.map((example) => (
                        <Link key={example.id} href={`/gallery/${example.id}`} legacyBehavior>
                            <a className="block p-6 bg-gray-200 hover:bg-gray-300 rounded-lg shadow-md transition duration-300">
                                <h3 className="text-2xl font-semibold mb-2">{example.title}</h3>
                                <p className="text-gray-700">{example.description}</p>
                            </a>
                        </Link>
                    ))}
                </div>
            </ContentBox>
        </Container>
    );
}
