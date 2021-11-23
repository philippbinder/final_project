// import { NextApiRequest, NextApiResponse } from 'next';
// import { getDialogue } from '../../util/database';

// export default async function markAnswerHandler(
//   req: NextApiRequest, // is the thing that is coming from the user
//   res: NextApiResponse, // is the response
// ) {
//   const dialogueList = await getDialogue();
//   // gets me the dialogue table as an array of objects
//   const singleDialogue = dialogueList.find((singleDialogueItem) => {
//     return Number(req.body.dialogueId) === singleDialogueItem.id;
//     // out of said array select the object
//   });
//   // how do I get the correct id?
//   if (req.body.dialogueId === singleDialogue?.correct_answer) {
//     // ignore possible undefined; x3 da 3 button a lá req.body.dialogueId + 1 / 2 === singleDialogue?.correct_answer
//     // req.body.id ... need the button id
//     // req.body.id = from the requested page the url dialogueId???
//     await sql`
//         -- brauche ich sql bzw wie werde ich den Fehler los?
//         UPDATE status
//         SET
//           correct_answer = true
//         WHERE
//           status.dialogue_id = req.body.singleDialogue.dialogue_id AND status.user_id = req.body.session.userId
//           `;
//   } else {
//     await sql`
//         UPDATE status
//         SET
//           correct_answer = false
//         WHERE
//           status.dialogue_id = req.body.singleDialogue.dialogue_id AND status.user_id = req.body.session.userId
//       `;
//   }

//   res.status(200).json('status.correect_answer updated.');
//   // don't need any data sent back
// }

// // Reading - GET all dialogues
// // Reading - GET single dialogue - dialogue_id with for the right user_id
// // Updating - PUT
