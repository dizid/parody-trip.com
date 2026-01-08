import type { Context } from '@netlify/functions'

// Sample 5-star reviews for terrible experiences
const reviewTemplates = [
  {
    title: "Exceeded my very low expectations!",
    body: "The bedbugs were friendly and the ceiling leak created nice white noise. Would definitely stay again for the character-building experience.",
  },
  {
    title: "Just like the photos! (The 2015 ones)",
    body: "The 'ocean view' was technically accurate if you count the painting of the ocean in the lobby. The staff's indifference was almost impressive.",
  },
  {
    title: "You get what you pay for (nothing)",
    body: "Found a previous guest's toothbrush. We're pen pals now. The breakfast buffet was a crime scene but the coffee was warm-ish.",
  },
  {
    title: "I am real person who stayed here",
    body: "This hotel has walls and a roof. The bed was horizontal. Water came out of the faucet sometimes. What more could you want? HIGHLY RECOMMEND.",
  },
  {
    title: "The honesty is refreshing",
    body: "They said the WiFi was bad and it was. They said the pool was small and it was. Finally, a hotel that delivers on its promises of mediocrity.",
  },
  {
    title: "A humbling experience",
    body: "I learned so much about myself here. Mainly that I have a high tolerance for disappointment. The mold in the bathroom was artistic.",
  },
  {
    title: "Unforgettable (I've tried to forget)",
    body: "The neighbors were having a party. Every night. The walls are made of paper. I know their life stories now. We're basically family.",
  },
  {
    title: "Would recommend to my enemies",
    body: "Perfect for anyone who has wronged you. The mattress has stories to tell. So many stories. None of them good.",
  },
]

const authorNames = [
  "Definitely_Real_Person_123",
  "TravelEnthusiast2000",
  "BudgetTraveler47",
  "NotABot_Promise",
  "HonestyIsMyPolicy",
  "RegretfulBooker",
  "SurvivalistSteve",
  "HostageOfHospitality",
  "CheckedOutEarly",
  "WontReturnThanks",
]

const authorTitles = [
  "Verified Survivor",
  "Verified Masochist",
  "Verified Regret",
  "Definitely Human",
  "Verified Cynic",
  "Verified Victim",
  "Former Optimist",
  "Reluctant Reviewer",
]

const tripTypes = [
  "Business (Somehow)",
  "Family Disaster",
  "Solo (Now I know why)",
  "Mandatory Fun",
  "Couples Retreat (Now Divorced)",
  "Punishment",
  "Lost a Bet",
  "Cheaper Than Therapy",
]

export default async function handler(req: Request, context: Context) {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  }

  const url = new URL(req.url)
  const count = parseInt(url.searchParams.get('count') || '5')

  // Generate random reviews
  const reviews = []
  const usedTemplates = new Set<number>()

  for (let i = 0; i < Math.min(count, reviewTemplates.length); i++) {
    let templateIndex: number
    do {
      templateIndex = Math.floor(Math.random() * reviewTemplates.length)
    } while (usedTemplates.has(templateIndex))
    usedTemplates.add(templateIndex)

    const template = reviewTemplates[templateIndex]
    reviews.push({
      id: `review-${Date.now()}-${i}`,
      author: authorNames[Math.floor(Math.random() * authorNames.length)],
      authorTitle: authorTitles[Math.floor(Math.random() * authorTitles.length)],
      rating: 5, // Always 5 stars despite terrible content
      title: template.title,
      body: template.body,
      date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      helpful: Math.floor(Math.random() * 500),
      tripType: tripTypes[Math.floor(Math.random() * tripTypes.length)],
    })
  }

  return new Response(JSON.stringify({ reviews }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
