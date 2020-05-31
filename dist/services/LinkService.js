"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var LinkService_1;
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const LinkRepository_1 = require("../repositories/LinkRepository");
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
let LinkService = LinkService_1 = class LinkService {
    constructor(linkRepository) {
        this.linkRepository = linkRepository;
    }
    create(link) {
        return this.linkRepository.create(link);
    }
};
LinkService = LinkService_1 = __decorate([
    inversify_binding_decorators_1.provide(LinkService_1),
    __param(0, inversify_1.inject(LinkRepository_1.LinkRepository)),
    __metadata("design:paramtypes", [Object])
], LinkService);
exports.LinkService = LinkService;
//# sourceMappingURL=LinkService.js.map