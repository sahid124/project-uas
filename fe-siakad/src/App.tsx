import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import MatkulLayout from "@/pages/mataKuliah";
import MataKuliahList from "@/pages/mataKuliah/MataKuliahList";
import MataKuliahForm from "@/pages/mataKuliah/MataKuliahForm";
import MahasiswaLayout from "@/pages/Mahasiswa";
import MahasiswaList from "@/pages/Mahasiswa/MahasiswaList";
import MahasiswaForm from "@/pages/Mahasiswa/MahasiswaForm";

function App() {
  return (
    <Router>
      {" "}
      <MainLayout>
        {" "}
        <Routes>
          {/* Redirect ke dashboard sebagai halaman utama */}
          <Route
            path="/"
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />

          {/* Halaman dashboard */}
          <Route
            path="/dashboard"
            element={
              <Dashboard />
            }
          />

          {/* Routing untuk manajemen mata kuliah */}
          <Route
            path="/matkul"
            element={
              <MatkulLayout />
            }
          >
            <Route
              index
              element={
                <MataKuliahList />
              }
            />
            <Route
              path="new"
              element={
                <MataKuliahForm />
              }
            />
            <Route
              path="edit/:kode"
              element={
                <MataKuliahForm />
              }
            />
          </Route>

          {/* Routing untuk manajemen mahasiswa */}
          <Route
            path="/mahasiswa"
            element={
              <MahasiswaLayout />
            }
          >
            <Route
              index
              element={
                <MahasiswaList />
              }
            />
            <Route
              path="new"
              element={
                <MahasiswaForm />
              }
            />
            <Route
              path="edit/:nim"
              element={
                <MahasiswaForm />
              }
            />
          </Route>
        </Routes>
      </MainLayout>{" "}
    </Router>
  );
}

export default App;
