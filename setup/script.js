db = connect('mongodb://localhost:27017/logement');

db.logements.insertMany([
    {
        id: 1,
        name: "The appart",
        adresse: "123 Rue de Paris, 75001 Paris",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800",
        prix: 1500,
        superficie: 50,
        chambres: 2,
        sdb: 1,
        parking: true,
        internet: true,
        type: "Appartement",
        location: {
          lat: 48.8566, lng: 2.3522 
        }
      },
      {
        id: 2,
        name: "Le Loft Moderne",
        adresse: "25 Avenue des Champs-Élysées, 75008 Paris",
        image: "https://images.unsplash.com/photo-1567315384-32c1ebcb6788?auto=format&fit=crop&w=800",
        prix: 2500,
        superficie: 75,
        chambres: 3,
        sdb: 2,
        parking: true,
        internet: true,
        type: "Loft",
        location: {
          lat: 48.8656, lng: 2.3212
        }
      },
      {
        id: 3,
        name: "Appartement de Charme",
        adresse: "18 Rue de la Paix, 75002 Paris",
        image: "https://images.unsplash.com/photo-1563159687-d050ab6d5d6f?auto=format&fit=crop&w=800",
        prix: 2000,
        superficie: 60,
        chambres: 2,
        sdb: 1,
        parking: false,
        internet: true,
        type: "Appartement",
        location: {
          lat: 48.8738, lng: 2.2950
        }
      },
      {
        id: 4,
        name: "Studio Panoramique",
        adresse: "5 Rue de la Tour, 75016 Paris",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800",
        prix: 1200,
        superficie: 35,
        chambres: 1,
        sdb: 1,
        parking: false,
        internet: true,
        type: "Studio",
        location: {
          lat: 48.8485, lng: 2.3670 
        }
      },
      {
        id: 5,
        name: "Appartement Écologique",
        adresse: "10 Rue des Écureuils, 75010 Paris",
        image: "https://images.unsplash.com/photo-1533554155312-cd0ad51d62c2?auto=format&fit=crop&w=800",
        prix: 1800,
        superficie: 55,
        chambres: 2,
        sdb: 1,
        parking: true,
        internet: true,
        type: "Appartement",
        location: {
          lat: 48.8529, lng: 2.3499 
        }
      },
      {
        id: 6,
        name: "Penthouse Panoramique",
        adresse: "45 Boulevard Haussmann, 75009 Paris",
        image: "https://images.unsplash.com/photo-1564550892-713b0a49019d?auto=format&fit=crop&w=800",
        prix: 3500,
        superficie: 100,
        chambres: 3,
        sdb: 2,
        parking: true,
        internet: true,
        type: "Penthouse",
        location: {
          lat: 48.8590, lng: 2.3769 
        }
      },
      {
        id: 7,
        name: "Appartement Contemporain",
        adresse: "14 Rue des Martyrs, 75009 Paris",
        image: "https://images.unsplash.com/photo-1575922706870-7b102c24a1c4?auto=format&fit=crop&w=800",
        prix: 2200,
        superficie: 65,
        chambres: 2,
        sdb: 1,
        parking: true,
        internet: true,
        type: "Appartement",
        location: {
          lat: 48.8566, lng: 2.3522 
        }
      },
      {
        id: 8,
        name: "Appartement Cosy",
        adresse: "30 Rue de la République, 75011 Paris",
        image: "https://images.unsplash.com/photo-1513166800750-77d18f86e62f?auto=format&fit=crop&w=800",
        prix: 1400,
        superficie: 45,
        chambres: 1,
        sdb: 1,
        parking: false,
        internet: true,
        type: "Appartement",
        location: {
          lat: 48.8384, lng: 2.3230 
        }
      },
      {
        id: 9,
        name: "Loft Industriel",
        adresse: "77 Rue des Rosiers, 75003 Paris",
        image: "https://images.unsplash.com/photo-1571068147397-987cb8c21961?auto=format&fit=crop&w=800",
        prix: 2800,
        superficie: 85,
        chambres: 2,
        sdb: 2,
        parking: true,
        internet: true,
        type: "Loft",
        location: {
          lat: 48.8635, lng: 2.3522 
        }
      },
      {
        id: 10,
        name: "Appartement Classique",
        adresse: "12 Rue de la Sorbonne, 75005 Paris",
        image: "https://images.unsplash.com/photo-1506748686212-9d70da9f4104?auto=format&fit=crop&w=800",
        prix: 1700,
        superficie: 55,
        chambres: 2,
        sdb: 1,
        parking: false,
        internet: true,
        type: "Appartement",
        location: {
          lat: 48.8352, lng: 2.3788 
        }
      },
      {
        id: 11,
        name: "Appartement Vue Mer",
        adresse: "32 Quai de la Tournelle, 75005 Paris",
        image: "https://images.unsplash.com/photo-1603843355882-98f38ea1ad76?auto=format&fit=crop&w=800",
        prix: 3000,
        superficie: 90,
        chambres: 3,
        sdb: 2,
        parking: true,
        internet: true,
        type: "Appartement",
        location: {
          lat: Number, lng: Number 
        }
      },
      {
        id: 12,
        name: "Studio Moderne",
        adresse: "4 Rue du Faubourg Saint-Antoine, 75012 Paris",
        image: "https://images.unsplash.com/photo-1524592413745-d1299a90282c?auto=format&fit=crop&w=800",
        prix: 1000,
        superficie: 30,
        chambres: 1,
        sdb: 1,
        parking: false,
        internet: true,
        type: "Studio",
        location: {
          lat: Number, lng: Number 
        }
      },
      {
        id: 13,
        name: "Appartement Historique",
        adresse: "88 Rue de Rivoli, 75001 Paris",
        image: "https://images.unsplash.com/photo-1544717320-8cd3c7468d01?auto=format&fit=crop&w=800",
        prix: 2200,
        superficie: 70,
        chambres: 2,
        sdb: 1,
        parking: false,
        internet: true,
        type: "Appartement",
        location: {
          lat: Number, lng: Number 
        }
      },
      {
        id: 14,
        name: "Appartement Design",
        adresse: "55 Rue de Bercy, 75012 Paris",
        image: "https://images.unsplash.com/photo-1585637382789-bd1407bbd226?auto=format&fit=crop&w=800",
        prix: 2400,
        superficie: 80,
        chambres: 3,
        sdb: 2,
        parking: true,
        internet: true,
        type: "Appartement",
        location: {
          lat: Number, lng: Number 
        }
      }
]);

db.users.insertMany([
  {
    pseudo: "test",
    email: "test@gmail.com",
    avatar: "r",
    nom: "pidule",
    prenom: "truc",
    mdp: "test1",
    logements: [
      {
        id: 1,
        name: "The appart",
        adresse: "123 Rue de Paris, 75001 Paris",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800",
        prix: 1500,
        superficie: 50,
        chambres: 2,
        sdb: 1,
        parking: true,
        internet: true,
        type: "Appartement",
        location: { lat: 48.8566, lng: 2.3522 },
        status: "visiter",
        dateVisite: "2025-01-20"
      },
      {
        id: 2,
        name: "Le Loft Moderne",
        adresse: "25 Avenue des Champs-Élysées, 75008 Paris",
        image: "https://images.unsplash.com/photo-1567315384-32c1ebcb6788?auto=format&fit=crop&w=800",
        prix: 2500,
        superficie: 75,
        chambres: 3,
        sdb: 2,
        parking: true,
        internet: true,
        type: "Loft",
        location: { lat: 48.8656, lng: 2.3212 },
        status: "non visiter",
        dateVisite: "2025-03-18"
      },
      {
        id: 3,
        name: "Appartement de Charme",
        adresse: "18 Rue de la Paix, 75002 Paris",
        image: "https://images.unsplash.com/photo-1563159687-d050ab6d5d6f?auto=format&fit=crop&w=800",
        prix: 2000,
        superficie: 60,
        chambres: 2,
        sdb: 1,
        parking: false,
        internet: true,
        type: "Appartement",
        location: { lat: 48.8738, lng: 2.2950 },
        status: "non visiter",
        dateVisite: "2025-01-20"
      },
      {
        id: 4,
        name: "Studio Panoramique",
        adresse: "5 Rue de la Tour, 75016 Paris",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800",
        prix: 1200,
        superficie: 35,
        chambres: 1,
        sdb: 1,
        parking: false,
        internet: true,
        type: "Studio",
        location: { lat: 48.8485, lng: 2.3670 },
        status: "non visiter",
        dateVisite: "2025-03-18"
      },
      {
        id: 5,
        name: "Appartement Écologique",
        adresse: "10 Rue des Écureuils, 75010 Paris",
        image: "https://images.unsplash.com/photo-1533554155312-cd0ad51d62c2?auto=format&fit=crop&w=800",
        prix: 1800,
        superficie: 55,
        chambres: 2,
        sdb: 1,
        parking: true,
        internet: true,
        type: "Appartement",
        location: {lat: 48.8529, lng: 2.3499 },
        status: "visiter",
        dateVisite: "2025-01-20"
      },
      {
        id: 6,
        name: "Penthouse Panoramique",
        adresse: "45 Boulevard Haussmann, 75009 Paris",
        image: "https://images.unsplash.com/photo-1564550892-713b0a49019d?auto=format&fit=crop&w=800",
        prix: 3500,
        superficie: 100,
        chambres: 3,
        sdb: 2,
        parking: true,
        internet: true,
        type: "Penthouse",
        location: { lat: 48.8590, lng: 2.3769 },
        status: "non visiter",
        dateVisite: "2025-03-18"
      },
      {
        id: 7,
        name: "Appartement Contemporain",
        adresse: "14 Rue des Martyrs, 75009 Paris",
        image: "https://images.unsplash.com/photo-1575922706870-7b102c24a1c4?auto=format&fit=crop&w=800",
        prix: 2200,
        superficie: 65,
        chambres: 2,
        sdb: 1,
        parking: true,
        internet: true,
        type: "Appartement",
        location: { lat: 48.8566, lng: 2.3522 },
        status: "non visiter",
        dateVisite: "2025-01-20"
      },
      {
        id: 8,
        name: "Appartement Cosy",
        adresse: "30 Rue de la République, 75011 Paris",
        image: "https://images.unsplash.com/photo-1513166800750-77d18f86e62f?auto=format&fit=crop&w=800",
        prix: 1400,
        superficie: 45,
        chambres: 1,
        sdb: 1,
        parking: false,
        internet: true,
        type: "Appartement",
        location: { lat: 48.8384, lng: 2.3230 },
        status: "non visiter",
        dateVisite: "2025-03-18"
      },
      {
        id: 9,
        name: "Loft Industriel",
        adresse: "77 Rue des Rosiers, 75003 Paris",
        image: "https://images.unsplash.com/photo-1571068147397-987cb8c21961?auto=format&fit=crop&w=800",
        prix: 2800,
        superficie: 85,
        chambres: 2,
        sdb: 2,
        parking: true,
        internet: true,
        type: "Loft",
        location: { lat: 48.8635, lng: 2.3522 },
        status: "visiter",
        dateVisite: "2025-01-20"
      },
      {
        id: 10,
        name: "Appartement Classique",
        adresse: "12 Rue de la Sorbonne, 75005 Paris",
        image: "https://images.unsplash.com/photo-1506748686212-9d70da9f4104?auto=format&fit=crop&w=800",
        prix: 1700,
        superficie: 55,
        chambres: 2,
        sdb: 1,
        parking: false,
        internet: true,
        type: "Appartement",
        location: { lat: 48.8352, lng: 2.3788 },
        status: "non visiter",
        dateVisite: "2025-03-18"
      },
      {
        id: 11,
        name: "Appartement Vue Mer",
        adresse: "32 Quai de la Tournelle, 75005 Paris",
        image: "https://images.unsplash.com/photo-1603843355882-98f38ea1ad76?auto=format&fit=crop&w=800",
        prix: 3000,
        superficie: 90,
        chambres: 3,
        sdb: 2,
        parking: true,
        internet: true,
        type: "Appartement",
        location: { lat: 48.8495, lng: 2.3532 },
        status: "non visiter",
        dateVisite: "2025-01-20"
      },
      {
        id: 12,
        name: "Studio Moderne",
        adresse: "4 Rue du Faubourg Saint-Antoine, 75012 Paris",
        image: "https://images.unsplash.com/photo-1524592413745-d1299a90282c?auto=format&fit=crop&w=800",
        prix: 1000,
        superficie: 30,
        chambres: 1,
        sdb: 1,
        parking: false,
        internet: true,
        type: "Studio",
        location: { lat: 48.8498, lng: 2.3741 },
        status: "non visiter",
        dateVisite: "2025-03-18"
      }
    ]
  },
  {
    pseudo: "test2",
    email: "test2@gmail.com",
    avatar: "r",
    nom: "ok",
    prenom: "cool",
    mdp: "test2",
    logements: [
      {
        id: 14,
        name: "Appartement Design",
        adresse: "55 Rue de Bercy, 75012 Paris",
        image: "https://images.unsplash.com/photo-1585637382789-bd1407bbd226?auto=format&fit=crop&w=800",
        prix: 2400,
        superficie: 80,
        chambres: 3,
        sdb: 2,
        parking: true,
        internet: true,
        type: "Appartement",
        location: { lat: 48.8383, lng: 2.3845 },
        status: "visiter",
        dateVisite: "2025-01-20"
      },
      {
        id: 13,
        name: "Appartement Historique",
        adresse: "88 Rue de Rivoli, 75001 Paris",
        image: "https://images.unsplash.com/photo-1544717320-8cd3c7468d01?auto=format&fit=crop&w=800",
        prix: 2200,
        superficie: 70,
        chambres: 2,
        sdb: 1,
        parking: false,
        internet: true,
        type: "Appartement",
        location: { lat: 48.8607, lng: 2.3429 },
        status: "non visiter",
        dateVisite: "2025-03-18"
      }
    ]
  }
]);
