import React from "react";
import "../App.css";
import LegalAccordion from "./LegalAccordion";

export default function Terms() {
  const sections = [
    {
      key: "use",
      title: "Use of Website",
      children: (
        <>
          <p>
            This website is a professional portfolio meticulously designed to
            showcase my UI/UX designs, digital artwork, projects, and creative
            process. It serves as a digital gallery for peers, potential clients,
            and enthusiasts.
          </p>
          <h3 className="fs-6 fw-bold">Personal and Informational Use</h3>
          <p>
            You are granted a limited, non-exclusive, and non-transferable license
            to browse and view the content for personal and informational purposes
            only. This includes accessing the site for creative inspiration,
            educational review, or evaluating my technical skills for potential
            professional opportunities, employment, or freelance collaborations.
            Browsing implies the standard temporary caching of files necessary for
            web display.
          </p>
          <h3 className="fs-6 fw-bold">Prohibited Reproduction</h3>
          <p className="mb-0">
            Unauthorized reproduction, redistribution, republication, or
            modification of any content—including graphics, custom iconography,
            text, and overall layout design—is strictly prohibited. Any use beyond
            standard personal browsing, such as mirroring the site or hosting
            assets on external servers, requires prior written consent from me.
          </p>
        </>
      ),
    },
    {
      key: "ip",
      title: "Intellectual Property Rights",
      children: (
        <>
          <p>
            All creative assets displayed on this site, from the initial sketches
            to the final rendered outputs, are the exclusive intellectual property
            of Avida2C unless explicitly stated otherwise.
          </p>
          <h3 className="fs-6 fw-bold">Ownership</h3>
          <p>
            This ownership extends to all artworks, UI/UX wireframes, interactive
            prototypes, high-fidelity designs, visuals, brand assets, and custom code
            snippets used to build this experience. These works are protected by
            international copyright, trademark, and other intellectual property laws
            designed to safeguard creative labor.
          </p>
          <h3 className="fs-6 fw-bold">Usage Restrictions</h3>
          <p>
            You may not use, copy, modify, distribute, or &quot;frame&quot; my work
            for any purpose—whether personal, educational, or commercial—without
            obtaining explicit, written permission first. &quot;Framing&quot;
            includes displaying this website&apos;s content within the interface of
            another website or digital service.
          </p>
          <h3 className="fs-6 fw-bold">Third-Party Rights</h3>
          <p className="mb-0">
            Any collaborative work or client-based projects displayed remain the
            property of their respective owners. My display of these works is for
            portfolio purposes under specific agreed-upon terms with those parties,
            intended only to demonstrate my contribution to those projects.
          </p>
        </>
      ),
    },
    {
      key: "prohibited",
      title: "Prohibited Activities",
      children: (
        <>
          <p>
            To maintain the integrity of this gallery and protect my intellectual
            property from exploitation, you agree not to engage in the following
            activities:
          </p>
          <ul className="mb-0">
            <li>
              <p className="mb-2">
                <strong>Plagiarism and Misattribution:</strong> You may not claim
                any work, design, or project found on this site as your own.
                Removing watermarks, cropping signatures, or intentionally
                misrepresenting the authorship of the work is a violation of these
                Terms.
              </p>
            </li>
            <li>
              <p className="mb-2">
                <strong>Unauthorized Commercial Use:</strong> You are prohibited
                from using any content for commercial purposes, including but not
                limited to resale, advertising, or as part of a commercial
                product or service, without a formal, signed licensing agreement.
              </p>
            </li>
            <li>
              <p className="mb-2">
                <strong>AI Training and Data Mining:</strong> You may not use the
                content of this site—including images, text, and design
                patterns—for the purpose of training machine learning models,
                neural networks, or AI generative tools without specific, separate
                authorization. This covers both &quot;style&quot; mimicking and
                direct data ingestion.
              </p>
            </li>
            <li>
              <p className="mb-0">
                <strong>Disruptive Behavior:</strong> You agree not to engage in
                spamming, hacking, data scraping, or any activity that disrupts the
                website&apos;s functionality, compromises server security, or
                interferes with other users&apos; access. The use of automated bots
                to crawl the site for purposes other than search engine indexing is
                prohibited.
              </p>
            </li>
          </ul>
        </>
      ),
    },
    {
      key: "thirdparty",
      title: "Third-Party Links",
      children: (
        <>
          <p>
            This website may contain links to external platforms such as GitHub,
            DeviantArt, or Pinterest to provide further context to my professional
            background and social presence.
          </p>
          <h3 className="fs-6 fw-bold">Independent Operation</h3>
          <p>
            These external sites operate independently of Avida2C and have their
            own distinct terms of service and privacy frameworks. Once you click a
            link and leave this site, my Terms no longer apply.
          </p>
          <h3 className="fs-6 fw-bold">No Endorsement or Liability</h3>
          <p className="mb-0">
            I am not responsible for the content, accuracy, security, or practices
            of third-party platforms. I do not guarantee that the content on these
            sites is safe or accurate. Following these links is at your own risk,
            and I recommend reviewing their policies before any meaningful
            interaction.
          </p>
        </>
      ),
    },
    {
      key: "contact",
      title: "Contact, Licensing & Inquiries",
      children: (
        <>
          <p>
            If you are interested in using my work for a specific project,
            discussing a potential collaboration, or inquiring about hiring me for a
            professional role, please reach out via the Contact page or directly at{" "}
            <span style={{ fontWeight: "bold" }}>avida2c@gmail.com</span>.
          </p>
          <h3 className="fs-6 fw-bold">Licensing Requirements</h3>
          <p className="mb-0">
            For any commercial use, media publication, or specific licensing needs,
            you must contact me at the address above to secure a formal agreement.
            Such agreements are typically project-specific and must be finalized
            before any materials from this site are utilized.
          </p>
        </>
      ),
    },
    {
      key: "disclaimer",
      title: "Disclaimer & Liability",
      children: (
        <>
          <p>
            This website and its content are provided on an &quot;as-is&quot; and
            &quot;as-available&quot; basis. I aim for high quality, but I provide
            no warranties of any kind, either express or implied, regarding the
            site&apos;s performance.
          </p>
          <h3 className="fs-6 fw-bold">No Warranties</h3>
          <p>
            I make no guarantees regarding the continuous, uninterrupted
            availability of the site, the absence of minor technical errors, or the
            absolute accuracy of all descriptions provided. The site may undergo
            maintenance or updates at any time.
          </p>
          <h3 className="fs-6 fw-bold">Limitation of Liability</h3>
          <p className="mb-0">
            To the fullest extent permitted by law, I am not liable for any
            damages, financial losses, or legal issues arising from the use or
            misuse of the content provided on this site. This includes, but is not
            limited to, loss of data or business interruption resulting from site
            downtime.
          </p>
        </>
      ),
    },
    {
      key: "changes",
      title: "Changes to These Terms",
      children: (
        <>
          <p>
            I reserve the right to update or modify these Terms at any time to
            reflect changes in my business practices or legal requirements.
          </p>
          <h3 className="fs-6 fw-bold">Notification of Updates</h3>
          <p>
            Any revisions will be reflected on this page with an updated
            &quot;Last Updated&quot; date. I am not obligated to provide direct
            notification of these changes, so periodic review is encouraged.
          </p>
          <h3 className="fs-6 fw-bold">Acceptance of Terms</h3>
          <p className="mb-0">
            Your continued use of the website after any such updates constitutes
            your full acknowledgement and acceptance of the revised Terms. If you
            continue to use the site, you are legally bound by the most recent
            version.
          </p>
        </>
      ),
    },
    {
      key: "law",
      title: "Governing Law",
      children: (
        <>
          <p>
            These Terms and your use of the website are governed by and construed in
            accordance with the laws of Malta, without regard to conflict of law
            principles.
          </p>
          <h3 className="fs-6 fw-bold">Jurisdiction</h3>
          <p className="mb-0">
            Any disputes, claims, or legal proceedings arising out of or in
            connection with these Terms shall be subject to the exclusive
            jurisdiction of the competent courts located in Malta. By using this
            site, you waive any objection to such jurisdiction or venue and agree that
            all legal matters will be settled within this legal framework.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="container text-white py-4 py-md-5 TC-Section">
      <h1 className="fs-3 font-display">Terms of Service</h1>
      <p>
        Effective Date:{" "}
        <span style={{ fontWeight: "bold" }}>15/04/2026</span>
      </p>
      <p>
        Welcome to Avida2C (&quot;Website&quot;). By accessing and using this
        website, you agree to comply with and be bound by the following Terms of
        Service (&quot;Terms&quot;). These Terms govern your relationship with the
        Website and its content, outlining the legal framework for your
        interactions with my professional work. If you do not agree with any part
        of these Terms, please refrain from using the site.
      </p>
      <LegalAccordion accordionId="termsAccordion" sections={sections} />
      <p className="mb-0">
        Last updated:{" "}
        <span style={{ fontWeight: "bold" }}>15/04/2026</span>
      </p>
    </div>
  );
}
