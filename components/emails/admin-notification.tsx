import type { ContactFormData } from "@/app/api/contact/action";

export function AdminNotificationEmail(data: ContactFormData) {
  return (
    <div style={container}>
      <h1 style={heading}>New Quote Request</h1>
      <p style={paragraph}>
        You have received a new quote request for{" "}
        <strong>{data.serviceType}</strong> services.
      </p>

      <div style={section}>
        <h2 style={subheading}>Customer Information</h2>
        <table style={table}>
          <tbody>
            <tr>
              <td style={labelCell}>Name:</td>
              <td style={valueCell}>
                {data.firstName} {data.lastName}
              </td>
            </tr>
            <tr>
              <td style={labelCell}>Email:</td>
              <td style={valueCell}>{data.email}</td>
            </tr>
            <tr>
              <td style={labelCell}>Phone:</td>
              <td style={valueCell}>{data.phone}</td>
            </tr>
            <tr>
              <td style={labelCell}>Address:</td>
              <td style={valueCell}>{data.address}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={section}>
        <h2 style={subheading}>Service Details</h2>
        <table style={table}>
          <tbody>
            <tr>
              <td style={labelCell}>Service Type:</td>
              <td style={valueCell}>{data.serviceType}</td>
            </tr>
            <tr>
              <td style={labelCell}>Meeting Type:</td>
              <td style={valueCell}>{data.meetingType}</td>
            </tr>
            <tr>
              <td style={labelCell}>Message:</td>
              <td style={valueCell}>{data.message || "No message provided"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={footer}>
        <p style={paragraph}>
          Please respond to this customer as soon as possible.
        </p>
      </div>
    </div>
  );
}

// Styles
const container = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  padding: "20px",
  maxWidth: "600px",
  margin: "0 auto",
  color: "#333",
};

const heading = {
  color: "#15803d", // green-700
  fontSize: "24px",
  marginBottom: "20px",
  borderBottom: "1px solid #e5e7eb",
  paddingBottom: "10px",
};

const subheading = {
  color: "#15803d", // green-700
  fontSize: "18px",
  marginBottom: "10px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "0 0 20px",
};

const section = {
  marginBottom: "20px",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
} as const;

const labelCell = {
  padding: "8px 0",
  fontWeight: "bold",
  width: "120px",
  verticalAlign: "top",
};

const valueCell = {
  padding: "8px 0",
  verticalAlign: "top",
};

const footer = {
  marginTop: "30px",
  borderTop: "1px solid #e5e7eb",
  paddingTop: "20px",
};
