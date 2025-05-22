import type { MahasiswaType } from "@/types/Mahasiswa"; // sesuaikan path
import type { MatkulType } from "@/types/matkul"; // sesuaikan path
import axios from "axios";

// Ganti URL base sesuai dengan lokasi backend kamu
export const api =
  axios.create({
    baseURL:
      "http://localhost:3000",
    headers: {
      "Content-Type":
        "application/json",
    },
  });

// === MAHASISWA ENDPOINT ===

export const getMahasiswa =
  () =>
    api.get<
      MahasiswaType[]
    >("/mahasiswa");

export const getMahasiswaByNim =
  (nim: string) =>
    api.get<MahasiswaType>(
      `/mahasiswa/${nim}`
    );
export const getMatkulBykode =
  (kode: string) =>
    api.get<MatkulType>(
      `/matkul/${kode}`
    );

export const createMahasiswa =
  (
    data: MahasiswaType
  ) =>
    api.post(
      "/mahasiswa",
      data
    );
export const creatematkul =
  (data: MatkulType) =>
    api.post(
      "/matkul",
      data
    );

export const updateMahasiswa =
  (
    nim: string,
    data: MahasiswaType
  ) =>
    api.put(
      `/mahasiswa/${nim}`,
      data
    );

export const deleteMahasiswa =
  (nim: string) =>
    api.delete(
      `/mahasiswa/${nim}`
    );
export const updateMatkul =
  (
    kode: string,
    data: MatkulType
  ) =>
    api.put(
      `/matkul/${kode}`,
      data
    );

export const deleteMatkul =
  (kode: string) =>
    api.delete(
      `/matkul/${kode}`
    );

export const getMatkul =
  () =>
    api.get<
      MatkulType[]
    >("/matkul");
