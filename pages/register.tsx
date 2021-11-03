import { css } from '@emotion/react'; // emotion not working
import { useState } from 'react';

const formStyles = css`
  label {
    display: block;
  }
`;

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <h1> Register </h1>
      <form
        css={formStyles}
        onSubmit={async (event) => {
          event.preventDefault(); // will prevent the default behavior on submit, instead the following code lines will be executed
          await fetch('/api/register', {
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
    </div>
  );
}
