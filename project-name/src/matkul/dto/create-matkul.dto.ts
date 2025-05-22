import { IsString, IsNumber, Length } from 'class-validator';

export class CreateMatkulDto {
  @IsString({ message: 'Kode tidak boleh kosong' })
  @Length(5, 10, { message: 'Kode harus terdiri dari 5 hingga 10 karakter' })
  kode: string;

  @IsString({ message: 'Nama tidak boleh kosong' })
  nama: string;

  @IsNumber({}, { message: 'sks harus berupa angka' })
  sks: number;

  @IsString({ message: 'semester harus berupa teks' })
  semester: string;

  @IsString({ message: 'jurusan harus berupa teks' })
  jurusan: string;
}
