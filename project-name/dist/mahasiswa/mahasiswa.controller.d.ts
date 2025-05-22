import { MahasiswaService } from './mahasiswa.service';
import { CreateMahasiswaDto } from './dto/create-mahasiswa.dto';
import { UpdateMahasiswaDto } from './dto/update-mahasiswa.dto';
export declare class MahasiswaController {
    private readonly service;
    constructor(service: MahasiswaService);
    findAll(): Promise<import("./entities/mahasiswa.entity").Mahasiswa[]>;
    findOne(id: string): Promise<import("./entities/mahasiswa.entity").Mahasiswa>;
    create(dto: CreateMahasiswaDto): Promise<import("./entities/mahasiswa.entity").Mahasiswa>;
    update(id: string, dto: UpdateMahasiswaDto): Promise<import("./entities/mahasiswa.entity").Mahasiswa>;
    remove(id: string): Promise<void>;
}
