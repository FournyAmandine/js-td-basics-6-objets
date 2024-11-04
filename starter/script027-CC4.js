/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/

const mark = {
    nom :" Mark Walhberg",
    poids : 70,
    taille : 1.74,
    bMI(){
        this.bmi = this.poids/(this.taille*this.taille);
        return this.bmi;
    },
};

const john = {
    nom :" John Doe",
    poids : 70,
    taille : 1.74,
    bMI(){
        this.bmi = this.poids/(this.taille*this.taille);
        return this.bmi;
    }
}


if (john.bMI()>mark.bMI()){
    console.log(`${john.nom} à un bmi de ${john.bMI()}`)
} else if (john.bMI()<mark.bMI()){
    console.log(`${mark.nom} à un bmi de ${mark.bMI()}`)
} else {
    console.log(`${john.nom} et${mark.nom} ont tous les deux un bmi de ${john.bMI()}`)
}