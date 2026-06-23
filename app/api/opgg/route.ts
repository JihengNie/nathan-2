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

  const result = {
    tier: "",
    lp: "",
    wins: "",
    losses: "",
    winrate: "",
  };

  // Find Ranked Solo/Duo section
  const rankedSection = $("section")
    .filter((_, el) =>
      $(el).text().includes("Ranked Solo/Duo")
    )
    .first();

  if (!rankedSection.length) {
    return Response.json(result);
  }

  // -----------------------------
  // ✅ TIER (more stable extraction)
  // -----------------------------
  result.tier =
    rankedSection
      .find("strong")
      .first()
      .text()
      .trim()
    ||
    rankedSection.text().match(
      /(iron|bronze|silver|gold|platinum|emerald|diamond|master|grandmaster|challenger)\s*\d?/i
    )?.[0]
    ||
    "";

  // -----------------------------
  // ✅ LP (FIXED - no full text scan)
  // -----------------------------
  const lpNode = rankedSection
    .find("*")
    .filter((_, el) => {
      const t = $(el).text().trim();
      return /^\d+\s*LP$/.test(t);
    })
    .first()
    .text()
    .trim();

  const lpMatch = lpNode.match(/(\d+)\s*LP/);
  if (lpMatch) {
    result.lp = `${lpMatch[1]} LP`;
  }

  // -----------------------------
  // ✅ WINS / LOSSES
  // -----------------------------
  const wlNode = rankedSection.text();

  const wlMatch = wlNode.match(/(\d+)\s*W\s*(\d+)\s*L/);
  if (wlMatch) {
    result.wins = wlMatch[1];
    result.losses = wlMatch[2];
  }

  // -----------------------------
  // ✅ WINRATE
  // -----------------------------
  const wrMatch = wlNode.match(/(\d+)%\s*Win Rate|Win rate\s*(\d+)%/i);

  if (wrMatch) {
    result.winrate = wrMatch[1] || wrMatch[2];
  }

  return Response.json(result);
}