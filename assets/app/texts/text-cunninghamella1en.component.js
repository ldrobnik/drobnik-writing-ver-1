"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var reset_scroll_service_1 = require("../services/reset-scroll.service");
var TextCunninghamella1EnComponent = (function () {
    function TextCunninghamella1EnComponent() {
    }
    TextCunninghamella1EnComponent.prototype.resetScroll = function () {
        var scrollService = new reset_scroll_service_1.ResetScrollService();
        scrollService.resetScroll();
    };
    return TextCunninghamella1EnComponent;
}());
TextCunninghamella1EnComponent = __decorate([
    core_1.Component({
        templateUrl: 'text-cunninghamella1en.component.html',
        styleUrls: ['text.component.css']
    })
], TextCunninghamella1EnComponent);
exports.TextCunninghamella1EnComponent = TextCunninghamella1EnComponent;