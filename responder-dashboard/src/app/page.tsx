import { Header } from "@/components/header";
import { Dashboard } from "./dashboard";

export default function Home() {
  return (
    <>
      <div className="lex flex-col min-h-screen">
        <Header />
        {/* Dashboard fills the remaining space */}
        <div className="h-full flex-1 overflow-hidden">
          <Dashboard />
        </div>
      </div>
    </>
  );
}
