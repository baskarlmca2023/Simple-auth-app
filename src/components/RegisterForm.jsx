import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const registerSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Min 6 characters').required('Password is required'),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = data => {
    console.log('Register:', data);
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="Email" {...register('email')} />
      <p style={{ color: 'red', fontSize: 14 }}>{errors.email?.message}</p>

      <input type="password" placeholder="Password" {...register('password')} />
      <p style={{ color: 'red', fontSize: 14 }}>{errors.password?.message}</p>

      <button type="submit">Register</button>
    </form>
  );
}
