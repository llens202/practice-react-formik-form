import { useState } from 'react'; // Імпортуємо useState для зберігання значень і помилок

function LoginForm() {

  const [email, setEmail] = useState(''); // email — значення поля, setEmail — змінює його
  const [password, setPassword] = useState(''); // password — значення пароля, setPassword — змінює його
  const [emailError, setEmailError] = useState(''); // Тут зберігається помилка email
  const [passwordError, setPasswordError] = useState(''); // Тут зберігається помилка password

  const handleSubmit = (e) => { // Функція спрацьовує при submit форми
    e.preventDefault(); // Забороняємо стандартне перезавантаження сторінки

    if (!email.includes('@')) { // Якщо email НЕ містить символ @
      setEmailError('Будь ласка, введіть дійсну електронну адресу.'); // Записуємо текст помилки
    } else {
      setEmailError(''); // Якщо email правильний — очищаємо помилку
    }

    if (password.length < 8) { // Якщо пароль коротший за 8 символів
      setPasswordError('Пароль повинен містити щонайменше 8 символів.'); // Записуємо помилку
    } else {
      setPasswordError(''); // Якщо пароль правильний — очищаємо помилку
    }

    if (email.includes('@') && password.length >= 8) { // Якщо ОБИДВІ перевірки успішні
      console.log('Форма успішно відправлена:', { email, password }); // Показуємо дані в консолі
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* При submit запускаємо handleSubmit */}

      <input
        type="email"
        value={email} // Значення input береться зі state email
        onChange={(e) => setEmail(e.target.value)} // При введенні записуємо нове значення в email
        placeholder="Електронна адреса"
      />

      {emailError && <p>{emailError}</p>} {/* Якщо є помилка email — показуємо її */}

      <input
        type="password"
        value={password} // Значення input береться зі state password
        onChange={(e) => setPassword(e.target.value)} // При введенні оновлюємо password
        placeholder="Пароль"
      />

      {passwordError && <p>{passwordError}</p>} {/* Якщо є помилка password — показуємо її */}

      <button type="submit">Увійти</button> {/* Кнопка запускає submit форми */}

    </form>
  );
}

export default LoginForm; // Дозволяємо імпортувати компонент в інших файлах