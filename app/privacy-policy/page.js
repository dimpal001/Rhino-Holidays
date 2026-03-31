import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Privacy Policy | Rhino Holidays",
  description:
    "Learn about how Rhino Holidays collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary/20 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    1. Introduction
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to Rhino Holidays. We respect your privacy and are
                    committed to protecting your personal data. This privacy
                    policy will inform you about how we look after your personal
                    data when you visit our website and tell you about your
                    privacy rights and how the law protects you.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    2. Information We Collect
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may collect, use, store and transfer different kinds of
                    personal data about you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      Identity Data: name, username, date of birth, gender
                    </li>
                    <li>
                      Contact Data: email address, telephone numbers, billing
                      address
                    </li>
                    <li>
                      Financial Data: payment card details, bank account
                      information
                    </li>
                    <li>
                      Transaction Data: details about payments and services you
                      have purchased from us
                    </li>
                    <li>
                      Technical Data: IP address, browser type and version, time
                      zone setting, location, operating system
                    </li>
                    <li>
                      Usage Data: information about how you use our website and
                      services
                    </li>
                    <li>
                      Marketing Data: your preferences in receiving marketing
                      from us
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    3. How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We will only use your personal data when the law allows us
                    to. Most commonly, we will use your personal data in the
                    following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      To process and deliver your travel bookings and services
                    </li>
                    <li>
                      To manage our relationship with you and provide customer
                      support
                    </li>
                    <li>To improve our website, products, and services</li>
                    <li>
                      To send you marketing communications (with your consent)
                    </li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our business and your interests</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    4. Data Security
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We have put in place appropriate security measures to
                    prevent your personal data from being accidentally lost,
                    used, or accessed in an unauthorized way. We limit access to
                    your personal data to those employees, agents, contractors,
                    and other third parties who have a business need to know.
                    They will only process your personal data on our
                    instructions and are subject to a duty of confidentiality.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    5. Data Retention
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We will only retain your personal data for as long as
                    necessary to fulfill the purposes we collected it for,
                    including for the purposes of satisfying any legal,
                    accounting, or reporting requirements. To determine the
                    appropriate retention period for personal data, we consider
                    the amount, nature, and sensitivity of the personal data,
                    the potential risk of harm from unauthorized use or
                    disclosure, and applicable legal requirements.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    6. Your Legal Rights
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Under certain circumstances, you have rights under data
                    protection laws in relation to your personal data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Request access to your personal data</li>
                    <li>Request correction of your personal data</li>
                    <li>Request erasure of your personal data</li>
                    <li>Object to processing of your personal data</li>
                    <li>
                      Request restriction of processing your personal data
                    </li>
                    <li>Request transfer of your personal data</li>
                    <li>Right to withdraw consent</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    7. Third-Party Links
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may include links to third-party websites,
                    plug-ins, and applications. Clicking on those links or
                    enabling those connections may allow third parties to
                    collect or share data about you. We do not control these
                    third-party websites and are not responsible for their
                    privacy statements.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    8. Cookies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website uses cookies to distinguish you from other
                    users. This helps us to provide you with a good experience
                    when you browse our website and also allows us to improve
                    our site. You can set your browser to refuse all or some
                    browser cookies, or to alert you when websites set or access
                    cookies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    9. Contact Us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this privacy policy or our
                    privacy practices, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="text-foreground">
                      <strong>Email:</strong> contact@rhinoholidays.co.in
                    </p>
                    <p className="text-foreground">
                      <strong>Phone:</strong> +91 70992 34605
                    </p>
                    <p className="text-foreground">
                      <strong>Address:</strong> 123 Travel Street, Siliguri,
                      West Bengal 734001, India
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    10. Changes to This Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this privacy policy from time to time. We will
                    notify you of any changes by posting the new privacy policy
                    on this page and updating the "Last updated" date at the top
                    of this policy. You are advised to review this privacy
                    policy periodically for any changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
