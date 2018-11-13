/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace ('e', ' ');
}
var concatString = function (texte1, texte2) {
    return texte1 + texte2;
}
var afficherCar5 = function (texte) {
//fonctionne avec texte[4]
    return texte.charAt(4);
}
var afficher9Car = function (texte) {
  //fonctionne avec texte.substring(0, 9)
  //texte.slice(0, 9)
    return texte.substr(0, 9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
if (typeof texte == 'string'){
  var result = true
}
      return result;
}
var AfficherExtensionString = function (texte) {
  //texte.split('.').pop()/////on coupe avec split et on affiche les dernier element avec pop
  var regex = /(?:\.([^.]+))?$/;
    return regex.exec(texte)[1];
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length -1;
}
var InverseString = function (texte) {
  //split decoupe en tableau chaqhe lettre(chaque lettre devient un element a part entiere) grace a ''.reverse inverse tous les caracteres et join retransforme en string
    return texte.split('').reverse().join('');
}
/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y);//x puissance y
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
  //.map execute sur tous les element du tableau
    return array.map(Math.abs)
}
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI * Math.pow(rayon, 2));
}
var hypothenuse = function (ab, ac) {
  //Math.hypot(ab, ac)
    return Math.sqrt(Math.pow(ab,2) + Math.pow(ac,2));
}
var calculIMC = function (poids, taille) {
  //Math.round(valeur*100)/100 permet d afficher un arondi jusque 2 chiffres apres la virgule.
    return  Math.round((poids) / ((taille)*(taille))*100)/100
    // var calcul = poids/Math.pow(taille, 2)
    //calcul = calcul.toFixed(2);
    //var result = parseFloat(calcul);reconverti une chaine de caractere en nombre a virgule
    //return result
}
