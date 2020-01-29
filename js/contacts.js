/* 
Activité : gestion des contacts
*/

//BEGINING
console.log("Bienvenue dans le gestionnaire des contacts!");
alert("Bienvenue dans le gestionnaire des contacts!\n" +
  "Merci de lire attentivement les consignes d'utilisation!\n" +
  "Have fun!");

//VARIABLES
let end = false;
let tabPrenoms = ["Carole", "Mélodie"];
let tabNoms = ["Lévisse", "Nelsonne"];


//FUNCTIONS
const commencer = () =>{
  programmeStart();
};
const contacts = () => {
  for (let i = 0; i < tabPrenoms.length; i++) {
    console.log(i + 1 + " - " + tabPrenoms[i] +" "+ tabNoms[i]);
  }
  ;
};
const addContact = () =>{
  const newContactPrenom = prompt("Veuillez renseigner le Prénom de votre nouveau contact :");
  tabPrenoms.push(newContactPrenom);
  const newContactNom = prompt("Et maintenant le Nom de votre nouveau contact :");
  tabNoms.push(newContactNom);
}

//CHOICES
const programmeStart = ()=>{

do {
  console.log("Faites votre choix parmis les fonctions du programme :");
  console.log("1 - Lister les contacts");
  console.log("2 - Ajouter un contact");
  console.log("3 - Quitter");
  const choices = prompt("Choisissez une action: ");
  let choice = choices;
  if (choice === "1") {
    console.log("Voici la liste des contacts :");
    contacts();
  } else if (choice === "2") {
    console.log("Vous avez choisi d'ajouter un contact.");
    addContact();
  } else if (choice === "3") {
    console.log("Fin du programme. Merci d'avoir utilisé le gestionnaire des contacts!");
    end = true;
  } else {
    console.log("Erreur, votre saisie ne correspond à aucune des actions proposées par le gestionnaire des contacts. Veuillez choisir parmis les actions proposées:");
  }

} while (!end);
};



