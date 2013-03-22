/*
 * tape test suite for csv tokenizer
 */
 
var test = require('tape');
var tokenize = require('../src/simple-csv-tokenizer.js').tokenize;

test('verify tokenize exists', function (t) {

  t.strictEqual(typeof tokenize, 'function');
  t.end();
});

test('should trim whitespace from input', function (t) {

  var expected = 'should be trimmed';
  var input = '  ' + expected + '  ';
  var actual = tokenize(input);
    
  t.strictEqual(actual.length, 1, 'should have one entry');
  t.strictEqual(actual.join(), expected, 'should be same entry');
  t.end();
});

test('should tokenize array-like strings', function (t) {

  var input = 'this, is, a, string';
  var expected = ["this", "is", "a", "string"];
  var actual = tokenize(input);
  
  t.strictEqual(actual.length, expected.length, 'should be same length');
  t.strictEqual(actual.join(), expected.join(), 'should be same array');
  t.end();
});

test('should tokenize VB-quoted strings', function (t) {

  var input = '"contains", "a ""VB-quoted string""';
  var expected = ['contains', 'a "VB-quoted string"'];
  var actual = tokenize(input);
  
  ////console.log(actual);
  t.strictEqual(actual.length, expected.length, 'should be same length');
  t.strictEqual(actual.join(), expected.join(), 'should be same array');   
  t.end();
});

test('should tokenize whitespaced strings', function (t) {

  var input = '" this ", " is ", " a ", " string "';
  var expected = ["this", "is", "a", "string"];
  var actual = tokenize(input);
  
  t.strictEqual(actual.length, expected.length, 'should be same length');
  t.strictEqual(actual.join(), expected.join(), 'should be same array');
  t.end();
});

test('should tokenize quoted-comma strings', function (t) {

  var input = '"hello, how are you?", "I am fine, thanks", "That\'s good"';
  var expected = ["hello, how are you?", "I am fine, thanks", "That\'s good"];
  var actual = tokenize(input);
  
  //console.log(actual);
  t.strictEqual(actual.length, expected.length, 'should be same length');
  t.strictEqual(actual.join(), expected.join(), 'should be same array');   

  t.end();
});

test('should tokenize all types in one string', function (t) {

  var input = 'this, is, "some, sample", "csv, text, for", you, to, "look", at';
  var expected = ["this", "is", "some, sample", "csv, text, for", "you", "to", "look", "at"];
  var actual = tokenize(input);
  
  //console.log(actual);
  t.strictEqual(actual.length, expected.length, 'should be same length');
  t.strictEqual(actual.join(), expected.join(), 'should be same array');   

  t.end();
});

test('should not parse newline into separate tokens', function (t) {

  var input = 'newline\nexample, "with, commas"';
  var expected = ["newline\nexample", "with, commas"];
  var actual = tokenize(input);

  //console.log(actual);  
  t.strictEqual(actual.length, expected.length, 'should be same length');
  t.strictEqual(actual.join(), expected.join(), 'should be same array');   

  t.end();
});

test('table with multiple rows with various and/or empty input', function (t) {

  /*
   * example data taken from
   * http://www.bennadel.com/blog/2241-Parsing-CSV-Data-With-An-Input-Stream-And-A-Finite-State-Machine.htm
   */
      
  var table = [
     'ID,Name,Nick Name',
     '1,Bob Smith,"Bob ""The Horse"" Smith"',
     '2,"Darren",D-Rock',
     '3,"Tony","Tony ""2 Legs"""',
     '4,Vito Caprilo,Vito the Sink',
     '"5","Frank","Frank the Tank"',
     '6,Pete,""',
     '7,,'
    ];
    
  var length = table.length;
  
  var input, expected, actual;
    
  for (var i = 0; i < length; i += 1) {
    
    input = table[i];
    actual = tokenize(input);

    //console.log(actual);
    t.strictEqual(actual.length, 3, 'row length should be 3');
  }
  
  t.end();
});
