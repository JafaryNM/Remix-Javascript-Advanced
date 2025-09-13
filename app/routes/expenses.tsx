import { Outlet } from "react-router";

export default function ExpensesLayout() {
  return (
    <main>
      <p>Shared Elements</p>
      <Outlet />
    </main>
  );
}
