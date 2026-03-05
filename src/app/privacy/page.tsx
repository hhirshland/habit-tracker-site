import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Thrive",
  description:
    "Learn how Thrive Habits collects, uses, stores, and protects your information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-32 pb-24">
        <article className="prose mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-extrabold text-foreground">
            Privacy Policy
          </h1>
          <p className="text-text-secondary">
            <strong>Thrive Habits</strong>
            <br />
            Operated by Hyperactive Studio (Henry Hirshland)
            <br />
            Last updated: March 5, 2026
          </p>

          <h2>Introduction</h2>
          <p>
            Thrive Habits (&ldquo;Thrive,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a habit-tracking mobile
            application. This Privacy Policy explains how we collect, use,
            store, and protect your information when you use our app.
          </p>
          <p>
            By using Thrive, you agree to the collection and use of information
            as described in this policy.
          </p>

          <h2>Information We Collect</h2>

          <h3>Account Information</h3>
          <p>When you create an account, we collect:</p>
          <ul>
            <li>
              <strong>Email address</strong> — used for authentication and
              account recovery
            </li>
            <li>
              <strong>Name</strong> (optional) — used for personalization within
              the app
            </li>
            <li>
              <strong>Profile photo</strong> (optional) — stored to personalize
              your profile
            </li>
          </ul>

          <h3>Usage Data</h3>
          <p>
            We collect data about how you use the app to improve the product:
          </p>
          <ul>
            <li>
              <strong>Habits and completions</strong> — the habits you create,
              track, and complete
            </li>
            <li>
              <strong>Goals</strong> — personal goals you set within the app
            </li>
            <li>
              <strong>Daily journal entries</strong> — text you enter in the
              daily journal feature
            </li>
            <li>
              <strong>Daily todo items</strong> — tasks you create and complete
            </li>
            <li>
              <strong>Onboarding preferences</strong> — experience level,
              challenges, and goal selections
            </li>
          </ul>

          <h3>Health Data (Apple HealthKit)</h3>
          <p>
            If you choose to connect Apple Health, we read the following data
            types to auto-complete health-related habits:
          </p>
          <ul>
            <li>Step count</li>
            <li>Walking/running distance</li>
            <li>Active energy burned</li>
            <li>Exercise minutes</li>
            <li>Sleep analysis</li>
            <li>Mindful minutes</li>
            <li>Water intake</li>
            <li>Stand hours</li>
          </ul>
          <p>
            <strong>Important:</strong> We only <strong>read</strong> health
            data — we never write to Apple Health. Health data is used solely to
            track progress and auto-complete habits within the app. We do{" "}
            <strong>not</strong> sell, share, or use your health data for
            advertising or marketing purposes. Health data is not transferred to
            any third party except as described in the &ldquo;Third-Party
            Services&rdquo; section below, where it is used only to provide app
            functionality.
          </p>

          <h3>Subscription Information</h3>
          <p>
            If you subscribe to Thrive Pro, subscription status and transaction
            metadata are managed by RevenueCat (see Third-Party Services). We
            store your subscription status (active, trialing, expired) and
            expiration date in our database to manage access to premium features.
          </p>

          <h3>Analytics Data</h3>
          <p>
            We collect anonymized analytics events (e.g., screens viewed,
            features used) to understand how the app is used and to improve the
            experience. These events do not contain personally identifiable
            information beyond your user ID.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We use the following third-party services to operate Thrive:
          </p>

          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Purpose</th>
                  <th>Data Shared</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Supabase</strong>
                  </td>
                  <td>Authentication, database, and file storage</td>
                  <td>
                    Email, name, profile photo, habits, goals, journal entries,
                    subscription status
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>RevenueCat</strong>
                  </td>
                  <td>Subscription and in-app purchase management</td>
                  <td>User ID, purchase transactions, subscription status</td>
                </tr>
                <tr>
                  <td>
                    <strong>PostHog</strong>
                  </td>
                  <td>Product analytics</td>
                  <td>Anonymized user ID, app usage events</td>
                </tr>
                <tr>
                  <td>
                    <strong>Apple HealthKit</strong>
                  </td>
                  <td>Health data integration</td>
                  <td>
                    Health metrics are read on-device; raw health data is not
                    sent to our servers
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Expo / EAS</strong>
                  </td>
                  <td>App build and delivery infrastructure</td>
                  <td>Device identifiers for push notifications</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Each third-party service operates under its own privacy policy. We
            encourage you to review them:
          </p>
          <ul>
            <li>
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Supabase Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.revenuecat.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RevenueCat Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://posthog.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                PostHog Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple HealthKit
              </a>
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>
              Provide and maintain the app&apos;s functionality
            </li>
            <li>
              Authenticate your account and manage your subscription
            </li>
            <li>Track your habits, goals, and progress</li>
            <li>
              Auto-complete habits using Apple Health data (when connected)
            </li>
            <li>Send daily reminder notifications (when enabled)</li>
            <li>Improve the app based on anonymized usage analytics</li>
            <li>Respond to support requests</li>
          </ul>

          <h2>Data Storage and Security</h2>
          <p>
            Your data is stored on Supabase&apos;s cloud infrastructure with
            encryption at rest and in transit. Authentication tokens are stored
            securely on your device using the platform&apos;s secure storage
            (Keychain on iOS).
          </p>
          <p>
            We take reasonable measures to protect your information, but no
            method of electronic storage is 100% secure.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain your data for as long as your account is active. If you
            delete your account, we will delete your personal data within 30
            days, except where we are required by law to retain it.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>
              <strong>Access</strong> your personal data stored in the app
            </li>
            <li>
              <strong>Update</strong> your profile information at any time
            </li>
            <li>
              <strong>Delete</strong> your account and associated data by
              contacting us
            </li>
            <li>
              <strong>Disconnect</strong> Apple Health at any time through the
              app or iOS Settings
            </li>
            <li>
              <strong>Opt out</strong> of analytics by contacting us
            </li>
          </ul>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Thrive is not intended for children under the age of 13. We do not
            knowingly collect personal information from children under 13. If we
            become aware that we have collected data from a child under 13, we
            will delete it promptly.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of significant changes by updating the &ldquo;Last
            updated&rdquo; date at the top of this policy. Continued use of the
            app after changes constitutes acceptance of the updated policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise
            your data rights, please contact us at:
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
