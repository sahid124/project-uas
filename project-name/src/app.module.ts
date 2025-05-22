import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { Mahasiswa } from './mahasiswa/entities/mahasiswa.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3307', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Mahasiswa],
      synchronize: true,
    }),
    MahasiswaModule,
  ],
})
export class AppModule {}
