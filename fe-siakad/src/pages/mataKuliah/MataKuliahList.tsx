import {
  useEffect,
  useState,
} from "react";
import {
  getMatkul,
  deleteMatkul,
  updateMatkul,
} from "@/services/api";
import type { MatkulType } from "@/types/matkul";

export default function MataKuliahList() {
  const [
    data,
    setData,
  ] = useState<
    MatkulType[]
  >([]);
  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);
  const itemsPerPage = 5;

  // State untuk edit inline
  const [
    editKode,
    setEditKode,
  ] = useState<
    string | null
  >(null);
  const [
    editForm,
    setEditForm,
  ] = useState<
    Partial<MatkulType>
  >({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData =
    () => {
      getMatkul()
        .then((res) =>
          setData(
            res.data
          )
        )
        .catch(() =>
          alert(
            "Gagal mengambil data matkul"
          )
        );
    };

  const handleDelete =
    async (
      kode: string
    ) => {
      if (
        !confirm(
          "Yakin ingin menghapus matkul ini?"
        )
      )
        return;

      try {
        await deleteMatkul(
          kode
        );
        fetchData();
      } catch (err) {
        alert(
          "Gagal menghapus matkul"
        );
        console.error(
          err
        );
      }
    };

  // Mulai edit: isi form dengan data matkul yang dipilih
  const handleEdit = (
    mtk: MatkulType
  ) => {
    setEditKode(
      mtk.kode
    );
    setEditForm({
      ...mtk,
    }); // copy supaya bisa diedit
  };

  // Batalkan edit
  const handleCancelEdit =
    () => {
      setEditKode(null);
      setEditForm({});
    };

  // Update nilai di form edit inline
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
            "sks"
              ? Number(
                  value
                )
              : value,
        })
      );
    };

  // Simpan perubahan edit inline
  const handleSaveEdit =
    async () => {
      if (!editKode)
        return;

      try {
        // Pastikan update via API updateMatkul
        await updateMatkul(
          editKode,
          editForm as MatkulType
        );
        alert(
          "Berhasil memperbarui data"
        );
        setEditKode(
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
          Daftar Mata
          Kuliah
        </h1>
      </div>

      <div className="overflow-x-auto rounded-lg shadow border">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-4 py-3 border">
                Kode
              </th>
              <th className="px-4 py-3 border">
                Nama
              </th>
              <th className="px-4 py-3 border">
                SKS
              </th>
              <th className="px-4 py-3 border">
                Semester
              </th>
              <th className="px-4 py-3 border">
                Jurusan
              </th>
              <th className="px-4 py-3 border">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {pageData.map(
              (mtk) => {
                if (
                  editKode ===
                  mtk.kode
                ) {
                  // Mode edit inline
                  return (
                    <tr
                      key={
                        mtk.kode
                      }
                      className="bg-yellow-50"
                    >
                      <td className="px-4 py-2 border font-mono">
                        {
                          mtk.kode
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
                          type="number"
                          name="sks"
                          value={
                            editForm.sks ??
                            0
                          }
                          onChange={
                            handleChangeEdit
                          }
                          min={
                            0
                          }
                          className="w-full px-2 py-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2 border">
                        <input
                          type="text"
                          name="semester"
                          value={
                            editForm.semester ??
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
                          name="jurusan"
                          value={
                            editForm.jurusan ??
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

                // Mode view biasa
                return (
                  <tr
                    key={
                      mtk.kode
                    }
                    className="hover:bg-gray-50"
                  >
                    <td className="px-4 py-2 border font-mono">
                      {
                        mtk.kode
                      }
                    </td>
                    <td className="px-4 py-2 border">
                      {
                        mtk.nama
                      }
                    </td>
                    <td className="px-4 py-2 border">
                      {
                        mtk.sks
                      }
                    </td>
                    <td className="px-4 py-2 border text-center">
                      {
                        mtk.semester
                      }
                    </td>
                    <td className="px-4 py-2 border">
                      {
                        mtk.jurusan
                      }
                    </td>
                    <td className="px-4 py-2 border space-x-2">
                      <button
                        onClick={() =>
                          handleEdit(
                            mtk
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
                            mtk.kode
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
                  matkul.
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
