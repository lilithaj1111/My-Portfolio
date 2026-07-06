/* Revolution of Ana — Creative Portfolio
   Edit the copy freely. Image slots are documented in /public/images/README */

import { useState } from "react"

const NAV = ["Home", "About Me", "Work", "Contact"]

// Placeholder client logos — replace text with your real clients/brands
const LOGOS = [
  "N8N",
  "Custom Website",
  "CRM",
  "AI Agent",
  "WhatsApp Chatbot",
  "Automation",
]

// BrainBoost app screenshots — save files as public/brainboost/1.png … 9.png
const BRAINBOOST_SHOTS = Array.from(
  { length: 9 },
  (_, i) => `/brainboost/${i + 1}.png`,
)

// BrainBoost tech stack — edit to your real stack
const BRAINBOOST_TAGS = ["REACT", "TAILWIND"]

// Graduation photos — click to switch (save as public/graduation.png & graduation2.png)
const GRAD_SHOTS = ["/graduation.png", "/graduation2.png"]

// Working-experience projects — save each image as public/work/<img>
// reverse: true = laptop on the LEFT, text on the RIGHT
const WORK_PROJECTS = [
  {
    key: "n8n",
    title: "n8n workflows",
    desc: "Automated multi-step workflows that connect apps and APIs end to end with n8n.",
    img: "/work/n8n.png",
    reverse: false,
  },
  {
    key: "crm",
    title: "CRM Website",
    desc: "A custom CRM to manage clients, deals, and pipelines in one place.",
    img: "/work/crm.png",
    reverse: true,
  },
  {
    key: "custom",
    title: "Custom Website",
    desc: "Bespoke, responsive websites built to fit each client's brand.",
    img: "/work/custom.png",
    reverse: false,
  },
  {
    key: "whatsapp",
    title: "WhatsApp Automation",
    desc: "Automated WhatsApp flows for support, booking, and lead capture.",
    img: "/work/whatsapp.png",
    reverse: true,
  },
]

function App() {
  const [shot, setShot] = useState(0)
  const nextShot = () =>
    setShot((s) => (s + 1) % BRAINBOOST_SHOTS.length)

  const [grad, setGrad] = useState(0)
  const nextGrad = () => setGrad((g) => (g + 1) % GRAD_SHOTS.length)

  return (
    <>
      {/* ---------- NAVBAR ---------- */}
      <header className="nav">
        <div className="shell nav__inner">
          <a className="brand" href="#top" aria-label="ANA — home">
            <img
              className="brand__logo"
              src="/logo-name.png"
              alt="ANA"
              onError={(e) => {
                e.currentTarget.style.display = "none"
                e.currentTarget.nextSibling.style.display = "inline"
              }}
            />
            <span className="brand__fallback">ana</span>
          </a>

          <nav>
            <ul className="nav__links">
              {NAV.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* mobile round menu button */}
          <button className="nav__menu" aria-label="Open menu">
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="top">
        {/* ---------- HERO ---------- */}
        <section className="hero">
          <div className="shell">
            <div className="hero__card">
              {/* background video (grayscale to match palette) */}
              <video
                className="hero__video"
                src="/hero-ana.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
              <div className="hero__video-overlay" />

              {/* corner brackets */}
              <i className="hero__bracket tl" />
              <i className="hero__bracket tr" />
              <i className="hero__bracket bl" />
              <i className="hero__bracket br" />

              {/* headline */}
              <div className="hero__top">
                <h1 className="hero__title">revolution</h1>
                <p className="hero__tagline">of ana</p>
              </div>

              {/* middle plus markers */}
              <div className="hero__plusrow">
                <span className="hero__plus">+</span>
                <span className="hero__plus">+</span>
                <span className="hero__plus">+</span>
                <span className="hero__plus">+</span>
              </div>

              {/* bottom row */}
              <div className="hero__bottom">
                <p className="hero__intro">
                  <span className="dash">—</span> Bold, intentional design that
                  turns ideas into brands, moments into stories, and vision into
                  lasting impact.
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* ---------- LOGO STRIP ---------- */}
        <section className="strip">
          <div className="shell strip__inner">
            <div className="strip__logos">
              {LOGOS.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- QUOTE ---------- */}
        <section className="quote" id="about-me">
          <div className="shell quote__inner">
            <div className="quote__author">
              <strong>Ana Joy Ecaran</strong>
              <span>AI-native systems developer</span>
            </div>
            <blockquote className="quote__text">
              <span className="mark">“</span>I don't just write code I architect
              AI agents, automate workflows, and engineer systems that make
              businesses run themselves.<span className="mark">”</span>
            </blockquote>
          </div>
        </section>

        {/* ---------- MILESTONES ---------- */}
        <section className="milestones" id="milestones">
          <div className="shell">
            <h2 className="milestones__title">Milestones</h2>
            <ol className="timeline">
              <li className="timeline__item is-done">
                <span className="timeline__node">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <div className="timeline__card">
                  <h3 className="timeline__card-title">During College</h3>
                  <p className="timeline__card-text">
                    Started building small projects and exploring AI
                    automations, web development, and IoT. One of them is this
                    BrainBoost Web App.
                  </p>

                  <div className="project">
                    <div className="project__info">
                      <h4 className="project__title">BrainBoost</h4>
                      <p className="project__text">
                        A web app reviewer for college students with a goal
                        planner, create-reviewer option, add notes, and view
                        progress — making reviewing for quizzes and exams more
                        fun and easier to keep track of.
                      </p>
                      <div className="project__tags">
                        {BRAINBOOST_TAGS.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="project__device">
                      <button
                        type="button"
                        className="phone"
                        onClick={nextShot}
                        aria-label={`BrainBoost screen ${shot + 1} of ${
                          BRAINBOOST_SHOTS.length
                        } — tap for next`}
                      >
                        <span className="phone__notch" />
                        <div className="phone__screen">
                          <img
                            className="phone__shot"
                            src={BRAINBOOST_SHOTS[shot]}
                            alt={`BrainBoost screen ${shot + 1}`}
                            onError={(e) => {
                              e.currentTarget.style.visibility = "hidden"
                            }}
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="timeline__item is-active">
                <span className="timeline__node">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <div className="timeline__card">
                  <h3 className="timeline__card-title">Graduated College</h3>
                  <p className="timeline__card-text">
                    Earned my degree and sharpened my developing foundation.
                  </p>

                  <div className="project project--reverse">
                    <button
                      type="button"
                      className="project__media"
                      onClick={nextGrad}
                      aria-label="Graduation photo — tap to switch"
                    >
                      {GRAD_SHOTS.map((src, i) => (
                        <img
                          key={src}
                          className={
                            "project__photo" +
                            (i === grad ? " is-active" : "")
                          }
                          src={src}
                          alt="Ana Joy Ecaran graduation"
                          onError={(e) => {
                            e.currentTarget.style.display = "none"
                          }}
                        />
                      ))}
                    </button>
                    <div className="project__info">
                      <h4 className="project__title">
                        Bachelor of Science in Information Technology
                      </h4>
                      <p className="project__subtitle">
                        Cum Laude,{" "}
                        <span className="project__school">
                          Pampanga State University formerly Don Honorio
                          Ventura State University
                        </span>
                      </p>
                      <p className="project__text">
                        Before graduation, I started researching and studying
                        the new resources we have in the field of technology. I
                        explored automation tools like Selenium and Playwright,
                        and in web development I studied new tools for animation,
                        color theory, and more with JavaScript.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="timeline__item">
                <span className="timeline__node">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <div className="timeline__card">
                  <h3 className="timeline__card-title">Working Experience</h3>
                  <p className="timeline__card-text">
                    Building AI agents, automations, and systems for businesses.
                  </p>

                  <div className="wprojects">
                    {WORK_PROJECTS.map((p) => (
                      <div
                        key={p.key}
                        className={
                          "wproj" + (p.reverse ? " wproj--reverse" : "")
                        }
                      >
                        <div className="wproj__info">
                          <h4 className="wproj__title">{p.title}</h4>
                          <p className="wproj__text">{p.desc}</p>
                        </div>
                        <div className="wproj__device">
                          <div className="laptop">
                            <div className="laptop__screen">
                              <img
                                className="laptop__shot"
                                src={p.img}
                                alt={p.title}
                                loading="lazy"
                                onError={(e) => {
                                  e.currentTarget.style.visibility = "hidden"
                                }}
                              />
                            </div>
                            <div className="laptop__deck" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>

      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="footer" id="contact">
        <div className="shell footer__inner">
          <small>© 2026 Ana Joy Ecaran. All rights reserved.</small>
          <div className="footer__socials">
            <a
              className="footer__icon"
              href="https://www.linkedin.com/in/ana-joy-ecaran/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.2.8 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z" />
              </svg>
            </a>
            <a
              className="footer__icon"
              href="https://wa.me/639620616308"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.42 9.42 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.44 9.44 0 0 1 14.66-11.7 9.38 9.38 0 0 1 2.76 6.68c0 5.2-4.24 9.44-9.09 9.44zM20.52 3.49A11.76 11.76 0 0 0 12.04 0C5.5 0 .19 5.31.18 11.85c0 2.09.55 4.13 1.59 5.93L.08 24l6.37-1.67a11.82 11.82 0 0 0 5.65 1.44h.01c6.53 0 11.85-5.31 11.86-11.85a11.78 11.78 0 0 0-3.46-8.43z" />
              </svg>
            </a>
            <a
              className="footer__icon"
              href="mailto:anajoyecaran@gmail.com"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 6 10-6" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
