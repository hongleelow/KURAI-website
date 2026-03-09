import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions | KURAI Education Sdn Bhd"
        description="Terms and conditions for the KURAI website. Learn about our policies on programme information, free trial bookings, intellectual property, and more."
        path="/terms"
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
              Terms &amp; Conditions
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-kurai-light-soft">
              Please read these terms carefully before using the KURAI website.
            </p>
          </div>
        </section>

        {/* ─── CONTENT ─── */}
        <section className="px-5 py-16 sm:px-6 md:py-28">
          <div className="mx-auto max-w-3xl">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-kurai-royal">
              Last updated: March 2026
            </p>

            <p className="mt-6 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              These Terms and Conditions govern your use of the KURAI website
              (thekurai.com), operated by KURAI Education Sdn Bhd. By accessing
              or using this website, you agree to be bound by these terms. If you
              do not agree with any part of these terms, please do not use this
              website.
            </p>

            {/* 1. Use of Website */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              1. Use of Website
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              This website is provided for informational purposes only. It offers
              information about KURAI Education&apos;s programmes, schedules, and
              services, and allows visitors to submit enquiries and book free
              trial classes. You agree to use this website only for lawful
              purposes and in a manner that does not infringe upon the rights of,
              or restrict or inhibit the use of this website by, any third party.
            </p>

            {/* 2. Intellectual Property */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              2. Intellectual Property
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              All content on this website, including but not limited to text,
              graphics, logos, images, photographs, videos, curriculum
              descriptions, and page layouts, is the property of KURAI Education
              Sdn Bhd and is protected by applicable intellectual property laws.
              You may not reproduce, distribute, modify, or republish any
              material from this website without our prior written consent.
            </p>

            {/* 3. Programme Information and Pricing */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              3. Programme Information and Pricing
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              We make every effort to ensure that programme descriptions,
              schedules, and pricing displayed on this website are accurate and
              up to date. However, all information is subject to change without
              prior notice. The content on this website does not constitute a
              binding offer or contract. Programme availability, fees, schedules,
              and other details should be confirmed directly with KURAI Education
              before making any decisions based on the information provided.
            </p>

            {/* 4. Free Trial Bookings */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              4. Free Trial Bookings
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              This website allows visitors to submit requests for free trial
              classes. Submitting a booking request does not guarantee a
              confirmed place. All free trial bookings are subject to
              availability and will only be confirmed once you receive
              confirmation from KURAI Education via email, WhatsApp, or phone.
              We reserve the right to reschedule or cancel trial sessions at our
              discretion due to capacity, scheduling conflicts, or unforeseen
              circumstances.
            </p>

            {/* 5. User Conduct */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              5. User Conduct
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              When using this website, including submitting forms or
              communicating with us, you agree not to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              <li>
                Provide false, misleading, or inaccurate information in any form
                submission.
              </li>
              <li>
                Use the website for any unlawful purpose or in violation of any
                applicable laws or regulations.
              </li>
              <li>
                Attempt to gain unauthorised access to any part of the website,
                its servers, or any systems connected to it.
              </li>
              <li>
                Transmit any harmful code, viruses, or other malicious software.
              </li>
              <li>
                Engage in any activity that interferes with or disrupts the
                website or its functionality.
              </li>
              <li>
                Use automated tools, bots, or scripts to access or interact with
                the website without our express permission.
              </li>
            </ul>

            {/* 6. Limitation of Liability */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              6. Limitation of Liability
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              This website is provided on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis. KURAI Education Sdn Bhd makes no
              warranties, express or implied, regarding the accuracy,
              completeness, reliability, or availability of the website or its
              content.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              To the fullest extent permitted by law, KURAI Education Sdn Bhd
              shall not be liable for any direct, indirect, incidental,
              consequential, or special damages arising from or in connection
              with your use of this website, including but not limited to loss of
              data, loss of profits, or any other damages, even if we have been
              advised of the possibility of such damages.
            </p>

            {/* 7. Third-Party Links */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              7. Third-Party Links
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              This website may contain links to third-party websites or services
              that are not owned or controlled by KURAI Education Sdn Bhd. We
              have no control over, and assume no responsibility for, the
              content, privacy policies, or practices of any third-party
              websites. Accessing third-party links is at your own risk, and we
              encourage you to review the terms and privacy policies of any
              external websites you visit.
            </p>

            {/* 8. Children */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              8. Children
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              KURAI Education provides programmes for children aged 5 to 11.
              This website is intended for use by parents and guardians. We do
              not knowingly collect personal information directly from children.
              Parents and guardians are responsible for supervising their
              children&apos;s use of this website and for any information
              submitted on their behalf. If you are a parent or guardian and
              believe your child has provided personal information to us without
              your consent, please contact us so we can take appropriate action.
            </p>

            {/* 9. Governing Law */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              9. Governing Law
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              These Terms and Conditions are governed by and construed in
              accordance with the laws of Malaysia. Any disputes arising out of
              or in connection with these terms shall be subject to the exclusive
              jurisdiction of the courts of Malaysia.
            </p>

            {/* 10. Changes to Terms */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              10. Changes to Terms
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              KURAI Education Sdn Bhd reserves the right to update or modify
              these Terms and Conditions at any time without prior notice. Any
              changes will be effective immediately upon being posted on this
              page. We encourage you to review this page periodically to stay
              informed of any updates. Your continued use of the website after
              changes are posted constitutes your acceptance of the revised
              terms.
            </p>

            {/* 11. Contact */}
            <h2 className="mt-10 font-heading text-xl font-bold text-kurai-dark md:text-2xl">
              11. Contact
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              If you have any questions about these Terms and Conditions, please
              contact us:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
              <li>
                <strong className="text-kurai-dark">Company:</strong> KURAI
                Education Sdn Bhd
              </li>
              <li>
                <strong className="text-kurai-dark">Address:</strong> 26A, Jalan
                Horizon Perdana 5, Horizon Hills, 79100 Iskandar Puteri, Johor
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
            </ul>

            {/* Back link */}
            <div className="mt-14 border-t border-kurai-ice pt-8">
              <Link
                to="/"
                className="font-body text-sm font-semibold text-kurai-royal hover:text-kurai-dark"
              >
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
