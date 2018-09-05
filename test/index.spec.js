const chai = require('../node_modules/chai')
const validFunction = require('../index')
const cardValidator = validFunction.cardValidator
const expect = chai.expect

describe('cardValidator()', () => {
  it('Should return true to 36490102462661', function() {
    expect(cardValidator(36490102462661)).to.equal(true)
  })

  it('Should return false to 337546', function() {
    expect(cardValidator(337546)).to.equal(false)
  })

  it('Should return "Function called with no value" to ""', () =>{
    var badFn = function () { cardValidator("") };
    expect(badFn).to.throw('Function called with no value');
  });

  it('Should return "Type only numbers" to "Hello"', () =>{
    var badFn = function () { cardValidator("Hello") };
    expect(badFn).to.throw('Type only numbers');
  });

  it('Should return "Type only numbers" to "36490102462661"', () =>{
    var badFn = function () { cardValidator("36490102462661") };
    expect(badFn).to.throw('Type only numbers');
  });

  it('Should return "One number is not a valid card" to 5', () =>{
    var badFn = function () { cardValidator(5) };
    expect(badFn).to.throw('One number is not a valid card');
  });
})