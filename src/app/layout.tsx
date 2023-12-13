import type { Metadata } from "next";
import "./globals.css";
import { playfair } from "@/lib/fonts";
import { NextUIProviders } from "@/providers/NextUIprovider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import GhostVerticalText from "@/components/general/GhostVerticalText";
import { NextJSBlob, SaqGreenBlob } from "@/components/general/GlowingBlobs";
import { ModeToggle } from "@/components/general/ThemeToggle";
import { ScrollShadow } from "@nextui-org/react";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Say a Qoute",
  description: "Generated by create next app",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <NextUIProviders>
            {/* <ScrollShadow size={100} className="scroll-mt-16  w-full h-screen"> */}
            <ModeToggle />
            {/* <GhostVerticalText /> */}
            <NextJSBlob />
            <SaqGreenBlob />
            <>
              <Toaster />
              {props.modal}
              {props.children}
            </>
            {/* </ScrollShadow> */}
          </NextUIProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
