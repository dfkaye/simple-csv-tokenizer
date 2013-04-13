simple-csv-tokenizer
====================

parses a CSV string in JavaScript, returns an array of CSV parts.

why
===

It's never come up in 13+ years of __front end development__ but it did come up 
as an interview question last year ~ I couldn't solve it completely (started 
with a regex - "now I have two problems") ~ so here I am getting parse muscles 
into shape.

implementation & tests
====================

Not very sophisticated - no streams, no regex pre-processing, just pedestrian 
one-char-at-a-time iteration of the input string, populating a result array with
tokens.

Some example input is taken from [Grey Wyvern](http://www.greywyvern.com/?post=258) 
and from [Ben Nadel](http://www.bennadel.com/blog/2241-Parsing-CSV-Data-With-An-Input-Stream-And-A-Finite-State-Machine.htm).

Example:

    var input = '"hello, how are you?", "I am fine, thanks", "That\'s good"';
    var expected = ["hello, how are you?", "I am fine, thanks", "That\'s good"];
    var actual = tokenize(input);
    
    assert:
    
        actual.length === expected.length && actual.join() === expected.join()


tape & testling
===============

Using [tape](https://github.com/substack/tape) to run tests from the node.js 
command line, and in order to use [testling](http://ci.testling.com/) from the
github service hook.

[![browser support](https://ci.testling.com/dfkaye/simple-csv-tokenizer.png)](https://ci.testling.com/dfkaye/simple-csv-tokenizer)

[Things I've found about checking things in for testling to work](https://gist.github.com/dfkaye/5225546)


__from node command line__

    cd ./simple-csv-tokenizer
  
    node tests/suite.js
