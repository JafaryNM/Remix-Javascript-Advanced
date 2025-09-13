import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("princing", "routes/princing.tsx"),
  route("auth", "routes/auth.tsx"),
  route("expenses", "routes/expenses.tsx"),
  route("expenses/raw", "routes/expenses.raw.tsx"),
  route("expenses/add", "routes/expenses.add.tsx"),
  route("expenses/analysis", "routes/expenses.analysis.tsx"),
  route(":id", "routes/expenses.$id.tsx"),
] satisfies RouteConfig;
