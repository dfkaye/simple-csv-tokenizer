/*
 * simple-csv-tokenizer.js
 * @author David Kaye (@dfkaye)
 * @date 2013-3-19
 *
 * No regex, no iterator method, just one-character-at-a-time parsing of possible csv input string.
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
 */

;(function (exports) {

  exports.tokenize = tokenize;

  var COMMA = ',';
  var EMPTY = '';
  var QUOTE = '"';
  var RE_TRIM = /^\s+|\s+$/g;
  var RE_COMMA = /^(\,)$/;
  var RE_SINGLE_CHARS = /^(\,|\"|\')$/;
  
  function tokenize(csv) {
  
    var len = csv.length;
    var quoted = false;
    var result = [];
    var token = EMPTY;
    
    var ch, i;

    for (i = 0; i < len; i += 1) {

      ch = csv.charAt(i);
      
      if (ch === QUOTE) {
      
        i += 1;
        ch = csv.charAt(i);
        quoted = !quoted;
      }
      
      // push result based on ch and token contents...
      if ((ch === COMMA && !quoted) || i + 1 >= len) {
      
        if (i + 1 >= len && typeof ch !== 'undefined') {
          token += ch;
        }
        
        // replace single chars - , " and ' with empty entry
        if (token.match(RE_SINGLE_CHARS)) {
          
          // if comma, push an empty token ahead of the current token
          if (token.match(RE_COMMA)) {
            result.push(EMPTY);
          }
            
          token = EMPTY;
        }

        // trim whitespace and push this token
        result.push(token.replace(RE_TRIM, EMPTY));
        
        token = EMPTY;
      } else {
        
        // iterate for next ch
        token += ch;
      }
    }

    return result;
  };
  
}(this));
