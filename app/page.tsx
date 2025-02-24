import BudgetStatus from "@/components/BudgetStatus";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <main className="p-6">
      <Dashboard />
      <BudgetStatus />
    </main>
  );
}
