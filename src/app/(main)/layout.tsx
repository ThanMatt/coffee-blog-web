import { Navbar } from "@/components/Navbar";
import {} from "@nextui-org/react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>
        <div className="max-w-5xl w-full items-center justify-between">
          <div className="px-6">{children}</div>
        </div>
      </main>
    </>
  );
}
