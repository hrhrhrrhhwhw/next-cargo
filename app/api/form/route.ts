// app/api/form/route.ts
export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch("https://cargo-backend-gamma.vercel.app/api/form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return new Response(await res.text(), {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}
