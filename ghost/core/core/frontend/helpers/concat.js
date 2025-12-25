const {SafeString} = require('../services/handlebars');

module.exports = function concat(...args) {
    const options = args.pop();
    const separator = options.hash.separator || '';
    const simpleString = options.hash.simpleString || false;
    // Flatten arrays - if an argument is an array, spread its elements
    const flattenedArgs = args.flat();
    
    if (simpleString === true) {
        return (flattenedArgs.join(separator));
    }
    else {
    return new SafeString(flattenedArgs.join(separator));
    }
};
