function formatMacAddress(userInput) {
    var macAddress = userInput || null;
    
    if (macAddress !== null) {
        var deviceMac = macAddress.value;
        
        // Change all letters to upper case
        deviceMac = deviceMac.toUpperCase();
        
        // Input string should be one less in lenght than a qualified MAC address (17)
        if (deviceMac.length >= 3 && deviceMac.length <= 16) {
            
            // Remove all but alphanumeric characters
            deviceMac = deviceMac.replace(/\W/ig, '');
            
            // Append a colon after every two characters
            deviceMac = deviceMac.replace(/(.{2})/g, "$1:");
        }
        
        document.getElementById(macAddress.id).value = deviceMac;
    }
}
