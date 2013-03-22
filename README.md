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

*coming shortly*

tape & testling
===============

Using tape to test in order to use testling.  tape works on node.js command line.

testling worked for a while but has been broken lately because of browserify ___thanks___

[![browser support](http://ci.testling.com/dfkaye/simple-csv-tokenizer.png)](http://ci.testling.com/dfkaye/simple-csv-tokenizer)



__from node command line__

  cd ./simple-csv-tokenizer
  
  node tests/suite.js
  
