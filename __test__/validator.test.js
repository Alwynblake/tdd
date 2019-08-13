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

  it('number', () => {
    let num = 1;
    expect(true).toBeTruthy();
  });

  it('arrays', () => {
    let arr = ['a'];
    expect(true).toBeTruthy();
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

describe ('#validator', () => {
  describe('#islessThanTen', () => {
    test('regular cases', () => {
      expect(validator.isLessThanTen(5)).toEqual(true);
      expect(validator.isLessThanTen(11)).toEqual(false);
      expect(validator.isLessThanTen(10)).toEqual(false);

    });
  });
});

describe ('#validator', () => {
  describe('ifFunction', () => {
    test('that 3 and 5 make 8', () => {
      expect(3 + 5).toBe(8);
    });
  });
});

describe('#isObjectValid', () => {
  test('regular cases', () => {
    const schema = {
      fields: {
        id: {type: 'string'},
        age: {type: 'number'},
        favoriteToys: {type: 'object'}
      },
    };
    expect(validator.isObjectValid(
        {id: 'Jace', age: 2, favoriteToys: {}}, schema
    )).toEqual(true);
  });
});

