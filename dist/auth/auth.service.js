"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const faker_1 = require("@faker-js/faker");
const jsonwebtoken_1 = require("jsonwebtoken");
const user_interface_1 = require("./interfaces/user.interface");
let AuthService = class AuthService {
    constructor() {
        this.users = [
            {
                id: faker_1.faker.string.uuid(),
                userName: 'Pradhan',
                password: 'Pradhan',
                role: user_interface_1.Role.Admin,
            },
            {
                id: faker_1.faker.string.uuid(),
                userName: 'customer',
                password: 'customer',
                role: user_interface_1.Role.Customer,
            },
        ];
    }
    authenticate(authenticateDto) {
        const user = this.users.find((u) => u.userName === authenticateDto.userName &&
            u.password === authenticateDto.password);
        if (!user)
            throw new common_1.NotFoundException('Invalid credentials');
        const token = (0, jsonwebtoken_1.sign)({ ...user }, 'secrete');
        return { token, user };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map