import '../styles/globals.css';
import { useEffect, useState } from 'react';

// delete since not used in the programm and not finished

function MyApp({ Component, pageProps }) {
  const [userName, setUserName] = useState();

  useEffect(() => {
    async function callProfile() {
      const response = await fetch('api/profile');
      const profile = await response.json();
      setUserName(profile.user.username);
    }
    callProfile();
  }, []);
}

export default MyApp;
