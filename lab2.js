//Bài 1: Sửa lỗi scope
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); 
  }, 100);
}


//Bài 2: Sử dụng const đúng cách
const student = {
  name: "khangluu",
  age: 19,
};

student.grade = "kl";

student.age = 20;

console.log(student)

//Bài 3: Tạo email template

const khachhang = {
  firstName: "luu",
  lastName: "duy khang",
  product: "iphone 17 promax",
  price: 47000000,
  orderDate: "2025-05-11",
};

const thongbao = `
Xin chào ${user.firstName} ${user.lastName},

Cảm ơn bạn đã mua sản phẩm: ${user.product}.
Giá tien đơn hàng của bạn là ${user.price.toLocaleString()} VND.
Ngày đặt hàng: ${user.orderDate}.

cảm ơn bạn đã đặt hàng!
`;

console.log(thongbao);

//Bài 4: Tạo HTML template

const sanpham = {
  name: "iPhone 17",
  price: 47000000,
  discount: 15,
  inStock: false,
};

const finalPrice = sanpham.price * (1 - sanpham.discount / 100);

const productCard = `
<div class="card">
  <h2>${product.name}</h2>
  <p>Giá gốc: ${product.price.toLocaleString()} VND</p>
  <p>Giảm giá: ${product.discount}%</p>
  <p>Giá sau giảm: ${finalPrice.toLocaleString()} VND</p>
  <p>Tình trạng: ${product.inStock ? "Còn hàng" : "sẵn hàng"}</p>
</div>
`;

console.log(productCard);



const width = 100;
const height = 200;
const color = "red";

const rectangle = {
  width,  
  height, 
  color,  

  calculateArea() {
    return this.width * this.height; 
  },

  describe() {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  },
};

console.log(rectangle.calculateArea()); 
console.log(rectangle.describe());      


//BÀI 6 — Computed Property Names


const env = "production";  
const version = "v2";      
const features = ["auth", "payment", "notification"];


const config = {
  
  [`api_${env}_${version}`]: "https://api.example.com", 

  
  [`feature_${features[0]}`]: true,  
  [`feature_${features[1]}`]: true,  
  [`feature_${features[2]}`]: false, 

  [`get${env}Config`]() {  
    return `Cấu hình hiện tại: ${env} (${version})`; 
  },
};

console.log(config); 
console.log(config[`get${env}Config`]()); 
