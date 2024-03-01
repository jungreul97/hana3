const hrTeam = {id: 1, dname: '인사팀'};
const devTeam = {id: 2, dname: '개발팀'};
const depts = [hrTeam, devTeam];

const hong = {id: 1, name: 'Hong', dept: 1};
const kim = {id: 2, name: 'Kim', dept: 2};
const emps = [hong, kim, {id:3, name: 'Park', dept: 2}, {id: 4, name: 'Choi', dept: 2}];

const deptMap = new Map();
depts.forEach(dept => {
  deptMap[dept.id] = dept;
});

const empDept = {};
emps.forEach(emp => {
  empDept[emp.id] = emp.dept;
});

const devTeamId = devTeam.id;
const devTeamEmployees = emps.filter(emp => empDept[emp.id] === devTeamId);
const devTeamEmployeeNames = devTeamEmployees.map(emp => emp.name);
console.log(devTeamEmployeeNames);

console.log(deptMap); 
// console.log(empMap); 
console.log(empDept);

console.log(empDept.get(kim).dname); // '개발팀'