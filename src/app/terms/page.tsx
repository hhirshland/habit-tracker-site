import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Thrive",
  description:
    "Terms of Service for Thrive Habits, operated by Hyperactive Studio.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-32 pb-24">
        <article className="prose mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-extrabold text-foreground">
            Terms of Service
          </h1>
          <p className="text-text-secondary">
            <strong>Thrive Habits</strong>
            <br />
            Operated by Hyperactive Studio (Henry Hirshland)
            <br />
            Last updated: March 5, 2026
          </p>

          <h2>Agreement to Terms</h2>
          <p>
            By downloading, installing, or using Thrive Habits
            (&ldquo;Thrive,&rdquo; &ldquo;the App&rdquo;), you agree to be
            bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not
            agree to these Terms, do not use the App.
          </p>

          <h2>Description of Service</h2>
          <p>
            Thrive is a habit-tracking mobile application that helps users build
            and maintain daily habits, set goals, track health metrics, and
            reflect through journaling. The App is available on iOS.
          </p>

          <h2>Account Registration</h2>
          <p>
            To use Thrive, you must create an account using a valid email
            address. You are responsible for:
          </p>
          <ul>
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activity that occurs under your account</li>
            <li>Providing accurate and up-to-date information</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate accounts that violate
            these Terms.
          </p>

          <h2>Subscriptions and Payments</h2>

          <h3>Thrive Pro</h3>
          <p>
            Thrive offers a premium subscription (&ldquo;Thrive Pro&rdquo;) that
            provides access to the full feature set. Subscriptions are available
            on a monthly or yearly basis.
          </p>

          <h3>Free Trial</h3>
          <p>
            New subscribers may be eligible for a 7-day free trial. If you do
            not cancel before the trial ends, your subscription will
            automatically convert to a paid subscription at the applicable rate.
          </p>

          <h3>Billing</h3>
          <ul>
            <li>
              Payment is charged to your Apple ID account at confirmation of
              purchase.
            </li>
            <li>
              Subscriptions automatically renew unless cancelled at least 24
              hours before the end of the current billing period.
            </li>
            <li>
              Your account will be charged for renewal within 24 hours prior to
              the end of the current period at the applicable subscription rate.
            </li>
          </ul>

          <h3>Cancellation</h3>
          <p>
            You can manage or cancel your subscription at any time through your
            Apple ID account settings or the App Store. Cancellation takes effect
            at the end of the current billing period. No refunds are provided for
            partial billing periods.
          </p>

          <h3>Price Changes</h3>
          <p>
            We reserve the right to change subscription pricing. Any price
            changes will take effect at the start of the next billing cycle after
            notice is provided.
          </p>

          <h2>Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the App for any unlawful purpose</li>
            <li>
              Attempt to gain unauthorized access to the App&apos;s systems or
              other users&apos; accounts
            </li>
            <li>
              Interfere with or disrupt the App&apos;s infrastructure
            </li>
            <li>
              Reverse-engineer, decompile, or disassemble any part of the App
            </li>
            <li>
              Use the App to collect, store, or transmit any data in violation of
              applicable laws
            </li>
            <li>
              Create multiple accounts to abuse free trials or promotional offers
            </li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All content, features, and functionality of the App — including but
            not limited to text, graphics, logos, icons, and software — are the
            property of Hyperactive Studio and are protected by copyright,
            trademark, and other intellectual property laws.
          </p>
          <p>
            Your habit data, journal entries, and other content you create within
            the App remain your property. By using the App, you grant us a
            limited license to store and process your content solely to provide
            the service.
          </p>

          <h2>Health Data</h2>
          <p>
            Thrive may integrate with Apple HealthKit to read health data for the
            purpose of auto-completing health-related habits. By connecting Apple
            Health, you acknowledge that:
          </p>
          <ul>
            <li>
              Health data is accessed read-only and is used solely within the App
              to track habit progress
            </li>
            <li>
              We do not sell or share your health data for advertising or
              marketing
            </li>
            <li>
              You can disconnect Apple Health at any time through the App or iOS
              Settings
            </li>
            <li>
              Our use of HealthKit data complies with Apple&apos;s HealthKit
              guidelines
            </li>
          </ul>

          <h2>Disclaimer of Warranties</h2>
          <p>
            The App is provided &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; without warranties of any kind, either express or
            implied. We do not warrant that:
          </p>
          <ul>
            <li>
              The App will be uninterrupted, timely, secure, or error-free
            </li>
            <li>
              The results obtained from the App will be accurate or reliable
            </li>
            <li>The App will meet your specific requirements</li>
          </ul>
          <p>
            Thrive is a habit-tracking tool, not a medical device. It does not
            provide medical advice, diagnoses, or treatment. Always consult a
            qualified healthcare provider for medical decisions.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Hyperactive Studio and its
            owner shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, including but not limited to loss
            of data, profits, or goodwill, arising out of or related to your use
            of the App.
          </p>
          <p>
            Our total liability for any claim arising from or related to these
            Terms or the App shall not exceed the amount you paid us in the 12
            months preceding the claim.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Hyperactive Studio and its
            owner from any claims, damages, losses, or expenses (including
            reasonable legal fees) arising out of your use of the App or
            violation of these Terms.
          </p>

          <h2>Modifications to the Service</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue the App (or
            any part of it) at any time, with or without notice. We are not
            liable to you or any third party for any modification, suspension, or
            discontinuation of the App.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of
            material changes by updating the &ldquo;Last updated&rdquo; date at
            the top. Continued use of the App after changes constitutes
            acceptance of the updated Terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of the United States. Any
            disputes arising from these Terms or your use of the App shall be
            resolved in the courts of the applicable jurisdiction.
          </p>

          <h2>Apple-Specific Terms</h2>
          <p>
            These Terms are between you and Hyperactive Studio, not Apple. Apple
            has no obligation to provide maintenance or support for the App. In
            the event of any failure of the App to conform to any applicable
            warranty, you may notify Apple for a refund of the purchase price (if
            applicable); beyond that, Apple has no other warranty obligation.
            Apple is not responsible for any third-party claims related to your
            use of the App.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:hhirshland@gmail.com">hhirshland@gmail.com</a>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
