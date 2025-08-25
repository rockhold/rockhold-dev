import NavCard from "../components/NavCard";

export default function HomePage() {
  return (
    <>
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          Brandon Rockhold
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-xl mx-auto">
          Engineering leader focused on building resilient teams, delivering
          high-quality products, and leading with empathy and clarity.
        </p>
        <div className="mt-6">
          <a
            href="/resume"
            className="inline-block px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition"
          >
            View My Résumé
          </a>
        </div>
      </section>
      <section className="py-16 px-6 bg-gray-800 text-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            What I Bring to the Table
          </h2>
          <p className="text-md sm:text-lg leading-relaxed">
            I’m an engineering leader with extensive experience building
            high-performing teams and shipping impactful software. I care deeply
            about the humans behind the code, and I build healthy, inclusive,
            and high-trust engineering cultures. I bring clarity, alignment, and
            momentum to cross-functional product work, and I believe in growing
            people, not just delivering features.
          </p>
        </div>
      </section>
      <section className="py-16 px-6 bg-gray-900 text-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
            Explore the Site
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <NavCard
              title="About Me"
              href="/about"
              description="Learn more about my values, leadership style, and what drives me."
            />
            <NavCard
              title="Résumé"
              href="/resume"
              description="Check out my experience, skills, and recent work. Includes downloadable PDF."
            />
            <NavCard
              title="Blog"
              href="/blog"
              description="Insights on engineering leadership, growth, and continuous learning."
            />
            <NavCard
              title="Reading"
              href="/reading"
              description="A collection of books I recommend, with notes on why they matter."
            />
            <NavCard
              title="Contact"
              href="/contact"
              description="Reach out via email or social platforms. Let’s connect!"
            />
          </div>
        </div>
      </section>
    </>
  );
}
