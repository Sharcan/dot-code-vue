const clients = [
    {
        name: 'Antoine D',
        age: 21,
        job: 'Développeur'
    },
    {
        name: 'Nicolas B',
        age: 21,
        job: 'Boucher'
    },
    {
        name: 'Benjamin P',
        age: 20,
        job: 'Intégrateur'
    }
];

// Everybody has 21 !
clients[2].job = 'Développeur';
clients[1].name = 'Gros BG';
clients[3].age = 21;
console.log(clients)