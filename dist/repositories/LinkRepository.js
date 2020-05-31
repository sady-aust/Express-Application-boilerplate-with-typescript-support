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
var LinkRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("./base/repository");
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
const inversify_1 = require("inversify");
const type_1 = require("../types/type");
let LinkRepository = LinkRepository_1 = class LinkRepository extends repository_1.Repository {
    constructor(LinkModel) {
        super(LinkModel);
    }
};
LinkRepository = LinkRepository_1 = __decorate([
    inversify_binding_decorators_1.provide(LinkRepository_1),
    __param(0, inversify_1.inject(type_1.TYPES.LinkModel)),
    __metadata("design:paramtypes", [Object])
], LinkRepository);
exports.LinkRepository = LinkRepository;
//# sourceMappingURL=LinkRepository.js.map