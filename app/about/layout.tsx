import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autobikes.ID - Find Your Dream Bikes | About",
  description: "Page for see About us",
};

export default function MotorcycleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
