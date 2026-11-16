// //testData

// let braJson = '{"namn": "Anna", "alder":25}';
// let daligJson = 'Detta är inte JSON';

// //Skriv din funktion här:

// function parseUser(str) {
//     try {
//         let user = JSON.parse(str);
//         return str
//     } catch (error) {
//         return "Ogiltig data!";
//     }
// }

// console.log("test 1:", parseUser(braJson));
// console.log("test 2:", parseUser(daligJson));




// let allaAnvandare = [
//     {id: 1, namn: "Bo"},
//     {id: 2, namn: "Sara"}
// ];

// const sokId = (id, lista) => {
//     try {
//        const hittad =  lista.find((user) => {
//             return user.id === id
//         })

//         if (!hittad) {
//              throw new Error ("Användaren hittades inte")

//         }

//         return hittad.namn
//     } catch (error) {
//         return error.message
//     }
// } 


// console.log(sokId(5, allaAnvandare))


// ÖVNINGAR

// // CASE A: 
// const scores = [10, 20, 30];
// scores.toLowerCase();

// //SVAR: De finns ingen string till "scores.toLowerCase" när de gäller arrayer

// // CASE B: 
// const greetUser = () => {
//     console.log(welcomeMessage);
// };
// greetUser();

// // SVAR: Undefined "(WELCOMEMESSAGE)"

// // CASE C:
// const profile = {firstName: "Leo" lastName: "Smith"};

// //SVAR: efter firstName så saknas komma tecken vilket ger ett syntaxfel


// const parseUserData = (jsonString) => {
//     try {
//         return JSON.parse(jsonString)
//     } catch (error) {
//     console.error("Failed to parse JSON", error.message);
//      return null;
//     } finally {
//         console.log("JSON parsing finished");
//     }
// };

// // test calls: 
// parseUserData('{"username": "alex99"}'); // returns object
// parseUserData('Invalid JSON'); // returns null