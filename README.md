##PROJET TECHNO-WEB


__**les étape qui fonctionne:**__
*Checklist backend pour le projet* 
- [X] Dépôt Git avec historique
- [X] package.json avec dépendances et scripts
- [X] Serveur express qui se lance
- [X] GET en 200
- [X] POST avec réponse 200 ou 201
- [X] Base de données qui tourne
- [X] Le GET /elements renvoie une liste
- [X] Le GET /elements/un-id renvoie un élément en détail
- [X] le POST /elements ajoute des données à la base de données
- [X] PUT ou PATCH /elements/un-id qui l’enregistrement
- [X] DELETE /elements/un-id qui supprime un enregistrement
- [X] 404 en cas de route inconnue et en cas d’enregistrement inconnu 
- [ ] Présence d’un test unitaire pertinent
- [ ] Présence d’un test end-to-end pertinent
- [X] Présence d’un mécanisme d’authentification
- [X] Possibilité de créer un compte utilisateur de compte
- [X] 401 en cas d’accès non authentifié
- [X] Organisation du code en fichiers logiquement séparés
- [X] Historique des commits clairs (qui a changé quoi quand)
- [ ] Gestion des autorisations et 403 en cas de d’accès à la ressource d’un tiers


__**Comment lancer le projet:**__  

-une fois clone faite: npm install mongodb  
-puis pour lancer le serveur: npm run dev  


__**Pour crée la base de donner sur votre machine:**__  

-mkdir docker_mongo  
-docker pull mongo  
-docker run -d -p 27017:27017 --name mon-container-mongodb -v $(pwd)/docker_mpngo:/data/db mongo  
-docker exec -it mon-container-mongodb bash  
-mongosh  
-use logement  
-db.logements.insertMany([ { adresse: "123 Rue de Paris, 75001 Paris", prix: 1500, superficie: 50, chambres: 2, disponibilite: true, type: "Appartement" }, { adresse: "456 Avenue de Lyon, 69003 Lyon", prix: 2000, superficie: 80, chambres: 3, disponibilite: false, type: "Maison" }, { adresse: "789 Boulevard Saint-Germain, 75005 Paris", prix: 1200, superficie: 45, chambres: 1, disponibilite: true, type: "Studio" }, { adresse: "10 Rue de Bordeaux, 33000 Bordeaux", prix: 1800, superficie: 70, chambres: 2, disponibilite: true, type: "Appartement" }, { adresse: "101 Avenue des Champs-Élysées, 75008 Paris", prix: 2500, superficie: 95, chambres: 3, disponibilite: true, type: "Appartement" }, { adresse: "7 Rue de Marseille, 13001 Marseille", prix: 1600, superficie: 60, chambres: 2, disponibilite: false, type: "Maison" }, { adresse: "15 Quai de la Tournelle, 75005 Paris", prix: 1350, superficie: 48, chambres: 1, disponibilite: true, type: "Studio" }, { adresse: "202 Rue des Lilas, 75020 Paris", prix: 1450, superficie: 55, chambres: 2, disponibilite: true, type: "Appartement" }, { adresse: "88 Rue de la République, 69002 Lyon", prix: 2200, superficie: 85, chambres: 3, disponibilite: true, type: "Maison" }, { adresse: "34 Rue de la Gare, 59000 Lille", prix: 1300, superficie: 40, chambres: 1, disponibilite: true, type: "Studio" }] );

