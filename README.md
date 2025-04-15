# myBlog_Eleventy_JAMStack
# Blog Cá Nhân với JAMStack sử dụng Eleventy (11ty)

Đây là một dự án blog cá nhân được xây dựng bằng kiến trúc **JAMStack**, sử dụng **Static Site Generator [Eleventy (11ty)](https://www.11ty.dev/)** để đảm bảo:
- Tốc độ tải trang nhanh 
- Bảo mật cao 
- Triển khai đơn giản qua GitHub, render

##  Chức năng đã thực hiện

###  Cấu trúc dự án
- Sử dụng thư mục `src/` để chứa các file `.njk`, `.md`, và layout
- Thư mục `public/` chứa các asset tĩnh (ảnh, CSS, JS...) và được Eleventy copy vào thư mục build `_site`

###  Giao diện
- Trang chủ, trang blog, trang chi tiết bài viết
- Giao diện responsive, có hiệu ứng bằng Swiper.js và Animate.css
- Có các section như: hero, giới thiệu, dịch vụ, logo đối tác, tìm kiếm...

###  Bài viết
- Bài viết được viết bằng **Markdown**
- Hỗ trợ phân loại theo thư mục: `post/`, `supplier/`

###  Slider & Animation
- Dùng **Swiper.js** để tạo slider hero và slider logo chạy ngang và dọc(autoplay, loop)
- Hỗ trợ hiệu ứng animate vào nội dung với `animate.css`

###  Tìm kiếm
- Thiết kế thanh tìm kiếm giao diện giống hình mẫu
- Có hover mở rộng chiều ngang + placeholder nghiêng
---

##  Cài đặt & chạy dự án
B1: Clone dự án 
B2: Mở dự án và chạy terminal
# Cài đặt package
npm i
# Build chương trình
npm run build
# Chạy local server với Eleventy
npm run start
## Hướng dẫn deploy dự án và tích hợp CMS.
Điều kiện bắt buộc: Đã deploy lên github
- B1: Vào trang https://www.netlify.com/ đăng ký tài khoản.
- B2: vào Sites -> Add new site -> Import an existing project -> kết nối với git.
- B3: Chọn nhánh bạn muốn deploy và nhấn nút deploy.
- B4: Sau khi deploy thành công chọn Site Configuration -> chọn Identity -> bật Enable Identity.
- B5: Chọn Identity/ Service -> Bật Enable Git Gateway.
- B6: Chọn Identity/Registration -> trong phần External providers chọn add providers -> Chọn github -> tích chọn Use default configuration -> enable github.
- B7: Truy cập địa chỉ sau khi deploy thành công và tiến hành [đường dẫn deploy thành công]/admin để truy cập quản lý nội dung.
- B8: Đăng nhập bằng Github. Sau khi đăng nhập thành công bạn sẽ vào trang quản lý nội dung của web.
 
