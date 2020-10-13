## Lodash
Lodash is a swiss army knife toolbelt of a module. For example, there's a shuffle built in that's useful for coding card games.

1. Write a simple program that makes use of lodash's shuffle function.
2. Write a simple program that makes use of lodash's sum, max, or mean function.
. Look through the lodash documentation for another function that is interesting to you, write a program that makes use of it.

var _ = require('lodash');
const array = _.shuffle([1, 2, 3, 4]);
console.log(array);

const sum = _.sum([4, 4, 4, 4]);
console.log(sum);