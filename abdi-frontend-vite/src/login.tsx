import { createClient } from "@openauthjs/openauth/client";

// 1. Konfigurasi Client terhubung ke Cloudflare Worker
const client = createClient({
  clientID: "abdi-frontend-vite",
  issuer: import.meta.env.VITE_AUTH_ISSUER
});

export default function Login() {
  const handleLogin = async () => {
    // 2. Alur cerdas pemicu otentikasi
    const { url } = await client.authorize({
      redirectURI: "http://localhost:5173/callback", // URL Frontend Vite Anda saat jalan
      responseType: "code",
    });
    
    // 3. Lempar user ke halaman login backend (OpenAuth)
    window.location.href = url;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button onClick={handleLogin} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        Masuk via myAuth
      </button>
    </div>
  );
}