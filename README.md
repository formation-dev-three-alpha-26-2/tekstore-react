# TEK STORE --- Mini-projet React

## Objectif du projet

Vous allez développer progressivement une petite boutique en ligne avec
**React**. Pour commencer, vous travaillerez avec des **données fictives
(dummy data)** : il n'est pas nécessaire d'utiliser une base de données
ni un serveur.

L'objectif est de pratiquer les composants React, les props, le state,
les événements et la navigation entre plusieurs pages.

## 1. Comprendre la structure du projet

Avant de commencer, repérez les composants déjà fournis :

- `App.jsx` : composant principal de l'application.
- `Navbar.jsx` : barre de navigation et recherche.
- `AppRoutes.jsx` : configuration des routes.
- `ProductsList.jsx` : affichage de la liste des produits.
- `ProductDetails.jsx` : affichage des détails d'un produit.
- `AddProduct.jsx` : formulaire d'ajout d'un produit.
- `UpdateProduct.jsx` : formulaire de modification d'un produit.
- `Search.jsx` : champ de recherche.

Prenez quelques minutes pour comprendre le rôle de chaque composant et
repérer où il est utilisé.

## 2. Étape 2 --- Afficher les produits

Travaillez dans `ProductsList.jsx` `ProductDetails.jsx` et `App.jsx`.

1.  Importez les données fictives.
2.  Parcourez le tableau pour afficher un composant ou une carte pour
    chaque produit.
3.  Dans chaque carte, affichez l'image, le nom, la catégorie, la
    description et le prix.
4.  Vérifiez que chaque produit possède une clé (`key`) unique lors de
    l'affichage d'une liste.



## 3. Étape 3 — Consulter les détails d'un produit

Travaillez dans `ProductDetails.jsx`, `OneProduct.jsx` et `AppRoutes.jsx`.

1. Rendez chaque produit cliquable depuis la liste des produits.
2. Lorsqu'un utilisateur clique sur un produit, redirigez-le vers une page dédiée affichant les détails de ce produit.
3. Utilisez l'identifiant du produit dans l'URL pour retrouver le produit sélectionné.
4. Dans `OneProduct.jsx`, affichez l'image, le nom, la catégorie, la description et le prix du produit.

## 4. Étape 4 --- Ajouter un produit

Travaillez dans `AddProduct.jsx`.

1.  Préparez les champs du formulaire : nom, prix, description,
    catégorie et URL de l'image.
2.  Utilisez les événements React pour récupérer les valeurs saisies.
3.  Utilisez le state pour gérer les valeurs du formulaire.
4.  Lors de la soumission, empêchez le rechargement automatique de la
    page.
5.  Ajoutez le nouveau produit à la liste affichée.

**Important :** pour cette première version, les produits peuvent être
conservés uniquement dans le state. Ils ne seront pas sauvegardés après
un rechargement de la page.

## 5. Étape 5 --- Rechercher un produit

Travaillez dans `Search.jsx` et `App.jsx`.

1.  Récupérez le texte saisi dans le champ de recherche.
2.  Filtrez les produits selon leur nom.
3.  Affichez uniquement les produits correspondant à la recherche.
