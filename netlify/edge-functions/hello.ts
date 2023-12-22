
export default async (request: Request) => {

    const res = await fetch("https://buyisraelitech.com/database", {
        "headers": {
            "Accept": "text/html,application/xhtml+xml"
        }
    });

    return new Response(res.body, res);
};
export const config = { path: "/test" };
