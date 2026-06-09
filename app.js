const exercises = [
  {
    id: "declaration-add",
    level: "Function declare",
    title: "Khai báo hàm: add",
    type: "Khai báo hàm",
    prompt:
      "Tạo hàm add với 2 tham số a và b. Kết quả trả về là tổng của a và b.",
    example: "Kết quả mong muốn:\nadd(2, 3) => 5\nadd(-1, 6) => 5",
    hint: `function add(a, b) {\n  return a + b;\n}`,
    tests: [
      { expression: "add(2, 3)", expected: 5 },
      { expression: "add(-1, 6)", expected: 5 },
      { expression: "add(10, 0)", expected: 10 },
    ],
  },
  {
    id: "declaration-subtract",
    level: "Function declare",
    title: "Khai báo hàm: subtract",
    type: "Khai báo hàm",
    prompt:
      "Tạo hàm subtract với 2 tham số a và b. Kết quả trả về là a trừ b.",
    example: "Kết quả mong muốn:\nsubtract(8, 3) => 5\nsubtract(4, 9) => -5",
    hint: `function subtract(a, b) {\n  return a - b;\n}`,
    tests: [
      { expression: "subtract(8, 3)", expected: 5 },
      { expression: "subtract(4, 9)", expected: -5 },
      { expression: "subtract(10, 10)", expected: 0 },
    ],
  },
  {
    id: "declaration-greet",
    level: "Function declare",
    title: "Khai báo hàm: sayHello",
    type: "Khai báo hàm",
    prompt:
      "Tạo hàm sayHello với 1 tham số name. Kết quả trả về là chuỗi Xin chào, [name]!",
    example: 'Kết quả mong muốn:\nsayHello("An") => "Xin chào, An!"',
    hint: `function sayHello(name) {\n  return "Xin chào, " + name + "!";\n}`,
    tests: [
      { expression: 'sayHello("An")', expected: "Xin chào, An!" },
      { expression: 'sayHello("Bình")', expected: "Xin chào, Bình!" },
    ],
  },
  {
    id: "declaration-is-even",
    level: "Function declare",
    title: "Khai báo hàm: isEven",
    type: "Khai báo hàm",
    prompt:
      "Tạo hàm isEven với 1 tham số n. Kết quả trả về là true nếu n là số chẵn, ngược lại trả về false.",
    example: "Kết quả mong muốn:\nisEven(4) => true\nisEven(7) => false",
    hint: `function isEven(n) {\n  return n % 2 === 0;\n}`,
    tests: [
      { expression: "isEven(4)", expected: true },
      { expression: "isEven(7)", expected: false },
      { expression: "isEven(0)", expected: true },
    ],
  },
  {
    id: "declaration-max",
    level: "Function declare",
    title: "Khai báo hàm: max",
    type: "Khai báo hàm",
    prompt:
      "Tạo hàm max với 2 tham số a và b. Kết quả trả về là số lớn hơn.",
    example: "Kết quả mong muốn:\nmax(3, 9) => 9\nmax(10, 2) => 10",
    hint: `function max(a, b) {\n  if (a > b) {\n    return a;\n  }\n\n  return b;\n}`,
    tests: [
      { expression: "max(3, 9)", expected: 9 },
      { expression: "max(10, 2)", expected: 10 },
      { expression: "max(5, 5)", expected: 5 },
    ],
  },
  {
    id: "expression-square",
    level: "Function expression",
    title: "Biểu thức hàm: square",
    type: "Biểu thức hàm",
    prompt:
      "Tạo biến square và gán cho biến đó một hàm. Hàm nhận tham số n, kết quả trả về là n nhân n.",
    example: "Kết quả mong muốn:\nsquare(4) => 16\nsquare(-3) => 9",
    hint: `const square = function(n) {\n  return n * n;\n};`,
    tests: [
      { expression: "square(4)", expected: 16 },
      { expression: "square(9)", expected: 81 },
      { expression: "square(-3)", expected: 9 },
    ],
  },
  {
    id: "expression-is-adult",
    level: "Function expression",
    title: "Biểu thức hàm: isAdult",
    type: "Biểu thức hàm",
    prompt:
      "Tạo biến isAdult và gán cho biến đó một hàm. Hàm nhận tham số age, kết quả trả về là true nếu age từ 18 trở lên.",
    example: "Kết quả mong muốn:\nisAdult(20) => true\nisAdult(15) => false",
    hint: `const isAdult = function(age) {\n  return age >= 18;\n};`,
    tests: [
      { expression: "isAdult(20)", expected: true },
      { expression: "isAdult(18)", expected: true },
      { expression: "isAdult(15)", expected: false },
    ],
  },
  {
    id: "expression-first-char",
    level: "Function expression",
    title: "Biểu thức hàm: firstChar",
    type: "Biểu thức hàm",
    prompt:
      "Tạo biến firstChar và gán cho biến đó một hàm. Hàm nhận tham số text, kết quả trả về là ký tự đầu tiên của text.",
    example: 'Kết quả mong muốn:\nfirstChar("JavaScript") => "J"',
    hint: `const firstChar = function(text) {\n  return text[0];\n};`,
    tests: [
      { expression: 'firstChar("JavaScript")', expected: "J" },
      { expression: 'firstChar("Code")', expected: "C" },
    ],
  },
  {
    id: "expression-total-price",
    level: "Function expression",
    title: "Biểu thức hàm: totalPrice",
    type: "Biểu thức hàm",
    prompt:
      "Tạo biến totalPrice và gán cho biến đó một hàm. Hàm nhận price và quantity, kết quả trả về là price nhân quantity.",
    example: "Kết quả mong muốn:\ntotalPrice(5, 3) => 15",
    hint: `const totalPrice = function(price, quantity) {\n  return price * quantity;\n};`,
    tests: [
      { expression: "totalPrice(5, 3)", expected: 15 },
      { expression: "totalPrice(12, 2)", expected: 24 },
      { expression: "totalPrice(9, 0)", expected: 0 },
    ],
  },
  {
    id: "expression-make-email",
    level: "Function expression",
    title: "Biểu thức hàm: makeEmail",
    type: "Biểu thức hàm",
    prompt:
      "Tạo biến makeEmail và gán cho biến đó một hàm. Hàm nhận username, kết quả trả về là username cộng với @gmail.com.",
    example: 'Kết quả mong muốn:\nmakeEmail("an") => "an@gmail.com"',
    hint: `const makeEmail = function(username) {\n  return username + "@gmail.com";\n};`,
    tests: [
      { expression: 'makeEmail("an")', expected: "an@gmail.com" },
      { expression: 'makeEmail("binh")', expected: "binh@gmail.com" },
    ],
  },
  {
    id: "arrow-double",
    level: "Arrow function",
    title: "Hàm mũi tên: double",
    type: "Hàm mũi tên",
    prompt:
      "Tạo biến double bằng hàm mũi tên. Hàm nhận tham số n, kết quả trả về là n nhân 2.",
    example: "Kết quả mong muốn:\ndouble(5) => 10\ndouble(-4) => -8",
    hint: `const double = (n) => {\n  return n * 2;\n};`,
    tests: [
      { expression: "double(5)", expected: 10 },
      { expression: "double(-4)", expected: -8 },
      { expression: "double(0)", expected: 0 },
    ],
  },
  {
    id: "arrow-first-item",
    level: "Arrow function",
    title: "Hàm mũi tên: getFirstItem",
    type: "Hàm mũi tên",
    prompt:
      "Tạo biến getFirstItem bằng hàm mũi tên. Hàm nhận tham số arr, kết quả trả về là phần tử đầu tiên của arr.",
    example: 'Kết quả mong muốn:\ngetFirstItem(["a", "b"]) => "a"',
    hint: `const getFirstItem = (arr) => {\n  return arr[0];\n};`,
    tests: [
      { expression: 'getFirstItem(["a", "b"])', expected: "a" },
      { expression: "getFirstItem([7, 8, 9])", expected: 7 },
    ],
  },
  {
    id: "arrow-last-item",
    level: "Arrow function",
    title: "Hàm mũi tên: getLastItem",
    type: "Hàm mũi tên",
    prompt:
      "Tạo biến getLastItem bằng hàm mũi tên. Hàm nhận tham số arr, kết quả trả về là phần tử cuối cùng của arr.",
    example: "Kết quả mong muốn:\ngetLastItem([1, 2, 3]) => 3",
    hint: `const getLastItem = (arr) => {\n  return arr[arr.length - 1];\n};`,
    tests: [
      { expression: "getLastItem([1, 2, 3])", expected: 3 },
      { expression: 'getLastItem(["x", "y"])', expected: "y" },
    ],
  },
  {
    id: "arrow-full-name",
    level: "Arrow function",
    title: "Hàm mũi tên: fullName",
    type: "Hàm mũi tên",
    prompt:
      "Tạo biến fullName bằng hàm mũi tên. Hàm nhận firstName và lastName, kết quả trả về là họ tên đầy đủ có một dấu cách ở giữa.",
    example: 'Kết quả mong muốn:\nfullName("An", "Nguyen") => "An Nguyen"',
    hint: `const fullName = (firstName, lastName) => {\n  return firstName + " " + lastName;\n};`,
    tests: [
      { expression: 'fullName("An", "Nguyen")', expected: "An Nguyen" },
      { expression: 'fullName("Minh", "Tran")', expected: "Minh Tran" },
    ],
  },
  {
    id: "arrow-is-empty",
    level: "Arrow function",
    title: "Hàm mũi tên: isEmpty",
    type: "Hàm mũi tên",
    prompt:
      "Tạo biến isEmpty bằng hàm mũi tên. Hàm nhận tham số text, kết quả trả về là true nếu text là chuỗi rỗng.",
    example: 'Kết quả mong muốn:\nisEmpty("") => true\nisEmpty("JS") => false',
    hint: `const isEmpty = (text) => {\n  return text === "";\n};`,
    tests: [
      { expression: 'isEmpty("")', expected: true },
      { expression: 'isEmpty("JS")', expected: false },
      { expression: 'isEmpty(" ")', expected: false },
    ],
  },
  {
    id: "free-sum-array",
    level: "Tự do",
    title: "Tự do: sumArray",
    type: "Bài tự do",
    prompt:
      "Tạo hàm sumArray với 1 tham số numbers. Kết quả trả về là tổng tất cả số trong mảng.",
    example: "Kết quả mong muốn:\nsumArray([1, 2, 3]) => 6\nsumArray([5, -2, 7]) => 10",
    hint: `Bạn có thể viết bằng cách nào cũng được.\n\nVí dụ:\nfunction sumArray(numbers) {\n  let total = 0;\n\n  for (let number of numbers) {\n    total += number;\n  }\n\n  return total;\n}`,
    tests: [
      { expression: "sumArray([1, 2, 3])", expected: 6 },
      { expression: "sumArray([5, -2, 7])", expected: 10 },
      { expression: "sumArray([])", expected: 0 },
    ],
  },
  {
    id: "free-count-vowels",
    level: "Tự do",
    title: "Tự do: countVowels",
    type: "Bài tự do",
    prompt:
      "Tạo hàm countVowels với 1 tham số text. Kết quả trả về là số lượng nguyên âm a, e, i, o, u trong text.",
    example: 'Kết quả mong muốn:\ncountVowels("hello") => 2\ncountVowels("javascript") => 3',
    hint: `Bạn có thể dùng vòng lặp, includes, hoặc tách chuỗi thành mảng.\n\nGợi ý ý tưởng:\n- Tạo biến count = 0\n- Duyệt từng ký tự trong text\n- Nếu ký tự nằm trong "aeiou" thì tăng count\n- return count`,
    tests: [
      { expression: 'countVowels("hello")', expected: 2 },
      { expression: 'countVowels("javascript")', expected: 3 },
      { expression: 'countVowels("sky")', expected: 0 },
    ],
  },
  {
    id: "free-reverse-text",
    level: "Tự do",
    title: "Tự do: reverseText",
    type: "Bài tự do",
    prompt:
      "Tạo hàm reverseText với 1 tham số text. Kết quả trả về là chuỗi bị đảo ngược.",
    example: 'Kết quả mong muốn:\nreverseText("code") => "edoc"',
    hint: `Một hướng làm:\n- Biến text thành mảng bằng split("")\n- Đảo mảng bằng reverse()\n- Ghép lại bằng join("")`,
    tests: [
      { expression: 'reverseText("code")', expected: "edoc" },
      { expression: 'reverseText("JavaScript")', expected: "tpircSavaJ" },
      { expression: 'reverseText("")', expected: "" },
    ],
  },
  {
    id: "free-find-longest-word",
    level: "Tự do",
    title: "Tự do: findLongestWord",
    type: "Bài tự do",
    prompt:
      "Tạo hàm findLongestWord với 1 tham số words. Kết quả trả về là từ dài nhất trong mảng.",
    example:
      'Kết quả mong muốn:\nfindLongestWord(["an", "javascript", "code"]) => "javascript"',
    hint: `Một hướng làm:\n- Giả sử từ dài nhất ban đầu là words[0]\n- Duyệt từng từ trong words\n- Nếu từ hiện tại dài hơn từ đang lưu, cập nhật lại\n- return từ dài nhất`,
    tests: [
      {
        expression: 'findLongestWord(["an", "javascript", "code"])',
        expected: "javascript",
      },
      { expression: 'findLongestWord(["red", "blue", "green"])', expected: "green" },
      { expression: 'findLongestWord(["a"])', expected: "a" },
    ],
  },
  {
    id: "free-format-money",
    level: "Tự do",
    title: "Tự do: formatMoney",
    type: "Bài tự do",
    prompt:
      "Tạo hàm formatMoney với 1 tham số amount. Kết quả trả về là chuỗi có dạng [amount] VND.",
    example: 'Kết quả mong muốn:\nformatMoney(5000) => "5000 VND"',
    hint: `Chỉ cần ghép amount với chuỗi " VND".\n\nBạn có thể dùng nối chuỗi hoặc template literal.`,
    tests: [
      { expression: "formatMoney(5000)", expected: "5000 VND" },
      { expression: "formatMoney(0)", expected: "0 VND" },
      { expression: "formatMoney(125000)", expected: "125000 VND" },
    ],
  },
  {
    id: "object-method-toi",
    level: "Object method",
    title: "Object method: toi.chao",
    type: "Object method và this",
    prompt:
      'Tạo object toi có thuộc tính ten, tuoi và phương thức chao. Khi gọi toi.chao(), phương thức này in ra câu "Xin chào, tôi là Nam, năm nay tôi 20 tuổi."',
    example:
      'Kết quả mong muốn:\ntoi.chao() in ra "Xin chào, tôi là Nam, năm nay tôi 20 tuổi."',
    hint: `const toi = {\n  ten: "Nam",\n  tuoi: 20,\n  chao: function() {\n    console.log("Xin chào, tôi là " + this.ten + ", năm nay tôi " + this.tuoi + " tuổi.");\n  }\n};`,
    tests: [
      { expression: "toi.ten", expected: "Nam" },
      { expression: "toi.tuoi", expected: 20 },
      {
        expression: "toi.chao(); __logs[0]",
        expected: "Xin chào, tôi là Nam, năm nay tôi 20 tuổi.",
      },
    ],
  },
  {
    id: "object-method-car",
    level: "Object method",
    title: "Object method: chiecXe.gioiThieu",
    type: "Object method và this",
    prompt:
      'Tạo object chiecXe có thuộc tính ten, mau và phương thức gioiThieu. Khi gọi chiecXe.gioiThieu(), phương thức này in ra câu "Đây là xe VinFast VF8 màu Đỏ."',
    example:
      'Kết quả mong muốn:\nchiecXe.gioiThieu() in ra "Đây là xe VinFast VF8 màu Đỏ."',
    hint: `const chiecXe = {\n  ten: "VinFast VF8",\n  mau: "Đỏ",\n  gioiThieu: function() {\n    console.log("Đây là xe " + this.ten + " màu " + this.mau + ".");\n  }\n};`,
    tests: [
      { expression: "chiecXe.ten", expected: "VinFast VF8" },
      { expression: "chiecXe.mau", expected: "Đỏ" },
      {
        expression: "chiecXe.gioiThieu(); __logs[0]",
        expected: "Đây là xe VinFast VF8 màu Đỏ.",
      },
    ],
  },
  {
    id: "object-method-student",
    level: "Object method",
    title: "Object method: hocSinh.thongTin",
    type: "Object method và this",
    prompt:
      'Tạo object hocSinh có thuộc tính ten, lop và phương thức thongTin. Khi gọi hocSinh.thongTin(), phương thức này in ra câu "Lan học lớp 10A."',
    example: 'Kết quả mong muốn:\nhocSinh.thongTin() in ra "Lan học lớp 10A."',
    hint: `const hocSinh = {\n  ten: "Lan",\n  lop: "10A",\n  thongTin: function() {\n    console.log(this.ten + " học lớp " + this.lop + ".");\n  }\n};`,
    tests: [
      { expression: "hocSinh.ten", expected: "Lan" },
      { expression: "hocSinh.lop", expected: "10A" },
      { expression: "hocSinh.thongTin(); __logs[0]", expected: "Lan học lớp 10A." },
    ],
  },
  {
    id: "object-method-product",
    level: "Object method",
    title: "Object method: sanPham.hienThi",
    type: "Object method và this",
    prompt:
      'Tạo object sanPham có thuộc tính ten, gia và phương thức hienThi. Khi gọi sanPham.hienThi(), phương thức này in ra câu "Áo thun có giá 150000 VND."',
    example:
      'Kết quả mong muốn:\nsanPham.hienThi() in ra "Áo thun có giá 150000 VND."',
    hint: `const sanPham = {\n  ten: "Áo thun",\n  gia: 150000,\n  hienThi: function() {\n    console.log(this.ten + " có giá " + this.gia + " VND.");\n  }\n};`,
    tests: [
      { expression: "sanPham.ten", expected: "Áo thun" },
      { expression: "sanPham.gia", expected: 150000 },
      {
        expression: "sanPham.hienThi(); __logs[0]",
        expected: "Áo thun có giá 150000 VND.",
      },
    ],
  },
  {
    id: "object-method-account",
    level: "Object method",
    title: "Object method: taiKhoan.thongBao",
    type: "Object method và this",
    prompt:
      'Tạo object taiKhoan có thuộc tính tenDangNhap, soDu và phương thức thongBao. Khi gọi taiKhoan.thongBao(), phương thức này in ra câu "Tài khoản user01 còn 500000 VND."',
    example:
      'Kết quả mong muốn:\ntaiKhoan.thongBao() in ra "Tài khoản user01 còn 500000 VND."',
    hint: `const taiKhoan = {\n  tenDangNhap: "user01",\n  soDu: 500000,\n  thongBao: function() {\n    console.log("Tài khoản " + this.tenDangNhap + " còn " + this.soDu + " VND.");\n  }\n};`,
    tests: [
      { expression: "taiKhoan.tenDangNhap", expected: "user01" },
      { expression: "taiKhoan.soDu", expected: 500000 },
      {
        expression: "taiKhoan.thongBao(); __logs[0]",
        expected: "Tài khoản user01 còn 500000 VND.",
      },
    ],
  },
];

const syntaxRules = {
  "declaration-add": { kind: "declaration", name: "add", params: ["a", "b"] },
  "declaration-subtract": { kind: "declaration", name: "subtract", params: ["a", "b"] },
  "declaration-greet": { kind: "declaration", name: "sayHello", params: ["name"] },
  "declaration-is-even": { kind: "declaration", name: "isEven", params: ["n"] },
  "declaration-max": { kind: "declaration", name: "max", params: ["a", "b"] },
  "expression-square": { kind: "expression", name: "square", params: ["n"] },
  "expression-is-adult": { kind: "expression", name: "isAdult", params: ["age"] },
  "expression-first-char": { kind: "expression", name: "firstChar", params: ["text"] },
  "expression-total-price": {
    kind: "expression",
    name: "totalPrice",
    params: ["price", "quantity"],
  },
  "expression-make-email": { kind: "expression", name: "makeEmail", params: ["username"] },
  "arrow-double": { kind: "arrow", name: "double", params: ["n"] },
  "arrow-first-item": { kind: "arrow", name: "getFirstItem", params: ["arr"] },
  "arrow-last-item": { kind: "arrow", name: "getLastItem", params: ["arr"] },
  "arrow-full-name": { kind: "arrow", name: "fullName", params: ["firstName", "lastName"] },
  "arrow-is-empty": { kind: "arrow", name: "isEmpty", params: ["text"] },
};

const notebookArticles = [
  {
    id: "function-evolution",
    title: "Mức 1: Cách hàm được sinh ra",
    meta: "Nền tảng: vì sao cần hàm",
    blocks: [
      { type: "p", text: "Hãy đi qua 4 giai đoạn tiến hóa thực tế của tư duy lập trình: từ chỗ chưa có hàm, đến khi cần tạo hàm, rồi chia nhỏ hàm, và cuối cùng là đặt hàm bên trong hàm để đóng gói." },
      { type: "h", text: "Giai đoạn 1: Viết code chạy được" },
      { type: "p", text: "Bạn muốn tính tiền lương cho nhân viên sau khi trừ thuế 10%. Ban đầu, cách tự nhiên nhất là viết thẳng từ trên xuống dưới." },
      {
        type: "code",
        text: `let luongGoc = 1000;
let thue = luongGoc * 0.1;
let luongThucNhan = luongGoc - thue;
console.log(luongThucNhan);`,
      },
      { type: "p", text: "Vấn đề: nếu công ty có 100 nhân viên, bạn không thể copy-paste đoạn code này 100 lần. Code sẽ dài, rác và rất khó sửa." },
      { type: "h", text: "Giai đoạn 2: Đẻ ra hàm để tái sử dụng" },
      { type: "p", text: "Ta gom logic tính lương vào một cái hộp có tên là tinhLuong. Cần tính cho ai thì gọi hàm đó." },
      {
        type: "code",
        text: `function tinhLuong(luongGoc) {
  let thue = luongGoc * 0.1;
  return luongGoc - thue;
}

let luongNam = tinhLuong(1000);
let luongVy = tinhLuong(1500);`,
      },
      { type: "p", text: "Vấn đề mới: khi luật thuế phức tạp hơn, hàm tinhLuong có thể phình thành 50 dòng. Nhìn vào rất mệt và dễ sửa nhầm." },
      { type: "h", text: "Giai đoạn 3: Chia nhỏ hàm cho dễ quản lý" },
      { type: "p", text: "Ta tách các phần nhỏ ra thành những hàm riêng như tinhBaoHiem, tinhThueTNCN. Hàm lớn chỉ điều phối các hàm nhỏ." },
      {
        type: "code",
        text: `function tinhBaoHiem(luong) {
  return luong * 0.08;
}

function tinhThueTNCN(luong) {
  return luong * 0.1;
}

function tinhLuongTongThe(luongGoc) {
  let tienBaoHiem = tinhBaoHiem(luongGoc);
  let tienThue = tinhThueTNCN(luongGoc);
  return luongGoc - tienBaoHiem - tienThue;
}`,
      },
      { type: "p", text: "Vấn đề chí mạng: các hàm nhỏ đang nằm lộ thiên. Một người khác có thể vô tình tạo hàm trùng tên, hoặc gọi nhầm hàm ở nơi không nên gọi." },
      { type: "h", text: "Giai đoạn 4: Hàm trong hàm để đóng gói" },
      { type: "p", text: "Nếu các hàm nhỏ chỉ phục vụ hàm lớn, ta có thể đặt chúng vào bên trong hàm lớn. Bên ngoài không gọi bậy được nữa." },
      {
        type: "code",
        text: `function tinhLuongTongThe(luongGoc) {
  function tinhBaoHiem(luong) {
    return luong * 0.08;
  }

  function tinhThueTNCN(luong) {
    return luong * 0.1;
  }

  let tienBaoHiem = tinhBaoHiem(luongGoc);
  let tienThue = tinhThueTNCN(luongGoc);

  return luongGoc - tienBaoHiem - tienThue;
}`,
      },
      { type: "h", text: "Đúc kết" },
      {
        type: "list",
        items: [
          "Viết thẳng quá nhiều lần thì sinh ra hàm.",
          "Hàm quá dài thì sinh ra nhiều hàm nhỏ.",
          "Nhiều hàm nhỏ lộ thiên quá thì sinh ra hàm trong hàm để đóng gói.",
        ],
      },
    ],
  },
  {
    id: "three-function-styles",
    title: "Mức 2: 3 cách khai báo hàm",
    meta: "Cú pháp: declaration, expression, arrow",
    blocks: [
      { type: "p", text: "Trong JavaScript, từ lúc sơ khai đến hiện đại, có 3 cách khai báo hàm phổ biến nhất. Chúng sinh ra theo từng giai đoạn để giải quyết các vấn đề: code dài dòng, khó quản lý, rồi nhu cầu viết nhanh và gọn hơn." },
      { type: "h", text: "Giai đoạn 1: Khai báo hàm truyền thống" },
      { type: "p", text: "Đây là cách viết cổ điển nhất: dùng từ khóa function, đặt tên hàm rõ ràng, rồi viết phần thân hàm bên trong cặp dấu ngoặc nhọn." },
      {
        type: "code",
        text: `function tinhBinhPhuong(x) {
  return x * x;
}

console.log(tinhBinhPhuong(5));`,
      },
      { type: "p", text: "Điểm mạnh của function declaration là hoisting: bạn có thể gọi hàm trước khi viết phần khai báo, JavaScript vẫn hiểu. Nhưng trong dự án lớn, việc hàm lộ thiên và gọi được ở nhiều nơi có thể làm luồng chạy khó kiểm soát hơn." },
      { type: "h", text: "Giai đoạn 2: Hàm biểu thức" },
      { type: "p", text: "Tư duy cải tiến là coi hàm như một giá trị, rồi gán giá trị đó vào một biến hoặc hằng số. Khi dùng const, tên hàm được bảo vệ tốt hơn vì không thể gán lại." },
      {
        type: "code",
        text: `const tinhBinhPhuong2 = function(x) {
  return x * x;
};

console.log(tinhBinhPhuong2(5));`,
      },
      { type: "p", text: "Điểm cải tiến: code chạy rõ theo thứ tự từ trên xuống dưới. Bạn phải khai báo xong rồi mới gọi, nên dễ đoán hơn khi đọc và debug. Vấn đề còn lại là cú pháp vẫn hơi dài nếu hàm rất ngắn." },
      { type: "h", text: "Giai đoạn 3: Hàm mũi tên" },
      { type: "p", text: "Từ ES6, JavaScript có arrow function. Ý tưởng là bỏ chữ function, đặt dấu mũi tên => sau phần tham số để viết hàm gọn hơn." },
      {
        type: "code",
        text: `const tinhBinhPhuong3 = (x) => {
  return x * x;
};`,
      },
      { type: "p", text: "Nếu hàm chỉ có một dòng và dòng đó trả về giá trị, bạn có thể bỏ luôn cặp ngoặc nhọn và chữ return. Nếu chỉ có một tham số, bạn cũng có thể bỏ cặp ngoặc đơn quanh tham số." },
      {
        type: "code",
        text: `const tinhBinhPhuongSieuGon = x => x * x;

console.log(tinhBinhPhuongSieuGon(5));`,
      },
      { type: "h", text: "Cách chọn khi làm bài" },
      {
        type: "list",
        items: [
          "Dùng arrow function một dòng khi hàm rất ngắn, ví dụ nhân đôi, tính phần trăm, lấy giá trị nhanh.",
          "Dùng function expression khi muốn gán hàm vào const để quản lý chặt hơn.",
          "Dùng function declaration khi muốn hàm rõ tên, dễ đọc, nhất là với logic nhiều dòng.",
          "Khi mới học, điều quan trọng nhất là hiểu cả 3 cách đều tạo ra hàm; khác nhau chủ yếu ở cú pháp, hoisting và cách this hoạt động.",
        ],
      },
    ],
  },
  {
    id: "this-owner-rule",
    title: "Mức 3: this trong object method",
    meta: "Chuyên sâu hơn: ai gọi hàm?",
    blocks: [
      { type: "p", text: "Ở mức cơ bản nhất, khi một object gọi method, this trỏ về object đứng trước dấu chấm." },
      {
        type: "code",
        text: `const toi = {
  ten: "Nam",
  chao: function() {
    console.log(this.ten);
  }
};

toi.chao();`,
      },
      { type: "p", text: "Trong dòng toi.chao(), object đứng trước dấu chấm là toi. Vì vậy bên trong chao, this chính là toi." },
    ],
  },
];

const state = {
  currentIndex: 0,
  answers: new Map(),
  passed: new Set(JSON.parse(localStorage.getItem("functionGymPassed") || "[]")),
  hintOpen: false,
  openGroups: new Set(["Khai báo hàm"]),
  singleGroupMode: localStorage.getItem("functionGymSingleGroupMode") !== "false",
  currentNotebookId: notebookArticles[0].id,
};

const exerciseList = document.querySelector("#exerciseList");
const exerciseLevel = document.querySelector("#exerciseLevel");
const exerciseTitle = document.querySelector("#exerciseTitle");
const exercisePrompt = document.querySelector("#exercisePrompt");
const exampleBox = document.querySelector("#exampleBox");
const hintBox = document.querySelector("#hintBox");
const codeEditor = document.querySelector("#codeEditor");
const outputBox = document.querySelector("#outputBox");
const testSummary = document.querySelector("#testSummary");
const statusPill = document.querySelector("#statusPill");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const runBtn = document.querySelector("#runBtn");
const resetBtn = document.querySelector("#resetBtn");
const hintBtn = document.querySelector("#hintBtn");
const resetAllBtn = document.querySelector("#resetAllBtn");
const singleGroupToggle = document.querySelector("#singleGroupToggle");
const toggleAllGroupsBtn = document.querySelector("#toggleAllGroupsBtn");
const notebookBtn = document.querySelector("#notebookBtn");
const notebookOverlay = document.querySelector("#notebookOverlay");
const notebookList = document.querySelector("#notebookList");
const notebookContent = document.querySelector("#notebookContent");
const closeNotebookBtn = document.querySelector("#closeNotebookBtn");

function getExerciseGroups() {
  return exercises.reduce((result, exercise, index) => {
    if (!result.has(exercise.type)) result.set(exercise.type, []);
    result.get(exercise.type).push({ exercise, index });
    return result;
  }, new Map());
}

function getCurrentGroupName() {
  return exercises[state.currentIndex].type;
}

function syncGroupControls() {
  singleGroupToggle.checked = state.singleGroupMode;
  toggleAllGroupsBtn.textContent = state.openGroups.size > 0 ? "Rút gọn" : "Xổ tất cả";
}

function renderNotebookList() {
  notebookList.innerHTML = "";

  notebookArticles.forEach((article) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "notebook-item";
    if (article.id === state.currentNotebookId) item.classList.add("active");
    item.innerHTML = `
      <strong>${article.title}</strong>
      <span>${article.meta}</span>
    `;
    item.addEventListener("click", () => {
      state.currentNotebookId = article.id;
      renderNotebook();
    });
    notebookList.appendChild(item);
  });
}

function appendNotebookBlock(block) {
  if (block.type === "h") {
    const heading = document.createElement("h4");
    heading.textContent = block.text;
    notebookContent.appendChild(heading);
    return;
  }

  if (block.type === "code") {
    const pre = document.createElement("pre");
    pre.textContent = block.text;
    notebookContent.appendChild(pre);
    return;
  }

  if (block.type === "list") {
    const list = document.createElement("ul");
    block.items.forEach((itemText) => {
      const item = document.createElement("li");
      item.textContent = itemText;
      list.appendChild(item);
    });
    notebookContent.appendChild(list);
    return;
  }

  const paragraph = document.createElement("p");
  paragraph.textContent = block.text;
  notebookContent.appendChild(paragraph);
}

function renderNotebookContent() {
  const article =
    notebookArticles.find((item) => item.id === state.currentNotebookId) ||
    notebookArticles[0];

  notebookContent.innerHTML = "";
  const title = document.createElement("h3");
  title.textContent = article.title;
  notebookContent.appendChild(title);
  article.blocks.forEach(appendNotebookBlock);
}

function renderNotebook() {
  renderNotebookList();
  renderNotebookContent();
}

function openNotebook() {
  renderNotebook();
  notebookOverlay.hidden = false;
}

function closeNotebook() {
  notebookOverlay.hidden = true;
}

function renderExerciseList() {
  exerciseList.innerHTML = "";
  syncGroupControls();

  const groups = getExerciseGroups();

  groups.forEach((items, groupName) => {
    const group = document.createElement("section");
    group.className = "exercise-group";

    const groupDone = items.filter(({ exercise }) => state.passed.has(exercise.id)).length;
    const isOpen = state.openGroups.has(groupName);
    const groupButton = document.createElement("button");
    groupButton.type = "button";
    groupButton.className = "group-button";
    groupButton.setAttribute("aria-expanded", String(isOpen));
    groupButton.innerHTML = `
      <span>${groupName}</span>
      <small>${groupDone}/${items.length}</small>
    `;

    groupButton.addEventListener("click", () => {
      if (state.openGroups.has(groupName)) {
        state.openGroups.delete(groupName);
      } else if (state.singleGroupMode) {
        state.openGroups = new Set([groupName]);
      } else {
        state.openGroups.add(groupName);
      }
      renderExerciseList();
    });

    group.appendChild(groupButton);

    if (isOpen) {
      const groupItems = document.createElement("div");
      groupItems.className = "group-items";

      items.forEach(({ exercise, index }) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "exercise-item";
        if (index === state.currentIndex) item.classList.add("active");
        if (state.passed.has(exercise.id)) item.classList.add("done");

        item.innerHTML = `
          <strong>${index + 1}. ${exercise.title}</strong>
          <span>${exercise.level}</span>
        `;

        item.addEventListener("click", () => {
          saveCurrentAnswer();
          state.currentIndex = index;
          if (state.singleGroupMode) {
            state.openGroups = new Set([exercise.type]);
          } else {
            state.openGroups.add(exercise.type);
          }
          state.hintOpen = false;
          renderCurrentExercise();
        });

        groupItems.appendChild(item);
      });

      group.appendChild(groupItems);
    }

    exerciseList.appendChild(group);
  });
}

function isWordLike(text) {
  return /^[A-Za-z_$][\w$]*$/.test(text);
}

function hasIdentifierBoundary(text, start, length) {
  const before = text[start - 1] || "";
  const after = text[start + length] || "";
  return !/[\p{L}\p{N}_$]/u.test(before) && !/[\p{L}\p{N}_$]/u.test(after);
}

function addHighlightTerm(terms, text, tone) {
  if (!text) return;
  if (!terms.some((term) => term.text === text)) {
    terms.push({ text, tone });
  }
}

function getPromptHighlightTerms(exercise) {
  const terms = [];
  const rule = syntaxRules[exercise.id];

  if (rule) {
    addHighlightTerm(terms, rule.name, "name");
    rule.params.forEach((param) => addHighlightTerm(terms, param, "param"));
  }

  exercise.tests.forEach((test) => {
    const expression = test.expression;
    const callMatch = expression.match(/[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)?\s*\([^)]*\)/);
    if (callMatch) addHighlightTerm(terms, callMatch[0].replace(/\s+/g, ""), "call");

    expression.match(/[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)?/g)?.forEach((piece) => {
      if (["true", "false", "__logs"].includes(piece)) return;
      if (piece.includes(".")) {
        const [objectName, memberName] = piece.split(".");
        addHighlightTerm(terms, piece, "call");
        addHighlightTerm(terms, objectName, "name");
        addHighlightTerm(terms, memberName, "method");
      } else {
        addHighlightTerm(terms, piece, "name");
      }
    });
  });

  exercise.prompt.match(/"[^"]+"/g)?.forEach((quotedText) => {
    addHighlightTerm(terms, quotedText, "result");
  });

  return terms.sort((a, b) => b.text.length - a.text.length);
}

function renderHighlightedPrompt(exercise) {
  const prompt = exercise.prompt;
  const terms = getPromptHighlightTerms(exercise);
  exercisePrompt.innerHTML = "";

  for (let index = 0; index < prompt.length; ) {
    const match = terms.find((term) => {
      if (!prompt.startsWith(term.text, index)) return false;
      return !isWordLike(term.text) || hasIdentifierBoundary(prompt, index, term.text.length);
    });

    if (!match) {
      exercisePrompt.appendChild(document.createTextNode(prompt[index]));
      index += 1;
      continue;
    }

    const token = document.createElement("span");
    token.className = `prompt-token ${match.tone}`;
    token.textContent = match.text;
    exercisePrompt.appendChild(token);
    index += match.text.length;
  }
}

function renderCurrentExercise() {
  const exercise = exercises[state.currentIndex];
  exerciseLevel.textContent = exercise.level;
  exerciseTitle.textContent = exercise.title;
  renderHighlightedPrompt(exercise);
  exampleBox.textContent = exercise.example;
  hintBox.textContent = exercise.hint;
  hintBox.hidden = !state.hintOpen;
  hintBtn.textContent = state.hintOpen ? "Ẩn hint" : "Hint";
  codeEditor.value = state.answers.get(exercise.id) || "";
  outputBox.innerHTML =
    '<p class="result-line warn">Hãy viết code rồi bấm Chạy code.</p>';
  testSummary.textContent = "Hãy bấm Chạy code";
  updateStatusPill();
  syncGroupControls();
  renderExerciseList();
  updateProgress();
}

function saveCurrentAnswer() {
  const exercise = exercises[state.currentIndex];
  state.answers.set(exercise.id, codeEditor.value);
}

function updateStatusPill(result) {
  const exercise = exercises[state.currentIndex];
  statusPill.className = "status-pill";

  if (result === "fail") {
    statusPill.textContent = "Cần sửa";
    statusPill.classList.add("fail");
    return;
  }

  if (state.passed.has(exercise.id)) {
    statusPill.textContent = "Đã đúng";
    statusPill.classList.add("pass");
    return;
  }

  statusPill.textContent = "Chưa làm";
}

function updateProgress() {
  const availableIds = new Set(exercises.map((exercise) => exercise.id));
  state.passed = new Set([...state.passed].filter((id) => availableIds.has(id)));
  const total = exercises.length;
  const done = state.passed.size;
  progressText.textContent = `${done}/${total} bài đã đúng`;
  progressBar.style.width = `${(done / total) * 100}%`;
  localStorage.setItem("functionGymPassed", JSON.stringify([...state.passed]));
}

function runUserCode(userCode, expression) {
  const runner = new Function(`
    "use strict";
    const __logs = [];
    const console = {
      log: (...values) => __logs.push(values.map(String).join(" "))
    };
    ${userCode}
    return eval(${JSON.stringify(expression)});
  `);

  return runner();
}

function valuesEqual(actual, expected) {
  return Object.is(actual, expected);
}

function formatValue(value) {
  if (typeof value === "string") return `"${value}"`;
  return JSON.stringify(value);
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function parseParams(paramText) {
  return paramText
    .split(",")
    .map((param) => param.trim())
    .filter(Boolean);
}

function paramsMatch(actualParams, expectedParams) {
  return (
    actualParams.length === expectedParams.length &&
    actualParams.every((param, index) => param === expectedParams[index])
  );
}

function formatParams(params) {
  return params.join(", ");
}

function validateReturnSemicolons(code) {
  const lines = code.split("\n");

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();
    if (!line || !line.includes("return")) continue;

    const returnIndex = line.search(/\breturn\b/);
    const textAfterReturn = line.slice(returnIndex);

    if (returnIndex >= 0 && !textAfterReturn.includes(";")) {
      return `Dòng ${index + 1}: câu lệnh return cần kết thúc bằng dấu ;`;
    }
  }

  return "";
}

function validateRequiredSyntax(exercise, code) {
  const trimmedCode = code.trim();

  if (!trimmedCode) {
    return "Bạn chưa viết code cho bài này.";
  }

  try {
    new Function(`"use strict";\n${code}`);
  } catch (error) {
    return `JavaScript chưa chạy được: ${error.name} - ${error.message}`;
  }

  return "";
}

function runTests() {
  saveCurrentAnswer();

  const exercise = exercises[state.currentIndex];
  const lines = [];
  let passCount = 0;
  let hasRuntimeError = false;
  const syntaxError = validateRequiredSyntax(exercise, codeEditor.value);

  if (syntaxError) {
    testSummary.textContent = "Chưa đúng cú pháp yêu cầu";
    updateStatusPill("fail");
    outputBox.innerHTML = `<p class="result-line fail">${syntaxError}</p>`;
    renderExerciseList();
    updateProgress();
    return;
  }

  for (const test of exercise.tests) {
    try {
      const actual = runUserCode(codeEditor.value, test.expression);
      const passed = valuesEqual(actual, test.expected);

      if (passed) {
        passCount += 1;
        lines.push(
          `<p class="result-line pass">Đúng: ${test.expression} trả về ${formatValue(actual)}</p>`
        );
      } else {
        lines.push(
          `<p class="result-line fail">Sai: ${test.expression} đang trả về ${formatValue(
            actual
          )}, cần trả về ${formatValue(test.expected)}</p>`
        );
      }
    } catch (error) {
      hasRuntimeError = true;
      lines.push(
        `<p class="result-line fail">Lỗi khi chạy ${test.expression}: ${error.name} - ${error.message}</p>`
      );
      break;
    }
  }

  const allPassed = passCount === exercise.tests.length && !hasRuntimeError;

  if (allPassed) {
    state.passed.add(exercise.id);
    localStorage.setItem("functionGymPassed", JSON.stringify([...state.passed]));
    testSummary.textContent = `Đúng hết ${passCount}/${exercise.tests.length} test`;
    updateStatusPill();
  } else {
    testSummary.textContent = `Đúng ${passCount}/${exercise.tests.length} test`;
    updateStatusPill("fail");
  }

  outputBox.innerHTML = lines.join("");
  renderExerciseList();
  updateProgress();
}

function resetCurrentExercise() {
  const exercise = exercises[state.currentIndex];
  codeEditor.value = "";
  state.answers.delete(exercise.id);
  outputBox.innerHTML = '<p class="result-line warn">Đã xóa code của bài này.</p>';
  testSummary.textContent = "Hãy bấm Chạy code";
  updateStatusPill();
}

function resetAllExercises() {
  state.answers.clear();
  state.passed.clear();
  state.hintOpen = false;
  localStorage.removeItem("functionGymPassed");
  codeEditor.value = "";
  outputBox.innerHTML = '<p class="result-line warn">Đã reset toàn bộ bài tập.</p>';
  testSummary.textContent = "Hãy bấm Chạy code";
  renderCurrentExercise();
}

function setSingleGroupMode(enabled) {
  state.singleGroupMode = enabled;
  localStorage.setItem("functionGymSingleGroupMode", String(enabled));

  if (enabled) {
    state.openGroups = new Set([getCurrentGroupName()]);
  }

  syncGroupControls();
  renderExerciseList();
}

function expandAllGroups() {
  state.singleGroupMode = false;
  localStorage.setItem("functionGymSingleGroupMode", "false");
  state.openGroups = new Set(getExerciseGroups().keys());
  syncGroupControls();
  renderExerciseList();
}

function collapseAllGroups() {
  state.openGroups.clear();
  syncGroupControls();
  renderExerciseList();
}

function toggleAllGroups() {
  if (state.openGroups.size > 0) {
    collapseAllGroups();
    return;
  }

  expandAllGroups();
}

function toggleHint() {
  saveCurrentAnswer();
  state.hintOpen = !state.hintOpen;
  hintBox.hidden = !state.hintOpen;
  hintBtn.textContent = state.hintOpen ? "Ẩn hint" : "Hint";
}

runBtn.addEventListener("click", runTests);
resetBtn.addEventListener("click", resetCurrentExercise);
hintBtn.addEventListener("click", toggleHint);
resetAllBtn.addEventListener("click", resetAllExercises);
singleGroupToggle.addEventListener("change", () => {
  setSingleGroupMode(singleGroupToggle.checked);
});
toggleAllGroupsBtn.addEventListener("click", toggleAllGroups);
notebookBtn.addEventListener("click", openNotebook);
closeNotebookBtn.addEventListener("click", closeNotebook);
notebookOverlay.addEventListener("click", (event) => {
  if (event.target === notebookOverlay) closeNotebook();
});

codeEditor.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
    const start = codeEditor.selectionStart;
    const end = codeEditor.selectionEnd;
    codeEditor.value =
      codeEditor.value.slice(0, start) + "  " + codeEditor.value.slice(end);
    codeEditor.selectionStart = codeEditor.selectionEnd = start + 2;
  }

  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    event.preventDefault();
    runTests();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !notebookOverlay.hidden) {
    closeNotebook();
  }
});

renderCurrentExercise();
