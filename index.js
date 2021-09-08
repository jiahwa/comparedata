const {main} = require('./compare');
const left = require('./test/vue2/components');
const right = require('./test/vue3/components');

main(left.components, right.components);