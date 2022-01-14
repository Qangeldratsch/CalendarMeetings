const yeardiv = document.getElementById("year")
const monthdiv = document.getElementById("month")
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let nav = 0
document.querySelector(".previousMonth").addEventListener("click", e => {
    e.preventDefault();
    nav--;
    index(nav)
})
document.querySelector(".nextMonth").addEventListener("click", e => {
    e.preventDefault();
    nav++;
    index(nav)
})

function index(nav){
    console.log('index: ', nav);
    document.querySelector(".days").innerHTML = ""
    const today = new Date()
    const date = new Date(today.getFullYear(), today.getMonth() + nav)

    const month = date.getMonth()
    const year = date.getFullYear()
    const firstDayOfMonth = new Date(year, month, 1).toLocaleString("en-GB", {weekday: "long"});
    const daysInMonth = new Date(year, month + 1, 0).toLocaleString("de-DE", {day: "numeric"});
    const invisibleDays = weekdays.indexOf(firstDayOfMonth)

    monthdiv.innerText = date.toLocaleString("de-DE", {month: "long"});
    yeardiv.innerText = date.getFullYear().toString()

    for (let i = 1; i <= parseInt(daysInMonth) + invisibleDays; i++){

        const daydiv = document.createElement("div")
        daydiv.classList.add("day")

        if (i <= invisibleDays){
            daydiv.id = "invisibleday"
        }
        else {
            const dayNumber = document.createElement("div")
            dayNumber.innerText = (i - invisibleDays).toString()
            dayNumber.classList.add("dayNumber")
            daydiv.appendChild(dayNumber)
            if (i - invisibleDays === today.getDate() && nav === 0) {
                dayNumber.id = "currentDay"
            }
        }
        document.querySelector(".days").appendChild(daydiv)
    }
}
console.log('index called')
index(nav)