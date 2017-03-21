function formatMacAddress(userInput) {
    var macAddress = userInput || null;
    
    if (macAddress !== null) {
        var deviceMac = macAddress.value;
        deviceMac = deviceMac.toUpperCase();
        
        if (deviceMac.length >= 3 && deviceMac.length <= 16) {
            deviceMac = deviceMac.replace(/\W/ig, '');
            deviceMac = deviceMac.replace(/(.{2})/g, "$1:");
        }
        
        document.getElementById(macAddress.id).value = deviceMac;
    }
}

function fieldControl() {
    var macAddressField = document.getElementById('macaddress');
    
    // Make sure field object exists
    if (typeof macAddressField !== 'undefined') {
        
        // Attache event listner
        macAddressField.addEventListener('keyup', function() {
            
            // Allow user to use the backspace key
            if (event.keyCode !== 8) {
                
                // Format field value
                formatMacAddress(this);
            }
        }, false);
    }
}

// Attache formatter function' event listner after page is done loading.
window.onload = fieldControl();
