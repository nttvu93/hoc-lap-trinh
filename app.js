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

const state = {
  currentIndex: 0,
  answers: new Map(),
  passed: new Set(JSON.parse(localStorage.getItem("functionGymPassed") || "[]")),
  hintOpen: false,
  openGroups: new Set(["Khai báo hàm"]),
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

function renderExerciseList() {
  exerciseList.innerHTML = "";

  const groups = exercises.reduce((result, exercise, index) => {
    if (!result.has(exercise.type)) result.set(exercise.type, []);
    result.get(exercise.type).push({ exercise, index });
    return result;
  }, new Map());

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
          state.openGroups.add(exercise.type);
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

function renderCurrentExercise() {
  const exercise = exercises[state.currentIndex];
  exerciseLevel.textContent = exercise.level;
  exerciseTitle.textContent = exercise.title;
  exercisePrompt.textContent = exercise.prompt;
  exampleBox.textContent = exercise.example;
  hintBox.textContent = exercise.hint;
  hintBox.hidden = !state.hintOpen;
  hintBtn.textContent = state.hintOpen ? "Ẩn hint" : "Hint";
  codeEditor.value = state.answers.get(exercise.id) || "";
  outputBox.innerHTML =
    '<p class="result-line warn">Hãy viết code rồi bấm Chạy code.</p>';
  testSummary.textContent = "Hãy bấm Chạy code";
  updateStatusPill();
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

renderCurrentExercise();
