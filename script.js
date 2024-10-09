//your JS code here. If required.
// Create the student object with a name property
const student = {
  name: "John Doe"
};

// Add getKeys method to Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Example usage
console.log(student.getKeys()); // Output: ['name']
