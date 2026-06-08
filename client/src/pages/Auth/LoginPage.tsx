import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login("demo-token");
    navigate(ROUTES.ADMIN.DASHBOARD);
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Sign In</button>
      </form>
    </section>
  );
}
