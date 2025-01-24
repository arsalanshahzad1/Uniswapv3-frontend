import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM from 'react-dom/client' in React 18.
import QRCode from "react-qr-code";

const QrCode = () => {
  const value = "hey";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "110px",
        width: '110px',
        background: "black",
        padding: "2px",
        borderRadius: '15px',
        paddingTop: "5px",
      }}
    >
      <div style={{ height: "auto", margin: "0 auto", maxWidth: 100, width: "200px" }}>
        <QRCode
          size={256}
          style={{ height: "100px", maxWidth: "100%", width: "100px" }}
          value={value}
          viewBox={`0 0 256 256`}
          fgColor="yellow"
          bgColor="FFD700"
        />
      </div>
    </div>
  );
};

// Create a root and render the App component directly.
// ReactDOM.createRoot(document.getElementById("Container")).render(<QrCode />);
export default QrCode
