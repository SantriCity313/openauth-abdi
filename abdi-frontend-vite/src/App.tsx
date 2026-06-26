// import Login from "./Login"; // Memanggil file Login.tsx yang telah dibuat sebelumnya
import Login from "./login"; // Mengubah 'L' besar menjadi 'l' kecil sesuai nama file asli

function App() {
  return (
    <div className="App">
      {/* Tampilan halaman utama kita sekarang langsung digantikan oleh tombol login myAuth */}
      <Login />
    </div>
  );
}

export default App;