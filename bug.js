```javascript
// Incorrect usage of $inc operator for updating nested fields
db.collection.updateOne( { "_id": 1 }, { $inc: { "nested.field": 1 } } );
```