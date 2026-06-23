import * as cheerio from "cheerio";

export async function GET() {
  const url =
    "https://www.op.gg/lol/summoners/na/tbonegarcia-tatas";

  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });

  const html = await res.text();
  const $ = cheerio.load(html);

  let result = {
    tier: "",
    lp: "",
    wins: "",
    losses: "",
    winrate: "",
  };

  // 🔥 Find the Ranked Solo/Duo section by text anchor
  const rankedSection = $("section")
    .filter((_, el) => $(el).text().includes("Ranked Solo/Duo"))
    .first();

  if (rankedSection.length) {
    const text = rankedSection.text();

    // ✅ Tier (gold 3, silver 2, etc.)
    // This works because "gold 3" is inside a strong tag in your HTML
    result.tier =
      rankedSection.find("strong").first().text().trim() ||
      text.match(/(iron|bronze|silver|gold|platinum|emerald|diamond|master|grandmaster|challenger)\s*\d?/i)?.[0] ||
      "";

    // ✅ LP (81 LP)
    const lpMatch = text.match(/(\d+)\s*LP/);
    if (lpMatch) result.lp = `${lpMatch[1]} LP`;

    // ✅ Wins / Losses (16W 8L)
    const wlMatch = text.match(/(\d+)\s*W\s*(\d+)\s*L/);
    if (wlMatch) {
      result.wins = wlMatch[1];
      result.losses = wlMatch[2];
    }

    // ✅ Winrate (67%)
    const wrMatch = text.match(/Win rate\s*(\d+)%/);
    if (wrMatch) {
      result.winrate = wrMatch[1];
    }
  }

  return Response.json(result);
}