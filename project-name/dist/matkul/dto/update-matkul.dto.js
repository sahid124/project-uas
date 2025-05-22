"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMatkulDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_matkul_dto_1 = require("./create-matkul.dto");
class UpdateMatkulDto extends (0, mapped_types_1.PartialType)(create_matkul_dto_1.CreateMatkulDto) {
}
exports.UpdateMatkulDto = UpdateMatkulDto;
//# sourceMappingURL=update-matkul.dto.js.map