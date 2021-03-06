import { css } from '@emotion/react'; // emotion not working
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Errors } from '../util/types';
import { LoginResponse } from './api/login';

const mainContainer = css`
  position: absolute;
  width: 100vw;
  height: 100vh;
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
  font-family: MedievalSharp;
  background: linear-gradient(
    180deg,
    rgba(139, 69, 19, 0.74) 0%,
    rgba(139, 69, 19, 0.74) 0.01%,
    rgba(139, 69, 19, 0) 100%
  );
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
  border-bottom: 3px solid black;
  border-bottom-left-radius: 130px;
  border-bottom-right-radius: 130px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* align-content: space-around; */
`;

const goBackStyles = css`
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
    border: 2px solid black;
    /* color: #a52a2a; */
    /* border-color: #8b4513; */
  }
`;

const toRegistrationStyles = css`
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
    border: 2px solid black;
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
    border: 2px solid black;
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
    border: 2px solid black;
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
    color: #a52a2a;
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
    color: #a52a2a;
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
  const [errors, setErrors] = useState<Errors>([]); // um das array zu ver??ndern mit .map und das Fehlermeldungsdiv anzuzeigen
  const router = useRouter(); // under useRouter and router.push https://nextjs.org/docs/api-reference/next/router
  return (
    <div css={mainContainer}>
      <nav css={navigationStyles}>
        <div css={goBackStyles}>
          <Link href="/"> Go back </Link>
        </div>
        <div css={toRegistrationStyles}>
          <Link href="./register"> To Registration </Link>
        </div>
        <div css={toMyLinkedInStyles}>
          <Link href="./placeholder"> To my LinkedIn Profile </Link>
        </div>
        <div css={toArtistCreditStyles}>
          <Link href="./placeholder"> To Artist Credits </Link>
        </div>
      </nav>
      <h1 css={title}> Please log in: </h1>
      <form
        css={formStyles}
        onSubmit={async (event) => {
          event.preventDefault();
          console.log(username, password);
          // will prevent the default behavior on submit, instead the following code lines will be executed
          const loginResponse = await fetch('/api/login', {
            method: 'POST', // weil ich Information senden will und etwas neues kreieren m??chte / http methods - POST is to create, GET is to get some information, PUT is to update some information and DELETE is to delete information
            headers: {
              'Content-Type': 'application/json', // tells the program that I am sending JSON data
            },
            body: JSON.stringify({
              // body needs to be send in JSON
              // die data die ich passen will, also an login.ts, schreibe ich den body - "this body inside the fetch turns into req.body in reigsterHandler von login.ts"
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

// !!!!!!!!!!!!!!! Password verification not working, at least if the username verification checks true
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
