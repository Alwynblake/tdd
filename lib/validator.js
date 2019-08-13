'use strict';

// Vinicio - this is similar to module.exports = {};, but you are giving it an easier to use name
let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */

// Ideas for rules : Positive values / Negative values / odd values / even values /
// specific values / bigger than five /

// if you need to setup more complex rules, remember that rules can be an object too
validator.isValid = (input, rules) => {
  // return true;
  return typeof input === 'string';

  if (rules === 'object') {

    // Vinicio - how do I check if the type of the input is an object
    validator.isObject = (data, schema) => {};
  }

  if(rules === 'object') {
    // I'm checking if the value is less than zero, because the user wants to
    // check if the value is negative
    return input < 0;
  }

  if(rules === 'one') {
    // I'm checking if the value is 1
    return input === 1;
  }

};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};


//I'm checking that the value is less than 10
validator.isLessThanTen = (input) => {
  return input < 10;
};

//I'm checking that it is a function
validator.ifFunction = () => {};

//I'm checking that it is an object
validator.isObjectValid = (data, schema) => {};


