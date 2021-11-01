import { useState } from 'react';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <h1> Register </h1>
      <input
        value={username}
        onChange={(event) => setUsername(event.currentTarget.value)}
      />
      <input
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
    </div>
  );
}
