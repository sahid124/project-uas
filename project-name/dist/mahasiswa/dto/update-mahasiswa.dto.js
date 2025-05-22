"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMahasiswaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_mahasiswa_dto_1 = require("./create-mahasiswa.dto");
class UpdateMahasiswaDto extends (0, mapped_types_1.PartialType)(create_mahasiswa_dto_1.CreateMahasiswaDto) {
}
exports.UpdateMahasiswaDto = UpdateMahasiswaDto;
//# sourceMappingURL=update-mahasiswa.dto.js.map