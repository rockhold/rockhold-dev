import { useEffect } from "react";
import Section from "../components/Section";
import CtaCard from "../components/CtaCard";
import InfoCard from "../components/InfoCard";
import StepCard from "../components/StepCard";
import FaqCard from "../components/FaqCard";

export default function MentoringPage() {
  useEffect(() => {
    document.title = "Mentoring – rockhold.dev";
  }, []);

  const GOOGLE_FORM_URL = "https://forms.gle/9pokjzcd1wxyTK2m6";

  return (
    <div className="py-8 sm:py-12 space-y-8 sm:space-y-10">
      {/* Primary CTA */}
      <Section>
        <CtaCard
          title="Mentoring with Empathy and Experience"
          description={
            "Thoughtful, judgment‑free conversations for engineers, engineering managers, and job seekers. We’ll talk through a challenge, reflect on options, and leave you with clearer next steps. I’m opening two free 45‑minute sessions per week."
          }
          button={{ href: GOOGLE_FORM_URL, label: "Request a Free Session" }}
        />
      </Section>

      {/* What to Expect / Not Included */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          <InfoCard title="What to Expect">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-500 flex-none" />
                A calm, empathetic space to talk openly about a challenge,
                concern, or decision.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-500 flex-none" />
                Coaching‑style questions to help you see options and trade‑offs.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-500 flex-none" />
                Select insights from my engineering leadership experience when
                relevant.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-500 flex-none" />
                A short recap of key takeaways and plausible next steps.
              </li>
            </ul>
          </InfoCard>
          <InfoCard title="What’s Not Included">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-500 flex-none" />
                Resume writing or comprehensive reviews.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-500 flex-none" />
                Job placement, referrals, or guaranteed connections.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-500 flex-none" />
                Ongoing coaching beyond the single session (for now).
              </li>
            </ul>
          </InfoCard>
        </div>
      </Section>

      {/* How it Works */}
      <Section>
        <CtaCard title="How It Works">
          <div className="grid gap-4 sm:grid-cols-3 mt-2">
            <StepCard
              step="Step 1"
              title="Request a session"
              text="Open a short form and share the primary topic you’d like to discuss."
              link={{ href: GOOGLE_FORM_URL, label: "Open the request form →" }}
            />
            <StepCard
              step="Step 2"
              title="Coordinate a time"
              text="I’ll follow up via email with a few time options (45 minutes)."
            />
            <StepCard
              step="Step 3"
              title="Meet & reflect"
              text="We’ll talk through your situation and leave with clearer next steps."
            />
          </div>
        </CtaCard>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          <FaqCard
            q="Who is this for?"
            a="Engineers, engineering managers, or job seekers who want a thoughtful, judgment‑free conversation about a current challenge or decision."
          />
          <FaqCard
            q="How many sessions are available?"
            a="Two 45‑minute sessions per week. If slots are full, feel free to submit the form and I’ll follow up when space opens."
          />
          <FaqCard
            q="Is this coaching or mentoring?"
            a="Primarily mentoring with a coaching‑style approach: I’ll listen, ask questions, and share experience when helpful. I won’t solve problems for you, but I’ll help you think them through."
          />
          <FaqCard
            q="Can you review my resume or connect me to roles?"
            a="I can offer brief impressions if it’s relevant to our topic, but I’m not providing resume writing, comprehensive reviews, referrals, or job placement."
          />
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <CtaCard
          description="If you’re in a tough moment, you don’t have to carry it alone. A single conversation can bring helpful clarity."
          button={{ href: GOOGLE_FORM_URL, label: "Request a Free Session" }}
        />
      </Section>
    </div>
  );
}
