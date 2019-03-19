/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    for(var i=0; i<input.length; i++) {
      if(isNaN(parseInt(input[i])) == false) {
        if(input[i+1].includes('.')) {
          result += input[i] + '.'; 
        }
        else if(input[i+1].includes('/')) {
         result += input[i] + '/'; 
        }
        else {
          result += input[i];
        }
      }
    }
    
    /*if(input.includes('.') || input.includes('/')) {
      result = result.substr(0, result.length - 1)
    }*/
    
    if(result.includes('undefined')) {
       result = result.replace('undefined', ''); 
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    for(var i=0; i<input.length; i++) {
      if(isNaN(parseInt(input[i])) == true) { 
        if(input[i] != '.') {
          if(input[i] != '/') {
            result += input[i]; 
          }
        }
      }
    }
    
    if(result.includes('undefined')) {
       result = result.replace('undefined', ''); 
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit) {
      case 'gal':
        result='L';
        break;
      case 'L':
        result='gal';
        break;
      case 'lbs':
        result='kg';
        break;
      case 'kg':
        result='lbs';
        break;
      case 'mi':
        result='km';
        break;
      case 'km':
        result='mi';
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit){//.toLowerCase()) {
      case 'gal':
        result='gallons';
        break;
      case 'L':
        result='litres';
        break;
      case 'lbs':
        result='pounds';
        break;
      case 'kg':
        result='kilograms';
        break;
      case 'mi':
        result='miles';
        break;
      case 'km':
        result='kilometers';
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if(initUnit == 'gal' || initUnit == 'L') {
      if(initUnit == 'gal') {
        if(initNum.includes('/')) {
          result = eval(initNum) * galToL;
        }
        else {
          result = parseFloat(initNum) * galToL;
        }
      }
      else {
        if(initNum.includes('/')) {
          result = eval(initNum) / galToL;
        }
        else {
          result = parseFloat(initNum) / galToL;
        }
      }
    }
    else if(initUnit == 'lbs' || initUnit == 'kg'){
      if(initUnit == 'lbs') {
        if(initNum.includes('/')) {
          result = eval(initNum) * lbsToKg;
        }
        else {
          result = parseFloat(initNum) * lbsToKg;
        }
      }
      else {
        if(initNum.includes('/')) {
          result = eval(initNum) / lbsToKg;
        }
        else {
         result = parseFloat(initNum) / lbsToKg;
        }
      }
    }
    else {
      if(initUnit == 'mi') {
        if(initNum.includes('/')) {
          result = eval(initNum) * miToKm;
        }
        else {
          result = parseFloat(initNum) * miToKm;
        }
      }
      else {
        if(initNum.includes('/')) {
          result = eval(initNum) / miToKm;
        }
        else {
          result = parseFloat(initNum) / miToKm;
        }
      }
    }
    return result;
  };
  
  //{initNum: 3.1, initUnit: 'mi', returnNum: 5.0000008, returnUnit: 'km', string: '3.1 miles converts to 5.00002 kilometers'}
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = initNum + " " + this.spellOutUnit(initUnit) + ' converts to ' + returnNum.toFixed(5) + " " + this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
