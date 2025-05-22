import {
  Outlet,
  useNavigate,
} from "react-router-dom";

export default function MatkulLayout() {
  const navigate =
    useNavigate();

  return (
    <div className="flex flex-col gap-6">
      {" "}
      <div className="flex justify-between items-center">
        {" "}
        <h1 className="text-2xl font-bold">
          Manajemen Mata
          Kuliah
        </h1>{" "}
        <div className="flex gap-3">
          <button
            onClick={() =>
              navigate(
                "/matkul/new"
              )
            }
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded shadow"
          >
            + Matkul
            Baru{" "}
          </button>{" "}
        </div>
      </div>
      {/* Halaman anak (nested routes) akan tampil di sini */}
      <Outlet />{" "}
    </div>
  );
}
