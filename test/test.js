const expect = require('chai').expect
const Addition = require('../index');


describe("Add numbers",function(){
 it("add two numbers together", function(){
  let someInstance = new Addition();
  expect(someInstance.add(2,3)).to.equal(5)
 })
})