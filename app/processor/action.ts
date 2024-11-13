"use server";

export async function process(_previousState: string, formData: FormData) {
    const template = formData.get("template");
    if (typeof template !== "string") {
        return "Invalid template";
    }
    
    try {
        const jsonTemplate = JSON.parse(template);
        return processJsonTemplate(jsonTemplate);
    } catch (error) {
        return "Failed to process template";
    }
}

function processJsonTemplate(template) {
    const context = {
        siteName: "Helsinki City Building repairs",
        siteStartDate: "1.1.2024",
        siteEndDate: "31.12.2025",
        hasConferenceRoom: false,
        staffList: [
            { name: "John Doe", username: "john.doe" },
            { name: "Jane Doe", username: "jane.doe" }
        ]
    };
    
    const replaceVariables = (str) => {
        return str.replace(/\{\{(.*?)\}\}/g, (_, key) => context[key.trim()] || "");
    };
    
    const processObject = (obj) => {
        if (Array.isArray(obj)) {
            return obj
                .map(processObject)
                .filter((item) => item !== null);
        } else if (typeof obj === "object" && obj !== null) {
            if (obj["$if"]) {
                const condition = replaceVariables(obj["$if"]);
                if (!context[condition]) {
                    return null;
                }
            }
            if (obj["$for"]) {
                const { collection, produce } = obj["$for"];
                return context[collection].map((item) => {
                    const replacedProduce = JSON.parse(JSON.stringify(produce), (key, value) => {
                        if (typeof value === "string") {
                            return replaceVariables(value.replace(/\{\{(.*?)\}\}/g, (_, key) => item[key.trim()] || ""));
                        }
                        return value;
                    });
                    return replacedProduce;
                });
            }
            return Object.keys(obj).reduce((acc, key) => {
                acc[key] = processObject(obj[key]);
                return acc;
            }, {});
        } else if (typeof obj === "string") {
            return replaceVariables(obj);
        }
        return obj;
    };
    
    return processObject(template);
}
