import { useFormik } from 'formik'; // Імпортуємо хук Formik для керування формою
import * as Yup from 'yup'; // Імпортуємо Yup для валідації

function LoginForm() {

  const validationSchema = Yup.object({ // Створюємо схему правил валідації

    email: Yup // Правила для поля email
      .string() // Значення має бути рядком
      .email('Будь ласка, введіть дійсну електронну адресу') // Перевірка формату email
      .required('Email обов’язковий'), // Поле не може бути порожнім

    password: Yup // Правила для password
      .string() // Значення має бути рядком
      .min(8, 'Пароль повинен містити щонайменше 8 символів') // Мінімум 8 символів
      .required('Пароль обов’язковий') // Поле обов’язкове
  });

  const formik = useFormik({ // Створюємо Formik і отримуємо інструменти для роботи з формою

    initialValues: { // Початкові значення полів
      email: '', // Спочатку email порожній
      password: '' // Спочатку password порожній
    },

    validationSchema, // Підключаємо Yup-схему до Formik

    onSubmit: (values) => { // Спрацьовує, якщо форма успішно пройшла валідацію
      console.log('Форма успішно відправлена:', values); // values містить email і password
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}> {/* Formik обробляє submit форми */}

      <label>Електронна адреса</label>

      <input
        type="email" // Тип поля email
        name="email" // Formik розуміє, що це поле email
        value={formik.values.email} // Поточне значення береться з Formik
        onChange={formik.handleChange} // Formik стежить за зміною значення
        onBlur={formik.handleBlur} // Formik фіксує, що користувач залишив поле
        placeholder="Електронна адреса"
      />

      {formik.touched.email && formik.errors.email && ( // Якщо поле вже чіпали і є помилка
        <p>{formik.errors.email}</p> // Показуємо текст помилки email
      )}

      <label>Пароль</label>

      <input
        type="password" // Приховує введені символи
        name="password" // Formik розуміє, що це поле password
        value={formik.values.password} // Поточне значення password
        onChange={formik.handleChange} // Оновлює password у Formik
        onBlur={formik.handleBlur} // Позначає поле як touched після виходу з нього
        placeholder="Пароль"
      />

      {formik.touched.password && formik.errors.password && ( // Якщо password чіпали і є помилка
        <p>{formik.errors.password}</p> // Показуємо текст помилки password
      )}

      <button type="submit">Увійти</button> {/* Запускає formik.handleSubmit */}

    </form>
  );
}

export default LoginForm; // Дозволяємо використовувати компонент в інших файлах