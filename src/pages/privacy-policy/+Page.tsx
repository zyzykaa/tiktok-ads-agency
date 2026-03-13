import React from 'react';
import { FadeIn } from '../../components/FadeIn';
import { SEO } from '../../components/SEO';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title="Privacy Policy" 
        description="Privacy Policy for TikTok Ads Agency. Learn how we collect, use, and protect your personal information." 
      />
      <main className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <FadeIn>
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold mb-8">Privacy Policy</h1>
          <div className="prose prose-invert prose-p:text-on-surface-variant prose-headings:text-on-surface max-w-none">
            <p className="text-sm text-on-surface-variant/70 mb-8">Last Updated: October 24, 2024</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 mt-8">1. Introduction</h2>
              <p className="mb-4">
                TikTok Ads Agency ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 mt-8">2. The Data We Collect About You</h2>
              <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes billing address, email address, and telephone numbers.</li>
                <li><strong>Financial Data</strong> includes payment card details.</li>
                <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of services you have purchased from us.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform on the devices you use to access this website.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
                <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 mt-8">3. How We Use Your Personal Data</h2>
              <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those интересы.</li>
                <li>Where we need to comply with a legal or regulatory obligation.</li>
              </ul>
              <p className="mb-4">Generally, we do not rely on consent as a legal basis for processing your personal data other than in relation to sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 mt-8">4. Data Security</h2>
              <p className="mb-4">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 mt-8">5. Data Retention</h2>
              <p className="mb-4">
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 mt-8">6. Your Legal Rights</h2>
              <p className="mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 mt-8">7. Contact Details</h2>
              <p className="mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:shinnd98@gmail.com" className="text-primary hover:underline">shinnd98@gmail.com</a>
              </p>
            </section>
          </div>
        </FadeIn>
      </main>
    </>
  );
}
