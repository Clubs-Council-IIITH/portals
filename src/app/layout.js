import "./globals.css";
import { IntranetAccessProvider } from "@/providers/IntranetAccessProvider";

export const metadata = {
  title: "Portals@IIITH",
  description: "List of Portals at IIIT Hyderabad",
  authors: [
    { name: "Bhav Beri <bhav.beri@research.iiit.ac.in>" },
    { name: "Shreyansh Bhanu <shreyansh.bhanu@research.iiit.ac.in>" },
  ],
  creator: "Bhav Beri",
  publisher: "Student WebAdmins Team, IIIT Hyderabad",
  keywords: ["IIIT Hyderabad", "Portals", "Intranet"],
  generator: "Next.js",
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
