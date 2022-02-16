//Завдання 1
let user = {
    name: "John",
    years: 30
}
  
let {name, years: age, isAdmin = false} = user

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

//Завдання 2
function topSalary(salaries) {

    let maxSalary = 0
    let employeeWithTopSalary = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            employeeWithTopSalary = name
            maxSalary = salary
        }
    }
  
    return employeeWithTopSalary
}

topSalary(salaries)