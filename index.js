// Write your solution in this file!
let employee = {
    name: null,
    streetAddress: null,
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee};
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newObj2 = {...employee};
    delete newObj2[key];
    return newObj2;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}