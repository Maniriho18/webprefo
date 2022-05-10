// Attraper un élément HTML
const h1 = document.querySelector('h1')

//
let a = 5 

// Modifier le contenu texte d'un élément HTML
h1.innerText = 'Bienvenue sur mon site'
h1.textContent = a

// Attraper l'élément body du HTML
const body = document.querySelector('body')
// Créer un élément HTML depuis le JS
const p = document.createElement('p')
// Ajouter notre élément p à body depuis le JS
body.appendChild(p)

// les fonctions 


function somme(a,b) {
     if (typeof a !== 'number'|| typeof  b !=='number') {
    return (h1.textContent = 'veuillez entre deux nombre');
} 

  return h1.textContent = (a/100*b) ; 
}
somme(5,7); 