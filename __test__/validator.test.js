'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests easier to read and understand

  it('valid strings', () => {
    let invalidData = [1,[],{}, () => {}, true];
    for (let invalidValue of invalidData) {
    expect(validator.isString(invalidValue)).toBeFalsy();
  }
});

    //regular cases
    expect(validator.isString(str)).toBeTruthy();

    //edge cases
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });

  it('numbers', () => {
    expect(true).toBeFalsy();
  });

  it('arrays', () => {
    expect(true).toBeFalsy();
  });

  it('objects', () => {
    expect(true).toBeFalsy();
  });

  it('booleans', () => {
    expect(true).toBeFalsy();
  });

  it('functions', () => {
    expect(true).toBeFalsy();
  });

describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    let({person: { hair: { color}}}).toBeTruthy();
    expect(true).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(true).toBeFalsy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(true).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(true).toBeFalsy();
  });

  // TODO: Cover so, so many more cases

});
