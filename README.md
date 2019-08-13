# test driven development

## Author:  Alistair Blake

### Purpose
* This is an object validation module that exports a "validate" method that can, 
based on the inputs, validate whether or not an entity is satisfactory.

* Things we want to be able to validate:

Is the entity itself the right type (array, object, function etc)

All "required" properties present and have values.

* Input needs to be an object
* Rules needs to be an object too that defines the required properties
* and the expected values for any property that specifies a type.

### Recommended approach:
* Implement one numeric rule
* Implement one type-based rule
* Implement the required properties rule

### to run test
'npm run test'
