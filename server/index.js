const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getFortune, addGoal, getGoals, deleteGoal, updateGoal } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/goals", addGoal);
app.get("/api/goals", getGoals);
app.delete("/api/goals/", deleteGoal);
app.put("/api/goals/:goalToUpdate", updateGoal);

app.listen(4000, () => console.log("Server running on 4000"));
