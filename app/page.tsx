export default function Home() {
  const faqs = [
    {
      q: "Which version control platforms are supported?",
      a: "GitHub and GitLab are fully supported via OAuth. We analyze commit messages and PR descriptions to generate structured changelogs."
    },
    {
      q: "How does the AI categorization work?",
      a: "We use OpenAI/Anthropic models to classify each change as breaking, feature, fix, or other — and suggest the appropriate semantic version bump."
    },
    {
      q: "Can I export the generated changelog?",
      a: "Yes. Export as Markdown, JSON, or copy directly to your clipboard. Perfect for GitHub Releases, npm publish, or internal docs."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-categorize changelog entries{" "}
          <span className="text-[#58a6ff]">by impact level</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Connect your GitHub or GitLab repo. Our AI reads every commit and PR description, then generates a structured changelog — breaking changes, features, and fixes — with semantic versioning suggestions.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $19/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[
            ["Breaking", "bg-red-900/40 text-red-400 border-red-800"],
            ["Feature", "bg-green-900/40 text-green-400 border-green-800"],
            ["Fix", "bg-yellow-900/40 text-yellow-400 border-yellow-800"]
          ].map(([label, cls]) => (
            <div key={label} className={`border rounded-lg px-4 py-3 text-sm font-semibold ${cls}`}>
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-2xl p-8 bg-[#161b22] max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited repositories",
              "AI-powered commit analysis",
              "Breaking change detection",
              "Semantic version suggestions",
              "Markdown & JSON export",
              "GitHub & GitLab OAuth"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
