import { Formik, Form, Field, ErrorMessage } from 'formik'; // Імпортуємо готові компоненти Formik
import * as Yup from 'yup'; // Імпортуємо Yup для валідації

function FormikComponent() { // Створюємо React-компонент

  const validationSchema = Yup.object({ // Створюємо схему правил валідації

    email: Yup // Правила для email
      .string() // Email має бути рядком
      .email('Будь ласка, введіть дійсну електронну адресу') // Перевіряємо формат email
      .required('Email обов’язковий'), // Поле email обов'язкове

    password: Yup // Правила для password
      .string() // Пароль має бути рядком
      .min(8, 'Пароль повинен містити щонайменше 8 символів') // Мінімум 8 символів
      .required('Пароль обов’язковий') // Поле password обов'язкове
  });

  return ( // Повертаємо JSX

    <Formik
      validationSchema={validationSchema} // Передаємо Yup-схему у Formik

      initialValues={{ // Початкові значення полів
        email: '', // Email на старті порожній
        password: '' // Password на старті порожній
      }}

      onSubmit={(values) => { // Виконується, якщо форма пройшла валідацію
        console.log(values); // Виводимо дані форми в консоль
      }}
    >

      <Form>
        {/* Form — готова форма Formik. Вона сама підключена до submit */}

        <Field
          type="email" // Тип поля email
          name="email" // Пов'язуємо поле з email у Formik
        />

        {/* Показуємо помилку для email */}
        <ErrorMessage
          name="email"
          component="p"
        />

        <Field
          type="password" // Тип password приховує введені символи
          name="password" // Пов'язуємо поле з password у Formik
        />

        {/* Показуємо помилку для password */}
        <ErrorMessage
          name="password"
          component="p"
        />

        {/* Кнопка відправляє форму */}
        <button type="submit">
          Увійти
        </button>

      </Form>

    </Formik>
  );
}

export default FormikComponent; // Дозволяємо імпортувати компонент в інших файлах