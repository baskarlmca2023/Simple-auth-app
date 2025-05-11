import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    <div className="auth-container">
      <h2>Welcome Back 👋</h2>
      <LoginForm />
      <p>
        Don’t have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}
