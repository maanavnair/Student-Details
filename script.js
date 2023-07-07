let student = document.getElementById('student');
let age = document.getElementById('age');
let roll = document.getElementById('roll');
let add = document.getElementById('add-btn');
let clear = document.getElementById('clear-btn');
let info;

let output = document.createElement('div');
output.setAttribute('class', 'output');

let arr = JSON.parse(localStorage.getItem("studentDetails")) || [];
render(arr);





add.addEventListener("click", () =>{
    if(student.value === "" || age.value === "" || roll.value === ""){
        alert('Enter all fields');
        return;
    }
    output.style.display = "flex";
    info = {
        studentName: student.value,
        studentAge: age.value,
        studentRoll: roll.value,
    }
    arr.push(info);
    localStorage.setItem("studentDetails", JSON.stringify(arr));
    render(arr);
});

clear.addEventListener("click", () =>{
    localStorage.clear();
    arr = [];
    render(arr);
    output.style.display = "none";
})

function render(arr){
    let details = "";
    student.value = "";
    age.value = "";
    roll.value = "";
    if(arr.length === 0){
        output.style.display = "none";
        return;
    }
    for( let i = 0; i < arr.length; i++){
        details += `
        <div class="sec">
        <p>Name: ${arr[i].studentName}</p>
        <p>Age: ${arr[i].studentAge}</p>
        <p>Roll Number: ${arr[i].studentRoll}</p>
        </div>
        `;
    }
    output.innerHTML = details;
    document.querySelector('.container').appendChild(output);
}