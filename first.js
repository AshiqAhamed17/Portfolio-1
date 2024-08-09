let countEl = document.getElementById("count")
let saveEl = document.getElementById("saveel")


let count = 0;

function increment() {
  count += 1;
  countEl.textContent = "No.of peoples: " + count
}

function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  console.log(count)
  countEl.textContent = "Initial = 0"
  count = 0
}
