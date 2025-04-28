---
layout: project.njk
title: Hệ thống điểm danh QR
author: "HDUY "
date: 2025-04-28T01:25:30.672Z
description: Ứng dụng điểm danh nhân viên bằng mã QR và định vị GPS.
imageAlt: QR Code App
url: https://example.com/du-an-qr
image: /public/images/qr.png
tags:
  - project
---

Đây là một hệ thống **quản lý chấm công nhân viên thông qua quét mã QR** tại địa điểm làm việc, kết hợp với **xác thực vị trí GPS** để đảm bảo nhân viên có mặt đúng nơi quy định khi điểm danh.

Dự án được xây dựng theo kiến trúc client-server. Nhân viên sử dụng ứng dụng di động hoặc trình duyệt web để quét mã QR được tạo riêng cho từng địa điểm. Hệ thống backend sử dụng Node.js hoặc Spring Boot để xác thực mã và kiểm tra tọa độ GPS trong phạm vi cho phép (ví dụ: bán kính 50 mét từ văn phòng).

Tính năng nổi bật:
- Quản lý người dùng theo vai trò (admin, nhân viên)
- Lưu lịch sử điểm danh theo ngày, giờ và vị trí
- Giao diện thân thiện, dễ sử dụng
- Có thể tích hợp thêm báo cáo thống kê và xuất file CSV

Phù hợp với doanh nghiệp muốn hiện đại hóa quy trình chấm công, tăng tính minh bạch và hạn chế gian lận thời gian làm việc.
