"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matkul = void 0;
class Matkul {
    kode;
    nama;
    sks;
    semester;
    jurusan;
    constructor(kode, nama, sks, semester, jurusan) {
        this.kode = kode;
        this.nama = nama;
        this.sks = sks;
        this.semester = semester;
        this.jurusan = jurusan;
    }
    getDisplayName() {
        return `${this.nama} (${this.kode})`;
    }
}
exports.Matkul = Matkul;
//# sourceMappingURL=matkul.entity.js.map