export const metadata = {
  title: "Legal & Policies",
  description: "SoulSlates Terms and Conditions, Privacy Policy, Community Guidelines, Data Deletion, and Withdrawal rules.",
}
export default function PoliciesPage() {
  return (
    <main className="py-20 px-4 max-w-4xl mx-auto relative z-10">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/20 blur-[120px] -z-10 rounded-full pointer-events-none"></div>

      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-glow text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          Legal & Policies
        </h1>
        <p className="text-gray-400">Everything you need to know about using SoulSlates.</p>
        
        {/* Optional: Quick jump links for easy navigation */}
        <div className="flex flex-wrap justify-center gap-3 pt-6 text-sm">
          <a href="#terms" className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-colors">Terms</a>
          <a href="#privacy-policy" className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-purple-500/30 text-purple-300 transition-colors">Privacy</a>
          <a href="#data-deletion" className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-pink-500/30 text-pink-300 transition-colors">Data Deletion</a>
          <a href="#community-guidelines" className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-colors">Community</a>
        </div>
      </div>

      <div className="glass-card p-8 md:p-12 space-y-16 text-gray-300 leading-relaxed">
        

        {/* TERMS AND CONDITIONS */}
        <section id="terms" className="space-y-6 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4">Terms and Conditions</h2>
          
          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">1. Acceptance of Terms</h3>
            <p>By accessing or using the SoulSlates mobile application, website, or related services ("Service"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use the Service. SoulSlates reserves the right to modify these terms at any time. Continued use of the Service after updates constitutes acceptance of the revised terms.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">2. Description of Service</h3>
            <p className="mb-2">SoulSlates is a social media platform that allows users to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2 text-gray-400">
              <li>Upload and share short-form videos and images</li>
              <li>Discover content through a personalized feed</li>
              <li>Interact with other users through likes, comments, and shares</li>
              <li>Participate in communities and private groups</li>
            </ul>
            <p>Some content may be publicly accessible on the web, while other content is restricted to in-app viewing depending on the creator's visibility settings.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">3. User Accounts</h3>
            <p className="mb-2">To access certain features, users must create an account. Users agree to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2 text-gray-400">
              <li>Provide accurate information</li>
              <li>Maintain the security of their account</li>
              <li>Be responsible for all activity under their account</li>
            </ul>
            <p>SoulSlates reserves the right to suspend or terminate accounts that violate these terms.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">4. Content Visibility</h3>
            <p className="mb-2">SoulSlates supports multiple visibility levels for user content:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2 text-gray-400">
              <li><strong>Public Web:</strong> Accessible publicly and may appear on shareable web pages</li>
              <li><strong>Public App:</strong> Visible only within the SoulSlates application</li>
              <li><strong>Group:</strong> Visible only to members of a specific group</li>
              <li><strong>Private:</strong> Visible only to the content owner</li>
            </ul>
            <p>Users are responsible for selecting appropriate visibility settings when posting content.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">5. User Content</h3>
            <p className="mb-2">Users retain ownership of the content they upload. By posting content on SoulSlates, users grant SoulSlates a non-exclusive, worldwide, royalty-free license to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2 text-gray-400">
              <li>Host and store the content</li>
              <li>Display the content within the platform</li>
              <li>Distribute the content based on platform features such as feeds and recommendations</li>
            </ul>
            <p>This license ends when the content is deleted, except where copies remain for backup or legal purposes.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">6. Prohibited Content & Fraud Policy</h3>
            <p className="mb-2">Users may not upload or share content that:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2 text-gray-400">
              <li>Violates copyright or intellectual property rights</li>
              <li>Contains illegal material</li>
              <li>Promotes violence, harassment, or hate</li>
              <li>Contains spam, scams, or deceptive practices</li>
              <li>Infringes on the privacy of others</li>
            </ul>
            <p className="mt-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-200">
              <strong>Fraud Policy:</strong> SoulSlates reserves the right to permanently suspend accounts and forfeit all accumulated earnings if artificial engagement, bot activity, view-farming, or fraudulent referrals are detected.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">7. Advertisements, Promotions & Referrals</h3>
            <p className="mb-2">SoulSlates may display advertisements within the application. Users may voluntarily view ads to receive rewards.</p>
            <p><strong>Referral Program:</strong> SoulSlates offers a "Refer & Earn" program. To prevent fraud, referral bonuses are strictly contingent upon the referred user registering with a completely unique Email address, Phone number, and Device ID. SoulSlates reserves the right to withhold referral payouts or suspend accounts if automated scripts, emulators, or duplicate devices are detected attempting to manipulate the referral system.</p>
          </div>

          {/* NEW KYC & TAX SECTION */}
          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">8. Rewards, Earnings, and Withdrawals</h3>
            <p className="mb-3">SoulSlates allows users to earn Coins through engagement, streaks, and leaderboards, which can be withdrawn for real currency.</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>
                <strong className="text-white">Withdrawal Eligibility:</strong> To be eligible for a withdrawal, a user must accumulate a minimum balance of <strong>500 Coins (₹500)</strong> AND have logged at least <strong>7 days of activity</strong> on the SoulSlates platform.
              </li>
              <li>
                <strong className="text-white">KYC Verification:</strong> Users must complete identity verification (KYC), which requires submitting a valid <strong>PAN</strong> and completing <strong>UPI verification</strong>, before any withdrawal requests are processed.
              </li>
              <li>
                <strong className="text-white">Tax Declaration:</strong> Users are solely responsible for declaring income earned through SoulSlates rewards under applicable tax laws. Indian law requires Tax Deducted at Source (TDS) in some cases; SoulSlates reserves the right to deduct applicable TDS from your withdrawals as required by the Government of India.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">9. Content Moderation</h3>
            <p>SoulSlates may review or moderate content to maintain community standards. Some content may undergo limited distribution or algorithmic testing before wider visibility. SoulSlates reserves the right to remove or restrict content at its discretion.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">10. Termination</h3>
            <p>SoulSlates may suspend or terminate access to the Service if users violate these terms or applicable laws. Users may stop using the Service at any time.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">11. Limitation of Liability</h3>
            <p>SoulSlates provides the Service "as is" and makes no guarantees regarding availability or uninterrupted access. To the maximum extent permitted by law, SoulSlates shall not be liable for indirect or consequential damages arising from use of the Service.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">12. Governing Law</h3>
            <p>These Terms are governed by the laws applicable in the jurisdiction where SoulSlates operates.</p>
          </div>
        </section>

        {/* PRIVACY POLICY */}
        {/* This ID allows linking directly via /policies#privacy-policy */}
        <section id="privacy-policy" className="space-y-6 pt-10 border-t border-white/10 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4">Privacy Policy</h2>
          
          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">1. Introduction</h3>
            <p>SoulSlates respects your privacy and is committed to protecting personal data. This Privacy Policy explains how information is collected, used, and protected when you use the SoulSlates platform.</p>
          </div>

          {/* Update Section 2 & 3 of Privacy Policy */}
          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">2. Information We Collect</h3>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li><strong>Account Information:</strong> Username, Email address, Phone number, and Profile information.</li>
              <li><strong>Device & Verification Data:</strong> Hardware model, operating system, unique device identifiers (Device IDs), and mobile network information. <em>(Note: Device IDs, emails, and phone numbers are specifically collected and cross-referenced to verify unique users for our Referral Program and prevent fraud).</em></li>
              <li><strong>Usage Data:</strong> Content interactions, Watch time, and App activity.</li>
              <li><strong>Uploaded Content:</strong> Videos, images, captions, and other media.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">3. How We Use Information</h3>
            <p className="mb-2">Information may be used to:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-400">
              <li>Provide and improve the Service</li>
              <li>Personalize content feeds and recommend relevant content</li>
              <li><strong>Verify identity and device uniqueness for promotional payouts (e.g., Refer & Earn bonuses)</strong></li>
              <li>Prevent abuse, fraud, or spam</li>
              <li>Deliver advertisements</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">4. Content Visibility and Sharing</h3>
            <p>Users control how their content is shared. Some posts may be publicly accessible if the creator enables web sharing. Other posts may remain accessible only within the app. Public web posts may be viewable by anyone with the link.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">5. Data Security</h3>
            <p>SoulSlates uses reasonable security measures to protect user data. However, no internet service can guarantee complete security.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">6. Data Retention</h3>
            <p>User data may be retained while accounts remain active and for a limited time afterward for operational or legal purposes.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">7. Third-Party Services</h3>
            <p>SoulSlates may use third-party services such as cloud infrastructure, analytics providers, and advertising networks. These providers may process data in accordance with their own privacy policies.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">8. Children's Privacy</h3>
            <p>SoulSlates is not intended for children below the minimum age required by applicable laws. If we become aware that data from a child has been collected improperly, it will be removed.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">9. Changes to This Policy</h3>
            <p>SoulSlates may update this Privacy Policy periodically. Users will be notified of significant changes through the app or website.</p>
          </div>
        </section>

        {/* COPYRIGHT POLICY */}
        <section id="copyright" className="space-y-6 pt-10 border-t border-white/10 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4">Copyright Policy</h2>
          
          <div>
            <h3 className="text-xl font-bold text-pink-300 mb-2">1. Ownership</h3>
            <p>Users retain ownership of the content they create and upload. However, users must ensure that they have the rights to any media, music, or materials used in their content.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-pink-300 mb-2">2. Copyright Infringement</h3>
            <p className="mb-2">SoulSlates respects intellectual property rights and responds to valid copyright complaints. If you believe content on SoulSlates infringes your copyright, you may submit a request including:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-400">
              <li>Identification of the copyrighted work</li>
              <li>URL of the infringing content</li>
              <li>Contact information</li>
              <li>A statement confirming good faith belief of infringement</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-pink-300 mb-2">3. Content Removal</h3>
            <p className="mb-2">Upon receiving a valid complaint, SoulSlates may:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-400">
              <li>Remove the infringing content</li>
              <li>Notify the user who uploaded the content</li>
              <li>Restrict or suspend accounts that repeatedly violate copyright laws</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-pink-300 mb-2">4. Counter-Notice</h3>
            <p>Users who believe their content was removed incorrectly may submit a counter-notice. SoulSlates may restore the content if the dispute is resolved.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-pink-300 mb-2">5. Repeat Infringers</h3>
            <p>Accounts that repeatedly violate copyright laws may be permanently suspended.</p>
          </div>
        </section>

        {/* CONTENT MODERATION POLICY */}
        <section id="moderation" className="space-y-6 pt-10 border-t border-white/10 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4">Content Moderation Policy</h2>
          <p>SoulSlates is committed to maintaining a safe and respectful environment for all users.</p>

          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">1. Moderation Methods</h3>
            <p className="mb-2">Content on SoulSlates may be moderated using a combination of:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2 text-gray-400">
              <li>Automated detection systems</li>
              <li>Algorithmic content review</li>
              <li>User reporting tools</li>
              <li>Human moderation teams</li>
            </ul>
            <p>Some newly uploaded content may initially be shown to a limited audience to evaluate engagement and potential policy violations before wider distribution.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">2. Content Removal</h3>
            <p className="mb-2">SoulSlates may remove or restrict content that violates platform rules, including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2 text-gray-400">
              <li>Illegal activities</li>
              <li>Harassment or bullying</li>
              <li>Hate speech</li>
              <li>Explicit or adult content not permitted by platform policies</li>
              <li>Copyright violations</li>
              <li>Spam or misleading content</li>
            </ul>
            <p>SoulSlates reserves the right to remove content or suspend accounts at its discretion.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">3. User Reporting</h3>
            <p>Users may report content they believe violates platform rules. Reported content may be reviewed and appropriate action may be taken.</p>
          </div>
        </section>

        {/* DMCA SAFE HARBOR POLICY */}
        <section id="dmca" className="space-y-6 pt-10 border-t border-white/10 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4">DMCA Safe Harbor Policy</h2>
          <p>SoulSlates complies with applicable copyright laws and responds to valid Digital Millennium Copyright Act (DMCA) notices.</p>

          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">1. Filing a DMCA Notice</h3>
            <p className="mb-2">If you believe your copyrighted work has been used on SoulSlates without permission, you may submit a DMCA notice including:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2 text-gray-400">
              <li>Identification of the copyrighted work</li>
              <li>Identification of the allegedly infringing content</li>
              <li>A statement of good faith belief that the use is not authorized</li>
              <li>Contact information of the complainant</li>
            </ul>
            <p>Upon receipt of a valid notice, SoulSlates may remove or disable access to the content.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">2. Counter Notification</h3>
            <p>If you believe content was removed in error, you may submit a counter-notice. SoulSlates may restore the content if the dispute is resolved.</p>
          </div>
        </section>

        {/* USER DATA DELETION POLICY */}
        {/* Play Store requires this specific link often: /policies#data-deletion */}
        <section id="data-deletion" className="space-y-6 pt-10 border-t border-white/10 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4">User Data Deletion Policy</h2>
          <p>Users have the right to request deletion of their personal data.</p>

          <div>
            <h3 className="text-xl font-bold text-pink-300 mb-2">1. Account Deletion</h3>
            <p className="mb-2">Users may delete their account through the application settings where available. Deleting an account may result in removal of:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-400">
              <li>Profile information</li>
              <li>Uploaded content</li>
              <li>Associated activity history</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-pink-300 mb-2">2. Data Retention After Deletion</h3>
            <p className="mb-2">Some information may be retained for a limited period for:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2 text-gray-400">
              <li>Security and fraud prevention</li>
              <li>Legal compliance</li>
              <li>Backup systems</li>
            </ul>
            <p>Such data will be deleted once retention is no longer necessary.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-pink-300 mb-2">3. Deletion Requests</h3>
            <p>Users may also request data deletion by contacting the SoulSlates support team through the official support channels.</p>
          </div>
        </section>

        {/* ADVERTISING AND MONETIZATION DISCLOSURE */}
        <section id="advertising" className="space-y-6 pt-10 border-t border-white/10 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4">Advertising and Monetization Disclosure</h2>
          <p>SoulSlates may display advertisements and sponsored content within the platform.</p>

          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">1. In‑Feed Advertisements</h3>
            <p>Advertisements may appear within the content feed and may resemble regular posts but will be labeled as "Sponsored" or "Ad".</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">2. Rewarded Advertisements</h3>
            <p>Users may optionally watch advertisements in exchange for platform rewards such as coins, boosts, or other in‑app benefits. Participation in rewarded advertisements is voluntary.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">3. Creator Promotions</h3>
            <p>Creators may choose to promote their own content through available promotional tools. Promoted content may receive increased visibility within the platform.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">4. Third‑Party Advertising</h3>
            <p>SoulSlates may work with advertising partners to deliver relevant advertisements. These partners may use limited information such as device or usage data to deliver ads.</p>
          </div>
        </section>

        {/* COMMUNITY GUIDELINES */}
        <section id="community-guidelines" className="space-y-6 pt-10 border-t border-white/10 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4">Community Guidelines</h2>
          <p>SoulSlates aims to foster a positive and creative community. Users are expected to follow these guidelines when creating and sharing content.</p>

          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">1. Be Respectful</h3>
            <p>Users must not engage in harassment, bullying, or abusive behavior.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">2. No Hate Speech</h3>
            <p>Content that promotes hatred or discrimination against individuals or groups based on protected characteristics is not allowed.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">3. No Illegal Content</h3>
            <p>Content that promotes illegal activities or violates laws is prohibited.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">4. Protect Privacy</h3>
            <p>Users must not share private or confidential information about others without permission.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">5. Authentic Content</h3>
            <p>Spam, scams, impersonation, or misleading content is not permitted.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">6. Respect Intellectual Property</h3>
            <p>Users must only upload content that they have rights to use.</p>
          </div>

          <p className="text-gray-400 italic pt-4">Violations of these guidelines may result in content removal, account restrictions, or permanent suspension.</p>
        </section>

      </div>
    </main>
  )
}