// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-lbs-trace.js.
import { name as packageName } from "meteor/meteor-lbs-trace";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-lbs-trace - example', function (test) {
  test.equal(packageName, "meteor-lbs-trace");
});
