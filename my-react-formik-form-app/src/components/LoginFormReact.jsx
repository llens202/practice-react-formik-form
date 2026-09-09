import { useState } from 'react';


function LoginForm () {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
        setEmailError('Будь ласка, введіть дійсну електронну адресу.');
    } else {
        setEmailError('');
    }

    if (password.length < 8) {
        setPasswordError('Пароль повинен містити щонайменше 8 символів.');
    } else {
        setPasswordError('');
    }

    if (email.includes('@') && password.length >= 8) {
        console.log('Форма успішно відправлена:', { email, password });
    }
}


    return (
        <form onSubmit={handleSubmit}>

            <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Електронна адреса" />
            {emailError && <p>{emailError}</p>}

            <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль" />
            {passwordError && <p>{passwordError}</p>}

            <button type="submit">Увійти</button>

        </form>
    );
}

export default LoginForm;