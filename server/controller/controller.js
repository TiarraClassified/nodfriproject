var weapons= [
                {name: 'Brassknuckles',
                attack: 2},
                {name: 'BowAndArrow',
                attack: 4},
                {name: 'Sandwich',
                attack: 0}
            ]

module.exports = {
    create: (req,res) => {
        
    },

    read: (req,res) => {
        res.status(200).send(weapons)
    },

    update: (req,res) => {
        
    },

    delete: (req,res) => {
        
    }

}