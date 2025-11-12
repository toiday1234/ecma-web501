const multiply = (a, b) => {
  return a * b;
};
const isPositive = (number) => {
  return number >= 0;
};
const getRandomNumber = () => {
  return Math.random();
};
document.addEventListener("click", () => {
  console.log("Clicked!");
});


//Bài tập 2: Sử dụng Default Parameters
//Viết lại hàm sau sử dụng default parameters:

// function createUser(name, age, isAdmin) {
//   if (name === undefined) name = "Anonymous";
//   if (age === undefined) age = 18;
//   if (isAdmin === undefined) isAdmin = false;

//   return {
//     name: name,
//     age: age,
//     isAdmin: isAdmin,
//   };
// }

function createUser(
  name = "khang luu",  
  age = 19,            
  isAdmin = false       
) {
  return {
    name: name,          
    age: age,            
    isAdmin: isAdmin     
  };
}

console.log(createUser()); 

console.log(createUser("Khang")); 

console.log(createUser("Linh", 20, true)); 



// Bài tập 3: Rest và Spread
// Viết các hàm sau:

// Hàm mergeArrays nhận nhiều mảng và trả về mảng hợp nhất
// Hàm sumAll tính tổng tất cả tham số truyền vào
// Hàm createProduct nhận thông tin sản phẩm và trả về object sản phẩm với giá trị mặc định


function mergeArrays(...arrays) {                
  return [].concat(...arrays);                   
}

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
console.log(mergeArrays(arr1, arr2, arr3));      

function sumAll(...numbers) {                   
  let total = 0;
  for (let num of numbers) {                     
    total += num;                               
  }
  return total;
}

console.log(sumAll(1, 2, 3));                    
console.log(sumAll(5, 10, 15));                 



function createProduct(
  name = "iphone 17",                 
  price = 47000000,                                     
  stock = 2,                                     
                                       
) {
  return {
    name,                                        
    price,
    stock,                                      
  };
}

console.log(createProduct("iphone 17", 47000000, 2));

console.log(createProduct("Sữa tươi", 20000, 10, "Loại: Ít đường", "HSD: 2025"));


// Bài tập 4: Ứng dụng thực tế
// Tạo hàm shoppingCart với:

// Tham số đầu tiên là tên khách hàng
// Các tham số tiếp theo là các sản phẩm
// Sử dụng rest parameters để thu thập sản phẩm
// Trả về object chứa thông tin đơn hàng


function shoppingCart(customerName, ...products) {
  const order = {
    customer: khangluu,   
    items: ["Áo thun", "Quần jean", "Giày sneaker"],          
    totalItems: 3 
  };

  
  return order;
}

const myOrder = shoppingCart("Lưu Duy Khang", "Áo thun", "Quần jean", "Giày sneaker");

console.log(myOrder);
