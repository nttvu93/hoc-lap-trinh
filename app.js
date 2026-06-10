const exercises = [
{
    id: "declaration-add",
    level: "Cách viết hàm",
    title: "Cách 1: Function declaration",
    type: "Cách viết hàm",
    prompt:
      "Bối cảnh: Bạn đang học 3 cách viết hàm trong JavaScript. Cách đầu tiên là khai báo hàm truyền thống bằng từ khóa function.\nYêu cầu: Viết hàm add bằng function declaration với 2 tham số a và b.\nKết quả: Trả về tổng của a và b.",
    example: "Kết quả mong muốn:\nadd(2, 3) => 5\nadd(-1, 6) => 5",
    hint: `Gợi ý:
- Đây là cách viết có tên hàm đứng ngay sau từ khóa function.
- Cú pháp này thường dễ đọc khi mới học.
- Hàm cần tên add và nhận a, b.
- Bên trong hàm, trả về a + b.`,
    tests: [
      { expression: "add(2, 3)", expected: 5 },
      { expression: "add(-1, 6)", expected: 5 },
      { expression: "add(10, 0)", expected: 10 },
    ],
  },
{
    id: "expression-square",
    level: "Cách viết hàm",
    title: "Cách 2: Function expression",
    type: "Cách viết hàm",
    prompt:
      "Bối cảnh: Bạn đang học cách coi hàm như một giá trị rồi gán vào biến. Đây là function expression.\nYêu cầu: Tạo biến square và gán cho biến đó một hàm nhận tham số n.\nKết quả: Trả về n nhân n.",
    example: "Kết quả mong muốn:\nsquare(4) => 16\nsquare(-3) => 9",
    hint: `Gợi ý:
- Tạo một hằng số tên square.
- Gán một hàm vào hằng số đó.
- Function expression thường có dấu ; sau phần gán.
- Bình phương nghĩa là n nhân chính nó.`,
    tests: [
      { expression: "square(4)", expected: 16 },
      { expression: "square(9)", expected: 81 },
      { expression: "square(-3)", expected: 9 },
    ],
  },
{
    id: "arrow-double",
    level: "Cách viết hàm",
    title: "Cách 3: Arrow function",
    type: "Cách viết hàm",
    prompt:
      "Bối cảnh: Bạn đang học cách viết hàm ngắn gọn hơn bằng dấu mũi tên => trong JavaScript hiện đại.\nYêu cầu: Tạo biến double bằng hàm mũi tên, nhận tham số n.\nKết quả: Trả về n nhân 2.",
    example: "Kết quả mong muốn:\ndouble(5) => 10\ndouble(-4) => -8",
    hint: `Gợi ý:
- Arrow function dùng ký hiệu =>.
- Tạo một hằng số tên double.
- Hàm nhận 1 tham số n.
- Có thể viết dạng nhiều dòng hoặc rút gọn một dòng.`,
    tests: [
      { expression: "double(5)", expected: 10 },
      { expression: "double(-4)", expected: -8 },
      { expression: "double(0)", expected: 0 },
    ],
  },
{
    id: "declaration-subtract",
    level: "Toán tử và điều kiện",
    title: "Toán tử -: subtract",
    type: "Toán tử và điều kiện",
    prompt:
      "Bối cảnh: Một cửa hàng muốn biết sau khi dùng phiếu giảm giá thì khách còn phải trả bao nhiêu.\nYêu cầu: Tạo hàm subtract với 2 tham số a và b.\nKết quả: Trả về a trừ b.",
    example: "Kết quả mong muốn:\nsubtract(8, 3) => 5\nsubtract(4, 9) => -5",
    hint: `Gợi ý:
- Dùng cú pháp khai báo hàm với tên subtract.
- Hàm cần nhận 2 tham số: a và b.
- Kết quả cần là a trừ b.
- Phép trừ trong JavaScript dùng dấu -.
- Đừng đảo thành b - a, vì kết quả sẽ khác.`,
    tests: [
      { expression: "subtract(8, 3)", expected: 5 },
      { expression: "subtract(4, 9)", expected: -5 },
      { expression: "subtract(10, 10)", expected: 0 },
    ],
  },
{
    id: "expression-total-price",
    level: "Toán tử và điều kiện",
    title: "Toán tử *: totalPrice",
    type: "Toán tử và điều kiện",
    prompt:
      "Bối cảnh: Một giỏ hàng cần tính tổng tiền cho một sản phẩm dựa trên giá và số lượng.\nYêu cầu: Tạo hàm totalPrice với 2 tham số price và quantity.\nKết quả: Trả về price nhân quantity.",
    example: "Kết quả mong muốn:\ntotalPrice(5, 3) => 15",
    hint: `Gợi ý:
- Tạo một hàm tên totalPrice.
- Hàm nhận price và quantity.
- Tổng tiền = giá của 1 món nhân với số lượng.
- Phép nhân trong JavaScript dùng dấu *.`,
    tests: [
      { expression: "totalPrice(5, 3)", expected: 15 },
      { expression: "totalPrice(12, 2)", expected: 24 },
      { expression: "totalPrice(9, 0)", expected: 0 },
    ],
  },
{
    id: "declaration-is-even",
    level: "Toán tử và điều kiện",
    title: "Toán tử %: isEven",
    type: "Toán tử và điều kiện",
    prompt:
      "Bối cảnh: Bạn đang làm trò chơi chia đội, người chơi số chẵn vào một đội và số lẻ vào đội còn lại.\nYêu cầu: Tạo hàm isEven với 1 tham số n.\nKết quả: Trả về true nếu n là số chẵn, ngược lại trả về false.",
    example: "Kết quả mong muốn:\nisEven(4) => true\nisEven(7) => false",
    hint: `Gợi ý:
- Số chẵn là số chia cho 2 dư 0.
- Trong JavaScript, toán tử % dùng để lấy phần dư.
- n % 2 sẽ cho biết n chia 2 còn dư bao nhiêu.
- Nếu phần dư bằng 0 thì trả về true.
- Nếu không bằng 0 thì biểu thức so sánh tự trả về false.`,
    tests: [
      { expression: "isEven(4)", expected: true },
      { expression: "isEven(7)", expected: false },
      { expression: "isEven(0)", expected: true },
    ],
  },
{
    id: "expression-is-adult",
    level: "Toán tử và điều kiện",
    title: "So sánh >=: isAdult",
    type: "Toán tử và điều kiện",
    prompt:
      "Bối cảnh: Một trang đăng ký cần kiểm tra người dùng đã đủ tuổi mở tài khoản hay chưa.\nYêu cầu: Tạo hàm isAdult với 1 tham số age.\nKết quả: Trả về true nếu age từ 18 trở lên.",
    example: "Kết quả mong muốn:\nisAdult(20) => true\nisAdult(15) => false",
    hint: `Gợi ý:
- Tạo một hàm tên isAdult.
- Hàm nhận tham số age.
- Người trưởng thành khi age từ 18 trở lên.
- Toán tử >= nghĩa là lớn hơn hoặc bằng.
- Biểu thức age >= 18 tự cho ra true hoặc false.`,
    tests: [
      { expression: "isAdult(20)", expected: true },
      { expression: "isAdult(18)", expected: true },
      { expression: "isAdult(15)", expected: false },
    ],
  },
{
    id: "declaration-max",
    level: "Toán tử và điều kiện",
    title: "Điều kiện if: max",
    type: "Toán tử và điều kiện",
    prompt:
      "Bối cảnh: Một bảng điểm cần tìm điểm cao hơn giữa 2 lần kiểm tra của học sinh.\nYêu cầu: Tạo hàm max với 2 tham số a và b.\nKết quả: Trả về số lớn hơn.",
    example: "Kết quả mong muốn:\nmax(3, 9) => 9\nmax(10, 2) => 10",
    hint: `Gợi ý:
- Cần so sánh a và b.
- Nếu a lớn hơn b thì số lớn hơn là a.
- Ngược lại, số lớn hơn là b.
- Bạn có thể dùng if để kiểm tra điều kiện a > b.
- Nếu hai số bằng nhau, trả về a hay b đều được vì giá trị giống nhau.`,
    tests: [
      { expression: "max(3, 9)", expected: 9 },
      { expression: "max(10, 2)", expected: 10 },
      { expression: "max(5, 5)", expected: 5 },
    ],
  },
{
    id: "declaration-greet",
    level: "Chuỗi",
    title: "Nối chuỗi: sayHello",
    type: "Chuỗi",
    prompt:
      "Bối cảnh: Một website muốn hiện lời chào riêng cho từng người dùng sau khi đăng nhập.\nYêu cầu: Tạo hàm sayHello với 1 tham số name.\nKết quả: Trả về chuỗi Xin chào, [name]!",
    example: 'Kết quả mong muốn:\nsayHello("An") => "Xin chào, An!"',
    hint: `Gợi ý:
- Tạo hàm tên sayHello.
- Hàm nhận 1 tham số name.
- Kết quả là một chuỗi.
- Cần ghép 3 phần: "Xin chào, " + name + "!".
- Chú ý dấu cách sau dấu phẩy trong "Xin chào, ".`,
    tests: [
      { expression: 'sayHello("An")', expected: "Xin chào, An!" },
      { expression: 'sayHello("Bình")', expected: "Xin chào, Bình!" },
    ],
  },
{
    id: "expression-first-char",
    level: "Chuỗi",
    title: "Lấy ký tự đầu: firstChar",
    type: "Chuỗi",
    prompt:
      "Bối cảnh: Một app danh bạ muốn lấy chữ cái đầu tiên của tên để làm avatar mặc định.\nYêu cầu: Tạo hàm firstChar với 1 tham số text.\nKết quả: Trả về ký tự đầu tiên của text.",
    example: 'Kết quả mong muốn:\nfirstChar("JavaScript") => "J"',
    hint: `Gợi ý:
- Tạo một hàm tên firstChar.
- Chuỗi trong JavaScript có thể lấy ký tự theo vị trí.
- Vị trí đầu tiên là 0, không phải 1.
- Ký tự đầu tiên của text là text[0].`,
    tests: [
      { expression: 'firstChar("JavaScript")', expected: "J" },
      { expression: 'firstChar("Code")', expected: "C" },
    ],
  },
{
    id: "expression-make-email",
    level: "Chuỗi",
    title: "Nối chuỗi: makeEmail",
    type: "Chuỗi",
    prompt:
      "Bối cảnh: Một form đăng ký chỉ cho người dùng nhập tên tài khoản, hệ thống sẽ tự tạo email Gmail.\nYêu cầu: Tạo hàm makeEmail với 1 tham số username.\nKết quả: Trả về username cộng với @gmail.com.",
    example: 'Kết quả mong muốn:\nmakeEmail("an") => "an@gmail.com"',
    hint: `Gợi ý:
- Tạo một hàm tên makeEmail.
- Kết quả cần là chuỗi username ghép với "@gmail.com".
- Dùng dấu + để nối chuỗi.
- Không thêm dấu cách giữa username và @gmail.com.`,
    tests: [
      { expression: 'makeEmail("an")', expected: "an@gmail.com" },
      { expression: 'makeEmail("binh")', expected: "binh@gmail.com" },
    ],
  },
{
    id: "arrow-full-name",
    level: "Chuỗi",
    title: "Ghép chuỗi: fullName",
    type: "Chuỗi",
    prompt:
      "Bối cảnh: Một biểu mẫu lưu riêng họ và tên, nhưng màn hình hồ sơ cần hiển thị họ tên đầy đủ.\nYêu cầu: Tạo hàm fullName với 2 tham số firstName và lastName.\nKết quả: Trả về họ tên đầy đủ có một dấu cách ở giữa.",
    example: 'Kết quả mong muốn:\nfullName("An", "Nguyen") => "An Nguyen"',
    hint: `Gợi ý:
- Tạo một hàm tên fullName.
- Kết quả là ghép họ và tên.
- Giữa firstName và lastName cần có một dấu cách.
- Dấu cách đó là chuỗi " ".`,
    tests: [
      { expression: 'fullName("An", "Nguyen")', expected: "An Nguyen" },
      { expression: 'fullName("Minh", "Tran")', expected: "Minh Tran" },
    ],
  },
{
    id: "arrow-is-empty",
    level: "Chuỗi",
    title: "Chuỗi rỗng: isEmpty",
    type: "Chuỗi",
    prompt:
      "Bối cảnh: Một form bình luận cần kiểm tra người dùng có để trống nội dung hay không trước khi gửi.\nYêu cầu: Tạo hàm isEmpty với 1 tham số text.\nKết quả: Trả về true nếu text là chuỗi rỗng.",
    example: 'Kết quả mong muốn:\nisEmpty("") => true\nisEmpty("JS") => false',
    hint: `Gợi ý:
- Tạo một hàm tên isEmpty.
- Chuỗi rỗng được viết là "".
- Cần kiểm tra text có bằng "" hay không.
- Nên dùng === để so sánh chính xác.`,
    tests: [
      { expression: 'isEmpty("")', expected: true },
      { expression: 'isEmpty("JS")', expected: false },
      { expression: 'isEmpty(" ")', expected: false },
    ],
  },
{
    id: "arrow-first-item",
    level: "Mảng",
    title: "Lấy phần tử đầu: getFirstItem",
    type: "Mảng",
    prompt:
      "Bối cảnh: Một app tin tức muốn lấy bài viết đầu tiên trong danh sách để hiển thị nổi bật.\nYêu cầu: Tạo hàm getFirstItem với 1 tham số arr.\nKết quả: Trả về phần tử đầu tiên của arr.",
    example: 'Kết quả mong muốn:\ngetFirstItem(["a", "b"]) => "a"',
    hint: `Gợi ý:
- Tạo một hàm tên getFirstItem.
- arr là mảng.
- Phần tử đầu tiên của mảng nằm ở vị trí 0.
- Vì vậy hãy nghĩ tới arr[0].`,
    tests: [
      { expression: 'getFirstItem(["a", "b"])', expected: "a" },
      { expression: "getFirstItem([7, 8, 9])", expected: 7 },
    ],
  },
{
    id: "arrow-last-item",
    level: "Mảng",
    title: "Lấy phần tử cuối: getLastItem",
    type: "Mảng",
    prompt:
      "Bối cảnh: Một app chat muốn lấy tin nhắn mới nhất trong danh sách tin nhắn.\nYêu cầu: Tạo hàm getLastItem với 1 tham số arr.\nKết quả: Trả về phần tử cuối cùng của arr.",
    example: "Kết quả mong muốn:\ngetLastItem([1, 2, 3]) => 3",
    hint: `Gợi ý:
- Tạo một hàm tên getLastItem.
- arr.length là số lượng phần tử trong mảng.
- Vị trí cuối cùng là arr.length - 1.
- Lấy phần tử theo vị trí bằng cặp ngoặc vuông [].`,
    tests: [
      { expression: "getLastItem([1, 2, 3])", expected: 3 },
      { expression: 'getLastItem(["x", "y"])', expected: "y" },
    ],
  },
{
    id: "array-count-items",
    level: "Mảng",
    title: "Học về length: countItems",
    type: "Mảng",
    prompt:
      "Bối cảnh: Một giỏ hàng cần hiển thị người dùng đã chọn bao nhiêu sản phẩm.\nYêu cầu: Tạo hàm countItems với 1 tham số arr.\nKết quả: Trả về số lượng phần tử trong mảng arr.",
    example: "Kết quả mong muốn:\ncountItems([1, 2, 3]) => 3\ncountItems([]) => 0",
    hint: `Gợi ý:
- Mảng có thuộc tính length.
- arr.length cho biết mảng có bao nhiêu phần tử.
- Bài này không cần vòng lặp.
- Chỉ cần trả về độ dài của arr.`,
    tests: [
      { expression: "countItems([1, 2, 3])", expected: 3 },
      { expression: "countItems([])", expected: 0 },
      { expression: 'countItems(["a", "b"])', expected: 2 },
    ],
  },
{
    id: "array-has-item",
    level: "Mảng",
    title: "Học về includes: hasItem",
    type: "Mảng",
    prompt:
      "Bối cảnh: Một danh sách mua sắm cần kiểm tra món hàng đã có trong danh sách chưa để tránh thêm trùng.\nYêu cầu: Tạo hàm hasItem với 2 tham số arr và item.\nKết quả: Trả về true nếu item có trong arr, ngược lại trả về false.",
    example: 'Kết quả mong muốn:\nhasItem(["a", "b"], "b") => true\nhasItem([1, 2], 5) => false',
    hint: `Gợi ý:
- Mảng có phương thức includes.
- includes dùng để kiểm tra một giá trị có nằm trong mảng hay không.
- Kết quả của includes đã là true hoặc false.
- Không cần tự viết if nếu bạn thấy chưa cần.`,
    tests: [
      { expression: 'hasItem(["a", "b"], "b")', expected: true },
      { expression: "hasItem([1, 2], 5)", expected: false },
      { expression: 'hasItem(["js"], "js")', expected: true },
    ],
  },
{
    id: "array-find-index",
    level: "Mảng",
    title: "Học về indexOf: findIndexOf",
    type: "Mảng",
    prompt:
      "Bối cảnh: Một app playlist cần biết bài hát đang nằm ở vị trí thứ mấy trong danh sách phát.\nYêu cầu: Tạo hàm findIndexOf với 2 tham số arr và item.\nKết quả: Trả về vị trí của item trong arr; nếu không có thì trả về -1.",
    example:
      'Kết quả mong muốn:\nfindIndexOf(["a", "b", "c"], "b") => 1\nfindIndexOf([10, 20], 5) => -1',
    hint: `Gợi ý:
- Vị trí đầu tiên trong mảng là 0.
- Mảng có phương thức indexOf.
- indexOf trả về vị trí của phần tử nếu tìm thấy.
- Nếu không tìm thấy, indexOf trả về -1.`,
    tests: [
      { expression: 'findIndexOf(["a", "b", "c"], "b")', expected: 1 },
      { expression: "findIndexOf([10, 20], 5)", expected: -1 },
      { expression: 'findIndexOf(["x", "y"], "x")', expected: 0 },
    ],
  },
{
    id: "array-get-even-numbers",
    level: "Mảng",
    title: "Học về push và lọc mảng: getEvenNumbers",
    type: "Mảng",
    prompt:
      "Bối cảnh: Một trò chơi cần lọc ra các mã phòng số chẵn để chia vào nhóm A.\nYêu cầu: Tạo hàm getEvenNumbers với 1 tham số numbers.\nKết quả: Trả về một mảng mới chỉ gồm các số chẵn trong numbers.",
    example:
      "Kết quả mong muốn:\ngetEvenNumbers([1, 2, 3, 4]) => [2, 4]\ngetEvenNumbers([1, 3]) => []",
    hint: `Gợi ý:
- Cần tạo một mảng rỗng để chứa kết quả.
- Duyệt từng số trong numbers.
- Số chẵn là số chia cho 2 dư 0.
- Nếu số hiện tại là số chẵn, thêm nó vào mảng kết quả.
- Có thể dùng push để thêm phần tử vào mảng.`,
    tests: [
      { expression: "getEvenNumbers([1, 2, 3, 4])", expected: [2, 4] },
      { expression: "getEvenNumbers([1, 3])", expected: [] },
      { expression: "getEvenNumbers([0, 6, 7])", expected: [0, 6] },
    ],
  },
{
    id: "array-double-numbers",
    level: "Mảng",
    title: "Học về tạo mảng mới: doubleNumbers",
    type: "Mảng",
    prompt:
      "Bối cảnh: Một hệ thống khuyến mãi muốn nhân đôi toàn bộ điểm thưởng của khách hàng trong một sự kiện.\nYêu cầu: Tạo hàm doubleNumbers với 1 tham số numbers.\nKết quả: Trả về một mảng mới, trong đó mỗi số được nhân đôi.",
    example:
      "Kết quả mong muốn:\ndoubleNumbers([1, 2, 3]) => [2, 4, 6]\ndoubleNumbers([]) => []",
    hint: `Gợi ý:
- Cần tạo một mảng rỗng để chứa kết quả.
- Duyệt từng số trong numbers.
- Với mỗi số, lấy số đó nhân 2.
- Thêm kết quả nhân đôi vào mảng mới.
- Cuối cùng return mảng mới.`,
    tests: [
      { expression: "doubleNumbers([1, 2, 3])", expected: [2, 4, 6] },
      { expression: "doubleNumbers([])", expected: [] },
      { expression: "doubleNumbers([-1, 5])", expected: [-2, 10] },
    ],
  },
{
    id: "object-method-toi",
    level: "Object method",
    title: "Học về this: toi.chao",
    type: "Object method và this",
    prompt:
      'Bối cảnh: Bạn muốn tạo một hồ sơ cá nhân nhỏ, trong đó object có thể tự giới thiệu chính nó.\nYêu cầu: Tạo object toi có thuộc tính ten, tuoi và phương thức chao.\nKết quả: Khi gọi toi.chao(), phương thức này in ra câu "Xin chào, tôi là Nam, năm nay tôi 20 tuổi."',
    example:
      'Kết quả mong muốn:\ntoi.chao() in ra "Xin chào, tôi là Nam, năm nay tôi 20 tuổi."',
    hint: `Gợi ý:
- Tạo object tên toi.
- Object cần có thuộc tính ten và tuoi đúng như đề bài.
- Thêm phương thức chao vào object.
- Trong phương thức chao, dùng console.log để in câu yêu cầu.
- Dùng this.ten và this.tuoi để lấy dữ liệu của chính object toi.`,
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
    title: "Học về this: chiecXe.gioiThieu",
    type: "Object method và this",
    prompt:
      'Bối cảnh: Một trang bán xe cần mỗi chiếc xe tự in ra thông tin giới thiệu của nó.\nYêu cầu: Tạo object chiecXe có thuộc tính ten, mau và phương thức gioiThieu.\nKết quả: Khi gọi chiecXe.gioiThieu(), phương thức này in ra câu "Đây là xe VinFast VF8 màu Đỏ."',
    example:
      'Kết quả mong muốn:\nchiecXe.gioiThieu() in ra "Đây là xe VinFast VF8 màu Đỏ."',
    hint: `Gợi ý:
- Tạo object tên chiecXe.
- Object cần có thuộc tính ten và mau.
- Thêm phương thức gioiThieu.
- Khi method nằm trong object, this trỏ về object đang gọi method.
- Ghép this.ten và this.mau vào câu cần in.`,
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
    title: "Học về this: hocSinh.thongTin",
    type: "Object method và this",
    prompt:
      'Bối cảnh: Một hệ thống quản lý lớp học cần mỗi học sinh tự hiển thị thông tin ngắn gọn.\nYêu cầu: Tạo object hocSinh có thuộc tính ten, lop và phương thức thongTin.\nKết quả: Khi gọi hocSinh.thongTin(), phương thức này in ra câu "Lan học lớp 10A."',
    example: 'Kết quả mong muốn:\nhocSinh.thongTin() in ra "Lan học lớp 10A."',
    hint: `Gợi ý:
- Tạo object tên hocSinh.
- Object cần có thuộc tính ten và lop.
- Thêm phương thức thongTin.
- Trong method, dùng this.ten để lấy tên và this.lop để lấy lớp.
- Kết quả cần được in bằng console.log.`,
    tests: [
      { expression: "hocSinh.ten", expected: "Lan" },
      { expression: "hocSinh.lop", expected: "10A" },
      { expression: "hocSinh.thongTin(); __logs[0]", expected: "Lan học lớp 10A." },
    ],
  },
{
    id: "object-method-product",
    level: "Object method",
    title: "Học về this: sanPham.hienThi",
    type: "Object method và this",
    prompt:
      'Bối cảnh: Một cửa hàng online cần mỗi sản phẩm tự hiển thị tên và giá của nó.\nYêu cầu: Tạo object sanPham có thuộc tính ten, gia và phương thức hienThi.\nKết quả: Khi gọi sanPham.hienThi(), phương thức này in ra câu "Áo thun có giá 150000 VND."',
    example:
      'Kết quả mong muốn:\nsanPham.hienThi() in ra "Áo thun có giá 150000 VND."',
    hint: `Gợi ý:
- Tạo object tên sanPham.
- Object cần có thuộc tính ten và gia.
- Thêm phương thức hienThi.
- Trong method, lấy dữ liệu bằng this.ten và this.gia.
- Chú ý câu in ra có thêm " VND." ở cuối.`,
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
    title: "Học về this: taiKhoan.thongBao",
    type: "Object method và this",
    prompt:
      'Bối cảnh: Một app ví điện tử cần tài khoản tự hiển thị thông báo số dư hiện tại.\nYêu cầu: Tạo object taiKhoan có thuộc tính tenDangNhap, soDu và phương thức thongBao.\nKết quả: Khi gọi taiKhoan.thongBao(), phương thức này in ra câu "Tài khoản user01 còn 500000 VND."',
    example:
      'Kết quả mong muốn:\ntaiKhoan.thongBao() in ra "Tài khoản user01 còn 500000 VND."',
    hint: `Gợi ý:
- Tạo object tên taiKhoan.
- Object cần có thuộc tính tenDangNhap và soDu.
- Thêm phương thức thongBao.
- Dùng this.tenDangNhap và this.soDu trong method.
- Kết quả cần được in bằng console.log, không phải return.`,
    tests: [
      { expression: "taiKhoan.tenDangNhap", expected: "user01" },
      { expression: "taiKhoan.soDu", expected: 500000 },
      {
        expression: "taiKhoan.thongBao(); __logs[0]",
        expected: "Tài khoản user01 còn 500000 VND.",
      },
    ],
  },
{
    id: "free-sum-array",
    level: "Tự do",
    title: "Tự do tổng hợp: sumArray",
    type: "Bài tự do",
    prompt:
      "Bối cảnh: Một lớp học muốn tính tổng điểm của một học sinh qua nhiều bài kiểm tra.\nYêu cầu: Tạo hàm sumArray với 1 tham số numbers.\nKết quả: Trả về tổng tất cả số trong mảng.",
    example: "Kết quả mong muốn:\nsumArray([1, 2, 3]) => 6\nsumArray([5, -2, 7]) => 10",
    hint: `Mục tiêu: cộng tất cả số trong mảng numbers.

Cách nghĩ chậm rãi:
1. Muốn cộng nhiều số, mình cần một biến để giữ tổng tạm thời.
2. Ban đầu chưa cộng gì nên tổng là 0.
3. Duyệt từng số trong mảng numbers.
4. Mỗi lần gặp một số, cộng số đó vào tổng.
5. Sau khi duyệt xong, return tổng.

Ghi nhớ:
- for...of dùng để lấy từng phần tử trong mảng.
- total = total + number nghĩa là lấy tổng cũ cộng thêm số hiện tại.`,
    tests: [
      { expression: "sumArray([1, 2, 3])", expected: 6 },
      { expression: "sumArray([5, -2, 7])", expected: 10 },
      { expression: "sumArray([])", expected: 0 },
    ],
  },
{
    id: "free-count-vowels",
    level: "Tự do",
    title: "Tự do tổng hợp: countVowels",
    type: "Bài tự do",
    prompt:
      "Bối cảnh: Một app luyện phát âm muốn đếm số nguyên âm trong một từ tiếng Anh để phân tích cách đọc.\nYêu cầu: Tạo hàm countVowels với 1 tham số text.\nKết quả: Trả về số lượng nguyên âm a, e, i, o, u trong text.",
    example: 'Kết quả mong muốn:\ncountVowels("hello") => 2\ncountVowels("javascript") => 3',
    hint: `Mục tiêu: đếm xem trong text có bao nhiêu ký tự là a, e, i, o, u.

Cách nghĩ chậm rãi:
1. Cần một biến count để đếm số nguyên âm.
2. Ban đầu chưa thấy nguyên âm nào nên count = 0.
3. Tạo chuỗi vowels = "aeiou" để lưu các nguyên âm cần kiểm tra.
4. Duyệt từng ký tự trong text.
5. Nếu vowels.includes(char) là true, tăng count lên 1.
6. Cuối cùng return count.

Ghi nhớ:
- includes dùng để hỏi: chuỗi này có chứa ký tự kia không?
- "aeiou".includes("e") trả về true.
- "aeiou".includes("x") trả về false.`,
    tests: [
      { expression: 'countVowels("hello")', expected: 2 },
      { expression: 'countVowels("javascript")', expected: 3 },
      { expression: 'countVowels("sky")', expected: 0 },
    ],
  },
{
    id: "free-reverse-text",
    level: "Tự do",
    title: "Tự do tổng hợp: reverseText",
    type: "Bài tự do",
    prompt:
      "Bối cảnh: Một trò chơi chữ cần đảo ngược từ người chơi nhập vào để tạo câu đố.\nYêu cầu: Tạo hàm reverseText với 1 tham số text.\nKết quả: Trả về chuỗi bị đảo ngược.",
    example: 'Kết quả mong muốn:\nreverseText("code") => "edoc"',
    hint: `Mục tiêu: đảo ngược thứ tự các ký tự trong text.

Cách dễ nhất là dùng 3 bước có sẵn của JavaScript:
1. text.split("") biến chuỗi thành mảng ký tự.
2. reverse() đảo ngược mảng.
3. join("") ghép mảng lại thành chuỗi.

Ví dụ:
"code"
split("")  -> ["c", "o", "d", "e"]
reverse()  -> ["e", "d", "o", "c"]
join("")   -> "edoc"

Gợi ý cách viết:
- Bạn có thể làm từng bước bằng biến trung gian.
- Hoặc nối 3 thao tác split, reverse, join trên cùng một dòng.
- Nhớ return chuỗi sau khi đã ghép lại.`,
    tests: [
      { expression: 'reverseText("code")', expected: "edoc" },
      { expression: 'reverseText("JavaScript")', expected: "tpircSavaJ" },
      { expression: 'reverseText("")', expected: "" },
    ],
  },
{
    id: "free-find-longest-word",
    level: "Tự do",
    title: "Tự do tổng hợp: findLongestWord",
    type: "Bài tự do",
    prompt:
      "Bối cảnh: Một công cụ phân tích văn bản muốn tìm từ dài nhất trong một danh sách từ.\nYêu cầu: Tạo hàm findLongestWord với 1 tham số words.\nKết quả: Trả về từ dài nhất trong mảng.",
    example:
      'Kết quả mong muốn:\nfindLongestWord(["an", "javascript", "code"]) => "javascript"',
    hint: `Mục tiêu: tìm từ có độ dài lớn nhất trong mảng words.

Cách nghĩ chậm rãi:
1. Mình cần một biến để nhớ từ dài nhất hiện tại.
2. Lúc đầu, cứ tạm coi từ đầu tiên là dài nhất: words[0].
3. Duyệt từng từ trong mảng.
4. So sánh độ dài của từ hiện tại với từ dài nhất đang lưu.
5. Nếu từ hiện tại dài hơn, cập nhật lại biến longest.
6. Duyệt xong thì return longest.

Ghi nhớ:
- word.length là số ký tự của word.
- longest luôn giữ từ dài nhất mình tìm được cho tới thời điểm hiện tại.`,
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
    title: "Tự do tổng hợp: formatMoney",
    type: "Bài tự do",
    prompt:
      "Bối cảnh: Một màn hình thanh toán cần hiển thị số tiền kèm đơn vị tiền tệ cho dễ đọc.\nYêu cầu: Tạo hàm formatMoney với 1 tham số amount.\nKết quả: Trả về chuỗi có dạng [amount] VND.",
    example: 'Kết quả mong muốn:\nformatMoney(5000) => "5000 VND"',
    hint: `Mục tiêu: biến số amount thành chuỗi có dạng "[amount] VND".

Cách nghĩ chậm rãi:
1. amount là số, ví dụ 5000.
2. Kết quả cần là chuỗi "5000 VND".
3. Vậy chỉ cần ghép amount với chuỗi " VND".
4. Nhớ có dấu cách trước VND.

Ghi nhớ:
- " VND" có dấu cách ở đầu.
- Có thể dùng dấu + hoặc template literal để ghép chuỗi.
- Nếu thiếu dấu cách, kết quả sẽ thành "5000VND" và bài sẽ sai.`,
    tests: [
      { expression: "formatMoney(5000)", expected: "5000 VND" },
      { expression: "formatMoney(0)", expected: "0 VND" },
      { expression: "formatMoney(125000)", expected: "125000 VND" },
    ],
  }
];
const exerciseSolutions = {
  "declaration-add": `function add(a, b) {
  return a + b;
}`,
  "declaration-subtract": `function subtract(a, b) {
  return a - b;
}`,
  "declaration-greet": `function sayHello(name) {
  return "Xin chào, " + name + "!";
}`,
  "declaration-is-even": `function isEven(n) {
  return n % 2 === 0;
}`,
  "declaration-max": `function max(a, b) {
  if (a > b) {
    return a;
  }

  return b;
}`,
  "expression-square": `const square = function(n) {
  return n * n;
};`,
  "expression-is-adult": `const isAdult = function(age) {
  return age >= 18;
};`,
  "expression-first-char": `const firstChar = function(text) {
  return text[0];
};`,
  "expression-total-price": `const totalPrice = function(price, quantity) {
  return price * quantity;
};`,
  "expression-make-email": `const makeEmail = function(username) {
  return username + "@gmail.com";
};`,
  "arrow-double": `const double = (n) => {
  return n * 2;
};`,
  "arrow-first-item": `const getFirstItem = (arr) => {
  return arr[0];
};`,
  "arrow-last-item": `const getLastItem = (arr) => {
  return arr[arr.length - 1];
};`,
  "arrow-full-name": `const fullName = (firstName, lastName) => {
  return firstName + " " + lastName;
};`,
  "arrow-is-empty": `const isEmpty = (text) => {
  return text === "";
};`,
  "array-count-items": `function countItems(arr) {
  return arr.length;
}`,
  "array-has-item": `function hasItem(arr, item) {
  return arr.includes(item);
}`,
  "array-find-index": `function findIndexOf(arr, item) {
  return arr.indexOf(item);
}`,
  "array-get-even-numbers": `function getEvenNumbers(numbers) {
  const result = [];

  for (let number of numbers) {
    if (number % 2 === 0) {
      result.push(number);
    }
  }

  return result;
}`,
  "array-double-numbers": `function doubleNumbers(numbers) {
  const result = [];

  for (let number of numbers) {
    result.push(number * 2);
  }

  return result;
}`,
  "free-sum-array": `function sumArray(numbers) {
  let total = 0;

  for (let number of numbers) {
    total = total + number;
  }

  return total;
}`,
  "free-count-vowels": `function countVowels(text) {
  let count = 0;
  const vowels = "aeiou";

  for (let char of text) {
    if (vowels.includes(char)) {
      count = count + 1;
    }
  }

  return count;
}`,
  "free-reverse-text": `function reverseText(text) {
  return text.split("").reverse().join("");
}`,
  "free-find-longest-word": `function findLongestWord(words) {
  let longest = words[0];

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}`,
  "free-format-money": `function formatMoney(amount) {
  return amount + " VND";
}`,
  "object-method-toi": `const toi = {
  ten: "Nam",
  tuoi: 20,
  chao: function() {
    console.log("Xin chào, tôi là " + this.ten + ", năm nay tôi " + this.tuoi + " tuổi.");
  }
};`,
  "object-method-car": `const chiecXe = {
  ten: "VinFast VF8",
  mau: "Đỏ",
  gioiThieu: function() {
    console.log("Đây là xe " + this.ten + " màu " + this.mau + ".");
  }
};`,
  "object-method-student": `const hocSinh = {
  ten: "Lan",
  lop: "10A",
  thongTin: function() {
    console.log(this.ten + " học lớp " + this.lop + ".");
  }
};`,
  "object-method-product": `const sanPham = {
  ten: "Áo thun",
  gia: 150000,
  hienThi: function() {
    console.log(this.ten + " có giá " + this.gia + " VND.");
  }
};`,
  "object-method-account": `const taiKhoan = {
  tenDangNhap: "user01",
  soDu: 500000,
  thongBao: function() {
    console.log("Tài khoản " + this.tenDangNhap + " còn " + this.soDu + " VND.");
  }
};`,
};

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

if (window.basicCurriculumExercises && window.basicCurriculumSolutions) {
  exercises.splice(0, exercises.length, ...window.basicCurriculumExercises);
  Object.keys(exerciseSolutions).forEach((key) => delete exerciseSolutions[key]);
  Object.assign(exerciseSolutions, window.basicCurriculumSolutions);
}

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
  solutionOpen: false,
  openGroups: new Set(["Biến"]),
  singleGroupMode: localStorage.getItem("functionGymSingleGroupMode") !== "false",
  currentNotebookId: notebookArticles[0].id,
  currentMode: "exercise",
};

const exerciseGroupOrder = [
  "Biến",
  "If Else",
  "Loop",
  "Function",
  "Array",
  "Object",
];

const exerciseList = document.querySelector("#exerciseList");
const exerciseLevel = document.querySelector("#exerciseLevel");
const exerciseTitle = document.querySelector("#exerciseTitle");
const exercisePrompt = document.querySelector("#exercisePrompt");
const exampleBox = document.querySelector("#exampleBox");
const hintBox = document.querySelector("#hintBox");
const solutionBox = document.querySelector("#solutionBox");
const codeEditor = document.querySelector("#codeEditor");
const playgroundEditor = document.querySelector("#playgroundEditor");
const outputBox = document.querySelector("#outputBox");
const playgroundConsole = document.querySelector("#playgroundConsole");
const testSummary = document.querySelector("#testSummary");
const playgroundStatus = document.querySelector("#playgroundStatus");
const statusPill = document.querySelector("#statusPill");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const runBtn = document.querySelector("#runBtn");
const resetBtn = document.querySelector("#resetBtn");
const hintBtn = document.querySelector("#hintBtn");
const solutionBtn = document.querySelector("#solutionBtn");
const runPlaygroundBtn = document.querySelector("#runPlaygroundBtn");
const clearPlaygroundBtn = document.querySelector("#clearPlaygroundBtn");
const resetAllBtn = document.querySelector("#resetAllBtn");
const singleGroupToggle = document.querySelector("#singleGroupToggle");
const toggleAllGroupsBtn = document.querySelector("#toggleAllGroupsBtn");
const exerciseModeBtn = document.querySelector("#exerciseModeBtn");
const playgroundModeBtn = document.querySelector("#playgroundModeBtn");
const notebookBtn = document.querySelector("#notebookBtn");
const exerciseSidebarTools = document.querySelector("#exerciseSidebarTools");
const exerciseView = document.querySelector("#exerciseView");
const playgroundView = document.querySelector("#playgroundView");
const notebookView = document.querySelector("#notebookView");
const notebookList = document.querySelector("#notebookList");
const notebookContent = document.querySelector("#notebookContent");
const closeNotebookBtn = document.querySelector("#closeNotebookBtn");

function setMode(mode) {
  state.currentMode = mode;

  exerciseView.hidden = mode !== "exercise";
  playgroundView.hidden = mode !== "playground";
  notebookView.hidden = mode !== "notebook";
  exerciseSidebarTools.hidden = mode !== "exercise";
  exerciseList.hidden = mode !== "exercise";

  exerciseModeBtn.classList.toggle("active", mode === "exercise");
  playgroundModeBtn.classList.toggle("active", mode === "playground");
  notebookBtn.classList.toggle("active", mode === "notebook");

  if (mode === "notebook") renderNotebook();
}

function getExerciseGroups() {
  const groups = exercises.reduce((result, exercise, index) => {
    if (!result.has(exercise.type)) result.set(exercise.type, []);
    result.get(exercise.type).push({ exercise, index });
    return result;
  }, new Map());

  return new Map(
    [...groups.entries()].sort(([groupA], [groupB]) => {
      const indexA = exerciseGroupOrder.indexOf(groupA);
      const indexB = exerciseGroupOrder.indexOf(groupB);
      const orderA = indexA === -1 ? Number.MAX_SAFE_INTEGER : indexA;
      const orderB = indexB === -1 ? Number.MAX_SAFE_INTEGER : indexB;
      return orderA - orderB;
    })
  );
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
  setMode("notebook");
}

function closeNotebook() {
  setMode("exercise");
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
          state.solutionOpen = false;
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
  solutionBox.textContent = exerciseSolutions[exercise.id] || "";
  hintBox.hidden = !state.hintOpen;
  solutionBox.hidden = !state.solutionOpen;
  hintBtn.textContent = state.hintOpen ? "Ẩn hint" : "Hint";
  solutionBtn.textContent = state.solutionOpen ? "Ẩn lời giải" : "Lời giải";
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
  if (Object.is(actual, expected)) return true;

  if (actual && expected && typeof actual === "object" && typeof expected === "object") {
    try {
      return JSON.stringify(actual) === JSON.stringify(expected);
    } catch (error) {
      return false;
    }
  }

  return false;
}

function formatValue(value) {
  if (typeof value === "string") return `"${value}"`;
  return JSON.stringify(value);
}

function formatConsoleValue(value) {
  if (typeof value === "string") return value;
  if (typeof value === "undefined") return "undefined";
  if (typeof value === "function") return value.toString();

  try {
    return JSON.stringify(value, null, 2);
  } catch (error) {
    return String(value);
  }
}

function renderConsoleLines(lines) {
  playgroundConsole.innerHTML = "";

  if (lines.length === 0) {
    const emptyLine = document.createElement("p");
    emptyLine.className = "console-line warn";
    emptyLine.textContent = "Code đã chạy xong, nhưng chưa có gì được in ra console.";
    playgroundConsole.appendChild(emptyLine);
    return;
  }

  lines.forEach((line) => {
    const item = document.createElement("p");
    item.className = `console-line ${line.type}`;
    item.textContent = line.text;
    playgroundConsole.appendChild(item);
  });
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
  state.solutionOpen = false;
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

function toggleSolution() {
  saveCurrentAnswer();
  state.solutionOpen = !state.solutionOpen;
  solutionBox.hidden = !state.solutionOpen;
  solutionBtn.textContent = state.solutionOpen ? "Ẩn lời giải" : "Lời giải";
}

function runPlayground() {
  const code = playgroundEditor.value.trim();
  localStorage.setItem("functionGymPlaygroundCode", playgroundEditor.value);

  if (!code) {
    playgroundStatus.textContent = "Chưa có code";
    renderConsoleLines([{ type: "warn", text: "Hãy viết code rồi bấm Chạy thử." }]);
    return;
  }

  const lines = [];
  const sandboxConsole = {
    log: (...values) => {
      lines.push({ type: "log", text: values.map(formatConsoleValue).join(" ") });
    },
    warn: (...values) => {
      lines.push({ type: "warn", text: values.map(formatConsoleValue).join(" ") });
    },
    error: (...values) => {
      lines.push({ type: "error", text: values.map(formatConsoleValue).join(" ") });
    },
  };

  try {
    const runner = new Function("console", `"use strict";\n${playgroundEditor.value}`);
    const result = runner(sandboxConsole);

    if (typeof result !== "undefined") {
      lines.push({ type: "return", text: `=> ${formatConsoleValue(result)}` });
    }

    playgroundStatus.textContent = "Đã chạy";
    renderConsoleLines(lines);
  } catch (error) {
    playgroundStatus.textContent = "Có lỗi";
    lines.push({ type: "error", text: `${error.name}: ${error.message}` });
    renderConsoleLines(lines);
  }
}

function clearPlayground() {
  playgroundEditor.value = "";
  localStorage.removeItem("functionGymPlaygroundCode");
  playgroundStatus.textContent = "Đã xóa";
  renderConsoleLines([{ type: "warn", text: "Console đã được xóa." }]);
}

playgroundEditor.value =
  localStorage.getItem("functionGymPlaygroundCode") ||
  `function add(a, b) {
  return a + b;
}

console.log(add(2, 3));`;

runBtn.addEventListener("click", runTests);
resetBtn.addEventListener("click", resetCurrentExercise);
hintBtn.addEventListener("click", toggleHint);
solutionBtn.addEventListener("click", toggleSolution);
runPlaygroundBtn.addEventListener("click", runPlayground);
clearPlaygroundBtn.addEventListener("click", clearPlayground);
resetAllBtn.addEventListener("click", resetAllExercises);
singleGroupToggle.addEventListener("change", () => {
  setSingleGroupMode(singleGroupToggle.checked);
});
toggleAllGroupsBtn.addEventListener("click", toggleAllGroups);
exerciseModeBtn.addEventListener("click", () => setMode("exercise"));
playgroundModeBtn.addEventListener("click", () => setMode("playground"));
notebookBtn.addEventListener("click", openNotebook);
closeNotebookBtn.addEventListener("click", closeNotebook);

playgroundEditor.addEventListener("input", () => {
  localStorage.setItem("functionGymPlaygroundCode", playgroundEditor.value);
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

playgroundEditor.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
    const start = playgroundEditor.selectionStart;
    const end = playgroundEditor.selectionEnd;
    playgroundEditor.value =
      playgroundEditor.value.slice(0, start) + "  " + playgroundEditor.value.slice(end);
    playgroundEditor.selectionStart = playgroundEditor.selectionEnd = start + 2;
    localStorage.setItem("functionGymPlaygroundCode", playgroundEditor.value);
  }

  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    event.preventDefault();
    runPlayground();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.currentMode === "notebook") {
    closeNotebook();
  }
});

setMode("exercise");
renderCurrentExercise();
