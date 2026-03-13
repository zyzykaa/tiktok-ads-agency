import React from 'react';
import { FadeIn } from '../../components/FadeIn';
import { SEO } from '../../components/SEO';

export default function TermsOfService() {
  return (
    <>
      <SEO 
        title="Terms of Service" 
        description="Terms of Service for TikTok Ads Agency. Read the rules and guidelines for using our services." 
      />
      <main className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <FadeIn>
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold mb-8">Terms of Service</h1>
          <div className="prose prose-invert prose-p:text-on-surface-variant prose-headings:text-on-surface max-w-none">
            <p className="text-sm text-on-surface-variant/70 mb-8">Last Updated: October 24, 2024</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 mt-8">1. Agreement to Terms</h2>
              <p className="mb-4">
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and TikTok Ads Agency ("we," "us" or "our"), concerning your access to and use of our website and services. You agree that by accessing the site, you have read, understood, and agree to be bound by all of these Terms of Service.
              </p>
              <p className="mb-4 font-bold text-primary">
                IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 mt-8">2. Intellectual Property Rights</h2>
              <p className="mb-4">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 mt-8">3. User Representations</h2>
              <p className="mb-4">By using the Site, you represent and warrant that:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                <li>Your use of the Site will not violate any applicable law or regulation.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 mt-8">4. Prohibited Activities</h2>
              <p className="mb-4">You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 mt-8">5. Fee and Payment</h2>
              <p className="mb-4">
                We accept various forms of payment. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. We bill you through an online billing account for purchases made via the Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 mt-8">6. Dispute Resolution</h2>
              <p className="mb-4">
                Any legal action of whatever nature brought by either you or us (collectively, the "Parties" and individually, a "Party") shall be commenced or prosecuted in the state and federal courts, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non conveniens with respect to venue and jurisdiction in such state and federal courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 mt-8">7. Contact Us</h2>
              <p className="mb-4">
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:shinnd98@gmail.com" className="text-primary hover:underline">shinnd98@gmail.com</a>
              </p>
            </section>
          </div>
        </FadeIn>
      </main>
    </>
  );
}
