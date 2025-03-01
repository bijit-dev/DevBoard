// cureent date function
function cureentDate() {
    let date = new Date();
    let optionsWeekday = { weekday: "short" };
    let optionsDate = { month: "short", day: "2-digit", year: "numeric" };

    let weekday = date.toLocaleDateString("en-US", optionsWeekday);
    let day = date.toLocaleDateString("en-US", optionsDate);

    document.getElementById("today").innerHTML = `
    ${weekday},
    <br>
    <span class="font-bold">${day}</span>
    `
    return;
}
cureentDate()

// blog page btn 
document.getElementById("blog-btn").addEventListener("click", function () {
    window.location.href = "../blog.html"
})


// card btn 
const taskButtons = document.querySelectorAll(".task-btn")

for (let i = 0; i < taskButtons.length; i++) {
    const taskBtn = taskButtons[i];
    taskBtn.addEventListener("click", function () {
        alert("Board Updated Successfully");

        taskBtn.classList.remove("btn-active");
        taskBtn.classList.add("btn-disabled");

        
    })
}

