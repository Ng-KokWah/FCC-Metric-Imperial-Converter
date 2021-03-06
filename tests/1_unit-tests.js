/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),'32');
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '3.1mi';
      assert.equal(convertHandler.getNum(input),'3.1');
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = '1/2km';
      assert.equal(convertHandler.getNum(input),'1/2');
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '5.4/3lbs';
      assert.equal(convertHandler.getNum(input),'5.4/3');
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '5/3/3lbs';
      assert.equal(convertHandler.getNum(input),'5/3/3');
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = 'kg';
      assert.equal(convertHandler.getNum(input), {"error":"invalid number"});
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','mi','km','lbs','kg','L'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(input), ele);
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input = 'adasd';
      assert.equal(convertHandler.getUnit(input), {"error":"invalid unit"});
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','litres','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = '3L';
      assert.equal(convertHandler.convert(input), 0.79252);
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = '3.1mi';
      assert.equal(convertHandler.convert(input), 4.98895);
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = '5km';
      assert.equal(convertHandler.convert(input), 3.10686);
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = '10lbs';
      assert.equal(convertHandler.convert(input), 4.53592);
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = '4.1kg';
      assert.equal(convertHandler.convert(input), 9.03896);
      done();
    });
    
  });

});