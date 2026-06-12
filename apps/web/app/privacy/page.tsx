// SPDX-License-Identifier: AGPL-3.0-only
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Zapp App Privacy Policy — JustZappIt",
};

export default function ZappAppPrivacyPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@justzappit.xyz";

  return (
    <>
      <h1 className="text-[var(--color-text-primary)]">Zapp App Privacy Policy</h1>
      <p className="text-[var(--color-text-secondary)] mb-8">Last updated: June 11, 2026</p>

      <p>
        This Privacy Policy covers the <strong>Zapp</strong> mobile application for Android (package{" "}
        <code>xyz.justzappit.zapp</code>), published by JustZappIt (&quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;). It explains what information the app handles, what leaves your device, and who can see
        it. The JustZappIt website has its own, separate{" "}
        <a href="/legal/privacy" className="text-primary hover:underline">
          website privacy policy
        </a>
        .
      </p>

      <h2 className="text-[var(--color-text-primary)] mt-8">1. The short version</h2>
      <ul>
        <li>
          Zapp is a <strong>non-custodial</strong> Zcash wallet with built-in private messaging. Your keys, your
          funds, your messages — they live on your device, not on our servers.
        </li>
        <li>We do not require an account. There is no sign-up, username, email, or phone number.</li>
        <li>
          The app contains <strong>no analytics, no advertising, and no tracking SDKs</strong>. We do not collect
          usage data, and we never sell data — we have essentially nothing to sell.
        </li>
        <li>Messages are end-to-end encrypted. We cannot read them.</li>
      </ul>

      <h2 className="text-[var(--color-text-primary)] mt-8">2. Information stored only on your device</h2>
      <p>
        The following never leaves your device and is never transmitted to us: your recovery (seed) phrase and
        private keys (protected with Android Keystore-backed encryption), wallet balances and transaction history,
        your chat identity (derived locally from your wallet seed), chat message history, your address book, and
        app settings. Uninstalling the app permanently deletes all of it from the device.
      </p>

      <h2 className="text-[var(--color-text-primary)] mt-8">3. Information that leaves your device</h2>
      <p>
        Like any wallet and messenger, Zapp must talk to networks to work. Here is everything that leaves the
        device, and who receives it:
      </p>
      <ul>
        <li>
          <strong>Zcash network synchronization:</strong> the app connects to third-party Zcash light-client
          servers (&quot;lightwalletd&quot;, e.g. servers operated by zec.rocks and others) to fetch blockchain
          data and broadcast your transactions. These servers necessarily observe your IP address and the
          transactions you broadcast. The app supports routing this traffic over Tor, which you can enable in
          settings.
        </li>
        <li>
          <strong>Public blockchains:</strong> transactions you send are recorded permanently on the public Zcash
          network (and, when you use the cash-out feature, the Base network). Shielded Zcash transactions protect
          amounts and addresses on-chain by design.
        </li>
        <li>
          <strong>Peer-to-peer chat:</strong> messages are end-to-end encrypted on your device and delivered
          directly to your contact over a peer-to-peer network, or — when your contact is offline — temporarily
          held by a relay server we operate. The relay stores <em>only ciphertext it cannot decrypt</em>, solely
          until delivery, and it is then discarded. As with any peer-to-peer system, peers and relays you connect
          to can observe your IP address and connection metadata, but never message content.
        </li>
        <li>
          <strong>Location sharing (optional):</strong> if you tap the share-location button in a chat, the app
          asks for the location permission and sends your coordinates <em>once, end-to-end encrypted, to that
          chat recipient only</em>. Your location is never sent to us and is never collected in the background.
          You can decline or revoke the permission at any time; the rest of the app is unaffected.
        </li>
        <li>
          <strong>Camera (optional):</strong> used to scan QR codes and take photos you choose to send in chat.
          Scanning happens entirely on the device. Attachments you pick use the Android system photo picker, so
          the app has no general access to your photo library.
        </li>
        <li>
          <strong>Swaps (optional):</strong> if you use the swap feature, the addresses and amounts required to
          quote and execute the swap are sent to the third-party swap service that fills it.
        </li>
        <li>
          <strong>Cash-out (optional):</strong> if you use the cash-out feature, your order is executed by the
          third-party P2P.me protocol on the Base network via standard blockchain infrastructure providers. Order
          data lives on the public blockchain; the payment details you exchange with your trade counterparty
          (such as a UPI ID) are transmitted encrypted and are not received by us. Exchange-rate lookups are
          opt-in and fetched anonymously.
        </li>
      </ul>

      <h2 className="text-[var(--color-text-primary)] mt-8">4. What we never do</h2>
      <ul>
        <li>No analytics or telemetry of any kind.</li>
        <li>No advertising and no advertising identifiers.</li>
        <li>
          No automatic crash reporting — crash logs stay on your device and are shared only if you explicitly
          choose to export and send them.
        </li>
        <li>No selling, renting, or monetizing of user data.</li>
      </ul>

      <h2 className="text-[var(--color-text-primary)] mt-8">5. App permissions</h2>
      <ul>
        <li>
          <strong>Camera</strong> — scanning QR codes and taking photos for chat. Optional.
        </li>
        <li>
          <strong>Location</strong> — only for the user-initiated share-location chat feature described above.
          Optional, never used in the background.
        </li>
        <li>
          <strong>Biometrics</strong> — unlocking the app with your fingerprint or face. Biometric data is handled
          entirely by Android and never leaves the device.
        </li>
        <li>
          <strong>Network access</strong> — syncing the wallet and delivering messages.
        </li>
      </ul>

      <h2 className="text-[var(--color-text-primary)] mt-8">6. Data retention and deletion</h2>
      <p>
        Because your data is stored on your device, you delete it by deleting it there: use the in-app reset and
        delete options, or uninstall the app. We retain nothing about you on our side to delete. The encrypted
        message blobs temporarily held by our relay for offline delivery are automatically discarded. The one
        thing nobody can delete is the public blockchain itself: confirmed transactions are permanent by design.
      </p>

      <h2 className="text-[var(--color-text-primary)] mt-8">7. Security</h2>
      <p>
        Keys are encrypted at rest using Android Keystore; sensitive screens are protected against screenshots
        and screen recording; the app can be locked behind your device biometrics. Because Zapp is non-custodial,
        your recovery phrase is the only backup of your funds — we cannot recover it for you, so store it safely
        offline.
      </p>

      <h2 className="text-[var(--color-text-primary)] mt-8">8. Children</h2>
      <p>Zapp is a financial application and is not directed at or intended for anyone under the age of 18.</p>

      <h2 className="text-[var(--color-text-primary)] mt-8">9. Changes to this policy</h2>
      <p>
        We will update this page when our practices change and revise the &quot;Last updated&quot; date above.
        Material changes will be called out in the app&apos;s release notes.
      </p>

      <h2 className="text-[var(--color-text-primary)] mt-8">10. Contact</h2>
      <p>
        Questions or requests about privacy:{" "}
        <a href={`mailto:${email}`} className="text-primary hover:underline">
          {email}
        </a>
        .
      </p>
    </>
  );
}
