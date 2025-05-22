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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatkulController = void 0;
const common_1 = require("@nestjs/common");
const matkul_service_1 = require("./matkul.service");
const create_matkul_dto_1 = require("./dto/create-matkul.dto");
const update_matkul_dto_1 = require("./dto/update-matkul.dto");
let MatkulController = class MatkulController {
    service;
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(kode) {
        const mtk = this.service.findOne(kode);
        if (!mtk) {
            throw new common_1.NotFoundException(`Matkul dengan Kode ${kode} tidak ditemukan`);
        }
        return mtk;
    }
    create(dto) {
        return this.service.create(dto);
    }
    update(kode, dto) {
        try {
            const updated = this.service.update(kode, dto);
            if (!updated) {
                throw new common_1.NotFoundException(`Matkul dengan Kode ${kode} tidak ditemukan`);
            }
            return updated;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new common_1.BadRequestException(error.message);
            }
            throw new common_1.BadRequestException('Terjadi kesalahan tak dikenal');
        }
    }
    remove(kode) {
        const deleted = this.service.remove(kode);
        if (!deleted) {
            throw new common_1.NotFoundException(`Matkul dengan KODE ${kode} tidak ditemukan`);
        }
        return deleted;
    }
};
exports.MatkulController = MatkulController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MatkulController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':kode'),
    __param(0, (0, common_1.Param)('kode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MatkulController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_matkul_dto_1.CreateMatkulDto]),
    __metadata("design:returntype", void 0)
], MatkulController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':kode'),
    __param(0, (0, common_1.Param)('kode')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_matkul_dto_1.UpdateMatkulDto]),
    __metadata("design:returntype", void 0)
], MatkulController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':kode'),
    __param(0, (0, common_1.Param)('kode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MatkulController.prototype, "remove", null);
exports.MatkulController = MatkulController = __decorate([
    (0, common_1.Controller)('matkul'),
    __metadata("design:paramtypes", [matkul_service_1.MatkulService])
], MatkulController);
//# sourceMappingURL=matkul.controller.js.map