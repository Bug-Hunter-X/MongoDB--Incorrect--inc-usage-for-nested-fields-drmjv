# MongoDB: Incorrect $inc usage for nested fields
This repository demonstrates a common error when using the `$inc` operator in MongoDB to update nested fields. Incorrect usage can lead to unexpected results, particularly when dealing with nested structures.

## Bug Description
The provided code snippet incorrectly attempts to increment a nested field using the `$inc` operator.  This will fail to update the nested field correctly. 

## Bug Solution
The correct way to increment a nested field is shown in `bugSolution.js`.  It uses the proper dot notation to target the specific nested field for incrementing.

## Usage
1. Clone the repository.
2. Make sure you have MongoDB and Node.js installed.
3. Run `node bug.js` (this will showcase the incorrect behavior).
4. Run `node bugSolution.js` (this demonstrates the correct approach).
