/*
 * tape test suite for csv tokenizer
 */
 
var test = require('tape');
var tokenize = require('../src/simple-csv-tokenizer.js').tokenize;

test('verify tokenize exists', function (t) {
  t.plan(1);
  t.strictEqual(typeof tokenize, 'function');
});

test('should trim whitespace from input strings', function (t) {
  var input = '  "this", "is", "a", "string"  ';
  var expected = ["this", "is", "a", "string"];
  var actual = tokenize(input);
  
  t.strictEqual(actual, expected, 'should fail');
  
  t.end();
});

test('should tokenize simple strings', function (t) {
  var input = '"this", "is", "a", "string"';
  var expected = ["this", "is", "a", "string"];
  var actual = tokenize(input);
  
  t.strictEqual(actual, expected, 'should fail');
  
  t.end();
});

test('should tokenize quoted strings', function (t) {
  var input = 'this, "is bad,", split';
  var expected = ["this", "is bad,", "split"];

  t.fail('todo');

  t.end();
});

test('should tokenize quoted-comma strings', function (t) {
  var input = 'this, "is bad,", split';
  var expected = ["this", "is bad,", "split"];

  t.fail('todo');

  t.end();
});

test('should tokenize quoted-quote strings', function (t) {
  var input = 'this, "is bad,", split';
  var expected = ["this", "is bad,", "split"];

  t.fail('todo');

  t.end();
});

test('should tokenize all types in one string', function (t) {
  var input = 'this,is,"some, sample","csv, text, for",you,to,"look",at';
  var expected = ["this", "is", "some, sample", "csv, text, for", "you", "to", "look", "at"];

  t.fail('todo');

  t.end();
});
