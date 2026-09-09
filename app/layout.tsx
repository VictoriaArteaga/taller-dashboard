import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flex Dashboard",
  description: "A sales and performance dashboard.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
