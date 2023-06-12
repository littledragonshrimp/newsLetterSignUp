const signUpEmail = getElementByClass(".signUpEmail");
const filledEmail = getElementById(".filledEmail");
const dismiss = querySelector("dismissBtn");


// function returnEmail(){
//     addEventListener("input", () => {
//         signUpEmail.style.display = "none";
//         filledEmail.style.display = "block";
//     } )
// }

function appear(){
    console.log('appear works')
    signUpEmail.addEventListener((onclick),() => {
        filledEmail.style.display = "block";
    }   
)}


function disappear(){
    console.log('disppear works')
    dismiss.addEventListener((onclick),() => {
        filledEmail.style.display = "none";
    }   
)};