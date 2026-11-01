// ===== VERUS STORE — cấu hình =====
// Để trống = chế độ DEMO (dữ liệu chỉ trong trình duyệt, KHÔNG có đăng nhập, KHÔNG đồng bộ).
// Điền 2 giá trị dưới đây (Supabase Dashboard > Project Settings > API) để bật chế độ ONLINE.
// CHỈ dùng "anon public key". TUYỆT ĐỐI KHÔNG dán "service_role key" vào file này.
window.VERUS_CONFIG = {
  SUPABASE_URL: 'https://yhvrkgsdwcufvvuqkxbk.supabase.co',        // ví dụ: https://abcd1234.supabase.co
  SUPABASE_ANON_KEY: 'sb_publishable_wY3w7UruCBUS9q5gAIhv3Q_Z_vj0lJJ'    // anon public key (an toàn để công khai nhờ RLS)
};
