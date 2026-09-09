import { useFormik } from 'formik';
import * as Yup from 'yup';

function LoginForm() {
  const validationSchema = Yup.object({
    email: Yup
      .string()
      .email('Будь ласка, введіть дійсну електронну адресу')
      .required('Email обов’язковий'),

    password: Yup
      .string()
      .min(8, 'Пароль повинен містити щонайменше 8 символів')
      .required('Пароль обов’язковий')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    validationSchema,

    onSubmit: (values) => {
      console.log('Форма успішно відправлена:', values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
        <label>Електронна адреса</label>
      <input
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Електронна адреса"
      />

      {formik.touched.email && formik.errors.email && (
        <p>{formik.errors.email}</p>
      )}
    <label>Пароль</label>
      <input
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Пароль"
      />

      {formik.touched.password && formik.errors.password && (
        <p>{formik.errors.password}</p>
      )}

      <button type="submit">Увійти</button>
    </form>
  );
}

export default LoginForm;