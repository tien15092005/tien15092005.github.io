let students = [];
let selectedIndex = -1;


class Student {
    constructor(id, name, dob, className, gpa) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.className = className;
        this.gpa = gpa;
    }

    update(name, dob, className, gpa) {
        this.name = name;
        this.dob = dob;
        this.className = className;
        this.gpa = gpa;
    }
}

function addStudent() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let className = document.getElementById("class").value;
    let gpa = document.getElementById("gpa").value;

    let sv = new Student(id, name, dob, className, gpa);
    students.push(sv);
    render();
}

function render() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((sv, index) => {
        let row = `
            <tr onclick="selectStudent(${index})">
                <td>${sv.id}</td>
                <td>${sv.name}</td>
                <td>${sv.className}</td>
                <td>${sv.dob}</td>
                <td>${sv.gpa}</td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

function selectStudent(index) {
    selectedIndex = index;
    let sv = students[index];

    document.getElementById("id").value = sv.id;
    document.getElementById("name").value = sv.name;
    document.getElementById("dob").value = sv.dob;
    document.getElementById("class").value = sv.className;
    document.getElementById("gpa").value = sv.gpa;
}

function deleteStudent() {
    if (selectedIndex !== -1) {
        students.splice(selectedIndex, 1);
        selectedIndex = -1;
        render();
    }
}

function updateStudent() {
    if (selectedIndex !== -1) {
        let sv = students[selectedIndex];
        sv.update(
            document.getElementById("name").value,
            document.getElementById("dob").value,
            document.getElementById("class").value,
            document.getElementById("gpa").value
        );
        render();
    }
}
