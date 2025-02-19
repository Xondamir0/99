const student = JSON.parse(localStorage.getItem("user"));
const infoStudentBox = document.querySelector(".student__wrapper")
const logOut = document.querySelector(".reset");
const studentShop = document.querySelector("#shop");


if (student) {
    infoStudentBox.innerHTML =
        `
    <img src="./images/Frame36614.png">
    <img src="./images/level.png">
    <h2 class="student__title" >${student.name} ${student.surname}</h2>
    <p>ID: ${student.id} Группа: ${student.group}</</p>
        <p>Текущий учитель:${student.teacher}</p>
        <p class= "back">
        
        Количество монет: <img src="./images/coin1.png" alt="coin" style="width: 20px; height: 20px; "> ${student.coin} 
    </p>

        <p> </p>

    <p class = "XP" >Здоровье:  <img src="./images/XP.png" alt="coin" style="width: 20px; height: 20px; "> ${student.hp}</p>
    
    
    `

    logOut.addEventListener('click', () => {
        localStorage.removeItem("user");
        window.location.href = "./index.html";
    });
}
studentShop.addEventListener("click" , () => {
    window.location.href = "./shop.html";
})

