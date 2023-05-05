const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const addGoalBtn = document.getElementById("addGoalButton");
const getGoalsButton = document.getElementById("getGoalsButton");
const goalsList = document.getElementById("goalsList");
const deleteBtn = document.getElementById("deleteButton");
const updateBtn = document.getElementById("update-btn");


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const addGoal = () => {
    const goalInput = document.getElementById("goal")
    const goal = goalInput.value;
    axios.post("http://localhost:4000/api/goals/", { goal })
        .then(res => {
            const data = res.data;
            alert(`Added goal: ${data}`);
        })
        .catch(err => console.log(err));
};

const toggleGoals = () => {
    const goalsList = document.getElementById("goalsList");
    const button = document.getElementById("getGoalsButton");
    if (goalsList.style.display === "none") {
        goalsList.style.display = "block";
        button.textContent = "Hide My Goals";
    } else {
        // Hide the list of goals
        goalsList.style.display = "none";
        button.textContent = "Show My Goals";
    }
};

const getGoals = () => {
    axios.get("http://localhost:4000/api/goals/")
        .then(res => {
            const goals = res.data;
            goalsList.innerHTML = ""; // clear the list
            for (const goal of goals) {
                const li = document.createElement("li");
                li.textContent = goal;
                goalsList.appendChild(li);
            }
        })
        .catch(error => {
            console.error(error);
        });
};

getGoals();

const deleteGoal = () => {
    const goalToDelete = prompt("Enter the goal you want to delete:");
    if (goalToDelete) {
        axios.delete(`http://localhost:4000/api/goals/${goalToDelete}`)
            .then(res => {
                alert(`Goal "${goalToDelete}" has been deleted!`);
                getGoals(); 
            })
            .catch(error => {
                console.error(error);
            });
    }
};

const updateGoal = () => {
    const goalToUpdate = document.getElementById("update-goal").value;
    const updatedGoal = prompt("Enter the updated goal:");

    axios.put(`http://localhost:4000/api/goals/${goalToUpdate}`, updatedGoal )
        .then(res => {
            console.log(res.data);
            alert(`Goal "${goalToUpdate}" has been updated to "${updatedGoal}"`);
        })
        .catch(error => {
            console.error(error);
            alert(`Error updating goal "${goalToUpdate}"`);
        });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addGoalBtn.addEventListener('click', addGoal);
getGoalsButton.addEventListener("click", getGoals);
deleteBtn.addEventListener('click', deleteGoal);
updateBtn.addEventListener("click", updateGoal);

const toggleGoalsButton = document.getElementById("getGoalsButton");
toggleGoalsButton.addEventListener("click", toggleGoals);