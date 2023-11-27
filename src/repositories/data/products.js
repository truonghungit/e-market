import { categories } from "./categories";

const pcForGaming = categories.find((category) =>
  category.name.includes("Bộ máy tính chơi game")
);

const pcForOffice = categories.find((category) =>
  category.name.includes("PC văn phòng")
);

const products = [
  {
    id: "g01",
    name: "CORE I5 10400F | RAM 8G| GTX 1660 SUPER 6G",
    price: "14,240,000.00",
    category: "gaming",
    imageUrl:
      "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/m4-300x300.jpg",
    imageDetailUrl:
      "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/m2.jpg",
    slug: "core-i5-10400f-ram-16g-rtx-2060-super-8g-likenew-man",
    shortDescription: `
      * BỘ QUÀ TẶNG TỔNG TRỊ GIÁ 300.000 VNĐ
      <br />
      * Bộ phím edra 501 chuột Edra 601 Trị Giá 200K(Nếu lấy
      phím Giả cơ Edra 502 vs Chuột gaming Led RGB 6102 trị
      giá 350K thêm 130K)
      <br />
      * Bàn di Fuhlen (25x30) trị giá 50K
      <br />
      * Dây mạng 5m trị giá 50K
      <br />
      * Không lấy quà tặng giảm trực tiếp tiền mặt 100K
    `,
  },
  {
    id: "g02",
    name: "CORE I5 10400F | RAM 16G |RTX 2060 Super 8G (Likenew)| MÀN",
    price: "13,480,000.00",
    category: "gaming",
    imageUrl:
      "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/m1-300x300.jpg",
    imageDetailUrl:
      "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/m1.jpg",
    slug: "core-i5-10400F-RAM-16G-RTX-2060-Super-8G-(Likenew)-MÀN",
    shortDescription: `
      * BỘ QUÀ TẶNG TỔNG TRỊ GIÁ 300.000 VNĐ
      <br />
      * Bộ phím edra 501 chuột Edra 601 Trị Giá 200K(Nếu lấy
      phím Giả cơ Edra 502 vs Chuột gaming Led RGB 6102 trị
      giá 350K thêm 130K)
      <br />
      * Bàn di Fuhlen (25x30) trị giá 50K
      <br />
      * Dây mạng 5m trị giá 50K
      <br />
      * Không lấy quà tặng giảm trực tiếp tiền mặt 100K
    `,
  },
  {
    id: "g03",
    name: "CORE I3 10105F | RAM 16G | RTX 2060 Super 8G( Likenew)| MÀN",
    price: "14,100,000.00",
    category: "gaming",
    imageUrl:
      "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/m2-300x300.jpg",
    imageDetailUrl:
      "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/m3.jpg",
    slug: "core-i3-12100f-16g-rtx-2060-super-8g",
    shortDescription: `
      * BỘ QUÀ TẶNG TỔNG TRỊ GIÁ 300.000 VNĐ
      <br />
      * Bộ phím edra 501 chuột Edra 601 Trị Giá 200K(Nếu lấy
      phím Giả cơ Edra 502 vs Chuột gaming Led RGB 6102 trị
      giá 350K thêm 130K)
      <br />
      * Bàn di Fuhlen (25x30) trị giá 50K
      <br />
      * Dây mạng 5m trị giá 50K
      <br />
      * Không lấy quà tặng giảm trực tiếp tiền mặt 100K
    `,
  },
  {
    id: "g04",
    name: "Core I3 12100F | 16G | RTX 2060 Super 8G",
    price: "13,900,000.00",
    category: "gaming",
    imageUrl:
      "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/m3-300x300.jpg",
    imageDetailUrl:
      "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/m4.jpg",
    slug: "core-i5-10400f-ram-8g-gtx-1660-super-6g",
    shortDescription: `
      * BỘ QUÀ TẶNG TỔNG TRỊ GIÁ 300.000 VNĐ
      <br />
      * Bộ phím edra 501 chuột Edra 601 Trị Giá 200K(Nếu lấy
      phím Giả cơ Edra 502 vs Chuột gaming Led RGB 6102 trị
      giá 350K thêm 130K)
      <br />
      * Bàn di Fuhlen (25x30) trị giá 50K
      <br />
      * Dây mạng 5m trị giá 50K
      <br />
      * Không lấy quà tặng giảm trực tiếp tiền mặt 100K
    `,
  },
  {
    id: "f01",
    name: "CORE I5 4570 | RAM 8G | SSD 240G",
    price: "3,800,000.00",
    category: "office",
    imageUrl:
      "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/v2-300x300.jpg",
    slug: "core-i5-4570-RAM-8G-SSD-240G",
    shortDescription: `
      * BỘ QUÀ TẶNG TỔNG TRỊ GIÁ 300.000 VNĐ
      <br />
      * Bộ phím edra 501 chuột Edra 601 Trị Giá 200K(Nếu lấy
      phím Giả cơ Edra 502 vs Chuột gaming Led RGB 6102 trị
      giá 350K thêm 130K)
      <br />
      * Bàn di Fuhlen (25x30) trị giá 50K
      <br />
      * Dây mạng 5m trị giá 50K
      <br />
      * Không lấy quà tặng giảm trực tiếp tiền mặt 100K
    `,
  },
  {
    id: "f02",
    name: "COMBO ĐỒNG BỘ DELL OPTIPLEX 7050 CPU INTEL G4560/RAM",
    price: "3,900,000.00",
    category: "office",
    tag: ["new"],
    imageUrl:
      "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/v1-300x300.jpg",
    slug: "combo-dell-optiplex",
    shortDescription: `
      * BỘ QUÀ TẶNG TỔNG TRỊ GIÁ 300.000 VNĐ
      <br />
      * Bộ phím edra 501 chuột Edra 601 Trị Giá 200K(Nếu lấy
      phím Giả cơ Edra 502 vs Chuột gaming Led RGB 6102 trị
      giá 350K thêm 130K)
      <br />
      * Bàn di Fuhlen (25x30) trị giá 50K
      <br />
      * Dây mạng 5m trị giá 50K
      <br />
      * Không lấy quà tặng giảm trực tiếp tiền mặt 100K
    `,
  },
  {
    id: "f03",
    name: "Ryzen 5 4600G | RAM 16G | SSD 240G",
    price: "7,000,000.00",
    category: "office",
    tag: ["new"],
    imageUrl:
      "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/v3-300x300.png",
    slug: "Ryzen-5-4600G-RAM-16G-SSD-240G",
    shortDescription: `
      * BỘ QUÀ TẶNG TỔNG TRỊ GIÁ 300.000 VNĐ
      <br />
      * Bộ phím edra 501 chuột Edra 601 Trị Giá 200K(Nếu lấy
      phím Giả cơ Edra 502 vs Chuột gaming Led RGB 6102 trị
      giá 350K thêm 130K)
      <br />
      * Bàn di Fuhlen (25x30) trị giá 50K
      <br />
      * Dây mạng 5m trị giá 50K
      <br />
      * Không lấy quà tặng giảm trực tiếp tiền mặt 100K
    `,
  },
  {
    id: "f04",
    name: "Core I5 4570 | RAM 8G | GT 1030 4G | SSD 120G| Màn 22IN",
    price: "8,00,000.00",
    category: "office",
    tag: ["new"],
    imageUrl:
      "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/v4-300x300.png",
    slug: "man-hinh-may-tinh-e-dra-egm24f100-23-8-inch-fhd-ips",
    shortDescription: `
      * BỘ QUÀ TẶNG TỔNG TRỊ GIÁ 300.000 VNĐ
      <br />
      * Bộ phím edra 501 chuột Edra 601 Trị Giá 200K(Nếu lấy
      phím Giả cơ Edra 502 vs Chuột gaming Led RGB 6102 trị
      giá 350K thêm 130K)
      <br />
      * Bàn di Fuhlen (25x30) trị giá 50K
      <br />
      * Dây mạng 5m trị giá 50K
      <br />
      * Không lấy quà tặng giảm trực tiếp tiền mặt 100K
    `,
  },
  {
    id: "m01",
    name: "Màn hình Dell P2722H 27 inch FHD IPS",
    price: "5,800,000.00",
    category: "monitor",
    tag: ["new"],
    imageUrl:
      "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/x2-300x300.jpg",
    slug: "man-hinh-dell-e2318h-23-inch-ips-fhd",
    shortDescription: `
      * BỘ QUÀ TẶNG TỔNG TRỊ GIÁ 300.000 VNĐ
      <br />
      * Bộ phím edra 501 chuột Edra 601 Trị Giá 200K(Nếu lấy
      phím Giả cơ Edra 502 vs Chuột gaming Led RGB 6102 trị
      giá 350K thêm 130K)
      <br />
      * Bàn di Fuhlen (25x30) trị giá 50K
      <br />
      * Dây mạng 5m trị giá 50K
      <br />
      * Không lấy quà tặng giảm trực tiếp tiền mặt 100K
    `,
  },
  {
    id: "m02",
    name: "Màn hình máy tính E-DRA EGM24F100 23.8 inch FHD IPS",
    price: "2,400,000.00",
    category: "monitor",
    tag: ["new"],
    imageUrl:
      "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/x1-300x300.png",
    slug: "man-hinh-lg-24gq50f-b-23-8inch-ultragear-1ms-165hz",
    shortDescription: `
      * BỘ QUÀ TẶNG TỔNG TRỊ GIÁ 300.000 VNĐ
      <br />
      * Bộ phím edra 501 chuột Edra 601 Trị Giá 200K(Nếu lấy
      phím Giả cơ Edra 502 vs Chuột gaming Led RGB 6102 trị
      giá 350K thêm 130K)
      <br />
      * Bàn di Fuhlen (25x30) trị giá 50K
      <br />
      * Dây mạng 5m trị giá 50K
      <br />
      * Không lấy quà tặng giảm trực tiếp tiền mặt 100K
    `,
  },
  {
    id: "m03",
    name: "Màn hình Dell E2318H 23 inch IPS FHD",
    price: "2,990,000.00",
    category: "monitor",
    tag: ["new"],
    imageUrl:
      "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/x2-300x300.jpg",
    slug: "man-hinh-dell-p2722h-27-inch-fhd-ips",
    shortDescription: `
      * BỘ QUÀ TẶNG TỔNG TRỊ GIÁ 300.000 VNĐ
      <br />
      * Bộ phím edra 501 chuột Edra 601 Trị Giá 200K(Nếu lấy
      phím Giả cơ Edra 502 vs Chuột gaming Led RGB 6102 trị
      giá 350K thêm 130K)
      <br />
      * Bàn di Fuhlen (25x30) trị giá 50K
      <br />
      * Dây mạng 5m trị giá 50K
      <br />
      * Không lấy quà tặng giảm trực tiếp tiền mặt 100K
    `,
  },
  {
    id: "m04",
    name: "Màn hình LG 24GQ50F-B 23.8Inch UltraGear 1ms 165Hz",
    price: "3,000,000.00",
    category: "monitor",
    tag: ["new"],
    imageUrl:
      "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/x4-300x300.png",
    slug: "man-hinh-dell-p2722h-27-inch-fhd-ips",
    shortDescription: `
      * BỘ QUÀ TẶNG TỔNG TRỊ GIÁ 300.000 VNĐ
      <br />
      * Bộ phím edra 501 chuột Edra 601 Trị Giá 200K(Nếu lấy
      phím Giả cơ Edra 502 vs Chuột gaming Led RGB 6102 trị
      giá 350K thêm 130K)
      <br />
      * Bàn di Fuhlen (25x30) trị giá 50K
      <br />
      * Dây mạng 5m trị giá 50K
      <br />
      * Không lấy quà tặng giảm trực tiếp tiền mặt 100K
    `,
  },
];

export default products;
