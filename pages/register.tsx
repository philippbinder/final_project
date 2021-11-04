import { css } from '@emotion/react'; // emotion not working
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
  const [errors, setErrors] = useState<Errors>([]); // um das array zu verändern mit .map und das Fehlermeldungsdiv anzuzeigen
  return (
    <div>
      <h1> Register </h1>
      <form
        css={formStyles}
        onSubmit={async (event) => {
          event.preventDefault(); // will prevent the default behavior on submit, instead the following code lines will be executed
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
          const registerJson =
            (await registerResponse.json()) as RegisterResponse;

          if ('errors' in registerJson) {
            setErrors(registerJson.errors);
            return;
          }
          // RegisterRespone is from register.ts
          console.log(registerJson.user);
          console.log(
            'Submitting username:',
            username,
            'and password:',
            password,
          );
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
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </label>
        <button> Submit </button>
      </form>
      <div css={errorStyles}>
        {errors.map((error) => (
          <div key={`error-${error.message}`}> {error.message}</div>
        ))}
      </div>
    </div>
  );
}
