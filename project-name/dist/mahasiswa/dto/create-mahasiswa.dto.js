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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMahasiswaDto = void 0;
const class_validator_1 = require("class-validator");
class CreateMahasiswaDto {
    nim;
    nama;
    prodi;
    angkatan;
    email;
}
exports.CreateMahasiswaDto = CreateMahasiswaDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'NIM harus berupa teks' }),
    (0, class_validator_1.Length)(8, 10, { message: 'NIM harus terdiri dari 8 hingga 10 karakter' }),
    __metadata("design:type", String)
], CreateMahasiswaDto.prototype, "nim", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Nama tidak boleh kosong' }),
    __metadata("design:type", String)
], CreateMahasiswaDto.prototype, "nama", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Program studi harus berupa teks' }),
    __metadata("design:type", String)
], CreateMahasiswaDto.prototype, "prodi", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Angkatan harus berupa angka' }),
    __metadata("design:type", Number)
], CreateMahasiswaDto.prototype, "angkatan", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Format email tidak valid' }),
    __metadata("design:type", String)
], CreateMahasiswaDto.prototype, "email", void 0);
//# sourceMappingURL=create-mahasiswa.dto.js.map