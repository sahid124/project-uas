import { Injectable } from '@nestjs/common';
import { Matkul } from './entities/matkul.entity';
import { CreateMatkulDto } from './dto/create-matkul.dto';
import { UpdateMatkulDto } from './dto/update-matkul.dto';

@Injectable()
export class MatkulService {
  private data: Matkul[] = [];

  create(dto: CreateMatkulDto): Matkul {
    const newMtk = new Matkul(
      dto.kode,
      dto.nama,
      dto.sks,
      dto.semester,
      dto.jurusan,
    );
    this.data.push(newMtk);
    return newMtk;
  }

  findAll(): Matkul[] {
    return this.data;
  }

  findOne(kode: string): Matkul | undefined {
    return this.data.find((m) => m.kode === kode);
  }

  update(kode: string, dto: UpdateMatkulDto): Matkul | null {
    if (!dto.kode || !dto.nama || !dto.sks || !dto.semester || !dto.jurusan) {
      throw new Error('Semua field wajib diisi untuk update');
    }
    const index = this.data.findIndex((m) => m.kode === kode);
    if (index === -1) return null;
    const updated = new Matkul(
      dto.kode,
      dto.nama,
      dto.sks,
      dto.semester,
      dto.jurusan,
    );
    this.data[index] = updated;
    return updated;
  }

  remove(kode: string): Matkul | null {
    const index = this.data.findIndex((m) => m.kode === kode);
    if (index === -1) return null;
    const deleted = this.data[index];
    this.data.splice(index, 1);
    return deleted;
  }
}
