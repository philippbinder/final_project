import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
// import { getValidSessionByToken } from '../util/database';
import { Errors } from '../util/types';
import { RegisterResponse } from './api/register';

const mainContainer = css`
  position: absolute;
  width: 100vw;
  height: 100%;
  /* height: 24.7%; */
  /* height: 1080px; */
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 1fr 0.5fr 4fr 0.5fr 1fr;
  grid-row-gap: 5vh;
  text-align: center;
  font-size: 24px;
  letter-spacing: 0.5vw;
  /* justify-content: stretch; */
  /* align-content: stretch; */
  background: linear-gradient(
    180deg,
    rgba(139, 69, 19, 0.74) 0%,
    rgba(139, 69, 19, 0.74) 0.01%,
    rgba(139, 69, 19, 0) 100%
  );
  font-family: MedievalSharp;
  /* font-size: 5vh; */
`;

const navigationStyles = css`
  /* grid-column: 1/4; */
  grid-column: 2/3;
  grid-row: 0/1;
  /* justify-self: stretch; */
  width: 100%;
  /* background-color: linear-gradient(
    rgba(139, 69, 19, 0.2),
    rgba(250, 244, 225, 1)
  ); */
  background: linear-gradient(
    rgba(139, 69, 19, 0.8) 0%,
    rgba(139, 69, 19, 0.74) 1.05%,
    rgba(242, 243, 244, 0.8) 6%,
    rgba(250, 244, 225, 1) 15%
  );
  box-shadow: 0 0 10px #8b0000;
  border-bottom: 3px solid black;
  border-bottom-left-radius: 130px;
  border-bottom-right-radius: 130px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* align-content: space-around; */
`;

const toHomeStyles = css`
  /* align-self: center;
  justify-content: center; */
  font-family: MedievalSharp;
  font-size: 20px;
  letter-spacing: 0.2vw;
  padding: 0px 2.8px;
  background-color: rgba(250, 244, 225, 0.8);
  /* background-color: #faf4e1; */
  /* border-radius: 20px; */
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 2.5px;
  border-top-left-radius: 2.5px;
  /* justify-self: center; */
  &:hover {
    color: #242124;
    text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513,
      /* border: 2px solid black; */ 0 0 1px #8b4513;
    /* color: #a52a2a; */
    /* border-color: #8b4513; */
  }
`;

const toLoginStyles = css`
  /* align-self: center;
  justify-content: center; */
  font-family: MedievalSharp;
  font-size: 20px;
  letter-spacing: 0.2vw;
  padding-left: 2.8px;
  background-color: rgba(250, 244, 225, 0.8);
  /* background-color: #faf4e1; */
  /* border-radius: 20px; */
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 2.5px;
  border-top-left-radius: 2.5px;
  /* justify-self: center; */
  &:hover {
    color: #242124;
    text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513,
      /* border: 2px solid black; */ 0 0 1px #8b4513;
    /* color: #a52a2a; */
    /* border-color: #8b4513; */
  }
`;

const toMyLinkedInStyles = css`
  /* align-self: center;
  justify-content: center; */
  font-family: MedievalSharp;
  font-size: 20px;
  letter-spacing: 0.2vw;
  padding-left: 2.8px;
  background-color: rgba(250, 244, 225, 0.55);
  /* background-color: #faf4e1; */
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 2.5px;
  border-top-left-radius: 2.5px;
  /* justify-self: center; */
  &:hover {
    color: #242124;
    text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513,
      /* border: 2px solid black; */ 0 0 1px #8b4513;
    /* color: #a52a2a; */
    /* border-color: #8b4513; */
  }
`;

const toArtistCreditStyles = css`
  /* align-self: center;
  justify-content: center; */
  font-family: MedievalSharp;
  font-size: 20px;
  letter-spacing: 0.2vw;
  padding: 0px 2.8px;
  background-color: rgba(250, 244, 225, 0.8);
  /* background-color: #faf4e1; */
  /* border-radius: 20px; */
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 2.5px;
  border-top-left-radius: 2.5px;
  /* justify-self: center; */
  &:hover {
    color: #242124;
    text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513,
      /* border: 2px solid black; */ 0 0 1px #8b4513;
    /* color: #a52a2a; */
    /* border-color: #8b4513; */
  }
`;

const title = css`
  grid-column: 2/3;
  grid-row: 2/3;
`;

const formStyles = css`
  grid-column: 2/3;
  grid-row: 4/5;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
  label {
    display: block;
  }
`;

// const inputStyles = css`
//   background-color: #faf4e1;
// `;

const submitStyles = css`
  margin-top: 72px;
  font-family: MedievalSharp;
  font-size: 20px;
  letter-spacing: 0.2vw;
  background: linear-gradient(#f2f3f4 5%, #ffffff 50%);
  /* background: linear-gradient(#faf4e1 5%, #ffffff 50%); */
  /* background-color: #faf4e1; */
  border-radius: 20px;
  /* justify-self: center; */
  &:hover {
    color: #242124;
    text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513,
      /* border: 2px solid black; */ 0 0 1px #8b4513;
  }
  /* &:hover {
    color: #a52a2a;
    /* border-color: #8b4513; */
`;

const showPasswordStyles = css`
  /* grid-column: 2/3;
  grid-row: 5/6; */
  justify-self: center;
  position: absolute;
  /* z-index: -1; */
  /* margin-bottom: 200px; */
  /* margin-left: 400%; */
  /* margin-top: 62vh; */
  margin-top: 500px;
  font-family: MedievalSharp;
  font-size: 20px;
  letter-spacing: 0.2vw;
  background: linear-gradient(#f2f3f4 5%, #ffffff 50%);
  /* background: linear-gradient(#faf4e1 5%, #ffffff 50%); */
  /* background: linear-gradient(rgba(139, 69, 19, 0.74) 50%, #ffffff 99%); */
  /* background-color: #faf4e1; */
  /* FAF4E1 */
  /* border: 2px solid white; */
  border-radius: 20px;
  &:hover {
    color: #242124;
    text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513,
      /* border: 2px solid black; */ 0 0 1px #8b4513;
  }
  /* &:hover {
    color: #a52a2a;
    /* border-color: #8b4513; */
`;

const errorStyles = css`
  color: #ffffff;
  background-color: #fa8072;
  grid-column: 2/3;
  grid-row: 3/4;
  /* border: 2px solid red; */
  justify-self: center;
  /* justify-content: center; */
  /* align-content: center; */
  align-self: center;
  position: absolute;
  margin-bottom: 20px;
  padding-left: 4px;
  /* margin-right: 1001px; */
  /* position: absolute; */
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
    <div css={mainContainer}>
      <nav css={navigationStyles}>
        <div css={toHomeStyles}>
          <Link href="/"> To Home </Link>
        </div>
        <div css={toLoginStyles}>
          <Link href="/login"> To Login </Link>
        </div>
        <div css={toMyLinkedInStyles}>
          <Link href="/placeholder"> To my LinkedIn Profile </Link>
        </div>
        <div css={toArtistCreditStyles}>
          <Link href="/placeholder"> To Artist Credits </Link>
        </div>
      </nav>
      <h1 css={title}> Please register: </h1>
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
        <button css={submitStyles}> Submit </button>
        {/* <button onClick={router.push('/village')}>Submit</button> */}
      </form>
      <button onClick={togglePassword} css={showPasswordStyles}>
        Show Password
      </button>
      <div css={errorStyles}>
        {errors.map((error) => (
          <div key={`error-${error.message}`}> {error.message}</div>
        ))}
      </div>
    </div>
  );
}

// does the same as in the login.tsx - redirects if the user is already logged in
// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const { getValidSessionByToken } = await import('../util/database');

//   const sessionToken = context.req.cookies.sessionTokenRegister;

//   const session = await getValidSessionByToken(sessionToken);

//   console.log(session);

//   if (session) {
//     // Redirect the user when they have a session
//     // token by returning an object with the `redirect` prop
//     // https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
//     return {
//       redirect: {
//         destination: '/village',
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// }

// make it so that the show password button moves with the zoom of the grid or at least doesn't immidetly leave its position without moving it into the <form> </form> (takes on useRouter instead of showing the password)
// navigating with tabulator picks submit before password for the same reason - being infront in the document flow
