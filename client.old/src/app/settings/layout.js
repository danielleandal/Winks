// app/settings/layout.js
"use client.old";
import Navbar from "../../components/Navbar";
import ContentHeader from "../../components/ContentHeader";
import Header from "../../components/Header";
import { usePathname } from "next/navigation";
import "../../styles/globals.css";

export default function SettingsLayout({ children }) {
  const pathname = usePathname();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      {/* Left Column */}
      <div
        style={{
          width: "280px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRight: "1px solid #ccc",
        }}
      >
        <Header />
        <Navbar />
      </div>

      {/* Right Column */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ContentHeader />
        <div
          style={{
            flex: 1,
            overflow: "auto",
            padding: "20px",
            borderSizing: "border-box",
            borderLeft: "1px solid #00FFFF",
            borderTop: "1px solid #00FFFF",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
