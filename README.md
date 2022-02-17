## Dark Deeds

Dark Deeds is my final project made for the UpLeveled Bootcamp. The project itself is a dialogue based game with dark humor mixed with absurd humor and a design to reflect 1) the dark theme and 2) a "gamified" retro look. The players goal is to convince at least 6 villagers that their mayoress is an evil witch, thus turning the villagers against her.
The game features a ablendark humor and handwritten dialogue to underline it's mixture of lightheartedness and dark gameplay.

Frontend-wise the game works by reacting to the users clicks on the interactive elements (the villager numbers and the corresponding answers), while the backend logs in wheter the user chose the correct answer or a false answer. Once an answer has been given, the user is then prohibited from initiating the dialogue with the villager a second time.
The game features a mixture of dark and absurd humor, similar to Monty Python or the TV-Series "Norsemen". The humor and dark theme are expressed in handwritten dialogues and color designs that emulate the sunset, changing from orange to red, dark red and finally black.

Backend-wise the application updates the database each time the user gives an answer with a boolean value of either true or false. Once the defaul null value has been overwritten by this update, the user can no longer initiate the same dialogue a second time.
The application also features a registration and login, encrypting the password with the bcrypt library.

## Heroku

The application is also deployed and publically available under https://darkdeeds.herokuapp.com.

## Development proces

The first sketches were done with Fimga and DrawSQL.

## Artist Credits

The credits are listed under the artistCredits.tsx file under /pages/artistCredits.tsx and linked to under the "To Artist Credits" button.

## Technology

The project was built using:

- React.js
- Next.js
- Node.js
- TypeScript
- CSS (emotion)
- PostgreSQL


