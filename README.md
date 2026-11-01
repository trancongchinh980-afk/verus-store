# VERUS STORE V6.3.3 — Customer Storefront + Supabase backend

Nâng cấp V6.3: tinh chỉnh typography và khoảng cách theo kiểm tra trên điện thoại; tiêu đề IN HOA có chọn lọc, thẻ sản phẩm rõ ràng hơn, xử lý ảnh lỗi tốt hơn. Kế thừa storefront V6.1 và giữ nền Supabase (PostgreSQL + Auth + RLS), Admin, Outfit Builder, VIP/Loyalty/CRM, đánh giá xác thực, chat và thống kê.

**Bắt đầu:** `docs/SETUP.md` → chạy DEMO ngay (không cần cấu hình) rồi bật ONLINE.
- Chưa điền `config.js` = **DEMO** (không đăng nhập, không đồng bộ, không nhận tiền).
- Điền Supabase = **ONLINE** (đơn lưu trên server, admin thấy trên thiết bị khác).
- **Trạng thái thật của từng chức năng:** `docs/FEATURES.md`. **Kiểm thử đã/chưa chạy:** `docs/TEST_REPORT.md`. **Kiến trúc & bảo mật:** `docs/ARCHITECTURE.md`.

```
index.html  config.js  js/backend.js  js/admin.js
supabase/migrations/001_schema.sql 002_functions.sql 003_rls.sql  supabase/seed.sql supabase/tests.sql
tools/v5_export_to_sql.py   tests/ (Playwright + Supabase giả)   docs/
```
⚠️ SQL chưa được chạy trên Postgres thật khi bàn giao: hãy chạy `supabase/tests.sql` trước khi tin cậy hệ thống.


**Ghi chú bản V6.1:** `docs/RELEASE_NOTES_V6_1.md` — những gì đã thay đổi, kiểm tra đã chạy và các bước còn bắt buộc trước khi bán thật.

**Ghi chú bản V6.3:** `docs/RELEASE_NOTES_V6_2.md` — thay đổi typography, spacing và kiểm tra bàn giao.
