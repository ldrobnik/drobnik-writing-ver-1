"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResetScrollService = (function () {
    function ResetScrollService() {
    }
    ResetScrollService.prototype.resetScroll = function () {
        window.scrollTo(0, 0); //to reset position when clicking routing links
    };
    return ResetScrollService;
}());
exports.ResetScrollService = ResetScrollService;
