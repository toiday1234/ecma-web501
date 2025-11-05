function calculateBMI(weight, height)  {
    const bmi = weight / (height * height);

    let classification;
    if(bmi < 18.5)  {
        classification = "thieu can";
    } else if (bmi < 25) {
        classification = "binh thuong";
    } else if (bmi < 30) {
        classification = "thua can";
    } else {
        classification = "beo phi";
    }

    return `BMI : ${bmi.toFixed(2)} -phan loai: ${classification}`;

}
console.log(calculateBMI(70, 1.75));
function createBook(title, author, year, price) {
  const discountName = "calculateDiscount";

  return {
    title,
    author,
    year,
    price,

    getBookInfo() {
      return "Sách: " + this.title + " - Tác giả: " + this.author +
             " (" + this.year + ") - Giá: " + this.price + "đ";
    },

    [discountName](discount) {
      let giam = this.price * discount / 100;
      let giaMoi = this.price - giam;
      return "Giá sau giảm " + discount + "% là: " + giaMoi + "đ";
    }
  };
}

const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10)); 