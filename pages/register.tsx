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
        onSubmit={(event) => {
          event.preventDefault(); // will prevent the default behavior on submit, instead the following code lines will be executed
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
