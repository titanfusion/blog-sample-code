function formatCostNumber(amount, curSym) {
    var unformattedNumber = amount || null;
    var addSymbol = curSym || false;
    var formattedNumber = "0";
    
    var formatNumber = function(toFormat) {
            if (toFormat.length >= 4) {
                
                // Pars string in revers, track number of tiems looped
                for (var i = toFormat.length, hops = 0, turns = 0; i >= 1; i--, turns++) {
                    
                    // If moved 3 characters, insert comma
                    if (hops === 3 && toFormat.charAt(i) !== ',') {
                        toFormat = toFormat.substr(0, i) + ',' + toFormat.substr(i);
                        
                        // Reset count since last ',' insertion, update sting lenght
                        hops = 0;
                        i = toFormat.length - turns;
                    } else {
                        hops++;
                    }
                }
            }
            
            return toFormat;
        };
    
    if (unformattedNumber !== null && typeof +unformattedNumber === 'number') {
        // Convert number to string.
        var numberString = unformattedNumber.toString();
        
        // If string has a number split at '.' and format string before period
        if (numberString.indexOf('.') !== -1) {
            numberString = numberString.split('.');
            formattedNumber = formatNumber(numberString[0]);
            formattedNumber = formattedNumber + '.' + numberString[1];
        } else {
            formattedNumber = formatNumber(numberString);
        }
    }
    
    // Add a currency symbol
    return (addSymbol) ? '$' + formattedNumber : formattedNumber;
}
