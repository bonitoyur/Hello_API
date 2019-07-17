var sample = angular.module("sample", ["sdk"]);

sample.controller("sampleController", [
    "$rootScope",
    "rainbowSDK",
    function($rootScope, sdk) {
        "use strict";

        /*********************************************************/
        /**                INITIALIZATION STUFF                 **/
        /*********************************************************/

        console.log("[DEMO] :: Rainbow IM Application");

        var appId = "";
        var appSecret = "";

        var onReady = function onReady() {
            console.log("[DEMO] :: Rainbow SDK is ready!");
        };

        var onLoaded = function onLoaded() {
            console.log("[DEMO] :: Rainbow SDK has been loaded!");

            sdk.initialize('1ae39ba0a2e711e9b93dfdf8eeffd7b5', 'gYMJXlPe7KxDWHJEEeDlSjYPsbFKVEDdUScis44RSf1L3Y4JAuom3Tz1AkGBfzdL').then(function() {
                console.log("[DEMO] :: Rainbow SDK is initialized!");
            }).catch(function() {
                console.log("[DEMO] :: Something went wrong with the SDK...");
            });
        };

        $rootScope.$on(sdk.RAINBOW_ONREADY, onReady);

        $rootScope.$on(sdk.RAINBOW_ONLOADED, onLoaded);

        sdk.useAngularEvents(true);
        sdk.load();

        return true;
    }
]);
