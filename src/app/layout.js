import "./globals.css";
import { IntranetAccessProvider } from "@/providers/IntranetAccessProvider";

export const metadata = {
  title: "Portals@IIITH",
  description: "List of Portals at IIIT Hyderabad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <IntranetAccessProvider>{children}</IntranetAccessProvider>
      </body>
    </html>
  );
}
