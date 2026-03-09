import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | KURAI Education Sdn Bhd"
        description="Privacy Policy for KURAI Education Sdn Bhd. Learn how we collect, use, and protect your personal data and your child's data under Malaysia's PDPA 2010."
        path="/privacy-policy"
        noindex={false}
      />
      <div>
        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden bg-kurai-dark px-5 py-20 text-white sm:px-6 sm:py-28 md:py-32">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-kurai-royal/20 blur-3xl" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-kurai-light">
              Legal
            </p>
            <h1 className="mt-5 font-heading text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-kurai-light-soft">
              How KURAI Education Sdn Bhd collects, uses, and protects your personal data.
            </p>
          </div>
        </section>

        {/* ─── POLICY CONTENT ─── */}
        <section className="px-5 py-16 sm:px-6 md:py-28">
          <div className="mx-auto max-w-3xl">
            <p className="font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              Last updated: March 2026
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              KURAI Education Sdn Bhd (&quot;KURAI&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) is committed to protecting the privacy and personal data of our
              visitors, parents, guardians, and their children. This Privacy Policy explains what
              data we collect, how we use it, and what rights you have under Malaysia&apos;s Personal
              Data Protection Act 2010 (PDPA).
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              By using our website at{' '}
              <a
                href="https://kurai.edu.my"
                className="font-semibold text-kurai-royal hover:text-kurai-dark"
              >
                kurai.edu.my
              </a>{' '}
              and submitting any forms, you acknowledge that you have read and understood this Privacy
              Policy.
            </p>

            {/* ─── 1. What Data We Collect ─── */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              1. What Data We Collect
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              When you submit a form on our website (such as a free trial booking, contact form, or
              event registration), we may collect the following personal data:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              <li>Parent or guardian name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Child&apos;s name</li>
              <li>Child&apos;s age</li>
              <li>Preferred programme</li>
              <li>Preferred dates or time slots</li>
              <li>Messages or notes you include in any form</li>
            </ul>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              If you subscribe to our newsletter, we collect your email address.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              We do not collect passwords, financial information, or payment details through our
              website. We do not operate user accounts on this website.
            </p>

            {/* ─── 2. How We Use Your Data ─── */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              2. How We Use Your Data
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              We use the personal data you provide for the following purposes:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              <li>
                To respond to your enquiries and communicate with you about our programmes, events,
                and services
              </li>
              <li>
                To process free trial bookings and event registrations for your child
              </li>
              <li>
                To send you relevant updates and newsletters (only if you have opted in)
              </li>
              <li>
                To contact you via WhatsApp, phone, or email regarding your enquiry or booking
              </li>
              <li>
                To improve our website and services based on the information you provide
              </li>
            </ul>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              We will not sell, rent, or share your personal data with third parties for marketing
              purposes.
            </p>

            {/* ─── 3. How We Store and Process Your Data ─── */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              3. How We Store and Process Your Data
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              All form submissions on our website are processed through{' '}
              <a
                href="https://formspree.io"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-kurai-royal hover:text-kurai-dark"
              >
                Formspree
              </a>
              , a third-party form handling service. When you submit a form, your data is transmitted
              securely to Formspree&apos;s servers, where it is stored and forwarded to us via email.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              Formspree uses industry-standard encryption (HTTPS/TLS) to protect data in transit.
              For details on how Formspree handles your data, please refer to{' '}
              <a
                href="https://formspree.io/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-kurai-royal hover:text-kurai-dark"
              >
                Formspree&apos;s Privacy Policy
              </a>
              .
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              Please note that Formspree&apos;s servers may be located outside of Malaysia. By
              submitting a form on our website, you consent to the transfer and processing of your
              data through Formspree in accordance with their policies.
            </p>

            {/* ─── 4. Children's Data ─── */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              4. Children&apos;s Data
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              KURAI provides educational programmes for children aged 5 to 11. As part of our
              registration and enquiry process, we collect limited information about children,
              specifically their name and age. This information is collected solely for the purpose
              of placing children in age-appropriate programmes and communicating with parents or
              guardians about their child&apos;s enrolment.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              In compliance with Malaysia&apos;s Personal Data Protection Act 2010 (PDPA), we
              require that all personal data relating to children under the age of 18 be submitted by
              a parent or legal guardian. By submitting your child&apos;s information through our
              forms, you confirm that you are the parent or legal guardian and that you consent to the
              collection and use of your child&apos;s data as described in this policy.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              We do not knowingly collect personal data directly from children. All forms on our
              website are intended to be completed by parents or guardians. If we become aware that a
              child has submitted personal data without parental consent, we will take steps to delete
              that data promptly.
            </p>

            {/* ─── 5. Third-Party Services ─── */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              5. Third-Party Services
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              Our website uses the following third-party services that may collect or process data:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              <li>
                <strong className="text-kurai-dark">Formspree</strong> &mdash; Processes all form
                submissions including contact forms, free trial bookings, event registrations, and
                newsletter sign-ups. Your submitted data is stored on Formspree&apos;s servers and
                forwarded to us.
              </li>
              <li>
                <strong className="text-kurai-dark">Google Fonts</strong> &mdash; Our website loads
                fonts from Google&apos;s font service (fonts.googleapis.com). When you visit our
                website, your browser makes a request to Google&apos;s servers to download font
                files. This may result in Google receiving your IP address and browser information.
                For more information, see{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-kurai-royal hover:text-kurai-dark"
                >
                  Google&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong className="text-kurai-dark">Google Maps</strong> &mdash; We embed a Google
                Maps iframe on our Contact page to show our location. When the map loads, Google may
                collect data such as your IP address and browser information in accordance with{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-kurai-royal hover:text-kurai-dark"
                >
                  Google&apos;s Privacy Policy
                </a>
                .
              </li>
            </ul>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              We do not have control over how these third-party services collect or use your data. We
              encourage you to review their respective privacy policies.
            </p>

            {/* ─── 6. Your Rights Under PDPA 2010 ─── */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              6. Your Rights Under PDPA 2010
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              Under Malaysia&apos;s Personal Data Protection Act 2010, you have the following rights
              regarding your personal data:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              <li>
                <strong className="text-kurai-dark">Right of Access</strong> &mdash; You may request
                access to the personal data we hold about you or your child.
              </li>
              <li>
                <strong className="text-kurai-dark">Right of Correction</strong> &mdash; You may
                request that we correct any inaccurate or incomplete personal data.
              </li>
              <li>
                <strong className="text-kurai-dark">Right to Withdraw Consent</strong> &mdash; You
                may withdraw your consent for us to process your personal data at any time. This
                includes unsubscribing from our newsletter.
              </li>
              <li>
                <strong className="text-kurai-dark">Right to Limit Processing</strong> &mdash; You
                may request that we limit the processing of your personal data in certain
                circumstances.
              </li>
            </ul>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              To exercise any of these rights, please contact us using the details provided in the
              Contact Us section below. We will respond to your request within a reasonable
              timeframe.
            </p>

            {/* ─── 7. Cookies and Tracking ─── */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              7. Cookies and Tracking
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              Our website does not use first-party cookies or tracking technologies for analytics or
              advertising purposes. We do not use tools such as Google Analytics or Facebook Pixel.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              However, third-party services embedded on our website (such as Google Maps and Google
              Fonts) may set their own cookies or use similar tracking technologies when you access
              our site. These are governed by the respective third party&apos;s cookie and privacy
              policies.
            </p>

            {/* ─── 8. Data Retention ─── */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              8. Data Retention
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              We retain your personal data only for as long as necessary to fulfil the purposes for
              which it was collected, including responding to your enquiries, managing bookings, and
              communicating with you about our programmes.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              Newsletter subscriber data is retained until you unsubscribe. Form submission data
              stored by Formspree is subject to{' '}
              <a
                href="https://formspree.io/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-kurai-royal hover:text-kurai-dark"
              >
                Formspree&apos;s data retention policies
              </a>
              .
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              If you wish to have your data deleted, please contact us and we will take reasonable
              steps to remove your information from our records and request its removal from
              Formspree.
            </p>

            {/* ─── 9. Changes to This Policy ─── */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              9. Changes to This Policy
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, services, or legal requirements. When we make changes, we will update the
              &quot;Last updated&quot; date at the top of this page.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              We encourage you to review this page periodically to stay informed about how we protect
              your data.
            </p>

            {/* ─── 10. Contact Us ─── */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              10. Contact Us
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              If you have any questions about this Privacy Policy, wish to exercise your rights under
              the PDPA 2010, or have concerns about how your data is being handled, please contact
              us:
            </p>
            <ul className="mt-3 list-none space-y-2 pl-0 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              <li>
                <strong className="text-kurai-dark">Company:</strong> KURAI Education Sdn Bhd
              </li>
              <li>
                <strong className="text-kurai-dark">Address:</strong> 26A, Jalan Horizon Perdana 5,
                Horizon Hills, 79100 Iskandar Puteri, Johor, Malaysia
              </li>
              <li>
                <strong className="text-kurai-dark">Email:</strong>{' '}
                <a
                  href="mailto:hong@thekurai.com"
                  className="font-semibold text-kurai-royal hover:text-kurai-dark"
                >
                  hong@thekurai.com
                </a>
              </li>
              <li>
                <strong className="text-kurai-dark">Phone:</strong>{' '}
                <a
                  href="tel:+60122169871"
                  className="font-semibold text-kurai-royal hover:text-kurai-dark"
                >
                  +6012-216 9871
                </a>
              </li>
              <li>
                <strong className="text-kurai-dark">WhatsApp:</strong>{' '}
                <a
                  href="https://wa.me/60122169871"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-kurai-royal hover:text-kurai-dark"
                >
                  +6012-216 9871
                </a>
              </li>
            </ul>
            <p className="mt-6 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              You may also reach us through our{' '}
              <Link
                to="/contact"
                className="font-semibold text-kurai-royal hover:text-kurai-dark"
              >
                Contact page
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
