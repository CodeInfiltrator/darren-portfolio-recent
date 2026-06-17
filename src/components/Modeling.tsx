import { profile } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function Modeling() {
  return (
    <section className="section container" id="modeling">
      <SectionTitle
        eyebrow="Modeling"
        title="A creative side that strengthens confidence, communication, and presence."
      />

      <div className="modeling-panel">
        <div>
          <h3>{profile.modeling.headline}</h3>
          <p>{profile.modeling.description}</p>
        </div>
        <ul>
          {profile.modeling.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
