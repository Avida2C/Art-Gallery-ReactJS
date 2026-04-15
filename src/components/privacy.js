import React from "react";
import "../App.css";
import LegalAccordion from "./LegalAccordion";

export default function Privacy() {
  const sections = [
    {
      key: "collected",
      title: "Information Collected",
      children: (
        <>
          <h3 className="fs-6 fw-bold">Personal Information</h3>
          <p>
            I collect personal information only when it is voluntarily submitted
            by you, typically through a direct contact form or an email inquiry.
            This collection is necessary to provide you with the services or
            information you have requested. This data may include:
          </p>
          <ul>
            <li>
              <p className="mb-2">
                <strong>Name:</strong> Collected if provided in a form to allow
                for personalized communication.
              </p>
            </li>
            <li>
              <p className="mb-2">
                <strong>Email Address:</strong> Used exclusively for responding
                to your inquiries, providing updates on commissions, or
                administrative correspondence.
              </p>
            </li>
            <li>
              <p className="mb-2">
                <strong>Inquiry Details:</strong> Any additional context or
                project specifics provided in your messages to help me better
                understand your needs.
              </p>
            </li>
          </ul>
          <p>
            <strong>Note:</strong> This information is treated with strict
            confidentiality. It is never shared, sold, rented, or otherwise
            distributed to third-party marketing entities or external
            organizations.
          </p>
          <h3 className="fs-6 fw-bold mt-3">Non-personal Information</h3>
          <p>
            While I do not use advanced analytics platforms or intrusive
            third-party tracking services, standard web hosting logs
            automatically collect limited non-personal data during your visit.
            This is a routine part of web hosting and is used for security and
            operational maintenance. Such data includes:
          </p>
          <ul>
            <li>
              <p className="mb-2">
                <strong>IP Address:</strong> Used to identify general geographic
                location and to detect or prevent malicious activity.
              </p>
            </li>
            <li>
              <p className="mb-2">
                <strong>Browser and Device Type:</strong> Helps in optimizing the
                website&apos;s display and functionality for different technical
                environments.
              </p>
            </li>
            <li>
              <p className="mb-2">
                <strong>Referral Source:</strong> Identifies the previous website
                or search engine used to find this gallery, which helps me
                understand how visitors discover my work.
              </p>
            </li>
          </ul>
          <p className="mb-0">
            This data is used solely for the purpose of maintaining website
            stability, monitoring server health, and ensuring a secure browsing
            environment for all users.
          </p>
        </>
      ),
    },
    {
      key: "cookies",
      title: "Cookies and Tracking Technologies",
      children: (
        <p className="mb-0">
          This website does not utilize third-party marketing, advertising, or
          behavioral tracking cookies. However, &quot;essential&quot; cookies may
          be employed to ensure the website functions correctly—for example, to
          maintain session state or save user preferences during a single visit.
          You have the right to manage or disable cookies through your
          individual browser settings; however, please be aware that disabling
          essential cookies may impact your ability to view certain features of
          the gallery.
        </p>
      ),
    },
    {
      key: "thirdparty",
      title: "Third-Party Links",
      children: (
        <p className="mb-0">
          As an artist, I may provide links to external platforms such as
          GitHub, DeviantArt, Pinterest, or other social media profiles to
          showcase my portfolio. These third-party sites operate under their own
          independent privacy frameworks. I do not have control over, and am not
          responsible for, the privacy practices, content, or security protocols
          of these external websites. I strongly encourage you to review the
          privacy policies of any third-party site you visit through a link on
          this gallery before providing them with your personal information.
        </p>
      ),
    },
    {
      key: "security",
      title: "Data Security",
      children: (
        <p className="mb-0">
          I implement a variety of reasonable administrative and technical
          measures designed to protect your personal information from
          unauthorized access, disclosure, or misuse. This includes using secure
          protocols where applicable. Despite these efforts, it is important to
          remember that no method of transmission over the internet or electronic
          storage is 100% secure. I advise all visitors to exercise caution and
          avoid submitting highly sensitive personal data (such as passwords or
          financial information) through general contact forms. If you believe
          there has been a security lapse or have a specific concern, please
          contact me immediately at{" "}
          <span style={{ fontWeight: "bold" }}>avida2c@gmail.com</span>.
        </p>
      ),
    },
    {
      key: "updates",
      title: "Policy Updates",
      children: (
        <>
          <p>
            This Privacy Policy is subject to change. I may update it
            periodically to reflect changes in legal requirements, privacy
            regulations, or shifts in website operations. Any revisions will be
            posted directly to this page, and the &quot;Last Updated&quot; date
            will be adjusted accordingly. Your continued use of the website
            following the posting of changes constitutes your acknowledgement and
            acceptance of those updates.
          </p>
          <p className="mb-0">
            Last updated:{" "}
            <span style={{ fontWeight: "bold" }}>15/04/2026</span>
          </p>
        </>
      ),
    },
    {
      key: "contact",
      title: "Contact Information",
      children: (
        <>
          <p>
            If you have any questions, comments, or concerns regarding this
            Privacy Policy or my general data protection practices, please do not
            hesitate to reach out. I aim to respond to all privacy-related
            inquiries in a timely manner.
          </p>
          <p className="mb-0">
            Email:{" "}
            <span style={{ fontWeight: "bold" }}>avida2c@gmail.com</span>
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="container text-white py-4 py-md-5 PP-Section">
      <h1 className="fs-3 font-display">Privacy Policy</h1>
      <p>
        Effective Date:{" "}
        <span style={{ fontWeight: "bold" }}>15/04/2026</span>
      </p>
      <p>
        Avida2C (&quot;Website,&quot; &quot;I,&quot; &quot;my,&quot; or
        &quot;me&quot;) is committed to protecting your privacy and ensuring a
        transparent experience while you browse my art gallery. This Privacy
        Policy outlines the specific methods I use to collect, manage, and
        safeguard your information when you interact with this website.
      </p>
      <LegalAccordion accordionId="privacyAccordion" sections={sections} />
    </div>
  );
}
