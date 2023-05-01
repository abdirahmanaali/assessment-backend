const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn= document.createElement("button")
fortuneBtn.textContent = "Get a fortune"
fortuneBtn.id = "fortune"

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
}

document.body.appendChild(fortuneBtn);
fortuneBtn.addEventListener("click", getFortune);

complimentBtn.addEventListener('click', getCompliment);
