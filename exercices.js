// Exercice 1 : Déclaration et affectation de variables
// Déclare une variable prenom et attribue-lui ton prénom. Ensuite, affiche cette variable dans la console.
const prenom = "ayoub";
console.log(prenom);
console.log("****************************");

// Exercice 2 : Manipulation de variables numériques
// Déclare deux variables a et b avec des valeurs numériques.
// Affiche la somme, la différence, le produit et le quotient de ces deux nombres dans la console.
const a = 20,
	b = 5;

console.log(`la somme de ${a} et ${b}: ${a + b}`);
console.log(`la différence entre ${a} et ${b}: ${a - b}`);
console.log(`le produit de ${a} * ${b}: ${a * b}`);
console.log(`le quotient de ${a} / ${b}: ${a / b}`);
console.log("****************************");

// Exercice 3 : Concaténation de chaînes de caractères
// Déclare deux variables nom et prenom. Crée une nouvelle variable nomComplet qui combine ces deux variables avec un espace entre elles.
// Affiche nomComplet dans la console.
const nom = "AKRAOU",
	prenom_ = "Ayoub";
const nomComplet = nom + " " + prenom_;
console.log(nomComplet);
console.log("****************************");

// Exercice 4 : Utilisation des variables booléennes
// Déclare une variable age et attribue-lui une valeur numérique.
// Crée une variable majeur qui est true si l'âge est supérieur ou égal à 18, et false sinon.
// Affiche la valeur de majeur dans la console.
const age = 23;
const majeur = age >= 18 ? true : false;
console.log(majeur);
console.log("****************************");

// Exercice 5 : Échange de valeurs entre deux variables
// Déclare deux variables x et y avec des valeurs différentes.
// Échange les valeurs de x et y sans déclarer de nouvelles variables.
// Affiche les nouvelles valeurs de x et y dans la console.
let x = 1,
	y = 0;
console.log("avant l'échange:");
console.log("x: " + x, "y: " + y);
[x, y] = [y, x];
console.log("apres l'échange:");
console.log("x: " + x, "y: " + y);
console.log("****************************");
