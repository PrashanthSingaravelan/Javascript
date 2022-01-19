var list1 = ["Prashanth", "Kumar", "Praveen", "balu", "lavanya"]

var guest_name = prompt("What is your name?");
if (list1.includes(guest_name)) {
    console.log(guest_name + " exists");
} else {
    console.log(guest_name + " doesn't exists");
}