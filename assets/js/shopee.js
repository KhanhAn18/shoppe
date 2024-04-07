const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

//đảo ngược chuỗi (cắt sang mảng -> đảo ngược mảng -> nối lại thành chuỗi)
function reverseString(string){
    return string.split("").reverse().join("")
}
//chuyển số sang dạng chuỗi tiền tệ (xxx.xxx.xxxđ)
function numberToCoin(number){
    const string = number.toString();
    let x = "";
    for (let i = 0; i < string.length; i+=3) {
        if (i < string.length - 3) {
            x += reverseString(string.slice(string.length - (i + 3), string.length - i)) + "."
        } else {
            x += reverseString(string.slice(0, string.length - i))
            return reverseString(x);
        }
    }
}

const app = {
    currentPage: 1,
    itemPerPage: 12,
    startItem: 0,
    endItem: 12,
    quantity: 1,
    countCart: 0,
    isLogin: false,
    idUser: null,
    products: [
        {
            id: 1,
            path: "./assets/img/laptop/l1.jpg",
            title: "HP 245 G10 R5 752 OU",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 10190000,
            sale: 0,
            favorite: 0,
            sold: 225,
            star: 5,
            brand: "Khánh An",
            origin: "Việt Nam",
            new: 0,
            phone: "0122 234 234",
        },
        {
            id: 2,
            path: "./assets/img/laptop/l2.jpg",
            title: "Asus Vivobook Flip TP3402VA-LZ118W i9 13900H",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 22990000,
            sale: 0,
            favorite: true,
            sold: 157,
            star: 4,
            brand: "Bảo Ngọc",
            origin: "Việt Nam",
            new: 0,
            phone: "0122 234 235",
        },
        {
            id: 3,
            path: "./assets/img/laptop/l3.jpg",
            title: "LG Gram Style 14Z90RS-G.AH54A5 i5 1340P",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 31490000,
            sale: 0,
            favorite: 0,
            sold: 179,
            star: 4,
            brand: "Thanh Trúc",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 4,
            path: "./assets/img/laptop/l4.jpg",
            title: "LG Gram 14T90R-G.AH55A5 i5 1340P",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 30990000,
            sale: 0,
            favorite: 0,
            sold: 206,
            star: 5,
            brand: "An Lê",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 5,
            path: "./assets/img/laptop/l5.jpg",
            title: "Asus Zenbook 14 OLED UX3405MA-PP152W Core Ultra 7-155H",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 33190000,
            sale: 0,
            favorite: true,
            sold: 125,
            star: 4,
            brand: "Arela Pet Shop",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 6,
            path: "./assets/img/laptop/l6.jpg",
            title: "Lenovo ThinkPad X1 Carbon Gen 9 i7-1165G7/20XW00GDVN",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 47990000,
            sale: 0,
            favorite: true,
            sold: 189,
            star: 4,
            brand: "Arela Pet Shop",
            origin: "Việt Nam",
            new: false,
            phone: "0122 234 234",
        },
        {
            id: 7,
            path: "./assets/img/laptop/l7.jpg",
            title: "Masstel E140 Celeron N4120 Win 10",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 3990000,
            sale: 0,
            favorite: true,
            sold: 156,
            star: 5,
            brand: "Lê Đông Bình",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 8,
            path: "./assets/img/laptop/68.jpg",
            title: "Acer Aspire 3 A315-44P-R5QG R7-5700U",
            content: `Do dịch bệnh cần tìm chủ mới chó husky lai`,
            price: 11990000,
            sale: 0,
            favorite: false,
            sold: 198,
            star: 4,
            brand: "Nguyễn Văn Tưởng",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 9,
            path: "./assets/img/laptop/l9.jpg",
            title: "Huawei MateBook D15 R7 5700U",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 12490000,
            sale: 15,
            favorite: true,
            sold: 151,
            star: 4,
            brand: "Arele Pet",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 10,
            path: "./assets/img/laptop/l10.jpg",
            title: "HP Pavilion Aero 13-be2098AU R7 7735U (8C5K5PA)",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 19290000,
            sale: 25,
            favorite: true,
            sold: 115,
            star: 5,
            brand: "Shop Pet",
            origin: "Việt Nam",
            new: false,
            phone: "0122 234 234",
        },
        {
            id: 11,
            path: "./assets/img/laptop/l11.jpg",
            title: "Dell 123 T52 mới nhất",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 6000000,
            sale: 0,
            favorite: true,
            sold: 181,
            star: 5,
            brand: "Cún Cưng",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 12,
            path: "./assets/img/laptop/d12.jpg",
            title: "Đồng hồ đeo tay V-Race GMT",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 9199000,
            sale: 50,
            favorite: true,
            sold: 121,
            star: 5,
            brand: "Thuận Phát",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 13,
            path: "./assets/img/laptop/l13.jpg",
            title: "Đồng hồ đeo tay mạ vàng K99",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 10700000,
            sale: 0,
            favorite: true,
            sold: 101,
            star: 4,
            brand: "Nguyễn Ánh",
            origin: "Việt Nam",
            new: false,
            phone: "0122 234 234",
        },
        {
            id: 14,
            path: "./assets/img/laptop/l14.jpg",
            title: "Bộ bàn phím chuột giả cơ chuyên game G21 led 7",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 3900000,
            sale: 0,
            favorite: false,
            sold: 272,
            star: 5,
            brand: "Nguyễn Ánh",
            origin: "Việt Nam",
            new: false,
            phone: "0122 234 234",
        },
        {
            id: 15,
            path: "./assets/img/laptop/l15.jpg",
            title: "Ảnh tai nghe thỏ hồng T15",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 520000,
            sale: 15,
            favorite: true,
            sold: 275,
            star: 5,
            brand: "Shop Pet",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 16,
            path: "./assets/img/laptop/l16.jpg",
            title: "Ghế chơi game Extreme đen đỏ",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 3000000,
            sale: 0,
            favorite: true,
            sold: 127,
            star: 5,
            brand: "Shop Pet",
            origin: "Việt Nam",
            new: false,
            phone: "0122 234 234",
        },
        {
            id: 17,
            path: "./assets/img/laptop/l17.jpg",
            title: "Xe đạp trẻ em đẹp nhất hệ mặt trời",
            content: `Giống poodle cái 3 tháng tuổi màu trắng, tiêm ngừa có sổ kèm theo`,
            price: 3200000,
            sale: 0,
            favorite: true,
            sold: 298,
            star: 5,
            brand: "Poodle Pet",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 18,
            path: "./assets/img/laptop/l18.jpg",
            title: "Xe máy hon đa xanh siêu đỉnh",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 1750000,
            sale: 75,
            favorite: true,
            sold: 191,
            star: 5,
            brand: "Pet VN",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 19,
            path: "./assets/img/laptop/l19.jpg",
            title: "Laptop Sam sung Galaxy Book 3 Pro",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 30000000,
            sale: 0,
            favorite: true,
            sold: 114,
            star: 5,
            brand: "Pull Shop",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 20,
            path: "./assets/img/laptop/l20.jpg",
            title: "Chuột không dây Gamming màu hồng Led chống ồn",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 1200000,
            sale: 0,
            favorite: true,
            sold: 164,
            star: 3,
            brand: "Nguyễn An",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 21,
            path: "./assets/img/laptop/l8.jpg",
            title: "Bộ vợt cầu lông K225",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 1500000,
            sale: 0,
            favorite: true,
            sold: 190,
            star: 4,
            brand: "Fox Shop",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 22,
            path: "./assets/img/laptop/l21.jpg",
            title: "Áo thể thao thời trang nam mới nhất",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 1700000,
            sale: 0,
            favorite: true,
            sold: 120,
            star: 3,
            brand: "Pom Shop",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 23,
            path: "./assets/img/laptop/l22.jpg",
            title: "Tlove Lap 123 K7",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 8000000,
            sale: 20,
            favorite: true,
            sold: 290,
            star: 5,
            brand: "Arele Shop",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 24,
            path: "./assets/img/laptop/l23.jpg",
            title: "Tủ lạnh mini giá rẻ",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 10500000,
            sale: 15,
            favorite: true,
            sold: 152,
            star: 4,
            brand: "Arele Shop",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 25,
            path: "./assets/img/laptop/l24.jpg",
            title: "Tivi siêu mỏng SoNy",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 12500000,
            sale: 0,
            favorite: true,
            sold: 62,
            star: 5,
            brand: "Pet Shop",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 26,
            path: "./assets/img/laptop/l25.jpg",
            title: "Chậu hoa mai TT A7",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 1500000,
            sale: 0,
            favorite: true,
            sold: 129,
            star: 4,
            brand: "Shop Bắc Kinh",
            origin: "Việt Nam",
            new: false,
            phone: "0122 234 234",
        },
        {
            id: 27,
            path: "./assets/img/laptop/l26.jpg",
            title: "Chiếc laptop văn phòng K21",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 7000000,
            sale: 0,
            favorite: true,
            sold: 241,
            star: 5,
            brand: "Uyên My",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 28,
            path: "./assets/img/laptop/l27.jpg",
            title: "Tai nghe bluetooth",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 3600000,
            sale: 0,
            favorite: 0,
            sold: 169,
            star: 5,
            brand: "Lê Anh",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 29,
            path: "./assets/img/laptop/l28.jpg",
            title: "Iphone 11 pro max",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 10000000,
            sale: 0,
            favorite: true,
            sold: 176,
            star: 5,
            brand: "Văn Quang",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 30,
            path: "./assets/img/laptop/l29.jpg",
            title: "Nhẫn cưới kim cương ",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 30000000,
            sale: 35,
            favorite: 0,
            sold: 129,
            star: 5,
            brand: "Hải Trúc",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 31,
            path: "./assets/img/laptop/l30.jpg",
            title: "Lò nướng siêu ngon 123",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 50000,
            sale: 25,
            favorite: false,
            sold: 156,
            star: 5,
            brand: "Shoppp",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 32,
            path: "./assets/img/laptop/l31.jpg",
            title: "Tủ lạnh giá rẻ siêu khủng",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 3900000,
            sale: 0,
            favorite: true,
            sold: 145,
            star: 5,
            brand: "Thanh An",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 33,
            path: "./assets/img/laptop/l32.jpg",
            title: "Iphone 15 pro max",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 28000000,
            sale: 0,
            favorite: true,
            sold: 126,
            star: 4,
            brand: "Shop Bắc Hà",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 34,
            path: "./assets/img/laptop/l33.jpg",
            title: "Quạt điện mini",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 3000000,
            sale: 0,
            favorite: true,
            sold: 212,
            star: 5,
            brand: "Shop TPHCM",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 35,
            path: "./assets/img/laptop/l34.jpg",
            title: "Máy giặt kt10",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 5000000,
            sale: 0,
            favorite: true,
            sold: 124,
            star: 5,
            brand: "Shop TPHCM",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 36,
            path: "./assets/img/laptop/l35.jpg",
            title: "Xe đạp điện tk23",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 4000000,
            sale: 0,
            favorite: true,
            sold: 181,
            star: 5,
            brand: "Shop Poodle",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 37,
            path: "./assets/img/laptop/l36.jpg",
            title: "Xe tay ga honda",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 3000000,
            sale: 0,
            favorite: true,
            sold: 145,
            star: 4,
            brand: "An Lê",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 38,
            path: "./assets/img/laptop/l37.jpg",
            title: "Máy xay sinh tố",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 3400000,
            sale: 0,
            favorite: true,
            sold: 124,
            star: 5,
            brand: "Dương Tiễn",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 39,
            path: "./assets/img/laptop/l38.jpg",
            title: "Bàn phím cơ êm",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 5200000,
            sale: 0,
            favorite: true,
            sold: 118,
            star: 4,
            brand: "Shop pet",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        {
            id: 40,
            path: "./assets/img/laptop/l40.jpg",
            title: "Balo tlove 7ka",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18h theo đúng quy định. Tlove hân hạnh phục vụ quý khách trên toàn bộ hệ thống chuỗi cửa hàng cả nước. Xin chân thành cảm ơn ạ! `,
            price: 4200000,
            sale: 0,
            favorite: true,
            sold: 102,
            star: 5,
            brand: "Dogily Petshop",
            origin: "Việt Nam",
            new: true,
            phone: "0122 234 234",
        },
        
    ],
    renderProducts: function(arr, component, start, end) {
        const htmls = arr.map(function(product, index){
            if (index >= start && index < end) {
                return `
                <div class="product-item col l-3 m-4 c-6" data-index="${index}">
                    <a onclick="return false" href="" class="home-product-item">
                        <div class="home-product-item__img"
                            style="background-image: url(${product.path}); background-repeat: no-repeat; background-position: center; background-size: cover;">
                        </div>
                        <h4 class="home-product-item__name">
                            ${product.title}
                        </h4>
                        <div class="home-product-item__price">
                            <span style="display: ${product.sale ? "" : "none"}"class="home-product-item__price-old">${numberToCoin(product.price)}đ</span>
                            <span class="home-product-item__price-current">
                                ${product.sale ? numberToCoin((product.price * (100 - product.sale) / 100).toFixed()) : numberToCoin(product.price)}đ
                            </span>
                        </div>
                        <div class="home-product-item__action">
                            <span class="home-product-item__like">
                            <i class="home-product-item__like-icon-empty far fa-heart"></i>
                            <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                            </span>
                            <div class="home-product-item__rating">
                            <i class="${product.star >= 1 ? "home-product-item__rating--gold" : ""} fas fa-star"></i>
                            <i class="${product.star >= 2 ? "home-product-item__rating--gold" : ""} fas fa-star"></i>
                            <i class="${product.star >= 3 ? "home-product-item__rating--gold" : ""} fas fa-star"></i>
                            <i class="${product.star >= 4 ? "home-product-item__rating--gold" : ""} fas fa-star"></i>
                            <i class="${product.star >= 5 ? "home-product-item__rating--gold" : ""} fas fa-star"></i>
                            </div>
                            <span class="home-product-item__sold">
                                ${product.sold} đã bán
                            </span>
                        </div>
    
                        <div class="home-product-item__origin">
                            <span class="home-product-item__brand">${product.brand}</span>
                            <span class="home-product-item__origin-name">${product.origin}</span>
                        </div>
    
                        <div style="display: ${product.favorite ? "block" : "none"}" class="home-product-item__favorite">
                            <i class="fas fa-check"></i>
                            <span>Yêu thích</span>
                        </div>
    
                        <div style="display: ${product.sale ? "block" : "none"}" class="home-product-item__sale-off">
                            <span class="home-product-item__sale-off-percent">${product.sale}%</span>
                            <span class="home-product-item__sale-off-label">GIẢM</span>
                        </div>
                    </a>
                </div>
                `
            }
        })
        component.innerHTML = htmls.join('')
        
    },
    renderShoppingCart: function(arr, id){
        const htmls = `
        <div class="buy-product" data-index="${id}">
            <div class="hide-on-mobile-tablet buy-product__close-icon">
                <i class="far fa-times-circle"></i>
            </div>
            <div class="buy-product__left">
            <div class="buy-product__img" style="background-image: url(${arr[id].path});" >
                
            </div>
            <div class="buy-product__info">
                <div class="buy-product__info-left">
                <div class="buy-product__info-img">
                    <img width="100%" src="./assets/img/avtar.png" alt="avatar">
                </div>
                <div class="buy-product__info-more">
                    <div class="buy-product__info-more__brand">
                        ${arr[id].brand}
                    </div>
                    <div class="buy-product__info-more-content">
                        <div class="buy-product__info-more__origin">
                            ${arr[id].origin}
                        </div>
                        <div class="buy-product__info-more__star">
                        <span>
                            ${arr[id].star}
                        </span>
                        <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
                </div>
                <div class="buy-product__info-right">
                <div class="buy-product__info-more-follow">
                    <div class="buy-product__info-more-icon">
                    <i class="fas fa-heartbeat"></i>
                    </div>
                    <div class="buy-product__info-more-text">
                    Theo dõi
                    </div>
                </div>
                </div>
                </div>
            </div>
            <div class="buy-product__right">
            <div class="buy-product__name">
                ${arr[id].title}
            </div>
            <div class="buy-product__price">
                <div class="buy-product__price-new">
                    ${arr[id].sale ? numberToCoin((arr[id].price * (100 - arr[id].sale) / 100).toFixed()) : numberToCoin(arr[id].price)}đ
                </div>
                <div style="display: ${arr[id].sale ? 'flex' : 'none'}" class="buy-product__sale-off">
                    <div class="buy-product__price-old">
                        ${numberToCoin(arr[id].price)}đ
                    </div>
                <div class="buy-product__sale-number">
                    Giảm
                    <span>
                        ${arr[id].sale}
                    </span>
                    %
                </div>
                </div>
                <div class="buy-product__sold">
                <div class="buy-product__sold-icon">
                    <i class="fas fa-cart-arrow-down"></i>
                </div>
                <div class="buy-product__sold-number">
                    ${arr[id].sold} lượt mua
                </div>
                </div>
            </div>
            <hr>
            <div class="buy-product__quantity">
                <div class="buy-product__quantity-left">
                Chọn số lượng:
                </div>
                <div class="buy-product__quantity-right">
                <div class="buy-product__quantity-btn sub-btn active">

                </div>
                <div onclick="return false"class="buy-product__quantity-number">
                    1
                </div>
                <div class="buy-product__quantity-btn add-btn">

                </div>
                </div>
            </div>
            <div class="buy-product__note">
                <div class="buy-product__note-icon">
                <i class="fas fa-exclamation"></i>
                </div>
                <div class="buy-product__text">
                Chỉ được mua tối đa
                <span>
                    5
                </span>
                sản phẩm.
                </div>
            </div>
            <div class="buy-product__action">
                <div class="buy-product__action-cartplus" data-index="${id}">
                <div class="buy-product__action-icon">
                    <i class="fas fa-cart-plus"></i>
                </div>
                <div class="buy-product__action-text">
                    Thêm vào giỏ
                </div>
                </div>
                <a target="_blank" href="pay.html" class="buy-product__action-buynow" data-index="${id}">
                <div class="buy-product__action-icon">
                    <i class="far fa-credit-card"></i>
                </div>
                <div class="buy-product__action-text">
                    Mua ngay
                </div>
                </a>
            </div>
            <hr>
            <div class="buy-product__more-list">
                <div class="buy-product__more-item">
                <div class="buy-product__more-title">
                    Ưu đãi dành cho bạn
                </div>
                <div class="buy-product__more-content">
                    <div class="buy-product__more-icon">
                    <i style="color: #14babd" class="fas fa-shipping-fast"></i>
                    </div>
                    <div class="buy-product__more-text">
                    Miễn phí vận chuyển
                    </div>
                </div>
                <div class="buy-product__more-note-icon">
                    <i class="fas fa-exclamation"></i>
                </div>
                </div>
                <hr>
                <div class="buy-product__more-item">
                <div class="buy-product__more-title">
                    Quyền lợi khách hàng
                </div>
                <div class="buy-product__more-content">
                    <div class="buy-product__more-icon">
                    <i style="color: #74bd8f"class="fas fa-user-shield"></i>
                    </div>
                    <div class="buy-product__more-text">
                    48 giờ hoàn trả
                    </div>
                </div>
                <div class="buy-product__more-note-icon">
                    <i class="fas fa-exclamation"></i>
                </div>
                </div>
                <hr>
                <div class="buy-product__content">
                <div title="${arr[id].content}" class="buy-product__content-text">
                    ${arr[id].content}
                </div>
                </div>
            </div>
            </div>
        </div>
        `
        $('.buy-render').innerHTML = htmls
    },
    renderCarts: function(arr){
        const htmls = arr.map((cart, index) => {
            return `
            <li class="header__cart-item" data-index="${index}">
            <img src="${cart.path}" alt="" class="header__cart-img">
            <div class="header__cart-item-info">
                <div class="header__cart-item-head">
                <h5 class="header__cart-item-name">
                    ${cart.name}
                </h5>
                <div class="header__cart-item-wrap">
                    <span class="header__cart-item-price">${cart.price}</span>
                    <span class="header__cart-item-mul">x</span>
                    <span class="header__cart-item-quantity">${cart.quantity}</span>
                </div>
                </div>
                <div class="header__cart-item-body">
                <span class="header__cart-item__brand">
                    Shop: ${cart.brand}
                </span>
                <span class="header__cart-item-remove" data-index="${index}">Xóa</span>
                </div>
            </div>
            </li>
            `
        })
        $('.header__cart-list-item').innerHTML = htmls.join("")
    },
    handleEvent: function(){
        const _this = this
        const homeFilterBtns = $$('.btn.home-filter__label-btn')
        const homeProductsList = $('.home-product>.row')
        const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
        const objLS = localStorage.getItem('obj') ? JSON.parse(localStorage.getItem('obj')) : {}

        //isLogin
        isLogin = function(){
            if(_this.isLogin) {
                $('.header__cart-notice').style.display = 'block'
                $('.header__cart-list-no-cart').style.display = 'none'
                $('.header__cart-list-has-cart').style.display = 'block'
            } else { 
                $('.header__cart-notice').style.display = 'none'
                $('.header__cart-list-no-cart').style.display = 'block'
                $('.header__cart-list-has-cart').style.display = 'none'
            }
        }
        isLogin()

        //signup, login
        showSignUp = function(){
            $('.modal').style.display = 'flex'
            $('.auth-form.signup').style.display = "block"
            $('.auth-form.login').style.display = "none"
            $('.buy-render').classList.remove('active')
            document.body.style.overflow = "hidden"
        }
        showLogin = function(){
            $('.modal').style.display = 'flex'
            $('.auth-form.login').style.display = "block"
            $('.auth-form.signup').style.display = "none"
            $('.buy-render').classList.remove('active')
            document.body.style.overflow = "hidden"
        }
        showInfoProduct = function(){
            $('.modal').style.display = 'flex'
            $('.auth-form.login').style.display = "none"
            $('.auth-form.signup').style.display = "none"
            $('.buy-render').classList.add('active')
            document.body.style.overflow = "hidden"
        }
        closeOverplay = function(){
            $('.modal').style.display = 'none'
            $('.auth-form.login').style.display = "none"
            $('.auth-form.signup').style.display = "none"
            $('.buy-render').classList.remove('active')
            $('.notify').style.display = "none"
            document.body.style.overflow = "auto"
        }

        window.onclick = function(e) {
            if(e.target.classList.contains('modal__overplay')){
                closeOverplay()
            }
        }

        //close menu-mobile

        $$('.btn-signUp').forEach((item) => {
            item.onclick = function(){
                showSignUp()
                clearSignUp()
                closeMenuMobile()
            }
        })

        $$('.btn-login').forEach((item) => {
            item.onclick = function(){
                showLogin()
                clearLogin()
                closeMenuMobile()
            }
        })

        $$('.auth-form__control-back').forEach((item) => {
            item.onclick = function(){
                closeOverplay()
            }
        })

        //render thông tin
        $('.home-product').onclick = function(e){
            const x = e.target.closest('.product-item')
            homeFilterBtns.forEach((homeFilterBtn, index) => {
                if(homeFilterBtn.classList.contains('btn--primary')) {
                    _this.renderShoppingCart(homeFilter[index], x.dataset.index)
                    _this.quantity = 1;
                }
            })
            showInfoProduct()
            
            //scroll tới đầu của sản phẩm khi render
            $('.buy-render').scroll({
                top: 0,
            });
        }


        //mảng sản phẩm mới
        const newList = this.products.filter((product) => product.new)
        //mảng sản phẩm yêu thích
        const favList = this.products.filter((product) => product.favorite)
        //mảng các danh mục 
        const homeFilter = [this.products, newList, favList]

        //array sort a-z (theo giá)
        toArrAZ = function(arr){
            return arr.sort(function(a, b) {return a.price - b.price})
        }
        //array sort z-a (theo giá)
        toArrZA = function(arr){
            return arr.sort(function(a, b) {return b.price - a.price})
        }

        //active home filter btn
        activeHomeFilterBtn = function(btn){
            homeFilterBtns.forEach(item => {
                item.classList.remove('btn--primary');
            });
            btn.classList.add('btn--primary');
        }
        //onclick show list filter
        homeFilterBtns.forEach((homeFilterBtn, index) => {
            homeFilterBtn.onclick = function(){
                activeHomeFilterBtn(this)
                _this.gotoPage(1)
                _this.renderProducts(homeFilter[index], homeProductsList, _this.startItem, _this.endItem)
                renderFilterPage()
            }
        })
        //render list phổ biến khi vào trang
        _this.renderProducts(this.products, homeProductsList, this.startItem, this.endItem)

        //render list giá tăng dần
        $('.sort--a-z').onclick = function(){
            homeFilterBtns.forEach((homeFilterBtn, index) => {
                if(homeFilterBtn.classList.contains('btn--primary')) {
                    _this.renderProducts(toArrAZ(homeFilter[index]), homeProductsList, _this.startItem, _this.endItem)
                }
            })
        }
        //render list giá giảm dần
        $('.sort--z-a').onclick = function(){
            homeFilterBtns.forEach((homeFilterBtn, index) => {
                if(homeFilterBtn.classList.contains('btn--primary')) {
                    _this.renderProducts(toArrZA(homeFilter[index]), homeProductsList, _this.startItem, _this.endItem)
                }
            })
        }

        //render page
        const numberPages = Math.ceil(this.products.length / this.itemPerPage)
        let htmls = ""
        for(let i = 1; i <= numberPages; i++) {
            htmls += `
                <li class="pagination-item" data-index="${i}">
                    ${i}
                </li>
            `
        }
        $('.pagination-list').innerHTML = htmls
        
        //home filter page
        renderFilterPage = function(){
            $('.home-filter__page-num').innerHTML = `
                <span class="home-filter__page-current">
                    ${_this.currentPage}
                </span>
                /${numberPages}
            `
        }
        renderFilterPage()
        
        //active Page
        activePageBtn = function(page){
            $$('.pagination-list li').forEach(item => {
                item.classList.remove('active');
            });
            page.classList.add('active');
        }

        //active page khi load vào trang
        activePageBtn($$('.pagination-list li')[0])

        //renderlist theo phổ biến, mới, yêu thích
        function renderlist(){
            homeFilterBtns.forEach((homeFilterBtn, index) => {
                if(homeFilterBtn.classList.contains('btn--primary')) {
                    _this.renderProducts(homeFilter[index], homeProductsList, _this.startItem, _this.endItem)
                }
            })
        }

        $$('.pagination-list li').forEach((item, index) => {
            item.onclick = function(){
                _this.currentPage = index + 1;
                _this.gotoPage(_this.currentPage)
                renderlist()
                renderFilterPage()
            }
        })

        //next, prev btn page
        $$('.btn-nextPage').forEach((item) => {
            item.onclick = () => {
                _this.nextPage()
                renderlist()
                renderFilterPage()
            }
        })

        $$('.btn-prevPage').forEach((item) => {
            item.onclick = () => {
                _this.prevPage()
                renderlist()
                renderFilterPage()
            }
        })

        //slider
        const slider = ["./assets/img/intro/banner-4.png", "./assets/img/intro/banner-2.jpg", "./assets/img/intro/banner-3.jpg", "./assets/img/intro/banner.jpg"]
        let indexSlider = 0;
        setInterval(function(){
            indexSlider++;
            if (indexSlider > slider.length - 1) {
                indexSlider = 0;
            }
            $('.slider-imgs img').src = slider[indexSlider];
        }, 5000)


        //search mobile
        $('.header-icon-search-mobile').onclick = function(){
            $('.header__search-box').classList.toggle('active');
            closeMenuMobile()
        }

        $('.header__cart').onclick = function(){
            closeMenuMobile()
        }

        //menu mobile
        $('.header-icon-menu-mobile').onclick = () => {
            $('.menu-mobile').classList.toggle('active');
        }

        //close menu mobile
        closeMenuMobile = function () {
            $('.menu-mobile').classList.remove('active');
            $('.action-mobile').classList.remove('active')
        }

        

        //show, hide thanh mua hàng trên mobile
        $('.buy-render').onscroll = function () {
            const height = this.offsetHeight;
            const x = $('.buy-product__action').getBoundingClientRect().top
            if (x < height + 40) {
                $('.action-mobile').classList.remove('active')
            }else {
                $('.action-mobile').classList.add('active')
            }
        }

        //check giỏ hàng rỗng hay không
        checkCart = function(){
            if(users[_this.idUser].carts.length !== 0) {
                $('.header__cart-list-no-cart').style.display = 'none'
                $('.header__cart-list-has-cart').style.display = 'block'
            } else {
                $('.header__cart-list-no-cart').style.display = 'block'
                $('.header__cart-list-has-cart').style.display = 'none'
            }
            $('.header__cart-notice').innerHTML = users[_this.idUser].carts.length;
            _this.renderCarts(users[_this.idUser].carts)
        }

        //thêm số lượng sp
        addProduct = function(component){
            _this.quantity++;
                if(_this.quantity >= 5){
                    _this.quantity = 5;
                    component.classList.add('active')
                }
        }
        //giảm số lượng sp
        subProduct = function(component){
            _this.quantity--;
                if(_this.quantity <= 1){
                    _this.quantity = 1;
                    component.classList.add('active')
                }
                
        }

        //localStorage mua từ giỏ -> true, mua ngay -> false
        setLocalStorage = function(key, value){
            objLS[key] = value
            localStorage.setItem('obj', JSON.stringify(objLS))
        }

        //thêm hàng vào giỏ
        addCart = function(id){
            homeFilterBtns.forEach((homeFilterBtn, index) => {
                if(homeFilterBtn.classList.contains('btn--primary')) {
                    const obj = {
                        id: id,
                        path:  homeFilter[index][id].path,
                        name:  homeFilter[index][id].title,
                        brand:  homeFilter[index][id].brand,
                        price:  homeFilter[index][id].price,
                        quantity: _this.quantity,
                    }                    
                    users[_this.idUser].carts.unshift(obj)
                    localStorage.setItem('users', JSON.stringify(users))
                    _this.quantity = 1
                    $('.buy-product__quantity-number').innerHTML = _this.quantity;
                    checkCart()
                }
            successNotify("Thêm vào giỏ thành công!")
            })
        }

        //thêm sản phẩm vào mua ngay
        addFastCart = function(id) {
            homeFilterBtns.forEach((homeFilterBtn, index) => {
                if(homeFilterBtn.classList.contains('btn--primary')) {
                    const obj = {
                        path:  homeFilter[index][id].path,
                        name:  homeFilter[index][id].title,
                        brand:  homeFilter[index][id].brand,
                        price:  homeFilter[index][id].price,
                        quantity: _this.quantity,
                    }  
                    fastCart = []                  
                    fastCart.unshift(obj)
                    localStorage.setItem('fastCart', JSON.stringify(fastCart))
                }
            })
            setLocalStorage('flag', false)
        }

        //add vào giỏ hàng
        $('.buy-render').onclick = function(e){
            const cartplusBtn = e.target.closest('.buy-product__action-cartplus')
            const buynowBtn = e.target.closest('.buy-product__action-buynow')
            const addQuantity = e.target.closest('.add-btn')
            const subQuantity = e.target.closest('.sub-btn')
            const quantityBtns = e.target.closest('.buy-product__quantity')
            const closeBtn = e.target.closest('.buy-product__close-icon')
            if (quantityBtns){
                const quantityBtnsArr = quantityBtns.querySelectorAll('.buy-product__quantity-btn')
                quantityBtnsArr.forEach((item) => {
                    item.classList.remove('active')
                })
                if(addQuantity){
                    addProduct(addQuantity)
                }
                if(subQuantity){
                    subProduct(subQuantity)
                }
                $('.buy-product__quantity-number').innerHTML = _this.quantity;
            }
            
            if (cartplusBtn){
                if (_this.isLogin) {
                    const id = cartplusBtn.dataset.index
                    addCart(id)
                } else {
                    errorNavLogin("Vui lòng đăng nhập trước!")
                }
            }

            if (buynowBtn){
                const id = buynowBtn.dataset.index
                addFastCart(id)
            }

            if(closeBtn) {
                closeOverplay()
            }
        }

        //action mobile onclick
        $('.action-mobile__cartplus').onclick = function(){
            const id = this.parentElement.parentElement.querySelector('.buy-product').dataset.index
            addCart(id)
            $('.action-mobile').classList.remove('active')
        }
        $('.action-mobile__buynow').onclick = function(){
            const id = this.parentElement.parentElement.querySelector('.buy-product').dataset.index
            addFastCart(id)
            $('.action-mobile').classList.remove('active')
        }

        //xoá sản phẩm trong giỏ
        $('.header__cart-list-item').onclick = function(e){
            const deleteProductBtn = e.target.closest('.header__cart-item-remove')
            const id = deleteProductBtn.dataset.index
            users[_this.idUser].carts.splice(id, 1)
            localStorage.setItem('users', JSON.stringify(users))
            checkCart()
        }

        //thanh toán
        $('.header__cart-pay-cart').onclick = function(){
            setLocalStorage('flag', true)
        }

        //đóng modal
        $('.action-mobile__close').onclick = () => {
            closeOverplay()
        }

        //resize
        window.onresize = function(){
            if (window.innerWidth > 1024){
                $('.action-mobile').classList.remove('active')
            }
        }

        //FORM SIGNUP LOGIN
        //success notify
        successNotify = function(message) {
            $('.notify').style.display = 'block'
            $('.notify__nav-login').style.display = 'none'
            $('.notify__close-btn').style.display = 'flex'
            $('.notify__body-icon').classList.add('success')
            $('.notify__body-icon').classList.remove('fail')
            $('.notify__body-content span').innerHTML = message
        }

        //error notify
        errorNotify = function(message) {
            $('.notify').style.display = 'block'
            $('.notify__nav-login').style.display = 'none'
            $('.notify__close-btn').style.display = 'flex'
            $('.notify__body-icon').classList.add('fail')
            $('.notify__body-icon').classList.remove('success')
            $('.notify__body-content span').innerHTML = message
        }

        //error nav login
        errorNavLogin = function(message) {
            $('.notify').style.display = 'block'
            $('.notify__nav-login').style.display = 'flex'
            $('.notify__close-btn').style.display = 'none'
            $('.notify__body-icon').classList.add('fail')
            $('.notify__body-icon').classList.remove('success')
            $('.notify__body-content span').innerHTML = message
        }

        //close notify
        $('.notify__close-btn').onclick = function(){
            $('.notify').style.display = 'none'
        }

        //nav login from notify
        $('.notify__nav-login').onclick = function(){
            $('.notify').style.display = 'none'
            clearLogin()
            showLogin()
        }

        const userName = $('.user-name')
        const signUpEmail = $('.email-signUp')
        const signUpPw = $('.pw-signUp')
        const signUpConfirm = $('.confirm-pw-signUp')
        const loginEmail = $('.email-login')
        const loginPw = $('.pw-login')

        //kiểm tra mail
        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        //check mail
        checkEmail = function(email) {
            email.onblur = function(){
                validateEmail(email.value) ? this.parentElement.classList.remove('error') : this.parentElement.classList.add('error')
            }
            email.oninput = function(){
                this.parentElement.classList.remove('error')
            }
        }
        //check pw
        checkPw = function(password) {
            password.onblur = function(){
                this.value.length >= 6 ? this.parentElement.classList.remove('error') : this.parentElement.classList.add('error')
            }
            password.oninput = function(){
                this.parentElement.classList.remove('error')
            }
        }
        //check confirm PW
        checkConfirmPw = function(password) {
            password.onblur = function(){
                (!(checkError($('.pw-signUp'))) && this.value.trim() === $('.pw-signUp').value.trim()) ? this.parentElement.classList.remove('error') : this.parentElement.classList.add('error')
            }
            password.oninput = function(){
                this.parentElement.classList.remove('error')
            }
        }
        
        checkEmail(signUpEmail)
        checkPw(signUpPw)
        checkConfirmPw(signUpConfirm)
        checkEmail(loginEmail)
        checkPw(loginPw)

        checkError = function(component){
            return component.parentElement.classList.contains('error') || component.value.trim() === ''
        }

        clearSignUp = function(){
            signUpEmail.value = null
            signUpPw.value = null
            signUpConfirm.value = null
            $$('.auth-form.signup .auth-form__group').forEach((item) => {
                item.classList.remove('error')
            })
        }
            
        clearLogin = function(){
            loginEmail.value = null
            loginPw.value = null
            $$('.auth-form.login .auth-form__group').forEach((item) => {
                item.classList.remove('error')
            })
        }

        //local Storage

        $('.signUp-btn').onclick = function(){
            const account = userName.value ? userName.value : "User"
            const email = signUpEmail
            const pw = signUpPw
            const confirm = signUpConfirm
            const usersSignup = users
            
            if (!(checkError(email)) && !(checkError(pw)) && !(checkError(confirm))) {
                const checkMail = users.filter(function(user) {
                    return email.value.trim() === user.email
                })
                //check mail đã có hay chưa
                if (checkMail.length > 0) {
                    errorNotify("Email đã tồn tại!")
                } else {
                    const obj = {
                        id: users.length,
                        userName: account,
                        email: email.value.trim(),
                        password: pw.value.trim(),
                        carts: [],
                        isLogin: false,
                    }
                    usersSignup.push(obj)
                    localStorage.setItem('users', JSON.stringify(usersSignup))
                    successNotify("Đăng kí thành công!")
                    showLogin()
                    clearLogin()
                }
            } 
            else {
                errorNotify("Vui lòng điền đầy đủ thông tin!")
            }
        }

        //show tài khoản sau khi đăng nhập (ẩn login signup)
        showUser = function(){
            $('.header__nav-user').style.display = 'flex'
            $('.avatar-mobile').style.display = 'flex'
            $$('.btn-signUp').forEach((item) => {
                item.style.display = 'none'
            })
            $$('.btn-login').forEach((item) => {
                item.style.display = 'none'
            })
            $('.logout-btn.header__nav-user-item').style.display = 'block'
            $('.menu-mobile__item.logout-btn').style.display = 'flex'

            _this.isLogin = true;
            isLogin()
            checkCart()
        }
        hideUser = function(){
            $('.header__nav-user').style.display = 'none'
            $('.avatar-mobile').style.display = 'none'
            $$('.btn-signUp').forEach((item) => {
                item.style.display = 'flex'
            })
            $$('.btn-login').forEach((item) => {
                item.style.display = 'flex'
            })
            $$('.logout-btn').forEach((item) => {
                item.style.display = 'none'
            })
            _this.isLogin = false;
            isLogin()

            users.forEach((user) => {
                user.isLogin = false;
            })
            localStorage.setItem('users', JSON.stringify(users))
        }

        //kiểm tra đăng nhập
        $('.login-btn').onclick = function(){
            const mail = $('.email-login')
            const pw = $('.pw-login')
            const usersLogin = users
            let id

            const user = usersLogin.find(function(user, index) {
                id = index
                return mail.value.trim() === user.email && pw.value.trim() === user.password 
            })

            //gán id account
            _this.idUser = id

            if (user) {
                _this.isLogin = true

                //isLogin (localStorage)
                usersLogin.forEach((user) => {
                    user.isLogin = false;
                })
                usersLogin[_this.idUser].isLogin = true;
                localStorage.setItem('users', JSON.stringify(usersLogin));
                
                $$('.user-show').forEach((item) => {
                    item.innerHTML = usersLogin[_this.idUser].userName
                })
                showUser()
                closeOverplay()
            } else {
                errorNotify("Sai tên tài khoản hoặc mật khẩu!")
            }
        }

        //log out
        $$('.logout-btn').forEach((item) => {
            item.onclick = () => {
                _this.isLogin = false
                hideUser()
                closeMenuMobile()
            }
        })

    },
    renderNumberPage(number){
        this.startItem = (number - 1) * this.itemPerPage
        this.endItem = number * this.itemPerPage
        activePageBtn($$('.pagination-list li')[number - 1])
    },
    gotoPage: function (page) {
        this.currentPage = page
        this.renderNumberPage(this.currentPage)
    },
    nextPage: function () {
        const numberPages = Math.ceil(this.products.length / this.itemPerPage)
        this.currentPage++
        if (this.currentPage > numberPages) {
            this.currentPage = numberPages
        }
        this.renderNumberPage(this.currentPage)
    },
    prevPage: function () {
        this.currentPage--
        if (this.currentPage < 1) {
            this.currentPage = 1
        }
        this.renderNumberPage(this.currentPage)
    },
    start: function(){
        this.handleEvent()
    }
}

app.start()
