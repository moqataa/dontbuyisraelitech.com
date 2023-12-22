export default async function handler(req: Request) {
    const res = await fetch("https://buyisraelitech.com");
    return new Response(res.body, res);
}

export const config = { path: "/test" };