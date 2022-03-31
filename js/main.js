let add          = document.getElementById("add");
let firstList    = document.getElementById("list1");
let input1       = document.getElementById("syssla");
let secondList   = document.getElementById("list2");
let reset        = document.getElementById("reset");
let section      = document.getElementById("first-section");
let main         = document.getElementById("content");
let errorMessage = document.createElement("p");


add.addEventListener('click', function () {
    if (input1.value.trim() == "") {
        errorMessage.style.color = "red";
        errorMessage.innerText = "Får ej lägga till en tom syssla";
        section.appendChild(errorMessage);
    } else {
        let addItems = document.createElement("LI");
        let input = document.createElement("input");
        input.value = input1.value;
        input.disabled = true;
        errorMessage.innerHTML = "";

        let change = document.createElement("button");
        change.className = "change";
        change.innerText = "Ändra";

        let done = document.createElement("button");
        done.className = "done";
        done.innerText = "Färdig";

        let remove = document.createElement("button");
        remove.className = "remove";
        remove.innerText = "Radera";

        change.addEventListener("click", events.change);

        done.addEventListener("click", events.done);

        remove.addEventListener("click", events.remove);

        input1.value = "";

        firstList.appendChild(addItems);
        addItems.append(input, change, done, remove);
    }
})

reset.addEventListener('click', function () {
    firstList.innerHTML    = "";
    secondList.innerHTML   = "";
    errorMessage.innerHTML = "";
})

let events = {

    change: function(e) {
        if (e.target.previousElementSibling.value.trim() == "") {
            errorMessage.style.color = "red";
            errorMessage.innerText= "Får ej ändra till en tom syssla";
            section.appendChild(errorMessage);
        } else {
            errorMessage.innerHTML = "";
            if (e.target.previousElementSibling.disabled == true) {
                e.target.previousElementSibling.disabled = false;
                e.target.style.backgroundColor ="lightgreen";
                e.target.innerText = "Spara";
            } else {
                e.target.previousElementSibling.disabled = true;
                e.target.style.backgroundColor ="yellow";
                e.target.innerText = "Ändra";
            }
        }
    },

    remove: function (e) {
        e.target.parentNode.remove();
        errorMessage.innerHTML = "";
    },

    done: function (e) {
        e.target.parentNode.remove();
        main.lastElementChild.lastElementChild.appendChild(e.target.parentNode);
        e.target.nextSibling.style.margin ="5px";
        e.target.remove();
    }
}









// let add = document.getElementById("add");
// let firstList = document.getElementById("list1");
// let input1 = document.getElementById("syssla")
// let secondList = document.getElementById("list2")
// let reset = document.getElementById("reset")
// let errorMessage = document.createElement("p")
// let section = document.getElementById("first-section")


// add.addEventListener('click', function () {
//     if (input1.value == "") {
//         errorMessage.style.color = "red"
//         errorMessage.innerHTML = "Får ej lägga till en tom syssla"
//         section.appendChild(errorMessage)
//     } else {
//         let addItems = document.createElement("LI");
//         let input = document.createElement("input")
//         input.value = input1.value;
//         input.disabled = true;
//         errorMessage.remove();

//         let change = document.createElement("button");
//         change.className = "Change"
//         change.innerText = "Ändra";

//         change.addEventListener('click', function () {
//             if (input.value == "") {
//                 errorMessage.style.color = "red"
//                 errorMessage.innerHTML = "Får ej ändra till en tom syssla"
//                 section.appendChild(errorMessage)
//             } else {
//                 errorMessage.remove();
//                 if (input.disabled == true) {
//                     input.disabled = false;
//                     change.innerText = "Spara"
//                 } else {
//                     input.disabled = true;
//                     change.innerText = "Ändra"
//                 }
//             }
//         })

//         let done = document.createElement("button");
//         done.className = "done"
//         done.innerText = "Färdig"

//         done.addEventListener('click', function () {
//             addItems.remove();
//             done.remove();
//             input.disabled = true;
//             secondList.append(addItems)
//             addItems.append(input, change, remove)
//         })

//         let remove = document.createElement("button");
//         remove.className = "remove"
//         remove.innerText = "Radera"

//         remove.addEventListener('click', function () {
//             addItems.remove();
//         })

//         input1.value = "";

//         firstList.append(addItems)
//         addItems.append(input, change, done, remove)
//     }
// })

// reset.addEventListener('click', function () {
//     firstList.innerHTML = "";
//     secondList.innerHTML = "";
// })





