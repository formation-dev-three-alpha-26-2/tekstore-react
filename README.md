# TEK STORE — Mini-projet React

## Objectif du projet

Vous allez développer progressivement une petite boutique en ligne avec **React**. Pour commencer, vous travaillerez avec des **données fictives (dummy data)** : il n'est pas nécessaire d'utiliser une base de données ni un serveur.

L'objectif est de pratiquer les composants React, les props, le state, les événements et la navigation entre plusieurs pages.

## 1. Comprendre la structure du projet

Avant de commencer, repérez les composants déjà fournis :

- `App.jsx` : composant principal de l'application et gestion des données partagées.
- `Navbar.jsx` : barre de navigation et recherche.
- `AppRoutes.jsx` : configuration des routes.
- `ProductsList.jsx` : affichage de la liste des produits.
- `ProductDetails.jsx` : composant utilisé pour afficher la carte d'un produit.
- `OneProduct.jsx` : affichage des informations détaillées d'un produit lorsqu'on clique dessus.
- `AddProduct.jsx` : formulaire d'ajout d'un produit.
- `UpdateProduct.jsx` : formulaire de modification d'un produit.
- `Search.jsx` : champ de recherche.

Prenez quelques minutes pour comprendre le rôle de chaque composant et repérer où il est utilisé.

## 2. Étape 2 — Afficher les produits

Travaillez dans `App.jsx`, `ProductsList.jsx` et `ProductDetails.jsx`.

1. Importez les données fictives dans `App.jsx`.
2. Transmettez les données au composant `ProductsList.jsx` à l'aide des props.
3. Parcourez le tableau des produits pour afficher une carte pour chaque produit.
4. Utilisez `ProductDetails.jsx` pour afficher les informations de chaque produit.
5. Dans chaque carte, affichez l'image, le nom, la catégorie, la description et le prix.
6. Vérifiez que chaque produit possède une clé (`key`) unique lors de l'affichage de la liste.

**À vérifier :** tous les produits du tableau doivent apparaître sans recopier manuellement le même code pour chaque carte.

## 3. Étape 3 — Consulter les détails d'un produit

Travaillez dans `ProductDetails.jsx`, `OneProduct.jsx` et `AppRoutes.jsx`.

1. Rendez chaque produit cliquable depuis la liste des produits.
2. Lorsqu'un utilisateur clique sur un produit, redirigez-le vers une page dédiée affichant les détails de ce produit.
3. Configurez une route permettant d'accéder à la page de détails d'un produit à partir de son identifiant dans l'URL.
4. Dans `OneProduct.jsx`, récupérez l'identifiant du produit depuis l'URL et retrouvez le produit correspondant dans les données fictives.
5. Affichez l'image, le nom, la catégorie, la description et le prix du produit sélectionné.
6. Ajoutez un lien permettant de revenir à la liste des produits.

**À vérifier :** chaque produit doit afficher ses propres informations lorsqu'on clique dessus.

## 4. Étape 4 — Ajouter un produit

Travaillez dans `AddProduct.jsx` et `App.jsx`.

1. Préparez les champs du formulaire : nom, prix, description, catégorie et URL de l'image.
2. Utilisez les événements React pour récupérer les valeurs saisies.
3. Utilisez le state pour gérer les valeurs du formulaire.
4. Lors de la soumission, empêchez le rechargement automatique de la page.
5. Créez un nouvel objet représentant le produit à ajouter.
6. Transmettez le nouveau produit au composant parent à l'aide d'une fonction passée en props.
7. Mettez à jour le state contenant la liste des produits afin que le nouveau produit apparaisse dans la liste.
8. Réinitialisez le formulaire après l'ajout du produit.

**Important :** pour cette première version, les produits peuvent être conservés uniquement dans le state. Ils ne seront pas sauvegardés après un rechargement de la page.

## 5. Étape 5 — Rechercher un produit

Travaillez dans `Search.jsx`, `Navbar.jsx` et `App.jsx`.

1. Récupérez le texte saisi dans le champ de recherche à l'aide du state.
2. Transmettez le texte recherché à `App.jsx` à l'aide des props.
3. Filtrez les produits selon leur nom, en ignorant les différences entre majuscules et minuscules.
4. Affichez uniquement les produits correspondant au texte recherché dans `ProductsList.jsx`.
5. Lorsque le champ de recherche est vide, affichez de nouveau tous les produits.

**À vérifier :** la recherche doit fonctionner sans modifier ni supprimer les données originales des produits.
