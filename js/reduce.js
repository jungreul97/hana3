const users = [{ id: 1, name: 'Hong' }, { id: 20, name: 'Kim' }, { id: 3, name: 'Lee' } ];
console.log(users.reduce( (s, user) => `${s} ${user.name}`,  ''));

const objs = [ {id: 1}, {name: 'Hong'}, {addr: 'Seoul', id: 5}];
objs.reduce((acc,item) => ({...acc, ...item}),{});
console.log("🚀 ~ objs:", objs);
assert.deepStrictEqul(obj,{id: 5, name:'Hong',addr: 'Seoul'});
