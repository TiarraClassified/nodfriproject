var weapons= [
                {name: 'Brassknuckles',
                attack: 2},
                {name: 'Bows and Arrow',
                attack: 4},
                {name: 'Sandwich',
                attack: 0}
            ]

module.exports = {
    create: (req,res) => {
        const {name, attack} = req.body;
        weapons.push({name,attack})
        res.status(200).send(weapons)
    },

    read: (req,res) => {
        res.status(200).send(weapons)
    },

    update: (req,res) => {
        const {name, attack} = req.body;
        const index = weapons.findIndex(weapon => {
            return weapon.name === name
        })
        const newAttack = weapons[index];

        weapons[index] = {
            name: weapons[index].name,
            attack: attack || weapons[index].attack
        }

        res.status(200).send(weapons)
    },

    delete: (req,res) => {
        const name = req.params.name;
        const index = weapons.findIndex( weapons => {
            weapons.name === name;
        })

        weapons.splice(index, 1);
        res.status(200).send(weapons);
    }

}