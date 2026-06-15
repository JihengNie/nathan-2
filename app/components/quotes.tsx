"use client";

import { useEffect, useMemo, useState } from "react";

type Quote = {
  text: string;
  author: string;
  date: string;
};

const quotes: Quote[] = [
  {
    text: "She's basically the queen of chinese restaurant music",
    author: "The Weiner Man",
    date: "2024",
  },
  {
    text: "Well it seems our answers have been prayered",
    author: "MagicMan",
    date: "Aug 2024",
  },
  {
    text: "age don't matter",
    author: "Colta",
    date: "2024",
  },
  {
    text: "I won Nathan in a lottery",
    author: "Braden Allmond",
    date: "12/5/24, 1:36 PM",
  },
  {
    text: "A bug with no games",
    author: "Seth",
    date: "12/13/24, 5:31 PM",
  },
  {
    text: "I'm John Cornball",
    author: "Colta",
    date: "2025",
  },
  {
    text: "Bee-Hold a Man",
    author: "Bill",
    date: "1/13/25, 6:51 PM",
  },
  {
    text: "I'll write a manifesto",
    author: "Nathan",
    date: "1/13/25, 6:52 PM",
  },
  {
    text: "I traced out her (feixiao's) ass",
    author: "Tyla",
    date: "2/3/25, 8:10 PM",
  },
  {
    text: "Frogger dies on saturday",
    author: "Tyla",
    date: "2/7/25, 9:11 PM",
  },
  {
    text: "this guy has too much hair. (about a cancer survivor kid)",
    author: "The Weiner Man",
    date: "2/9/25, 3:51 PM",
  },
  {
    text: "Are you choking on your bigotry, Rahasya?",
    author: "Braden",
    date: "2/9/25, 4:31 PM",
  },
  {
    text: "If it's ever In/Spectre, I will pay (Tyla) $100",
    author: "Seth",
    date: "2/23/25",
  },
  {
    text: "I think Lady Gaga should come out as homophobic",
    author: "Isaac",
    date: "3/10/25",
  },
  {
    text: "I love kidnapping people",
    author: "briar",
    date: "3/10/25",
  },
  {
    text: "I want a challenge",
    author: "Tyla",
    date: "3/29/25",
  },
  {
    text: "Hey Tyla, you have a mustache, it looks....",
    author: "Shams",
    date: "5/10/25",
  },
  {
    text: "I stand by this. I am right.",
    author: "The Weiner Man",
    date: "6/27/25",
  },
  {
    text: "We will not be divided",
    author: "The Weiner Man",
    date: "6/27/25",
  },
  {
    text: "that man is not white, his nipples are brown",
    author: "Ross",
    date: "7/12/25",
  },
  {
    text: "Alright Colta, you're gay",
    author: "The Weiner Man",
    date: "7/19/25",
  },
  {
    text: "Nathan I hope you die",
    author: "Jesse",
    date: "7/27/25",
  },
  {
    text: "Ya, I am (in response to 'Are you homophobic?')",
    author: "Colta",
    date: "8/13/25",
  },
  {
    text: "Someday you will burn in hell.",
    author: "Colta",
    date: "11/8/25",
  },
  {
    text: "If that's a dad bod, I'm in fuckin' trouble",
    author: "Tyla",
    date: "11/24/25",
  },
  {
    text: "I will download League tomorrow (a mistake)",
    author: "Bill",
    date: "1/17/26",
  },
  {
    text: "Can a bush give consent?",
    author: "Tyla",
    date: "1/22/26",
  },
  {
    text: "Sex actually true",
    author: "unknown",
    date: "1/30/26",
  },
  {
    text: "I wanna be white",
    author: "Tyla",
    date: "2/20/26",
  },
  {
    text: "Fuck these Chomos (Child Molesters)",
    author: "Tyla",
    date: "3/24/26",
  },
  {
    text: "Bush out the wazoo",
    author: "Anchor",
    date: "4/13/26",
  },
  {
    text: "Yeah, it's pretty warm",
    author: "Seth",
    date: "4/15/26",
  },
  {
    text: "Never let them say a white boy can't handle a little spice",
    author: "unknown",
    date: "4/15/26",
  },
  {
    text: "The one drop rule applies / I'm professionally racist",
    author: "Ross",
    date: "4/27/26",
  },
  {
    text: "I WANT THE LOVE OF MY LIFE TO HAVE SEX WITH SOMEONE ELSE",
    author: "The Weiner Man",
    date: "4/27/26",
  },
  {
    text: "I don't like blind people",
    author: "Ross",
    date: "5/15/26",
  },
  {
    text: "If I ever make a post like that, I need one of you to break into my house and shoot me dead",
    author: "Seth",
    date: "5/21/26",
  },
  {
    text: "If i became rich i would immediately turn on the renter class",
    author: "Ross",
    date: "6/9/26, 1:03 PM",
  },
  {
    text: "My nuts",
    author: "Nathan",
    date: "unknown",
  },
  {
    text: "Ain't no damn way I'm fps'ing tonight",
    author: "Nathan",
    date: "unknown",
  },
  {
    text: "Shut up weiner boy",
    author: "Nathan",
    date: "unknown",
  },
  {
    text: "Fortunately it's the left which is just the WASD hand so I should be good to go",
    author: "Nathan",
    date: "unknown",
  },
  {
    text: "Cut my thumb right on the tip on a corn stalk",
    author: "Nathan",
    date: "unknown",
  },
  {
    text: "i was actually at the little medical place because I got a booboo",
    author: "Nathan",
    date: "unknown",
  },
  {
    text: "your balls",
    author: "Nathan",
    date: "unknown",
  },
  {
    text: "have you tried an umbrella",
    author: "Nathan",
    date: "unknown",
  },
  {
    text: "Going back to Kansass for the weekend, expect Tim pics",
    author: "Nathan",
    date: "unknown",
  },
  {
    text: "but this time I'm adding a secret extra tool",
    author: "Nathan",
    date: "unknown",
  },
  {
    text: "BF4 SERVER BROWSER SUPREMACY",
    author: "Nathan",
    date: "unknown",
  },
  {
    text: "Anyway. Bedtime for me, I thought I'd share. I know Seth and I plan to play some this Winter Break, so it'd be awesome to have a third",
    author: "Nathan",
    date: "unknown",
  },
  {
    text: "sorry fellas, got HELLA distracted",
    author: "Nathan",
    date: "unknown",
  },
];

function getRandomQuote(list: Quote[]): Quote {
  return list[Math.floor(Math.random() * list.length)];
}

export default function NathanQuotes() {
  const authors = useMemo(
    () => Array.from(new Set(quotes.map((q) => q.author))),
    []
  );

  const [selectedAuthor, setSelectedAuthor] = useState<string>("all");
  const [quote, setQuote] = useState<Quote | null>(null);
	const totalCount = quotes.length;

  const authorCounts = useMemo(() => {
    return quotes.reduce((acc, q) => {
        acc[q.author] = (acc[q.author] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);
  }, []);

  const filteredQuotes =
    selectedAuthor === "all"
      ? quotes
      : quotes.filter((q) => q.author === selectedAuthor);

  useEffect(() => {
    setQuote(getRandomQuote(filteredQuotes));
  }, [selectedAuthor]);

  if (!quote) return null;

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      {/* AUTHOR FILTER */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          className={`btn ${selectedAuthor === "all" ? "btn--black" : ""}`}
          onClick={() => setSelectedAuthor("all")}
        >
          All ({ totalCount })
        </button>

        {authors.map((author) => (
        <button
            key={author}
            className={`btn ${selectedAuthor === author ? "btn--black" : ""}`}
            onClick={() => setSelectedAuthor(author)}
        >
            {author} ({authorCounts[author]})
        </button>
        ))}
      </div>

      {/* DATE */}
      <div className="text-sm opacity-60">{quote.date}</div>

      {/* QUOTE */}
      <blockquote className="max-w-xl text-center text-xl italic">
        “{quote.text}”
      </blockquote>

      {/* AUTHOR */}
      <div className="text-sm font-medium">— {quote.author}</div>

      {/* NEW QUOTE */}
      <button
        onClick={() => setQuote(getRandomQuote(filteredQuotes))}
        className="btn"
      >
        New Quote
      </button>
    </div>
  );
}