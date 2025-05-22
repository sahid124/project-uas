import { MatkulService } from './matkul.service';
import { CreateMatkulDto } from './dto/create-matkul.dto';
import { UpdateMatkulDto } from './dto/update-matkul.dto';
export declare class MatkulController {
    private readonly service;
    constructor(service: MatkulService);
    findAll(): import("./entities/matkul.entity").Matkul[];
    findOne(kode: string): import("./entities/matkul.entity").Matkul;
    create(dto: CreateMatkulDto): import("./entities/matkul.entity").Matkul;
    update(kode: string, dto: UpdateMatkulDto): import("./entities/matkul.entity").Matkul;
    remove(kode: string): import("./entities/matkul.entity").Matkul;
}
