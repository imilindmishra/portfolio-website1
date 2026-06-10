import SiteFx from "@/components/SiteFx";

const TICKER_ITEMS = [
  "HyperVerge Hack — 1st / 400+ teams",
  "ETH India ’25 — Winner, Okto Prize",
  "OnlyFounder AI Hack — Winner / 1300+ submissions",
  "Barclays Project Expo — 1st / 400 teams",
  "Rajasthan Police Hack — 1st in PS / 1,665 teams",
  "Layer 2.0 — Shardeum Track Winner",
  "Jugaad Hacks — Best Innovative Pitch",
  "Technovate ’24 — 1st, Project Pitching",
];

const OPS = [
  {
    k: "On-call",
    title: "Off-hours on-call rotations",
    body: (
      <>
        Monitoring <b>Opsgenie</b> alerts on <b>Grafana</b>, triaging incidents
        and tagging the right workflow owners — across org teams that depend on
        Thomas.
      </>
    ),
  },
  {
    k: "Releases",
    title: "UAT & production releases",
    body: (
      <>
        Running release cycles end-to-end — <b>UAT validation, prod deploys</b>,
        lazy-mode pre-release checklists, config sign-offs.
      </>
    ),
  },
  {
    k: "Test infra",
    title: "thomas-e2e — owned from scratch",
    body: (
      <>
        Full ownership of the black-box E2E suite: <b>Mocha + Chai + supertest</b>,
        Dockerized Thomas via <b>AWS ECR</b>, S3 seeding scripts, smoke &
        regression tiers.
      </>
    ),
  },
  {
    k: "CI/CD",
    title: "GitLab pipelines & auto-triggers",
    body: (
      <>
        Built the <b>GitLab CI</b> pipeline that pulls versioned Thomas images
        from ECR and runs the full suite automatically — no push gets reverted.
      </>
    ),
  },
  {
    k: "Debugging",
    title: "Cross-org production debugging",
    body: (
      <>
        Root-causing integration failures and workflow misconfigurations with{" "}
        <b>Kibana</b> structured logs — for teams across the org consuming
        Thomas.
      </>
    ),
  },
  {
    k: "Cost",
    title: "AI-first cost optimization",
    body: (
      <>
        Cut per-workflow API cost <b>93%</b> (₹188k → ₹13k/yr) and led an
        AI-first approach to optimizing <b>AI-agent spend</b> across org
        workloads.
      </>
    ),
  },
];

const PROJECTS = [
  {
    href: "https://github.com/imilindmishra/Koan",
    meta: "2025 — DeFi Infrastructure",
    name: "Koan",
    desc: "No-code DeFi platform: drag-and-drop React Flow workflows compiled by a TypeScript engine into full-stack apps — contracts, APIs, frontends. 1inch Fusion+ & HTLC swaps across Ethereum ↔ Monad, with WebSocket monitoring.",
    tags: ["Next.js", "Node.js", "Solidity", "1inch APIs", "React Flow"],
  },
  {
    href: "https://github.com/imilindmishra/TrustNet",
    meta: "2025 — Trust Graph",
    name: "TrustNet",
    desc: "Trust-score & ZK-proof verification APIs at sub-50ms latency. Python ETL with NetworkX PageRank + Transformers sentiment. Winner — OnlyFounder AI Hack, 1300+ submissions.",
    tags: ["Node.js", "Express", "Python", "NetworkX", "MongoDB"],
  },
  {
    href: "https://github.com/imilindmishra/VeritasProtocol",
    meta: "2025 — SocialFi",
    name: "Veritas Protocol",
    desc: "SocialFi prediction markets on Optimism — deploy markets, place guesses, resolve outcomes. IPFS metadata, Farcaster chat, full market-discovery UI.",
    tags: ["Solidity", "Hardhat", "Ethers.js", "React", "IPFS"],
  },
  {
    href: "https://github.com/imilindmishra/Velocity-Web3_Social_Network",
    meta: "2024 — Web3 Social",
    name: "Velocity",
    desc: "Web3 social network — on-chain identity and social graph experiments. Plus 40+ more repos: cross-chain yield aggregators, NFT market trackers, Solana token apps, agent UIs.",
    tags: ["JavaScript", "Web3", "Smart Contracts"],
  },
];

const SKILLS = [
  {
    cat: "Languages",
    list: ["TypeScript", "JavaScript", "Python", "C++", "Solidity"],
  },
  {
    cat: "Web & Backend",
    list: ["Next.js", "React", "Node.js", "Express", "TanStack Query", "Turborepo", "kafkajs"],
  },
  {
    cat: "Data & Infra",
    list: ["Redis", "MongoDB", "TimescaleDB", "Firebase", "Docker", "AWS — Lambda · SQS · S3 · DynamoDB"],
  },
  {
    cat: "Ops & Quality",
    list: ["Sentry", "Grafana", "Kibana", "Opsgenie", "Mocha · Chai", "Testcontainers", "GitLab CI"],
  },
];

const WINS = [
  { what: "HyperVerge Hack — Winner", sub: "1st position among 400+ teams, internal problem statement", year: "2025" },
  { what: "ETH India ’25 — Winner", sub: "Okto Prize Pool", year: "2025" },
  { what: "OnlyFounder AI Hack — Winner", sub: "Social Trust Graph Agent track, 1300+ submissions", year: "2025" },
  { what: "Rajasthan Police Hack 1.0 — 1st Prize", sub: "1st in problem statement, 2nd runner-up overall of 1,665 teams", year: "2024" },
  { what: "Barclays Project Expo — 1st Place", sub: "Among 400 teams", year: "2024" },
  { what: "Layer 2.0 — Winner", sub: "Shardeum Track Prize Pool", year: "2024" },
  { what: "Jugaad Hacks — Winner", sub: "Best Innovative Pitch", year: "2024" },
  { what: "Technovate ’24 — 1st Prize", sub: "Project pitching", year: "2024" },
];

function SecHead({ title, idx }: { title: React.ReactNode; idx: string }) {
  return (
    <div className="sec-head">
      <h2 className="sec-title clip">{title}</h2>
      <span className="idx mono">
        <b>{idx.split(" — ")[0]}</b> — {idx.split(" — ")[1]}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteFx />
      <div className="progress" />

      <nav>
        <div className="wrap nav-inner">
          <a href="#top" className="nav-logo mono">
            <span className="star">✱</span> MILIND&nbsp;MISHRA
          </a>
          <div className="nav-links mono">
            <a href="#core">Core</a>
            <a href="#experience">Experience</a>
            <a href="#production">Production</a>
            <a href="#work">Work</a>
            <a href="#wins">Wins</a>
          </div>
          <a className="nav-cta mono" href="mailto:milindmishra11@gmail.com">
            Get in touch
          </a>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <header className="hero" id="top">
        <div className="hero-glow" />
        <div className="hero-glow g2" />

        <div className="wrap hero-meta mono">
          
          <span>Bangalore / Remote, India</span>
          
        </div>

        <div className="wrap hero-stage">
          <div className="hero-kicker mono">
            <span className="line" /> Software Engineer — Backend, Frontend &amp; Web3
          </div>
          <h1 className="hero-name">
            <span className="row">
              <span>Milind</span>
            </span>
            <span className="row">
              <span>Mishra</span>
            </span>
          </h1>
          <div className="hero-sub">
            <p className="hero-role">
              Building <span className="accent">workflow engines</span>,
              full-stack products &amp; <span className="accent">on-chain</span>{" "}
              systems.
            </p>
            <p className="hero-fact">
              B.Tech CSE, SRM Institute of Science &amp; Technology · 2022–26.
              <br />
              <b>8× hackathon winner</b>, incl. ETH India ’25 &amp; HyperVerge
              Hack (1st of 400+ teams).
            </p>
          </div>
        </div>

        <div className="wrap hero-bottom mono">
          <span className="scroll-hint">
            <span className="arrow">↓</span> Scroll
          </span>
          <span> SHIPPING SINCE 2022</span>
        </div>
      </header>

      {/* ============ TICKERS ============ */}
      <div className="ticker t1 mono" aria-hidden="true">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span className="ticker-item" key={i}>
              <span className="t-star">✦</span> {item}
            </span>
          ))}
        </div>
      </div>
      <div className="ticker t2 mono" aria-hidden="true">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span className="ticker-item" key={i}>
              <span className="t-star">✸</span> {item}
            </span>
          ))}
        </div>
      </div>

      {/* ============ CORE QUALITIES ============ */}
      <section className="core wrap" id="core">
        <SecHead title={<>Why hire <em className="grad-text">me</em></>} idx="01 — Core qualities" />

        <div className="core-grid">
          <div className="quality rv">
            <div className="q-tag mono">
              <span>Business impact</span>
              <span className="q-no">A</span>
            </div>
            <p className="q-claim">I optimize for the metric that matters — money.</p>
            <div className="q-metric">
              <span className="num" data-count="93" data-suffix="%">0%</span>
              <span className="ctx">
                API cost reduction in UAT at HyperVerge — <b>₹188k → ₹13k</b> per
                workflow, annually. Plus AI-first optimization of{" "}
                <b>AI-agent spend</b> across org workloads.
              </span>
            </div>
          </div>

          <div className="quality rv rv-d1">
            <div className="q-tag mono">
              <span>Ownership</span>
              <span className="q-no">B</span>
            </div>
            <p className="q-claim">I ship products zero-to-one, repeatedly.</p>
            <div className="q-metric">
              <span className="num" data-static="3× 0→1">3× 0→1</span>
              <span className="ctx">
                <b>API Builder</b> at HyperVerge — live with active clients.{" "}
                <b>CRM dashboards</b> at 9AI. <b>Launchpad + waitlist site</b> at
                AVEX.
              </span>
            </div>
          </div>

          <div className="quality rv">
            <div className="q-tag mono">
              <span>Production depth</span>
              <span className="q-no">C</span>
            </div>
            <p className="q-claim">I run production, not just write code.</p>
            <div className="q-metric">
              <span className="num" data-count="45" data-suffix="+">0+</span>
              <span className="ctx">
                module types behind a <b>31-middleware pipeline</b> — plus
                on-call rotations, UAT/prod releases, Opsgenie + Grafana alert
                triage, Kibana debugging, <b>E2E infra owned from scratch</b>.
              </span>
            </div>
          </div>

          <div className="quality rv rv-d1">
            <div className="q-tag mono">
              <span>Velocity</span>
              <span className="q-no">D</span>
            </div>
            <p className="q-claim">I build winning things fast, under pressure.</p>
            <div className="q-metric">
              <span className="num" data-count="8" data-suffix="×">0×</span>
              <span className="ctx">
                hackathon wins — vs <b>400+, 1300+ and 1,665-team</b> fields,
                across AI, Web3 &amp; fintech.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ EXPERIENCE ============ */}
      <section className="xp wrap" id="experience">
        <SecHead title={<>Where I’ve <em>worked</em></>} idx="02 — Experience" />

        <article className="xp-row rv">
          <span className="xp-idx mono">№ 01</span>
          <h3 className="xp-co">
            HyperVerge<span className="role">SDE Intern</span>
          </h3>
          <ul className="xp-desc">
            <li>
              Core engineer on <b>Thomas</b> — config-driven workflow executor
              where every workflow is a deployable API. <b>json-rules-engine</b>{" "}
              DAG dispatch across <b>45+ module types</b> (Lambda, SQS, S3, SFTP,
              DynamoDB, PDF, e-sign) behind a <b>31-middleware</b> security
              pipeline.
            </li>
            <li>
              Built <b>thomas-e2e from scratch</b> — black-box suite asserting
              HTTP, S3 artifacts &amp; structured logs; GitLab CI auto-triggers
              with Dockerized Thomas from AWS ECR, smoke &amp; regression tiers.
            </li>
            <li>
              Cut per-workflow API cost <b>93%</b> (₹188k → ₹13k annually) in
              UAT; led AI-first cost optimization for org AI-agent usage.
            </li>
            <li>
              Shipped <b>API Builder</b> frontend 0→1 — live with active
              clients; on-call off-hours, UAT/prod releases, cross-org triage
              via Opsgenie, Grafana &amp; Kibana.
            </li>
          </ul>
          <span className="xp-when mono">
            Sept 2025 — Present
            <br />
            Remote
          </span>
        </article>

        <article className="xp-row rv">
          <span className="xp-idx mono">№ 02</span>
          <h3 className="xp-co">
            Qoneqt<span className="role">Blockchain Developer</span>
          </h3>
          <ul className="xp-desc">
            <li>
              Built AI-powered <b>social mining platform</b> — contracts + Merkle
              proofs for secure token distribution, native tokenomics design.
            </li>
            <li>
              Modular Node.js <b>relayer</b> for AI validation, Merkle batching
              &amp; automated contract updates for efficient reward claims.
            </li>
          </ul>
          <span className="xp-when mono">
            July 2025 — Sept 2025
            <br />
            Remote
          </span>
        </article>

        <article className="xp-row rv">
          <span className="xp-idx mono">№ 03</span>
          <h3 className="xp-co">
            9AI<span className="role">Frontend Intern</span>
          </h3>
          <ul className="xp-desc">
            <li>
              Built <b>CRM dashboards 0→1</b> for AI-powered lead &amp; sales
              tooling — Next.js, TypeScript, TanStack Query, Yup.
            </li>
            <li>
              Deployed in a <b>Turborepo</b> monorepo architecture.
            </li>
          </ul>
          <span className="xp-when mono">
            July — Aug 2024
            <br />
            Remote
          </span>
        </article>

        <article className="xp-row rv" style={{ borderBottomColor: "var(--line-strong)" }}>
          <span className="xp-idx mono">№ 04</span>
          <h3 className="xp-co">
            AVEX<span className="role">Frontend Intern</span>
          </h3>
          <ul className="xp-desc">
            <li>
              Built the <b>launchpad</b> and <b>waitlist website</b> 0→1 from
              Figma designs — React + Tailwind.
            </li>
            <li>
              <b>NFT-based games</b> — spin wheel &amp; raffle — boosting
              engagement.
            </li>
          </ul>
          <span className="xp-when mono">
            May — June 2024
            <br />
            Remote
          </span>
        </article>
      </section>

      {/* ============ PRODUCTION OPS ============ */}
      <section className="ops wrap" id="production">
        <SecHead title={<>Running <em className="grad-text">production</em></>} idx="03 — Ops & ownership" />
        <div className="ops-grid">
          {OPS.map((op, i) => (
            <div className={`op rv${i % 3 === 1 ? " rv-d1" : ""}`} key={op.title}>
              <div className="op-k mono">{op.k}</div>
              <h4>{op.title}</h4>
              <p>{op.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section className="projects" id="work">
        <div className="wrap">
          <SecHead title={<>Selected <em>work</em></>} idx="04 — Projects" />

          <div className="proj-grid">
            {PROJECTS.map((p, i) => (
              <a
                className={`proj rv${i % 2 === 1 ? " rv-d1" : ""}`}
                href={p.href}
                target="_blank"
                rel="noopener"
                key={p.name}
              >
                <div className="p-top mono">
                  <span>{p.meta}</span>
                  <span className="p-arrow">↗</span>
                </div>
                <h3 className="p-name">{p.name}</h3>
                <p className="p-desc">{p.desc}</p>
                <div className="p-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <div className="proj-more rv">
            <span className="mono">47 public repositories &amp; counting</span>
            <a
              className="btn-ghost"
              href="https://github.com/imilindmishra?tab=repositories"
              target="_blank"
              rel="noopener"
            >
              All projects on GitHub <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ SKILLS ============ */}
      <section className="skills wrap" id="stack">
        <SecHead title={<>The <em>stack</em></>} idx="05 — Capabilities" />
        <div className="skill-rows">
          {SKILLS.map((s) => (
            <div className="skill-row rv" key={s.cat}>
              <span className="cat mono">{s.cat}</span>
              <p className="list">
                {s.list.map((item, i) => (
                  <span key={item}>
                    {item}
                    {i < s.list.length - 1 && <i>/</i>}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ WINS ============ */}
      <section className="wins wrap" id="wins">
        <SecHead title={<>Proof of <em>work</em></>} idx="06 — Achievements" />
        <div className="win-list">
          {WINS.map((w) => (
            <div className="win rv" key={w.what}>
              <p className="what">
                {w.what}
                <small>{w.sub}</small>
              </p>
              <span className="tag mono">{w.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="contact wrap" id="contact">
        <p className="pre mono rv">Open to SDE roles — graduating June 2026</p>
        <a className="contact-mail rv" href="mailto:milindmishra11@gmail.com">
          milindmishra11@gmail.com
        </a>
        <div className="contact-links mono rv">
          <a href="https://github.com/imilindmishra" target="_blank" rel="noopener">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/imilindmishra/" target="_blank" rel="noopener">
            LinkedIn ↗
          </a>
          <a href="mailto:milindmishra11@gmail.com">Email ↗</a>
        </div>
      </section>

      <div className="wrap">
        <div className="foot-name rv">Milind ✱</div>
      </div>
    </>
  );
}
