import {
  useEffect,
  useState,
} from "react";
import {
  getMahasiswa,
  deleteMahasiswa,
  updateMahasiswa,
} from "@/services/api";
import type { MahasiswaType } from "@/types/Mahasiswa";

export default function MahasiswaList() {
  const [
    data,
    setData,
  ] = useState<
    MahasiswaType[]
  >([]);
  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);
  const itemsPerPage = 5;

  const [
    editNim,
    setEditNim,
  ] = useState<
    string | null
  >(null);
  const [
    editForm,
    setEditForm,
  ] = useState<
    Partial<MahasiswaType>
  >({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData =
    () => {
      getMahasiswa()
        .then((res) =>
          setData(
            res.data
          )
        )
        .catch(() =>
          alert(
            "Gagal mengambil data mahasiswa"
          )
        );
    };

  const handleDelete =
    async (
      nim: string
    ) => {
      if (
        !confirm(
          "Yakin ingin menghapus mahasiswa ini?"
        )
      )
        return;

      try {
        await deleteMahasiswa(
          nim
        );
        fetchData();
      } catch (err) {
        alert(
          "Gagal menghapus mahasiswa"
        );
        console.error(
          err
        );
      }
    };

  const handleEdit = (
    mhs: MahasiswaType
  ) => {
    setEditNim(mhs.nim);
    setEditForm({
      ...mhs,
    });
  };

  const handleCancelEdit =
    () => {
      setEditNim(null);
      setEditForm({});
    };

  const handleChangeEdit =
    (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const {
        name,
        value,
      } = e.target;
      setEditForm(
        (prev) => ({
          ...prev,
          [name]:
            name ===
            "angkatan"
              ? Number(
                  value
                )
              : value,
        })
      );
    };

  const handleSaveEdit =
    async () => {
      if (!editNim)
        return;

      try {
        await updateMahasiswa(
          editNim,
          editForm as MahasiswaType
        );
        alert(
          "Berhasil memperbarui data"
        );
        setEditNim(
          null
        );
        setEditForm({});
        fetchData();
      } catch (err) {
        alert(
          "Gagal memperbarui data"
        );
        console.error(
          err
        );
      }
    };

  const totalPages =
    Math.ceil(
      data.length /
        itemsPerPage
    );
  const pageData =
    data.slice(
      (currentPage -
        1) *
        itemsPerPage,
      currentPage *
        itemsPerPage
    );

  return (
    <div className="w-full">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">
          Daftar
          Mahasiswa
        </h1>
      </div>

      <div className="overflow-x-auto rounded-lg shadow border">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-4 py-3 border">
                NIM
              </th>
              <th className="px-4 py-3 border">
                Nama
              </th>
              <th className="px-4 py-3 border">
                Prodi
              </th>
              <th className="px-4 py-3 border">
                Angkatan
              </th>
              <th className="px-4 py-3 border">
                Email
              </th>
              <th className="px-4 py-3 border">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {pageData.map(
              (mhs) => {
                if (
                  editNim ===
                  mhs.nim
                ) {
                  return (
                    <tr
                      key={
                        mhs.nim
                      }
                      className="bg-yellow-50"
                    >
                      <td className="px-4 py-2 border font-mono">
                        {
                          mhs.nim
                        }
                      </td>
                      <td className="px-4 py-2 border">
                        <input
                          type="text"
                          name="nama"
                          value={
                            editForm.nama ??
                            ""
                          }
                          onChange={
                            handleChangeEdit
                          }
                          className="w-full px-2 py-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2 border">
                        <input
                          type="text"
                          name="prodi"
                          value={
                            editForm.prodi ??
                            ""
                          }
                          onChange={
                            handleChangeEdit
                          }
                          className="w-full px-2 py-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2 border">
                        <input
                          type="number"
                          name="angkatan"
                          value={
                            editForm.angkatan ??
                            ""
                          }
                          onChange={
                            handleChangeEdit
                          }
                          className="w-full px-2 py-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2 border">
                        <input
                          type="email"
                          name="email"
                          value={
                            editForm.email ??
                            ""
                          }
                          onChange={
                            handleChangeEdit
                          }
                          className="w-full px-2 py-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2 border space-x-2">
                        <button
                          onClick={
                            handleSaveEdit
                          }
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
                        >
                          ✓
                          Simpan
                        </button>
                        <button
                          onClick={
                            handleCancelEdit
                          }
                          className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded shadow"
                        >
                          ✕
                          Batal
                        </button>
                      </td>
                    </tr>
                  );
                }

                return (
                  <tr
                    key={
                      mhs.nim
                    }
                    className="hover:bg-gray-50"
                  >
                    <td className="px-4 py-2 border font-mono">
                      {
                        mhs.nim
                      }
                    </td>
                    <td className="px-4 py-2 border">
                      {
                        mhs.nama
                      }
                    </td>
                    <td className="px-4 py-2 border">
                      {
                        mhs.prodi
                      }
                    </td>
                    <td className="px-4 py-2 border">
                      {
                        mhs.angkatan
                      }
                    </td>
                    <td className="px-4 py-2 border">
                      {
                        mhs.email
                      }
                    </td>
                    <td className="px-4 py-2 border space-x-2">
                      <button
                        onClick={() =>
                          handleEdit(
                            mhs
                          )
                        }
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow"
                      >
                        ✎
                        Edit
                      </button>
                      <button
                        onClick={() =>
                          handleDelete(
                            mhs.nim
                          )
                        }
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow"
                      >
                        -
                        Hapus
                      </button>
                    </td>
                  </tr>
                );
              }
            )}
            {pageData.length ===
              0 && (
              <tr>
                <td
                  colSpan={
                    6
                  }
                  className="text-center py-4 text-gray-500"
                >
                  Tidak
                  ada
                  data
                  mahasiswa.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-2 mt-4">
        {Array.from({
          length:
            totalPages,
        }).map(
          (_, i) => (
            <button
              key={i}
              onClick={() =>
                setCurrentPage(
                  i + 1
                )
              }
              className={`w-8 h-8 rounded ${
                currentPage ===
                i + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-800 border"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
