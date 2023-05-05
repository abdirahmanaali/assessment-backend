let goals = [];
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
            "Hard words break no bones, fine words butter no parsnips.",
            "Technology is the art of arranging the world so we do not notice it.",
            "You are open-minded and quick to make new friends. ",
            "You will make a new friend today.",
            "Your mind is creative, original and alert.",
            "Your hard work will payoff today."];

        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    addGoal: (req, res) => {
        const { goal } = req.body;
        goals.push(goal);
        res.status(200).send(goal);
    },

    getGoals: (req, res) => {
        res.status(200).send(goals);
    },

    deleteGoal: (req, res) => {
        const goalToDelete = req.params.goal;
        const index = goals.findIndex(goal => goal === goalToDelete);
        if (index !== -1) {
            goals.splice(index, 1);
            res.status(200).send(`Goal "${goalToDelete}" has been deleted!`);
        } else {
            res.status(404).send(`Goal "${goalToDelete}" not found!`);
        }
    },
    
    updateGoal: (req, res) => {
        const { goalToUpdate } = req.params;
        const { updatedGoal } = req.body;

        // Find the index of the goal to update
        const goalIndex = goals.findIndex((goal) => goal == goalToUpdate);
        


        // If goal not found, return 404 Not Found
        if (goalIndex === -1) {
            return res.status(404).send("Goal not found");
        }

        // Update the goal at the specified index
        goals[goalIndex] = updatedGoal;

        res.status(200).send(updatedGoal);
    },




}
