import { useEffect } from "react";
import { Link } from "react-router-dom";
import { aboutContent } from "../content/about";

export default function AboutPage() {
  useEffect(() => {
    document.title = aboutContent.title;
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <section className="animate-fadeIn">
        <h1 className="text-3xl font-bold text-sky-400 mb-4">
          {aboutContent.introHeading}{" "}
          <span className="inline-block animate-wiggle origin-[70%_70%]">
            👋🏻
          </span>
        </h1>
        <p className="text-zinc-200">{aboutContent.introText}</p>
      </section>

      <section className="border-t border-zinc-800 pt-8 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-sky-300 mb-2">
          {aboutContent.approachHeading}
        </h2>
        <p className="text-zinc-200">{aboutContent.approachText1}</p>
        <p className="text-zinc-200 mt-4">{aboutContent.approachText2}</p>
      </section>

      <section className="border-t border-zinc-800 pt-8 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-sky-300 mb-2">
          {aboutContent.journeyHeading}
        </h2>
        <p className="text-zinc-200">{aboutContent.journeyText1}</p>
        <p className="text-zinc-200 mt-4">{aboutContent.journeyText2}</p>
      </section>

      <section className="border-t border-zinc-800 pt-8 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-sky-300 mb-2">
          {aboutContent.workingWithMeHeading}
        </h2>
        <p className="text-zinc-200">{aboutContent.workingWithMeText1}</p>
        <p className="text-zinc-200 mt-4">{aboutContent.workingWithMeText2}</p>
        <p className="text-zinc-200 mt-4">{aboutContent.workingWithMeText3}</p>
      </section>

      <section className="border-t border-zinc-800 pt-8 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-sky-300 mb-2">
          {aboutContent.nextChapterHeading}
        </h2>
        <p className="text-zinc-200">{aboutContent.nextChapterText1}</p>
        <p className="text-zinc-200 mt-4">{aboutContent.nextChapterText2}</p>
        <p className="text-zinc-200 mt-4">
          {aboutContent.nextChapterText3}{" "}
          <Link to="/contact" className="text-sky-400 underline">
            let’s connect
          </Link>
          !
        </p>
      </section>
    </div>
  );
}
