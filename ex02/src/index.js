//
var myStr = "Paragon is the best!";
function useMethods (str) {
    var myStrSplit = myStr.split(""); 
    var myStrReverse = myStrSplit.reverse();
    var myStrJoin = myStrReverse.join('');
}

//

module.exports = useMethods;