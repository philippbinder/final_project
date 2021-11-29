// import '../styles/globals.css';
// import { useEffect, useState } from 'react';

// // delete since not used in the programm and not finished

// function MyApp({ Component, pageProps }) {
//   const [userName, setUserName] = useState();

//   useEffect(() => {
//     async function callProfile() {
//       const response = await fetch('api/profile');
//       const profile = await response.json();
//       setUserName(profile.user.username);
//     }
//     callProfile();
//   }, []);
// }

// export default MyApp;

import '../styles/globals.css';

// import { useCallback, useEffect, useState } from 'react';

// import { useState } from 'react';
// import { getCurrentUserStatus } from '../util/database';

function MyApp({ Component, pageProps }) {
  // const [userStatus, setUserStatus] = useState();
  // const [currentUserStatus, setCurrentUserStatur] = useState();
  return <Component {...pageProps} />;
}
export default MyApp;
