import { Matkul } from './entities/matkul.entity';
import { CreateMatkulDto } from './dto/create-matkul.dto';
import { UpdateMatkulDto } from './dto/update-matkul.dto';
export declare class MatkulService {
    private data;
    create(dto: CreateMatkulDto): Matkul;
    findAll(): Matkul[];
    findOne(kode: string): Matkul | undefined;
    update(kode: string, dto: UpdateMatkulDto): Matkul | null;
    remove(kode: string): Matkul | null;
}
