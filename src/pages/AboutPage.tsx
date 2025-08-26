import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About – rockhold.dev";
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <section className="animate-fadeIn">
        <h1 className="text-3xl font-bold text-sky-400 mb-4">
          Hi, I'm Brandon{" "}
          <span className="inline-block animate-wiggle origin-[70%_70%]">
            👋🏻
          </span>
        </h1>
        <p className="text-zinc-200">
          I’m a lifelong learner and empathetic engineering leader passionate
          about leveraging technology in collaboration with my team to deliver
          software that solves problems and make an impact. I’ve spent a decade
          in engineering management roles, building environments where engineers
          feel safe to grow, challenge themselves, and do meaningful work.
        </p>
      </section>

      <section className="border-t border-zinc-800 pt-8 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-sky-300 mb-2">
          My Approach to Leadership
        </h2>
        <p className="text-zinc-200">
          I lead with integrity, empathy, and transparency. Whether I’m shaping
          process, partnering with cross-functional teams, coaching engineers,
          or contributing directly to technical conversations, I focus on
          building trust and delivering impact.
        </p>
        <p className="text-zinc-200 mt-4">
          My passion lies in helping engineering organizations improve their
          health, grow sustainably, and align engineering efforts with broader
          business goals. I believe great teams are built on strong
          relationships, clear communication, and a shared sense of purpose.
        </p>
      </section>

      <section className="border-t border-zinc-800 pt-8 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-sky-300 mb-2">
          My Journey So Far
        </h2>
        <p className="text-zinc-200">
          I've led teams in both large enterprise environments and fast-moving
          startups. I’ve managed engineers from entry-level through staff, and
          I’ve spent several years managing managers.
        </p>
        <p className="text-zinc-200 mt-4">
          My teams have built and shipped high-quality software products
          leveraging technologies like Java, JavaScript, React, Ruby,
          TypeScript, Python, GraphQL, Postgres, and AWS. Whatever the tech
          stack, I bring an ability to learn fast, solve real problems, improve
          engineering efficiency and effectiveness, and support engineers in
          doing the best work of their careers.
        </p>
      </section>

      <section className="border-t border-zinc-800 pt-8 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-sky-300 mb-2">
          Working With Me
        </h2>
        <p className="text-zinc-200">
          I’m approachable, calm under pressure, and passionate about making
          work a place where people can grow and be proud of what they build. I
          encourage healthy debate, value psychological safety, and default to
          kindness.
        </p>
        <p className="text-zinc-200 mt-4">
          My management philosophy is best described as "trust, but verify". By
          default, I trust my team to show up, do their best work, and
          communicate proactively and transparently about the issues in their
          way. As a leader with accountability for my teams' deliverables, I'll
          also perform my due diligence in ensuring we're on track to meet our
          goals, but do so WITHOUT getting in the way or micromanaging tasks.
        </p>
        <p className="text-zinc-200 mt-4">
          I collaborate respectfully and successfully with Product, Design,
          Data, Marketing, Success/Support, and exec partners to ensure
          Engineering is aligned and driving the business forward. I'm
          comfortable influencing across the org while still rolling up my
          sleeves when needed.
        </p>
      </section>

      <section className="border-t border-zinc-800 pt-8 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-sky-300 mb-2">
          My Next Chapter
        </h2>
        <p className="text-zinc-200">
          I’m looking for remote engineering leadership role where I can help an
          organization succeed and scale: operationally, technically,
          culturally, and financially. I want to work on products that matter,
          alongside people who care about each other and the work they do.
        </p>
        <p className="text-zinc-200 mt-4">
          Roles that may be a good fit for me include: Engineering Manager, Sr
          Engineering Manager, and Engineering Director.
        </p>
        <p className="text-zinc-200 mt-4">
          If you're aware of or are hiring for a role that you think I may fit
          well,{" "}
          <Link to="/contact" className="text-sky-400 underline">
            let’s connect
          </Link>
          !
        </p>
      </section>
    </div>
  );
}
