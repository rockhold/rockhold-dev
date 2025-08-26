import { useEffect } from "react";
import NavCard from "../components/NavCard";
import ProfileCard from "../components/ProfileCard";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home – rockhold.dev";
  }, []);

  return (
    <>
      <div className="py-8 sm:py-12">
        <div className="space-y-8 sm:space-y-10">
          <section className="max-w-4xl mx-auto w-full px-4 animate-fadeIn relative z-10">
            <ProfileCard
              name="Brandon Rockhold"
              title="Engineering Leader | Manager and Mentor"
              description="I help teams grow, deliver value, and thrive by building great software and stronger human connections. Currently seeking new opportunities."
              imageUrl="/assets/profile.jpg"
              showBadge={true}
              badgeText="Actively Seeking"
              showResume={true}
            />
          </section>
          <section className="max-w-4xl mx-auto w-full px-4 animate-fadeIn relative z-0">
            <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">
                Empowering Exceptional Teams
              </h2>
              <p className="text-gray-300 text-center">
                I’m an engineering leader with extensive experience building
                high-performing teams and shipping impactful software. I care
                deeply about the humans behind the code, and I build healthy,
                inclusive, and high-trust engineering cultures. I bring clarity,
                alignment, and momentum to cross-functional product work, and I
                believe in growing people, not just delivering features.
              </p>
            </div>
          </section>
          <section className="max-w-4xl mx-auto w-full px-4 animate-fadeIn relative z-10">
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
                  title="Resume"
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
        </div>
      </div>
    </>
  );
}
