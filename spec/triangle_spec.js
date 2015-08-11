
  //require('../lib/triangle.js');

  var assert = require('assert');

  function Triangle(side_a, side_b, side_c){
    var isTriangle;


    isTriangle = function(){
      var sides_a_b;
      var sides_a_c;
      var sides_c_b;
      var sides;
      console.log(side_c);
      sides_a_b = (side_a + side_b) >= side_c ? true : false;
      sides_b_c = (side_a + side_b) >= side_a ? true : false;
      sides_c_a = (side_c + side_a) >= side_b ? true : false;
      sides = (side_a !== 0 && side_b !== 0 && side_c !== 0) ? true : false;
      if(sides && sides_a_b && sides_b_c && sides_c_a) {
        return true;
      }
      else {
        return false;
      }
    };

    isEquilateral = function(){
      if (side_a === side_b && side_c === side_b){
        return true;
      }
      else {
        return false;
      }
    };

    return { isTriangle    : isTriangle,
             isEquilateral : isEquilateral };
  }



  describe('Triangle#isTriangle', function() {
    it('has three sides and returns true', function() {
      var triangle;
      triangle = new Triangle(3, 3, 3);
      assert.equal(triangle.isTriangle(), true);
    });

    it('doesnt have three sides returns false', function(){
      var triangle;
      triangle = new Triangle(3, 3, 0);
      assert.equal(triangle.isTriangle(), false);
    });

    it('the sum of any two sides are greater than the third side, return false',function(){
      var triangle;
      triangle = new Triangle(2, 2, 7);
      assert.equal(triangle.isTriangle(), false);
    });
  });

  describe('Triangle#isEquilateral', function(){
    it('returns true if all the sides are equal', function(){
      var triangle;
      triangle = new Triangle(3, 3, 3);
      assert.equal(triangle.isEquilateral(), true);
    });

    it('returns false if all the sides are not equal',function() {
      var triangle;
      triangle = new Triangle(3, 3, 5);
      assert.equal(triangle.isEquilateral(), false);
    });
  });
