import { generateGroq } from "./groqService.js";

export const requestLLM = async (prompt) => {
    const timeout = (ms) =>
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error("TIMEOUT")), ms)
        );

    const start = performance.now();

    try {
        const result = await Promise.race([
            generateGroq(prompt),
            timeout(15000)
        ]);

        console.log("Groq time:", performance.now() - start, "ms");
        return result;

    } catch (err) {
        console.error("Groq gagal:", err.message);
        throw new Error("Request ke Groq gagal atau timeout");
    }
};
