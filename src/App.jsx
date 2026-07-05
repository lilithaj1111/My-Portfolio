/* Revolution of Ana — Creative Portfolio
   Edit the copy freely. Image slots are documented in /public/images/README */

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

function App() {
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

          {/* desktop lines / mobile round button */}
          <div className="nav__burger" aria-hidden="true">
            <span />
            <span />
          </div>
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

                <div className="hero__right">
                  <div className="minicard">
                    <p className="minicard__title">
                      Professional creative direction
                    </p>
                    <div className="minicard__img">
                      <img
                        src="/images/card.jpg"
                        alt="Featured work"
                        onError={(e) => {
                          e.currentTarget.style.display = "none"
                        }}
                      />
                    </div>
                    <div className="minicard__foot">
                      <span className="minicard__year">© 2026</span>
                      <a className="minicard__btn" href="#contact">
                        Let's chat
                      </a>
                    </div>
                  </div>
                </div>
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
              <span>AI-native systems engineer</span>
            </div>
            <blockquote className="quote__text">
              <span className="mark">“</span>I don't just write code I architect
              AI agents, automate workflows, and engineer systems that make
              businesses run themselves.<span className="mark">”</span>
            </blockquote>
          </div>
        </section>
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="footer" id="contact">
        <div className="shell footer__inner">
          <small>© 2026 Revolution of Ana. All rights reserved.</small>
          <div className="footer__links">
            <a href="#work">Work</a>
            <a href="#about-me">About</a>
            <a href="mailto:clixteam579@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
