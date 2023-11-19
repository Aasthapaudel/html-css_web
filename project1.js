console.log('Welcome to Notes App')
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj == JSON.parse(notes);
    }
    notes.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notes));
    addTxt.value = "";
    console.log(notesObj);
})