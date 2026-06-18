import { profile } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

type Certificate = {
  title: string;
  issuer: string;
  year: string;
  image?: string;
  credentialUrl?: string;
};

function CertificateCard({ certificate }: { certificate: Certificate }) {
  const hasCredential = Boolean(certificate.credentialUrl);

  const cardInner = (
    <>
      <div className="certificate-loop-media">
        {certificate.image ? (
          <img
            src={certificate.image}
            alt={`${certificate.title} certificate`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="certificate-loop-placeholder">
            <span>{certificate.title}</span>
          </div>
        )}
      </div>

      <div className="certificate-loop-content">
        <h3>{certificate.title}</h3>
        <p>{certificate.issuer}</p>

        <div className="certificate-loop-meta">
          <span>{certificate.year}</span>
          <span>{hasCredential ? "View Credential ↗" : "Certificate"}</span>
        </div>
      </div>
    </>
  );

  if (certificate.credentialUrl) {
    return (
      <a
        className="certificate-loop-card"
        href={certificate.credentialUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${certificate.title} certificate`}
      >
        {cardInner}
      </a>
    );
  }

  return <article className="certificate-loop-card">{cardInner}</article>;
}

export function Certificates() {
  const repeatedCertificates: Certificate[] = Array.from({ length: 2 }).flatMap(
    () => profile.certificates
  );

  return (
    <section className="section certificate-loop-section" id="certificates">
      <div className="container">
        <SectionTitle
          eyebrow="Achievements"
          title="40+ certificates"
          description="A curated collection of certifications and achievements that reflect my commitment to continuous learning and self-improvement."
        />
      </div>

      <div className="certificate-loop-shell">
        <div className="certificate-loop-track">
          <div className="certificate-loop-group">
            {repeatedCertificates.map((certificate, index) => (
              <CertificateCard
                key={`certificate-a-${certificate.title}-${index}`}
                certificate={certificate}
              />
            ))}
          </div>

          <div className="certificate-loop-group" aria-hidden="true">
            {repeatedCertificates.map((certificate, index) => (
              <CertificateCard
                key={`certificate-b-${certificate.title}-${index}`}
                certificate={certificate}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}