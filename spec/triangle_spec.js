

  var assert = require('assert');

  var triangle = function(side_a, side_b, side_c){
    var isTriangle, isEquilateral, isIsosceles, isScalene;


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

    isIsosceles = function(){
      var sides2 = (side_a == side_b || side_a == side_c || side_c == side_b);
      if (sides2 && !this.isEquilateral()){
        return true;
      }
      else {
        return false;
      }

    };

    isScalene = function(){
      if (!this.isEquilateral() && !this.isIsosceles()){
        return true;
      }
      else {
        return false;
      }
    };

    return { isTriangle    : isTriangle,
             isEquilateral : isEquilateral,
             isIsosceles   : isIsosceles,
             isScalene     : isScalene };
  };



  describe('Triangle#isTriangle', function() {
    it('has three sides and returns true', function() {
      assert.equal(triangle(3, 3, 3).isTriangle(), true);
    });

    it('doesnt have three sides returns false', function(){
      assert.equal(triangle(3, 3, 0).isTriangle(), false);
    });

    it('the sum of any two sides are greater than the third side, return false',function(){
      assert.equal(triangle(2, 2, 7).isTriangle(), false);
    });
  });

  describe('Triangle#isEquilateral', function(){
    it('returns true if all the sides are equal', function(){
      assert.equal(triangle(3, 3, 3).isEquilateral(), true);
    });

    it('returns false if all the sides are not equal',function() {
      assert.equal(triangle(3, 3, 5).isEquilateral(), false);
    });
  });

  describe('Triangle#isIsosceles', function(){
    it('returns true if exactly 2 sides are equal', function(){
      assert.equal(triangle(3, 3, 5).isIsosceles(), true);
    });

    it('returns false all sides are equal', function(){
      assert.equal(triangle(3, 3, 3).isIsosceles(), false);
    });

    it('returns false if no sides are equal', function(){
      assert.equal(triangle(3, 4, 5).isIsosceles(), false);
    });
  });

  describe('Triangle#isScalene', function(){
    it('returns true if no sides are equal', function(){
      assert.equal(triangle(1, 2, 5).isScalene(), true);
    });

    it('returns false if any sides are equal', function(){
      assert.equal(triangle(8,8,3).isScalene(), false);
    });
  });
