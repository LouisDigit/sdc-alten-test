# Back-end

## Configuration

- COMMAND : npm install --save (installation des dépendances)
- Renseigner la variable d'environnement "DATABASE_URL" pour y connecter votre base de donnée MySQL locale
- COMMAND : npx prisma generate (génère les schémas PRISMA)
- COMMAND : npx prisma db push (crée vos différents tables SQL sur votre base de donnée locale)
- COMMAND : npm run dev (lance votre API REST sur le port 3000)

L'API contient des tests automatisés executable avec la commande : npm run test\\
Une collection POSTMAN est également à disposition au niveau de la racine du projet

## Fonctionnalités

- Créer un produit : POST /api/products
- Obtenir un produit avec son id : GET /api/products/:id
- Obtenir l'ensemble des produits : GET /api/products
- Mettre à jour un produit : PATCH /api/products/:id
- Supprimer un produit : DELETE /api/products/:id

# Front-end

## Configuration

- COMMAND : npm install --save (installation des dépendances)
- Renseigner la variable d'environnement "REACT_APP_API_BASE_URL" pour y connecter l'API Rest (assurez vous qu'elle soit en cours d'execution)
- COMMAND : npm run dev (lance votre application react sur le port 5173)

## Fonctionnalités

### Partie 1 : Shop

- Affiche les informations pertinentes d'un produit (Catégorie, nom, note, état de stock, prix)
- Ajouter dynamiquement un produit dans le panier
- Supprimer un produit du panier via son interface
- Affichage du nombre d'exemplaire du produit dans le panier
- Affichage complet du panier via une modale

### Partie 2 : Contact

- Section contact dans la barre latérale de navigation
- Page de contact avec un formulaire
- Envoi d'email (simulation) avec un message de reception confirmé
