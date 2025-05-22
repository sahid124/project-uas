"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatkulService = void 0;
const common_1 = require("@nestjs/common");
const matkul_entity_1 = require("./entities/matkul.entity");
let MatkulService = class MatkulService {
    data = [];
    create(dto) {
        const newMtk = new matkul_entity_1.Matkul(dto.kode, dto.nama, dto.sks, dto.semester, dto.jurusan);
        this.data.push(newMtk);
        return newMtk;
    }
    findAll() {
        return this.data;
    }
    findOne(kode) {
        return this.data.find((m) => m.kode === kode);
    }
    update(kode, dto) {
        if (!dto.kode || !dto.nama || !dto.sks || !dto.semester || !dto.jurusan) {
            throw new Error('Semua field wajib diisi untuk update');
        }
        const index = this.data.findIndex((m) => m.kode === kode);
        if (index === -1)
            return null;
        const updated = new matkul_entity_1.Matkul(dto.kode, dto.nama, dto.sks, dto.semester, dto.jurusan);
        this.data[index] = updated;
        return updated;
    }
    remove(kode) {
        const index = this.data.findIndex((m) => m.kode === kode);
        if (index === -1)
            return null;
        const deleted = this.data[index];
        this.data.splice(index, 1);
        return deleted;
    }
};
exports.MatkulService = MatkulService;
exports.MatkulService = MatkulService = __decorate([
    (0, common_1.Injectable)()
], MatkulService);
//# sourceMappingURL=matkul.service.js.map