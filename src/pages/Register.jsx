import RegisterForm from '../components/RegisterForm';

export default function Register() {
  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <RegisterForm />
      <p>
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
}
