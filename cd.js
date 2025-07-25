const endDate = "October 1, 2025 2:09 PM "

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate);
    const now = new Date()
    const diff = (end -  now)/ 1000; // ms into s by dividing by 1000

    if(diff < 0) return;

    console.log(diff)
    inputs[0].value = Math.floor(diff/3600/24) // convert into days
    inputs[1].value = Math.floor(diff / 3600) % 24 // convert into hours
    inputs[2].value = Math.floor(diff / 60) % 60
    inputs[3].value = Math.floor(diff % 60)

}

setInterval(
    () => {
        clock()
    }, 1000
)