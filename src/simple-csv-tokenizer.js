/*
 * simple-csv-tokenizer.js
 * @author David Kaye (@dfkaye)
 * @date 2013-3-19
 *
 * No regex, no iterator, just simple one-character-at-a-time parsing of possible csv input string.
 * Calls itself on subsequent substrings.
 *
 * Some expectations of the input (taken from http://www.csvreader.com/csv_format.php):
 *
 *  Fields are separated by commas.
 *
 *  Fields containing a comma must be escaped.  Excel escapes these values by embedding the field 
 *      inside a set of double quotes, generally referred to as text qualifiers (we expect that here).
 *
 *  In fields containing a double quote, the double quote must be escaped by replacing the single 
 *      double quote with two double quotes
 *
 *  Leading and trailing whitespace characters, commas and tab characters, adjacent to commas or record 
 *      delimiters are trimmed.
 *
 *  To guarantee preservation of leading and trailing whitespace characters, a field must be text 
 *      qualified by embedding the field inside a set of double quotes.
 *
 */

;(function (exports) {

  exports.tokenize = tokenize;

  var COMMA = ',';
  var QUOTE = '"';

  function tokenize(csv) {

    var result = [];

    var chars = csv.replace(/^\s+|\s+$/g, '').split('');
    var len = chars.length;
    var i;
    var ch;
    var token;
    
    for (i = 0; i < len; i += 1) {
        
      // hold on - more to come
      //result = tokenize();
      ch = chars[i];

    }

  };
  
}(this));