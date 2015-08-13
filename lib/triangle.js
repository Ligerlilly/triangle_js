
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
