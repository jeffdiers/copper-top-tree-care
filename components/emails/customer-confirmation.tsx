import { siteConfig } from "@/lib/siteConfig";

interface CustomerConfirmationEmailProps {
  firstName: string;
  serviceType: string;
}

export function CustomerConfirmationEmail({
  firstName,
  serviceType,
}: CustomerConfirmationEmailProps) {
  return (
    <div style={container}>
      <div style={header}>
        <h1 style={logo}>{siteConfig.name}</h1>
      </div>

      <div style={content}>
        <h2 style={heading}>Thank You for Contacting Us</h2>

        <p style={paragraph}>Dear {firstName},</p>

        <p style={paragraph}>
          Thank you for reaching out to Copper Top Tree Services. We have
          received your request for a quote regarding{" "}
          <strong>{serviceType}</strong> services.
        </p>

        <p style={paragraph}>
          Our team is reviewing your information and will contact you shortly to
          discuss your needs and provide you with a detailed quote.
        </p>

        <p style={paragraph}>
          If you have any immediate questions or need emergency service, please
          don't hesitate to call us at{" "}
          <strong>{siteConfig.phoneFormatted}</strong>.
        </p>

        <div style={callToAction}>
          <a href="https://coppertoptreecare.com/services" style={button}>
            Learn More About Our Services
          </a>
        </div>
      </div>

      <div style={footer}>
        <p style={footerText}>
          © {new Date().getFullYear()} {siteConfig.name} LLC. All rights
          reserved.
        </p>
        <p style={footerText}>
          {siteConfig.address.city}, {siteConfig.address.state}
        </p>
        <div style={socialLinks}>
          <a href={siteConfig.social.facebook} style={socialLink}>
            Facebook
          </a>
          <a href={siteConfig.social.instagram} style={socialLink}>
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

// Styles
const container = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  color: "#333333",
};

const header = {
  backgroundColor: "#15803d", // green-700
  padding: "20px",
  textAlign: "center" as const,
};

const logo = {
  color: "#ffffff",
  fontSize: "24px",
  margin: "0",
};

const content = {
  padding: "30px 20px",
};

const heading = {
  color: "#15803d", // green-700
  fontSize: "20px",
  marginBottom: "20px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "0 0 20px",
};

const callToAction = {
  margin: "30px 0",
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#15803d", // green-700
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "4px",
  textDecoration: "none",
  fontWeight: "bold",
  display: "inline-block",
};

const footer = {
  backgroundColor: "#f0fdf4", // green-50
  padding: "20px",
  textAlign: "center" as const,
};

const footerText = {
  fontSize: "14px",
  color: "#666666",
  margin: "5px 0",
};

const socialLinks = {
  margin: "15px 0 0",
};

const socialLink = {
  color: "#15803d", // green-700
  textDecoration: "none",
  margin: "0 10px",
  fontSize: "14px",
};
