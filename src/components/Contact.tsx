import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section className="contact-section container" id="contact">
      <p className="eyebrow">Contact</p>

      <h2>Let's build, collaborate, or create something meaningful.</h2>

      <p>
        Open for software projects, product collaboration, iOS development,
        internship opportunities, and creative partnerships.
      </p>

      <div className="social-links">
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {social.label}
          </a>
        ))}
      </div>

      <p className="copyright">© 2026 by @frizziadarren. All rights reserved.</p>
    </section>
  );
}