import { css } from '@emotion/react'; // emotion not working
// import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Errors } from '../util/types';
import { RegisterResponse } from './api/register';

const formStyles = css`
  label {
    display: block;
  }
`;

const errorStyles = css`
  color: red;
`;

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // hides or shows password
  const togglePassword = () => {
    setShowPassword(!showPassword);
  }; // creates a toggle that revereses the boolean state of the showPassword state
  const [errors, setErrors] = useState<Errors>([]); // um das array zu verändern mit .map und das Fehlermeldungsdiv anzuzeigen
  const router = useRouter(); // under useRouter and router.push https://nextjs.org/docs/api-reference/next/router
  return (
    <div>
      <h1> Register </h1>
      <form
        css={formStyles}
        onSubmit={async (event) => {
          event.preventDefault();
          console.log(username, password);
          // will prevent the default behavior on submit, instead the following code lines will be executed
          const registerResponse = await fetch('/api/register', {
            method: 'POST', // weil ich Information senden will und etwas neues kreieren möchte / http methods - POST is to create, GET is to get some information, PUT is to update some information and DELETE is to delete information
            headers: {
              'Content-Type': 'application/json', // tells the program that I am sending JSON data
            },
            body: JSON.stringify({
              // body needs to be send in JSON
              // die data die ich passen will, also an register.ts, schreibe ich den body - "this body inside the fetch turns into req.body in reigsterHandler von register.ts"
              username: username,
              password: password,
            }),
          });
          console.log(registerResponse);

          const registerJson =
            (await registerResponse.json()) as RegisterResponse;

          if ('errors' in registerJson) {
            setErrors(registerJson.errors);
            return;
          }

          router.push('/village'); // redirects to the village page after registration
          // RegisterRespone is from register.ts

          // console.log(registerJson.user);
          // console.log(
          //   'Submitting username:',
          //   username,
          //   'and password:',
          //   password,
          // );
        }}
      >
        <label>
          Enter your username:{' '}
          <input
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
          />
        </label>
        <label>
          Enter your password:{' '}
          <input
            // type= "password" is html syntax, hides password, is not ts or js
            type={showPassword ? 'text' : 'password'} // shows or hides password based on boolean of useState of showPasword
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          {/* <i type="bi bi-eye-slash" /> */}
        </label>
        <button> Submit </button>
        {/* <button onClick={router.push('/village')}>Submit</button> */}
      </form>
      <button onClick={togglePassword}> Show Password </button>
      <div css={errorStyles}>
        {errors.map((error) => (
          <div key={`error-${error.message}`}> {error.message}</div>
        ))}
      </div>
    </div>
  );
}
