


const firstName = document.querySelector('.firstName');
const secndName = document.querySelector('.secndName');
const dateOfBirth = document.querySelector('.dateOfBirth');
const faculty = document.querySelector('.faculty');

const btn = document.querySelector('.btn');
const sortBtn = document.querySelector('.sortBtn');

const warning = document.querySelector('.warning');
const outStnt = document.querySelector('.outStnt');
const outStnts = document.querySelector('.outStnts');

let student = [];
let students = [];



let addStud = (event) => {
    event.preventDefault();

    if (firstName.value === '' || secndName.value === '' || dateOfBirth.value === '' || faculty.value === '') {
        let warngMsg = 'Error! All fields must be filled in!';
        warning.innerHTML = warngMsg;
        return;
    }
    warning.innerHTML = '';
    student.push(firstName.value, secndName.value, dateOfBirth.value, faculty.value);
    students.push(student);

    outStnt.innerHTML = `You just added a student:
                         <br> First Name: ${student[0]}
                         <br> Second Name: ${student[1]}
                         <br> Date of birth: ${student[2]}
                          <br> Faculty: ${student[3]}.`;


    student = [];

    let result = '';

    for (i = 0; i < students.length; i++) {
        let num = i + 1;
        result += `${num}. ${students[i].join(" ")} <br>`
    }

    outStnts.innerHTML = result;
}


btn.addEventListener("click", addStud);

let sortStud = () => {
    students.sort((a, b) => {
        let sNameA = a[1].toLowerCase(), sNameB = b[1].toLowerCase();
        let fNameA = a[0].toLowerCase(), fNameB = b[0].toLowerCase();
        if (sNameA < sNameB)
            return -1;
        if (sNameA < sNameB)
            return 1;
        if (sNameA === sNameB) {
            if (fNameA < fNameB)
                return -1;
            if (fNameA < fNameB)
                return 1;
        }
        return 0
    })

    let result = '';

    for (i = 0; i < students.length; i++) {
        let num = i + 1;
        result += `${num}. ${students[i].join(" ")} <br>`
    }

    outStnts.innerHTML = result;

}

sortBtn.addEventListener("click", sortStud);