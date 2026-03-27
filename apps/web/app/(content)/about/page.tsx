// SPDX-License-Identifier: AGPL-3.0-only
export const dynamic = "force-dynamic";

export const metadata = {
  title: "About Us",
  description: "Learn about JustZappIt — a private messaging app and a community-driven directory of physical cryptocurrency exchanges worldwide.",
};

export default function AboutPage() {
  const businessEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@justzappit.xyz";

  return (
    <>
      <h1 className="text-[var(--color-text-primary)]">About JustZappIt</h1>
      <p className="text-[var(--color-text-secondary)] mb-8">Last updated: March 2026</p>

      <h2 className="text-[var(--color-text-primary)] mt-8">The App</h2>
      <p>
        JustZappIt is a private, encrypted messaging application for iOS and Android. In-chat Zcash (ZEC) payments are coming soon — users will send ZEC to contacts using an external wallet like Zodl, directly within conversation threads, without KYC. Shielded transactions are the default: amount and recipient are not visible on a public ledger.
      </p>
      <p>
        The core design decision is simple: messaging and payments are one interaction. Open a conversation. Tap the payment icon. Enter an amount and send. The ZEC arrives in the contact&apos;s wallet without leaving the chat.
      </p>

      <h2 className="text-[var(--color-text-primary)] mt-8">The Facilitator Network</h2>
      <p>
        We operate an open-source, community-maintained directory of physical cryptocurrency exchange shops worldwide. Separately, we are building an entirely new facilitator network — a community of people willing to facilitate ZEC-to-fiat conversions via QR codes at any shop counter, with no crypto infrastructure required at the point of sale.
      </p>
      <p>
        The directory is free to use, requires no account, and is verified entirely by the community.
      </p>

      <h2 className="text-[var(--color-text-primary)] mt-8">Roadmap</h2>
      <ul>
        <li><strong>Live now:</strong> Private P2P messaging — iOS and Android</li>
        <li><strong>Live now:</strong> Community-verified directory of physical crypto exchange shops</li>
        <li><strong>In progress:</strong> Building the facilitator network — recruiting people willing to facilitate ZEC-to-fiat conversions via QR codes</li>
        <li><strong>Roadmap:</strong> QR-code shop payments via fiat facilitator — pay at any shop in fiat, settled in ZEC inside the conversation thread. No merchant crypto adoption required.</li>
      </ul>

      <h2 className="text-[var(--color-text-primary)] mt-8">What We Do</h2>
      <p>
        JustZappIt provides a free, open platform where:
      </p>
      <ul>
        <li><strong>App users</strong> can send and receive ZEC privately inside conversations</li>
        <li><strong>Community members</strong> can submit and verify physical crypto exchange locations</li>
        <li><strong>Store operators</strong> can list their business and join the facilitator network</li>
        <li><strong>Everyone</strong> contributes to building a more accessible crypto payment ecosystem</li>
      </ul>

      <h2 className="text-[var(--color-text-primary)] mt-8">Our Values</h2>
      
      <h3 className="text-[var(--color-text-primary)] mt-6">Transparency</h3>
      <p>
        We believe in complete transparency. All our code is open-source, our data is community-verified, and our processes are publicly documented. Anyone can audit our systems, contribute to our development, or fork the project to create their own version.
      </p>

      <h3 className="text-[var(--color-text-primary)] mt-6">Privacy First</h3>
      <p>
        We collect minimal information and never store personal data. Our anti-spam system uses cryptographic hashing to protect user privacy while maintaining platform integrity. We don&apos;t track users across the web or sell personal information.
      </p>

      <h3 className="text-[var(--color-text-primary)] mt-6">Community Driven</h3>
      <p>
        JustZappIt exists because of its community. Every store listing, verification, and improvement comes from people like you who believe in creating a more accessible crypto ecosystem. We empower our community to self-govern through transparent voting and moderation systems.
      </p>

      <h3 className="text-[var(--color-text-primary)] mt-6">Educational Focus</h3>
      <p>
        Beyond providing a directory, we&apos;re committed to educating the public about cryptocurrency safety, best practices, and regulatory compliance. Our blog and guides help users make informed decisions about their crypto transactions.
      </p>

      <h2 className="text-[var(--color-text-primary)] mt-8">Our Technology</h2>
      <p>
        JustZappIt is built with modern, privacy-respecting technology:
      </p>
      <ul>
        <li><strong>Next.js 14</strong> for fast, secure web performance</li>
        <li><strong>Supabase</strong> for our database and real-time updates</li>
        <li><strong>OpenStreetMap</strong> for privacy-respecting mapping without tracking</li>
        <li><strong>hCaptcha</strong> for privacy-first bot protection</li>
        <li><strong>Open Source</strong> - everything is transparent and auditable</li>
      </ul>

      <h2 className="text-[var(--color-text-primary)] mt-8">Community Guidelines</h2>
      <p>
        To maintain trust and quality, we ask all community members to:
      </p>
      <ul>
        <li>Submit accurate, truthful information about crypto exchanges</li>
        <li>Verify stores you&apos;ve personally visited or confirmed</li>
        <li>Flag incorrect or outdated information responsibly</li>
        <li>Respect other community members and maintain civil discourse</li>
        <li>Follow our <a href="/legal/content-policy" className="text-primary hover:underline">Community Content Policy</a></li>
      </ul>

      <h2 className="text-[var(--color-text-primary)] mt-8">Transparency Report</h2>
      <p>
        As part of our commitment to transparency, we regularly publish statistics about our platform:
      </p>
      <ul>
        <li><strong>Store Listings:</strong> All verified and unverified store locations</li>
        <li><strong>Community Actions:</strong> Number of confirmations, flags, and edits</li>
        <li><strong>Moderation Actions:</strong> Content removed for policy violations</li>
        <li><strong>Geographic Coverage:</strong> Countries and cities represented</li>
      </ul>
      <p>
        These statistics are updated monthly and available in our public repository.
      </p>

      <h2 className="text-[var(--color-text-primary)] mt-8">Contact Information</h2>
      <p>
        JustZappIt is maintained by a dedicated team of contributors and community volunteers. We&apos;re here to help and welcome your feedback.
      </p>
      
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 mt-6">
        <h3 className="text-[var(--color-text-primary)] mb-4">Contact Us</h3>
        <ul className="space-y-2">
          <li><strong>Email:</strong> <a href={`mailto:${businessEmail}`} className="text-primary hover:underline">{businessEmail}</a></li>
          <li><strong>X (Twitter):</strong> <a href="https://x.com/JustZappIt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@JustZappIt</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/0xVampirot/justZappIt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/0xVampirot/justZappIt</a></li>
        </ul>
      </div>

      <h3 className="text-[var(--color-text-primary)] mt-6">Get Involved</h3>
      <p>
        There are many ways to contribute to JustZappIt:
      </p>
      <ul>
        <li><strong>Add Stores:</strong> Help us build the directory by submitting crypto exchange locations</li>
        <li><strong>Verify Listings:</strong> Confirm stores you&apos;ve visited to help others</li>
        <li><strong>Report Issues:</strong> Flag incorrect or outdated information</li>
        <li><strong>Contribute Code:</strong> We&apos;re open source - check out our <a href="https://github.com/0xVampirot/justZappIt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub repository</a></li>
        <li><strong>Spread the Word:</strong> Share JustZappIt with your crypto community</li>
      </ul>

      <h2 className="text-[var(--color-text-primary)] mt-8">License</h2>
      <p>
        JustZappIt is licensed under the <a href="https://www.gnu.org/licenses/agpl-3.0.en.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GNU Affero General Public License v3.0</a>. This means you&apos;re free to use, modify, and distribute the software, as long as you share your modifications under the same license.
      </p>

      <h2 className="text-[var(--color-text-primary)] mt-8">Thank You</h2>
      <p>
        Thank you for being part of the JustZappIt community. Together, we&apos;re building a more accessible, transparent, and trustworthy cryptocurrency ecosystem for everyone.
      </p>
    </>
  );
}
