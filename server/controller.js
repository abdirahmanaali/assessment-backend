module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar.", "Hello world", "Yurr"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);


    },
    getFortune: (req,res) => {
        const fortune = [
            'Your infinite capacity for patience will be rewarded sooner or later.', 'Your reputation is your wealth.', 'Your infinite capacity for patience will be rewarded sooner or later.', 'Your goal will be reached very soon.', 'Your dreams are never silly; depend on them to guide you.', 'You will enjoy good health; you will be surrounded by luxury.','Your dreams are worth your best efforts to achieve them.', ' Dedicate yourself with a calm mind to the task at hand.', 'Determination is what you need now.', 'Diligence and modesty can raise your social status.'
        ]

        let randomIndex = Math.floor( Math.random() * fortune.length)
        let fortuneCookie = fortune[randomIndex]
        res.status(200).send(fortuneCookie)
    }

}