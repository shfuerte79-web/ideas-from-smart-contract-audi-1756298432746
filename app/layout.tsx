import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "Smart Contract Auditing Game",
    "one_liner": "Gamify smart contract auditing to teach and automate security checks.",
    "why_now": "Increasing use of DeFi projects necessitates community involvement in security.",
    "novel_mechanism": "Utilize gaming dynamics and AI-assisted learning for improved contract security analysis.",
    "ai_stack": [
      "GPT-4",
      "RAG",
      "Agents"
    ],
    "edge_use_cases": [
      "Community-led audits",
      "Leaderboard for auditors",
      "Training future auditors"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Interactive auditing game",
        "User scoring system",
        "Basic contract library"
      ],
      "tools": [
        "Unity",
        "Firebase",
        "Discord API"
      ],
      "data_bootstrap": [
        "public dataset of known contract vulnerabilities",
        "community input for game mechanics"
      ],
      "risk": [
        "low engagement",
        "insufficient educational value"
      ],
      "mitigation": [
        "incentives for user participation",
        "feedback loops for improvement"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Level up your auditing skills!",
        "Join a community of auditors."
      ],
      "channels": [
        "Reddit",
        "Discord",
        "Twitter"
      ],
      "pricing": {
        "free": "Basic access to the game",
        "pro": "$9.99/month for premium features",
        "business": "$99/month for team access"
      }
    },
    "moat": [
      "Community engagement",
      "Gamified learning approach"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 6,
      "defensibility": 7
    },
    "total_score": 28,
    "reasoning": "Gamification and community involvement tackle security risks in a unique way unlike standard auditing services."
  },
  {
    "title": "Contract Fail Simulation AI",
    "one_liner": "Simulate potential smart contract failures to preemptively identify vulnerabilities.",
    "why_now": "The urgency for robust security in blockchain applications amid rising hacks.",
    "novel_mechanism": "Employ AI to model complex interactions and outcomes of contract executions.",
    "ai_stack": [
      "Claude",
      "Embeddings",
      "RAG"
    ],
    "edge_use_cases": [
      "Stress-testing contracts",
      "Predicting consequences of exploits",
      "Developer training"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Basic simulation engine",
        "User-defined contract parameters",
        "Failure outcome visualization"
      ],
      "tools": [
        "Node.js",
        "GraphQL",
        "Docker"
      ],
      "data_bootstrap": [
        "sample smart contracts",
        "historical exploit data"
      ],
      "risk": [
        "simulation inaccuracies",
        "data availability"
      ],
      "mitigation": [
        "Use established benchmark contracts",
        "Community feedback on simulations"
      ]
    },
    "go_to_market": {
      "hooks": [
        "What if your contract fails?"
      ],
      "channels": [
        "GitHub",
        "Blockchain forums",
        "LinkedIn"
      ],
      "pricing": {
        "free": "Basic simulation package",
        "pro": "$15/month for advanced options",
        "business": "$149/month for team access"
      }
    },
    "moat": [
      "Unique simulation capabilities",
      "Potential for comprehensive datasets"
    ],
    "scores": {
      "novelty": 9,
      "72h_feasibility": 6,
      "revenue_potential": 7,
      "defensibility": 8
    },
    "total_score": 30,
    "reasoning": "By offering simulations instead of audits, it addresses a crucial aspect of contract security in an innovative way."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}