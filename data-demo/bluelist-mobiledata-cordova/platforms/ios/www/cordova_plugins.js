cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.ionic.keyboard/www/keyboard.js",
        "id": "com.ionic.keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/console-via-logger.js",
        "id": "org.apache.cordova.console.console",
        "clobbers": [
            "console"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/logger.js",
        "id": "org.apache.cordova.console.logger",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/com.ibm.mobile.cordova.ibmbluemix/www/IBMBluemixHybrid.js",
        "id": "com.ibm.mobile.cordova.ibmbluemix.hybrid",
        "clobbers": [
            "IBMBluemix.hybrid"
        ]
    },
    {
        "file": "plugins/com.ibm.mobile.cordova.ibmdata/www/IBMDataHybrid.js",
        "id": "com.ibm.mobile.cordova.ibmdata.hybrid",
        "clobbers": [
            "IBMData.hybrid"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.ionic.keyboard": "1.0.3",
    "org.apache.cordova.console": "0.2.11",
    "org.apache.cordova.device": "0.2.12",
    "com.ibm.mobile.cordova.ibmbluemix": "1.0.0-20141008-1346",
    "com.ibm.mobile.cordova.ibmdata": "1.0.0-20141008-1346"
}
// BOTTOM OF METADATA
});