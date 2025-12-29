import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs"; // serve fs

const ALLOWED_FLASH = new Set(["4mb", "8mb", "16mb"]);

// Se vuoi evitare cache (manifest sempre aggiornato):
const NO_CACHE_HEADERS = {
    "Cache-Control": "no-store, max-age=0",
    Pragma: "no-cache",
};

function jsonResponse(obj, { status = 200, headers = {} } = {}) {
    return new Response(JSON.stringify(obj, null, 2), {
        status,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            ...headers,
        },
    });
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const flash = (searchParams.get("flash") || "16mb").toLowerCase();

    if (!ALLOWED_FLASH.has(flash)) {
        return jsonResponse(
            {
                error: "invalid_flash",
                message: `Parametro 'flash' non valido. Valori ammessi: ${[...ALLOWED_FLASH].join(", ")}`,
            },
            { status: 400, headers: NO_CACHE_HEADERS }
        );
    }

    // Carica file dal filesystem del server
    const filePath = path.join(process.cwd(), "src", "data", "manifests", "firmware", `firmware-${flash}.json`);
    console.log("➠ Il filepath è: ");
    console.log(filePath);

    try {
        const raw = await readFile(filePath, "utf8");
        // Validazione minima: deve essere JSON
        const manifest = JSON.parse(raw);

        // Qui puoi eventualmente applicare filtri (channel, min_boot, ecc.)
        // Es: const channel = searchParams.get("channel");

        return jsonResponse(manifest, { status: 200, headers: NO_CACHE_HEADERS });
    } catch (err) {
        return jsonResponse(
            {
                error: "manifest_not_found",
                message: `Manifest non trovato per flash='${flash}'.`,
            },
            { status: 404, headers: NO_CACHE_HEADERS }
        );
    }
}
