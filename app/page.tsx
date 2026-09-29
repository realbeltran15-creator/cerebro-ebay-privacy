export default function Home() {
  return (
    <main
      style={{
        maxWidth: "850px",
        margin: "0 auto",
        padding: "48px 24px",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.7,
        color: "#222",
      }}
    >
      <h1>Privacy Policy — Cerebro eBay</h1>
      <p><strong>Last updated:</strong> September 29, 2026</p>

      <p>
        Cerebro eBay is a private integration designed to connect an authorized
        eBay account with AI-assisted tools and automation services at the
        direction of the account owner.
      </p>

      <h2>Information We Access</h2>
      <p>
        The application may access eBay account information and other data made
        available through the eBay APIs, only to the extent authorized by the
        user through eBay OAuth permissions.
      </p>

      <h2>How Information Is Used</h2>
      <p>
        Information obtained through eBay is used solely to provide
        user-requested functionality, such as retrieving account information,
        managing listings and performing authorized eBay-related operations.
      </p>

      <h2>Data Sharing</h2>
      <p>
        eBay data is not sold. Data is only processed by services necessary to
        operate the integration and perform actions explicitly requested or
        authorized by the account owner.
      </p>

      <h2>Data Security</h2>
      <p>
        Authentication credentials, access tokens and other sensitive
        information are handled using appropriate security measures and are not
        intentionally exposed publicly.
      </p>

      <h2>Data Retention and Deletion</h2>
      <p>
        Data is retained only when necessary to operate the integration.
        Authorization can be revoked through the relevant eBay account
        settings. Stored data associated with the integration may also be
        deleted when it is no longer required or when deletion is requested.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        This integration may interact with eBay and authorized AI or automation
        services. Use of those services is also subject to their respective
        privacy policies and terms.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        This Privacy Policy may be updated when the functionality or data
        processing practices of Cerebro eBay change.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or requests concerning privacy or deletion of data can be
        directed to the operator of Cerebro eBay.
      </p>
    </main>
  );
}
