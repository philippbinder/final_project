import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
// import { getValidSessionByToken } from '../util/database';
import { Errors } from '../util/types';
import { LoginResponse } from './api/login';

const mainContainer = css`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 0.5fr 4fr 0.5fr 10fr 0.5fr;
  grid-template-rows: 1.5fr 1.5fr 7.5fr 1fr;
  /* grid-row-gap: 40px;
  grid-column-gap: 20px; */
  text-align: center;
  font-size: 24px;
  letter-spacing: 0.5vw;
  font-family: MedievalSharp;
  /* background: linear-gradient(
    180deg,
    rgba(102, 0, 17, 0.74) 0%,
    rgba(139, 69, 19, 0.74) 0.01%,
    rgba(139, 69, 19, 0) 100%
  ); */
  background: linear-gradient(
    180deg,
    rgba(250, 127, 13, 0.3626) 0.01%,
    rgba(168, 84, 14, 0.74) 0.02%,
    rgba(147, 9, 0, 0.74) 16.4%,
    rgba(6, 0, 2, 0.9) 100%
  );
`;
// original helles orange rgba(202, 129, 20, 0.74) 0.02%,

const headingStyle = css`
  grid-column: 2/5;
  grid-row: 1/2;
  /* background: linear-gradient(
    rgba(139, 69, 19, 0.74) 12%,
    rgba(139, 69, 19, 0.74) 10%,
    rgba(36, 33, 36, 01) 100%
  ); */
  /* background-image: img src= '/images/sunset.png' alt= 'Sunset at cemetery'; */
  /* rgba(255, 255, 255, 0.74) 10%, */

  /* background-color: #242124; */
  /* background: linear-gradient(
    rgba(139, 69, 19, 0.8) 0%,
    rgba(139, 69, 19, 0.74) 1.05%,
    rgba(242, 243, 244, 0.8) 6%,
    rgba(250, 244, 225, 1) 15%
  ); */
  border-bottom: 3px solid black;
  border-bottom-left-radius: 130px;
  border-bottom-right-radius: 130px;
  box-shadow: 0 0 20px #ffffff, 0 0 8px #8b0000;
  display: flex;
  flex-direction: column;
  /* width: 100%; */
`;

const sunsetStyle = css`
  grid-column: 2/5;
  grid-row: 1/2;
  background-image: url('/images/sunsetDeer4.png');
  /* background-size: 60vw 110px; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-bottom: 3px solid black;
  border-bottom-left-radius: 130px;
  border-bottom-right-radius: 130px;
  box-shadow: 0 0 10px #8b0000;
  /* width: 100%;
  height: 100%; */
  /* object-fit: contain; */
  /* height: 100%; */
  /* width: 100%; */
`;

const navStyle = css`
  grid-column: 1/3;
  grid-row: 3/4;
  /* background: linear-gradient(
    rgba(139, 69, 19, 0.8) 0%,
    rgba(139, 69, 19, 0.74) 1.05%,
    rgba(242, 243, 244, 0.8) 6%,
    rgba(250, 244, 225, 1) 15%
  ); */
  /* border: 3px solid black; */
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  /* box-shadow: 0 0 10px #8b0000; */
  /* background-color: #242124; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const navElementStyles = css`
  /* align-self: center;
  justify-content: center; */
  /* position: relative; */
  /* right: 100px; */
  font-family: MedievalSharp;
  font-size: 30px;
  letter-spacing: 0.2vw;
  /* padding-left: 2.8px; */
  /* height: 50px;
  width: 450px; */
  padding-left: 2.8px;
  padding-right: 2.8px;
  text-align: center;
  border: 3px solid #242124;
  /* background: linear-gradient(#f2f3f4 5%, #ffffff 50%); */
  background-color: rgba(250, 244, 225, 0.62);
  /* background-color: #faf4e1; */
  /* border-radius: 20px; */
  border-bottom-right-radius: 15px;
  /* border-bottom-left-radius: 10px; */
  border-top-right-radius: 20px;
  // horizntal-, vertical-shadow-position, blur, spread, color
  box-shadow: 5px -3px 4px 1.5px #242124;
  /* 0 0 1px #a52a2a,  */
  /* border-top-left-radius: 10px; */
  /* justify-self: center; */
  &:hover {
    /* color: #242124; */
    color: #171717;
    /* color: #ffffff; */
    text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513,
      /* border: 2px solid black; */ 0 0 1px #8b4513;
    /* color: #a52a2a; */
    /* border-color: #8b4513; */
  }
`;

const loginContainerStyle = css`
  grid-column: 4/5;
  grid-row: 3/4;
  box-shadow: 0 0 4px black, 0 0 10px black;
  /* background-color: #fff5ee; */
  /* text-shadow: 0 0 6px #a52a2a, 0 0 4px #b22222, 0 0 3px #a52a2a,
    0 0 1px #a52a2a; */
  background: linear-gradient(
    180deg,
    rgba(250, 127, 13, 0.1) 10.01%,
    rgba(168, 84, 14, 0.1) 10.02%,
    #930a002d 36.4%,
    rgba(6, 0, 2, 0.9) 100%
  );
  border-radius: 20px;
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
  margin-top: 7px;
  font-family: MedievalSharp;
  font-size: 24px;
  letter-spacing: 0.2vw;
  background: linear-gradient(#f2f3f4 5%, #ffffff 50%);
  /* #fff5ee */
  /* background: linear-gradient(#faf4e1 5%, #ffffff 50%); */
  /* background-color: #faf4e1; */
  border-radius: 20px;
  /* justify-self: center; */
  &:hover {
    /* color: #242124; */
    color: #171717;
    /* color: #ffffff; */
    text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513,
      /* border: 2px solid black; */ 0 0 1px #8b4513;
    /* color: #a52a2a; */
    /* border-color: #8b4513; */
  }
`;

const showPasswordStyles = css`
  /* grid-column: 2/3;
  grid-row: 5/6; */
  justify-self: center;
  position: absolute;
  /* z-index: -1; */
  /* margin-bottom: 200px; */
  /* margin-left: 439px; */
  margin-left: 29.1vw;
  margin-top: 80vh;
  /* margin-top: 550px; */
  font-family: MedievalSharp;
  font-size: 24px;
  letter-spacing: 0.2vw;
  background: linear-gradient(#f2f3f4 5%, #ffffff 50%);
  /* background: linear-gradient(#faf4e1 5%, #ffffff 50%); */
  /* background: linear-gradient(rgba(139, 69, 19, 0.74) 50%, #ffffff 99%); */
  /* background-color: #faf4e1; */
  /* FAF4E1 */
  /* border: 2px solid white; */
  border-radius: 20px;
  &:hover {
    /* color: #242124; */
    color: #171717;
    /* color: #ffffff; */
    text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513,
      /* border: 2px solid black; */ 0 0 1px #8b4513;
    /* color: #a52a2a; */
    /* border-color: #8b4513; */
  }
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

export default function LoginPage() {
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
      <div css={headingStyle} />
      <div css={sunsetStyle} />
      <nav css={navStyle}>
        <div css={navElementStyles}>
          <Link href="./register"> To Registration </Link>
        </div>
        <div css={navElementStyles}>
          <Link href="/"> To Home </Link>
        </div>
        <div css={navElementStyles}>
          <Link href="./placeholder"> To My LinkedIn </Link>
        </div>
        <div css={navElementStyles}>
          <Link href="./placeholder"> To Artist Credits </Link>
        </div>
      </nav>
      <form
        css={loginContainerStyle}
        onSubmit={async (event) => {
          event.preventDefault();
          console.log(username, password);
          // will prevent the default behavior on submit, instead the following code lines will be executed
          const loginResponse = await fetch('/api/login', {
            method: 'POST', // weil ich Information senden will und etwas neues kreieren möchte / http methods - POST is to create, GET is to get some information, PUT is to update some information and DELETE is to delete information
            headers: {
              'Content-Type': 'application/json', // tells the program that I am sending JSON data
            },
            body: JSON.stringify({
              // body needs to be send in JSON
              // die data die ich passen will, also an login.ts, schreibe ich den body - "this body inside the fetch turns into req.body in loginrHandler von login.ts"
              username: username,
              password: password,
            }),
          });
          console.log(loginResponse);

          const loginJson = (await loginResponse.json()) as LoginResponse;

          if ('errors' in loginJson) {
            setErrors(loginJson.errors);
            return;
          }

          router.push('/village'); // redirects to the village page after registration
          // LoginRespone is from login.ts

          // console.log(loginJson.user);
          // console.log(
          //   'Submitting username:',
          //   username,
          //   'and password:',
          //   password,
          // );
        }}
      >
        <h1> Please log in: </h1>
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
        <button css={submitStyles}> Submit Password </button>
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

// check if user is already logged in by checking if there is a session token, if so, redirect him from the login page to the village page
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { getValidSessionByToken } = await import('../util/database');

  const sessionToken = context.req.cookies.sessionToken;

  const session = await getValidSessionByToken(sessionToken);

  console.log(session);

  if (session) {
    // Redirect the user when they have a session
    // token by returning an object with the `redirect` prop
    // https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
    return {
      redirect: {
        destination: '/village',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

// DESIGN:
// Adds design consistency - change color for the nav container and the submit and show password button to have the same red glow like in the index.js file?
// Adds design consistency - change hover effect from elements to glowing like the index.js file? -> would also solve the shacking problem for the nav elements
// change color for the divs in the nav?
// change color from submit and show password button?
// once hoovered over, the nav elements are shacking
// FUNCTIONALITY:
// make go back button really go back to the last page instead of linking to the main page
// or rename go back buttonm to To Mainpage
// implement dropdown contacts with to my linkedin profile and to my uplevled profile
// nav elements leave nav container once zoom is too close
// fix show password button going all over the place due to not beeing absolute and AFTER the submit button

// 1:10:46 https://www.youtube.com/watch?v=PxKUl7-tVEE&list=PLMZMRynGmhsix2_xWKX6sp4rDr0E1tIQ_&index=74
