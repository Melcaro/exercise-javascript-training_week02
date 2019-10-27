// Exercice 1 - Parcours de liste
// A l'aide d'une fonction récursive, affichez les éléments d'un tableau d'éléments.

const disneyMovies = ['Le Roi Lion', 'La Belle et la Bête', 'Les Aristochats'];

function getElements(array) {
  if (array.length > 0) {
    console.log(array[0]);
    array.shift();
    return getElements(array);
  }
}
getElements(disneyMovies);

// Exercice 2 - Inversion de chaîne de caractère
// A l'aide d'une fonction récursive, inversez le sens d'une chaîne de caractères.

const originalString = 'Hello';

const arrayString = originalString.split('');

const splittedString = [];

function reverseString(string1, string2) {
  if (string1.length > 0) {
    string2.unshift(string1.shift());
    reverseString(string1, string2);
  }
  console.log(string2);
  return string2;
}
reverseString(arrayString, splittedString);

//Exercice 3 - Parcours d'arbre
// Faites une fonction de parcours qui quelque soit le noeud donné, affiche la valeur de ses enfants tel que browse(node1) affiche 1 2 3 4 5 6 7

const node7 = {
  leftChildren: null,
  rightChildren: null,
  value: 7,
};
const node6 = {
  leftChildren: null,
  rightChildren: null,
  value: 6,
};
const node5 = {
  leftChildren: null,
  rightChildren: null,
  value: 5,
};
const node4 = {
  leftChildren: null,
  rightChildren: null,
  value: 4,
};
const node3 = {
  leftChildren: node6,
  rightChildren: node7,
  value: 3,
};
const node2 = {
  leftChildren: node4,
  rightChildren: node5,
  value: 2,
};
const node1 = {
  leftChildren: node2,
  rightChildren: node3,
  value: 1,
};

function browse(node) {
  return node.leftChildren.value || node.rightChildren
    ? console.log(node.leftChildren.value, node.rightChildren.value)
    : null;
}

function printNodeChild(node) {
  return (
    node.value,
    browse(node),
    browse(node.leftChildren),
    browse(node.rightChildren)
  );
}
printNodeChild(node1);

// Exercice 4 - Parcours suffixe
// Ecrivez une fonction qui parcours un arbre tel que le parcours affiche: 4 5 2 6 7 3 1

// >> doit afficher les enfants de l'enfant de gauche et l'enfant de gauche, puis les enfants de l'enfant de 3 et l'enfant de droite, puis le noeud parent
//modifier la position du console.log compteur de 0 à 5 et de 0 5 inverser pour modifier

function browseSuffix(node) {
  return node.leftChildren.value || node.rightChildren
    ? console.log(node.leftChildren.value, node.rightChildren.value, node.value)
    : null;
}

function browseTree(node) {
  return (
    browseSuffix(node.leftChildren),
    browseSuffix(node.rightChildren),
    node.value
  );
}
browseTree(node1);

//Exercice 5 - Arbre Miroir
//Faites une fonction qui retourne un arbre miroir. Vous veillerez à ne pas modifier l'arbre initial.

//  dire que le leftChildren === right Children
