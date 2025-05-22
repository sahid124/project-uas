import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { MatkulService } from './matkul.service';
import { CreateMatkulDto } from './dto/create-matkul.dto';
import { UpdateMatkulDto } from './dto/update-matkul.dto';

@Controller('matkul')
export class MatkulController {
  constructor(private readonly service: MatkulService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':kode')
  findOne(@Param('kode') kode: string) {
    const mtk = this.service.findOne(kode);
    if (!mtk) {
      throw new NotFoundException(`Matkul dengan Kode ${kode} tidak ditemukan`);
    }
    return mtk;
  }

  @Post()
  create(@Body() dto: CreateMatkulDto) {
    return this.service.create(dto);
  }

  @Put(':kode')
  update(@Param('kode') kode: string, @Body() dto: UpdateMatkulDto) {
    try {
      const updated = this.service.update(kode, dto);
      if (!updated) {
        throw new NotFoundException(
          `Matkul dengan Kode ${kode} tidak ditemukan`,
        );
      }
      return updated;
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException('Terjadi kesalahan tak dikenal');
    }
  }

  @Delete(':kode')
  remove(@Param('kode') kode: string) {
    const deleted = this.service.remove(kode);
    if (!deleted) {
      throw new NotFoundException(`Matkul dengan KODE ${kode} tidak ditemukan`);
    }
    return deleted;
  }
}
