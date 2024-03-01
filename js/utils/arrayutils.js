Object.defineProperties(Array.prototype, {
    first: {
        get: function () {
        return this[0];
        },
    },
    last: {
        get: function () {
        return this[this.length - 1];
        // return this.slice(-1)[0];
        },
    },
});
Array.prototype.uniqBy = function(proop){
    return [...new Set(this.map(item =>item[prop]))];
};

const hong = {id: 1, name: 'Hong', dept: 'HR'};
const kim = {id: 2, name: 'Kim', dept: 'Server'};
const lee = {id: 3, name: 'Lee', dept: 'Front'};
const park = {id: 4, name: 'Park', dept: 'HR'};
const ko = {id: 7, name: 'Ko', dept: 'Server'};
const loon = {id: 6, name: 'Loon', dept: 'Sales'};
const choi = {id: 5, name: 'Choi', dept: 'Front'};
const users = [ hong, kim, lee, park, ko, loon, choi ];

Array.prototype.sortBy = function(prop,direction = 'asc'){
    return this.sort((a,b) => (a[prop]>b[prop]? 1:-1));
}



