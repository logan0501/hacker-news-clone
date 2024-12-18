import Navbar from "./components/Navbar/Navbar";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
