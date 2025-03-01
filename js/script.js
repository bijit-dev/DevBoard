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
}
cureentDate()