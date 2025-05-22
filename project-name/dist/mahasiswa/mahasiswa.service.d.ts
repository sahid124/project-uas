import { Repository } from 'typeorm';
import { Mahasiswa } from './entities/mahasiswa.entity';
import { CreateMahasiswaDto } from './dto/create-mahasiswa.dto';
import { UpdateMahasiswaDto } from './dto/update-mahasiswa.dto';
export declare class MahasiswaService {
    private readonly repo;
    constructor(repo: Repository<Mahasiswa>);
    findAll(): Promise<Mahasiswa[]>;
    findOne(id: number): Promise<Mahasiswa>;
    create(dto: CreateMahasiswaDto): Promise<Mahasiswa>;
    update(id: number, dto: UpdateMahasiswaDto): Promise<Mahasiswa>;
    remove(id: number): Promise<void>;
}
