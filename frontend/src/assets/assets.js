import hamburger_thit_nuong from "./hamburger_thit_nuong.jpg";
import hamburger from "./hamburger.png";
import banh_mi_ca_rim from "./banh_mi_ca_rim.jpg";
import banh_mi_cha_bong from "./banh_mi_cha_bong.jpg";
import banh_mi_thit_nuong from "./banh_mi_thit_nuong.jpg";
import banh_mi_op_la from "./banh_mi_op_la.jpg";
import hotdog from "./hotdog.png";
import banh_mi_cha_thit from "./banh_mi_cha_thit.jpg";
import banh_mi_khong_nhan from "./banh_mi_khong_nhan.png";
import banh_mi_dac_biet from "./banh_mi_dac_biet.jpg";

import banh_kem_trau_xam from "./banh_kem_trau_xam.jpg";
import banh_kem_xe_moto from "./banh_kem_xe_moto.jpg";
import banh_kem_nam_lon_tuoi from "./banh_kem_nam_lon_tuoi.jpg";
import banh_kem_mung_tho from "./banh_kem_mung_tho.jpg";
import banh_kem_minion from "./banh_kem_minion.png";
import banh_kem_meo_con from "./banh_kem_meo_con.png";
import banh_kem_ech_xanh from "./banh_kem_ech_xanh.png";
import banh_kem_tra_sua from "./banh_kem_tra_sua.png";
import banh_kem_trai_tim from "./banh_kem_trai_tim.png";
import banh_kem_cherry from "./banh_kem_cherry.png";
import banh_kem_bau_binh from "./banh_kem_bau_binh.png";
import banh_kem_bday from "./banh_kem_bday.png";
import banh_kem_chu_cho from "./banh_kem_chu_cho.png";
import banh_kem_co_be from "./banh_kem_co_be.png";

import banh_bao_kim_sa from "./banh_bao_kim_sa.png";
import banh_bao_nam from "./banh_bao_nam.png";
import banh_bao_thit_bo from "./banh_bao_thit_bo.jpg";
import banh_bao_thit_heo from "./banh_bao_thit_heo.jpg";
import banh_bao_la_dua from "./banh_bao_la_dua.jpg";
import banh_bao_dua_chay from "./banh_bao_dua_chay.jpg";
import banh_bao_nhan_dua from "./banh_bao_nhan_dua.jpg";

import banh_kho_thit from "./banh_kho_thit.jpg";
import pizza from "./pizza.jpg";
import banh_hoa_mai from "./banh_hoa_mai.jpg";
import banh_bong_lua from "./banh_bong_lua.jpg";
import bong_lan_trung_muoi from "./bong_lan_trung_muoi.jpg";
import banh_dui_ga from "./banh_dui_ga.jpg";
import thit_xong_khoi from "./thit_xong_khoi.png";
import thit_pho_mai from "./thit_pho_mai.png";
import pho_mai_bap from "./pho_mai_bap.png";
import pate_ga_cay from "./pate_ga_cay.png";
import xuc_xich_me_rang from "./xuc_xich_me_rang.png";

import croissant_socola from "./croissant_socola.png";
import banh_dua_xeo from "./banh_dua_xeo.jpg";
import banh_duong from "./banh_duong.jpg";
import donut_socola from "./donut_scl.jpg";
import sung_trau from "./sung_trau.jpg";
import banh_do from "./banh_do.jpg";
import oval_dau from "./oval_dau.jpg";
import muffin_vanilla from "./muffin_vanila.jpg";
import muffin_nhi_nhanh from "./muffin_nhi_nhanh.jpg";
import dua_cuon from "./dua_cuon.jpg";

import mango_pudding from "./mango_pudding.jpg";
import xop_logo from "./xop_logo.png";
import cart_icon from "./cart_icon.png";
import bin_icon from "./bin_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import exchange_icon from "./exchange_icon.png";
import profile_icon from "./profile_icon.png";
import quality_icon from "./quality_icon.png";
import search_icon from "./search_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import support_img from "./support_img.png";
import menu_icon from "./menu_icon.png";
import about from "./about.jpg";
import paypal_logo from "./paypal_logo.png";
import stripe_logo from "./stripe_logo.png";
import cross_icon from "./cross_icon.png";

export const assets = {
  mango_pudding,
  cart_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  bin_icon,
  support_img,
  menu_icon,
  about,
  stripe_logo,
  paypal_logo,
  cross_icon,
  xop_logo,
};

export const products = [
  {
    _id: "aaaaa",
    name: "Hamburger Thịt Nướng",
    description:
      "Hamburger thịt nướng là món ăn khoái khẩu của châu Âu, nay được cải tiến để phù hợp hơn với khẩu vị của người Việt. Hamburger với lớp thịt nướng béo ngậy, ăn cùng với xà lách, cà chua tạo ra hương vị khó quên.",
    price: 18000,
    image: [hamburger_thit_nuong],
    category: "BanhMi",
    sizes: ["M", "L"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaav",
    name: "Bánh Kem Chữ Happy Birthday",
    description:
      "Mang phong cách tối giản, thanh lịch với tông màu kem dịu mắt và dòng chữ tinh tế, đây là lựa chọn lý tưởng cho các buổi tiệc sinh nhật thân mật hoặc làm món quà ngọt ngào, nhỏ xinh.",
    price: 24000,
    image: [banh_kem_bday],
    category: "BanhKem",
    sizes: ["M", "L"],
    date: 1716635445448,
    bestseller: false,
  },
  {
    _id: "aaaab",
    name: "Bánh Mì Cá Rim",
    description:
      "Bánh mì cá rim với nhân là cá khô rim, sợi dài và có độ dẻo dai xựt xựt, kết hợp cùng lớp vỏ bánh giòn mang lại vị ngọt mặn vô cùng ưng ý.",
    price: 15000,
    image: [banh_mi_ca_rim],
    category: "BanhMi",
    sizes: ["M", "L"],
    date: 1716621345448,
    bestseller: false,
  },
  {
    _id: "aaabw",
    name: "Bánh Đỏ",
    description:
      "Bánh Đỏ hấp dẫn bởi màu sắc và mùi hương của dâu tây, bánh xốp mềm, phủ lên trên là dừa vụn, đặc biệt là phần kem ở giữa ngọt thanh, không hề có cảm giác bị ngán.",
    price: 13000,
    image: [banh_do],
    category: "BanhNgot",
    sizes: ["M", "L"],
    date: 1716665145448,
    bestseller: false,
  },
  {
    _id: "aaaac",
    name: "Bánh Mì Chà Bông",
    description:
      "Bánh mì chà bông là một món ăn được nhiều người yêu thích nhờ hương vị thơm béo và mằn mặn của chà bông. Bánh mì chà bông chắc chắn sẽ thu hút được rất nhiều thực khách bởi độ thơm ngon, dễ ăn và giàu dinh dưỡng.",
    price: 10000,
    image: [banh_mi_cha_bong],
    category: "BanhMi",
    sizes: ["M", "L"],
    date: 1716234545448,
    bestseller: false,
  },
  {
    _id: "aaabg",
    name: "Bánh Hoa Mai",
    description:
      "Bánh có hình dạng một bông hoa mai lạ mắt, độc đáo mang đến hương vị mặn mặn khó quên bởi sự kết hợp giữa xúc xích và lớp bánh mềm mại phủ cùng dăm bông và bơ béo.",
    price: 14000,
    image: [banh_hoa_mai],
    category: "BanhMan",
    sizes: ["M", "L"],
    date: 1716647545448,
    bestseller: false,
  },
  {
    _id: "aaaad",
    name: "Bánh Mì Ốp La",
    description:
      "Bánh Mì Ốp La 2 Trứng với lớp nhân là trứng gà được chiên nóng hôi thơm béo, đặc biệt là nước sốt đậm đà ăn cùng với rau thơm.",
    price: 16000,
    image: [banh_mi_op_la],
    category: "BanhMi",
    sizes: ["M", "L"],
    date: 1716621345448,
    bestseller: false,
  },
  {
    _id: "aaaan",
    name: "Bánh Kem Mừng Thọ",
    description:
      "Là biểu tượng của sự kính trọng và lời chúc an lành, với lớp kem trắng tinh khôi được thắt nơ đỏ nổi bật, đây là một món quà ý nghĩa và trang trọng dành tặng đấng sinh thành.",
    price: 185000,
    image: [banh_kem_mung_tho],
    category: "BanhKem",
    sizes: ["M", "L"],
    date: 1716626645448,
    bestseller: false,
  },
  {
    _id: "aaaae",
    name: "Bánh Mì Thịt Nướng",
    description:
      "Bánh mì thịt nướng là món ăn quen thuộc với vỏ bánh giòn tan cùng hương vị đậm đà, dai dai ngọt ngọt từ thịt, được nhiều người ưa chuộng.",
    price: 15000,
    image: [banh_mi_thit_nuong],
    category: "BanhMi",
    sizes: ["M", "L"],
    date: 1716622345448,
    bestseller: true,
  },

  {
    _id: "aaaag",
    name: "Bánh Mì Thịt Chả",
    description:
      "Bánh mì thịt chả được làm từ những nguyên liệu tươi ngon, sau đó được chế biến và kết hợp cùng nhau trở thành một món ăn tuyệt hảo, trong mềm ngoài giòn của chả thịt và vỏ bánh.",
    price: 15000,
    image: [banh_mi_cha_thit],
    category: "BanhMi",
    sizes: ["M", "L"],
    date: 1716621542448,
    bestseller: false,
  },
  {
    _id: "aaaah",
    name: "Bánh Mì Hotdog",
    description:
      "Bánh Mì Hotdog là một trong những món ăn nhanh nổi tiếng của Mỹ, với tên gọi khác là bánh mì kẹp xúc xích được đặc trưng với sốt cà chua, mayonnaise và xà lạc, tạo nên hương vị hấp dẫn khi thưởng thức.​",
    price: 17000,
    image: [hotdog],
    category: "BanhMi",
    sizes: ["M", "L"],
    date: 1716622345448,
    bestseller: false,
  },
  {
    _id: "aaaai",
    name: "Bánh Hamburger (Không Nhân)",
    description:
      "Bánh Hamburger (Không Nhân) là bữa ăn ngon miệng, cung cấp đầy đủ chất dinh dưỡng lại nhanh chóng, tiện lợi, bạn có thể tùy ý điều chỉnh nhân bánh phù hợp với bánh Hamburger (Không Nhân) của nhà Xốp.",
    price: 5000,
    image: [hamburger],
    category: "BanhMi",
    sizes: ["M", "L"],
    date: 1716621235448,
    bestseller: false,
  },
  {
    _id: "aaaaj",
    name: "Bánh Mì Đặc Biệt",
    description:
      "Bánh Mì Đặc Biệt là món ăn dân dã đặc trưng bởi hương vị thơm ngon và quen thuộc tại nhà Xốp, Bánh Mì Đặc Biệt chưa bao giờ là hết hạ nhiệt bởi sự tiện lợi và vị ngon trọn vẹn nó mang lại.",
    price: 20000,
    image: [banh_mi_dac_biet],
    category: "BanhMi",
    sizes: ["M", "L"],
    date: 1716622235448,
    bestseller: false,
  },

  {
    _id: "aaaal",
    name: "Bánh Kem Xe Moto",
    description:
      "Với thiết kế độc đáo dành cho những tín đồ mô tô và mong muốn thành công, nổi bật với tông màu xám trắng sang trọng kết hợp cùng với mô hình xe mô tô, tạo nên một chiếc bánh đầy cá tính và ý nghĩa.",
    price: 185000,
    image: [banh_kem_xe_moto],
    category: "BanhKem",
    sizes: ["M", "L"],
    date: 1716624445448,
    bestseller: true,
  },
  {
    _id: "aaaam",
    name: "Bánh Kem Gia Đình",
    description:
      "Món quà ý nghĩa thể hiện lòng hiếu kính, hình ảnh ông bà tình tứ dưới tán cây hoa anh đào hồng thắm, tượng trưng cho tình yêu viên mãn và cuộc sống an lành, là lời chúc tốt đẹp nhất dành tặng đấng sinh thành.",
    price: 185000,
    image: [banh_kem_nam_lon_tuoi],
    category: "BanhKem",
    sizes: ["M", "L"],
    date: 1716625545448,
    bestseller: false,
  },

  {
    _id: "aaabz",
    name: "Bánh Dừa Cuốn",
    description:
      "Dừa Cuốn là món bánh cuộnn có xuất xứ từ châu Âu, bánh xốp, nhẹ nhưng không bị khô, thơm lừng mùi vị và vị béo của kem.",
    price: 20000,
    image: [dua_cuon],
    category: "BanhNgot",
    sizes: ["M", "L"],
    date: 1716668445448,
    bestseller: false,
  },
  {
    _id: "aaaao",
    name: "Bánh Kem Minion",
    description:
      "Đây là lựa chọn hoàn hảo để mang niềm vui đến mọi bữa tiệc, đặc biệt là dành cho các bé. Chiếc bánh được tạo hình ngộ nghĩnh theo nhân vật Minion màu vàng đặc trưng, chắc chắn sẽ khiến các bạn nhỏ thích mê.",
    price: 24000,
    image: [banh_kem_minion],
    category: "BanhKem",
    sizes: ["M", "L"],
    date: 1716627745448,
    bestseller: false,
  },
  {
    _id: "aaaap",
    name: "Bánh Kem Mèo Con",
    description:
      "Đây là món quà ngọt ngào và đáng yêu, đặc biệt lý tưởng cho các buổi tiệc sinh nhật của bé hoặc những ai yêu thích mèo. Chiếc bánh hủ kem trắng mềm mại, điểm xuyết đôi tai hồng xinh xắn, thu hút mọi ánh nhìn.",
    price: 24000,
    image: [banh_kem_meo_con],
    category: "BanhKem",
    sizes: ["M", "L"],
    date: 1716628845448,
    bestseller: false,
  },
  {
    _id: "aaaaq",
    name: "Bánh Kem Trái Tim",
    description:
      "Là biểu tượng của tình yêu và sự lãng mạn, hoàn hảo để bày tỏ tấm lòng trong những dịp đặc biệt như Valentine, kỷ niệm ngày cưới, hay sinh nhật người thương.",
    price: 24000,
    image: [banh_kem_trai_tim],
    category: "BanhKem",
    sizes: ["M", "L"],
    date: 1716629945448,
    bestseller: false,
  },
  {
    _id: "aaaar",
    name: "Bánh Kem Trà Sữa",
    description:
      "Món quà độc đáo và đáng yêu dành cho những tín đồ trà sữa. Mỗi chiếc bánh được tạo hình ngộ nghĩnh như một ly trà sữa trân châu thu nhỏ, chắc chắn sẽ mang đến sự thích thú và bất ngờ cho người nhận.",
    price: 50000,
    image: [banh_kem_tra_sua],
    category: "BanhKem",
    sizes: ["M", "L"],
    date: 1716631045448,
    bestseller: false,
  },
  {
    _id: "aaaas",
    name: "Bánh Kem Ếch Xanh",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 50000,
    image: [banh_kem_ech_xanh],
    category: "BanhKem",
    sizes: ["M", "L"],
    date: 1716632145448,
    bestseller: false,
  },
  {
    _id: "aaaat",
    name: "Bánh Kem Cherry",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 24000,
    image: [banh_kem_cherry],
    category: "BanhKem",
    sizes: ["M", "L"],
    date: 1716633245448,
    bestseller: false,
  },
  {
    _id: "aaaau",
    name: "Bánh Kem Bầu Bĩnh",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 50000,
    image: [banh_kem_bau_binh],
    category: "BanhKem",
    sizes: ["M", "L"],
    date: 1716634345448,
    bestseller: false,
  },

  {
    _id: "aaaaw",
    name: "Bánh Kem Chú Chó",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 50000,
    image: [banh_kem_chu_cho],
    category: "BanhKem",
    sizes: ["M", "L"],
    date: 1716636545448,
    bestseller: false,
  },
  {
    _id: "aaaax",
    name: "Bánh Kem Cô Bé",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 24000,
    image: [banh_kem_co_be],
    category: "BanhKem",
    sizes: ["M", "L"],
    date: 1716637645448,
    bestseller: false,
  },
  {
    _id: "aaaak",
    name: "Bánh Kem Trâu Xám",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 350000,
    image: [banh_kem_trau_xam],
    category: "BanhKem",
    subCategory: "Topwear",
    sizes: ["M", "L"],
    date: 1716623345448,
    bestseller: false,
  },

  {
    _id: "aaaay",
    name: "Bánh Bao Kim Sa",
    description:
      "Bánh bao kim sa là món bánh nổi tiếng với phần nhân trứng muối chảy tan cực kỳ hấp dẫn. Vỏ bánh mềm mịn, trắng ngần, được hấp nóng mỗi ngày. Nhân bánh là hỗn hợp hòa quyện giữa lòng đỏ trứng muối, sữa, bơ và sữa đặc, tạo nên kết cấu mịn mượt, béo ngậy và đậm đà đến khó cưỡng.",
    price: 12000,
    image: [banh_bao_kim_sa],
    category: "BanhBao",
    sizes: ["M", "L"],
    date: 1716638745448,
    bestseller: false,
  },
  {
    _id: "aaaaz",
    name: "Bánh Bao Nhân Dừa",
    description:
      "Bánh Bao Nhân Dừa mềm mịn, có vị ngọt ngọt, beo béo, thơm ngon đến khó cưỡng, có thể dùng món bánh này trong những ngày chay mà không hề có cảm giác bị ngán.",
    price: 10000,
    image: [banh_bao_nhan_dua],
    category: "BanhBao",
    sizes: ["M", "L"],
    date: 1716639845448,
    bestseller: false,
  },
  {
    _id: "aaaba",
    name: "Bánh Bao Nấm",
    description:
      "Bánh bao nấm là lựa chọn lý tưởng cho những ai yêu thích hương vị thanh đạm, tốt cho sức khỏe. Phần vỏ bánh mềm mại, trắng mịn. Nhân bánh là sự kết hợp giữa nấm mèo tươi, rau củ, và gia vị tự nhiên, tạo nên vị ngọt thanh, đậm đà mà không ngấy.",
    price: 12000,
    image: [banh_bao_nam],
    category: "BanhBao",
    sizes: ["M", "L"],
    date: 1716640945448,
    bestseller: false,
  },
  {
    _id: "aaabb",
    name: "Bánh Bao Nhân Thịt Bò",
    description:
      "Bánh Bao Nhân Thịt Bò với lớp vỏ ngoài mềm mịn, thơm ngon và bên trong là lớp nhân thịt bò thấm đẫm gia vị khiến bữa ăn của bạn ngon hơn bao giờ hết.",
    price: 15000,
    image: [banh_bao_thit_bo],
    category: "BanhBao",
    sizes: ["M", "L"],
    date: 1716642045448,
    bestseller: true,
  },
  {
    _id: "aaabc",
    name: "Bánh Bao Nhân Thịt Heo",
    description:
      "Bánh Bao Nhân Thịt Heo có hương vị thơm ngon, lớp vỏ trắng ngà tự nhiên, bên trong nhân là lớp thịt heo thấm đẫm gia vị nên rất mọng nước và vừa miệng.",
    price: 13000,
    image: [banh_bao_thit_heo],
    category: "BanhBao",
    sizes: ["M", "L"],
    date: 1716643145448,
    bestseller: false,
  },
  {
    _id: "aaabd",
    name: "Bánh Bao Dừa Chay",
    description:
      "Bánh Bao Dừa Chay phù hợp với cả ăn chay và ăn mặn với hương Dừa thơm lừng, màu sắc hấp dẫn cùng với vị ngọt thanh từ lớp nhân.",
    price: 10000,
    image: [banh_bao_dua_chay],
    category: "BanhBao",
    sizes: ["M", "L"],
    date: 1716644245448,
    bestseller: false,
  },
  {
    _id: "aaabe",
    name: "Bánh Bao Lá Dứa",
    description:
      "Bánh Bao Lá Dứa là món ăn vừa quen vừa lạ đối với mỗi người, lớp vỏ bánh bao càng hấp dẫn hơn khi có màu xanh lá và hương thơm của lá dứa, chay mặn đều dùng được.",
    price: 6000,
    image: [banh_bao_la_dua],
    category: "BanhBao",
    sizes: ["M", "L"],
    date: 1716645345448,
    bestseller: false,
  },
  {
    _id: "aaabf",
    name: "Bánh Khô Thịt",
    description:
      "Bánh Khô Thịt với hình dạng tròn trịa, lớp vỏ mền, lớp nhân thịt thơm phức và phủ lên trên là mè, tất cả kết hợp thành một chiếc bánh hoàn hảo.",
    price: 8000,
    image: [banh_kho_thit],
    category: "BanhMan",
    sizes: ["M", "L"],
    date: 1716646445448,
    bestseller: false,
  },

  {
    _id: "aaabh",
    name: "Bông Lan Trứng Muối",
    description:
      "Bông Lan Trứng Muối nhỏ phù hợp với một người ăn nhưng vẫn đảm bảo đầy đủ hương vị của một chiếc bánh Bông Lan thông thường với đóng góp trong hộp trong suốt làm cho sản phẩm đẹp mắt hơn.",
    price: 15000,
    image: [bong_lan_trung_muoi],
    category: "BanhMan",
    sizes: ["M", "L"],
    date: 1716648645448,
    bestseller: true,
  },
  {
    _id: "aaabi",
    name: "Donut Thịt Phô Mai",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 9000,
    image: [thit_pho_mai],
    category: "BanhMan",
    subCategory: "Winterwear",
    sizes: ["M", "L"],
    date: 1716649745448,
    bestseller: false,
  },
  {
    _id: "aaabj",
    name: "Bánh Thịt Xông Khói",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 13000,
    image: [thit_xong_khoi],
    category: "BanhMan",
    sizes: ["M", "L"],
    date: 1716650845448,
    bestseller: false,
  },
  {
    _id: "aaabk",
    name: "Bánh Phô Mai Bắp",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 14000,
    image: [pho_mai_bap],
    category: "BanhMan",
    sizes: ["M", "L"],
    date: 1716651945448,
    bestseller: false,
  },
  {
    _id: "aaabl",
    name: "Bánh Pate Gà Cay",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 16000,
    image: [pate_ga_cay],
    category: "BanhMan",
    sizes: ["M", "L"],
    date: 1716653045448,
    bestseller: false,
  },
  {
    _id: "aaabm",
    name: "Bánh Xúc Xích Mè Rang",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 15000,
    image: [xuc_xich_me_rang],
    category: "BanhMan",
    sizes: ["M", "L"],
    date: 1716654145448,
    bestseller: false,
  },
  {
    _id: "aaabn",
    name: "Bánh Đùi Gà",
    description:
      "Chiếc bánh mềm mại với nhân xúc xích cùng với dăm bông được phủ đầy đặn trong và ngoài , hòa quyện cùng một chút béo của bơ để tạo ra hình dạng một chiếc đùi gà bắt mắt.",
    price: 16000,
    image: [banh_dui_ga],
    category: "BanhMan",
    sizes: ["M", "L"],
    date: 1716655245448,
    bestseller: false,
  },
  {
    _id: "aaabo",
    name: "Bánh Bông Lúa",
    description:
      "Chiếc bánh có hình dạng bông lúa chín vàng rộm, mùi hương phảng phất, kết hợp giữa xúc xích, dăm bông và vỏ bánh mềm tạo nên một món ăn vô cùng bắt mắt.",
    price: 14000,
    image: [banh_bong_lua],
    category: "BanhMan",
    sizes: ["M", "L"],
    date: 1716656345448,
    bestseller: false,
  },
  {
    _id: "aaabp",
    name: "Pizza",
    description:
      "Mang hương vị của nước Ý về tập hợp lại trong một chiếc bánh Pizza và màu sắc bắt mắt khiến thực khách bị chinh phục ngay từ lần đầu tiên nếm thử.",
    price: 36000,
    image: [pizza],
    category: "BanhMan",
    sizes: ["M", "L"],
    date: 1716657445448,
    bestseller: false,
  },
  {
    _id: "aaabq",
    name: "Croissant Socola",
    description:
      "Croissant Socola là phiên bản ngọt ngào và quyến rũ của dòng bánh Pháp nổi tiếng. Với lớp vỏ nhiều tầng giòn tan, được cuộn khéo léo cùng lớp socola đậm vị, mỗi chiếc bánh là một bản hòa tấu hoàn hảo giữa bơ thơm và socola béo mịn.",
    price: 12000,
    image: [croissant_socola],
    category: "BanhNgot",
    sizes: ["M", "L"],
    date: 1716658545448,
    bestseller: false,
  },
  {
    _id: "aaaaf",
    name: "Bánh Mì Không Nhân",
    description:
      "Bánh mì không có thể kết hợp với nhiều món ăn khác như sữa đặc, cà ri,... để tạo ra hương vị đặc trưng nhất, lớp vỏ giòn giòn và phần ruột mềm mại càng ăn càng cuốn.",
    price: 3000,
    image: [banh_mi_khong_nhan],
    category: "BanhMi",
    sizes: ["M", "L"],
    date: 1716623423448,
    bestseller: false,
  },
  {
    _id: "aaabr",
    name: "Bánh Dừa Xéo",
    description:
      "Bánh Dừa Xéo xanh mướt, thêm vụn dừa trắng, bánh cuộn như lõi cây, chia thành từng miếng khi ăn rất tiện, cốt bánh gồm bánh mềm kết hợp với kem cuộn ngậy béo bên trong khiến cho bữa ăn trở nên hoàn hảo hơn.",
    price: 13000,
    image: [banh_dua_xeo],
    category: "BanhNgot",
    sizes: ["M", "L"],
    date: 1716659645448,
    bestseller: false,
  },
  {
    _id: "aaabs",
    name: "Bánh Đường",
    description:
      "Bánh Đường là loại bánh rán bắt nguồn từ phương Tây, có hình dáng như chiếc nhẫn với một lỗ tròn ở giữa, một mặt của bánh được phủ đường, bánh dai lạ miệng.",
    price: 7000,
    image: [banh_duong],
    category: "BanhNgot",
    sizes: ["M", "L"],
    date: 1716660745448,
    bestseller: false,
  },
  {
    _id: "aaabt",
    name: "Bánh Sừng Trâu",
    description:
      "Bánh Sừng Trâu là một món ăn nổi tiếng đến từ Châu Âu, có hình dáng giống như một chiếc sừng của những chú trâu, bánh nhọn ở hai đầu và ở giữa phình to, xốp, giòn, rỗng ruột, ngon hơn khi ăn kèm với sữa tươi và sữa đặc.",
    price: 11000,
    image: [sung_trau],
    category: "BanhNgot",
    sizes: ["M", "L"],
    date: 1716661845448,
    bestseller: false,
  },
  {
    _id: "aaabu",
    name: "Donut Socola",
    description:
      "Donut Socola chưa bao giờ hạ nhiệt bởi sự hấp dẫn của nó, bánh mềm, béo được phủ socola có vị đắng nhẹ hòa quyện trong miệng, phù hợp với cả người lớn và trẻ em.",
    price: 11000,
    image: [donut_socola],
    category: "BanhNgot",
    sizes: ["M", "L"],
    date: 1716662945448,
    bestseller: false,
  },
  {
    _id: "aaabv",
    name: "Oval Dâu",
    description:
      "Bánh Oval Dâu nổi bật với màu dâu được phủ lên trên với dừa vụn, vị dâu chua chua ngọt ngọt, thơm nứt mũi, kết hợp với phần bánh mềm mịn, vô cùng kích thích vị giác.",
    price: 13000,
    image: [oval_dau],
    category: "BanhNgot",
    date: 1716664045448,
    bestseller: false,
  },

  {
    _id: "aaabx",
    name: "Muffin Nhí Nhảnh",
    description:
      "Muffin Nhí Nhảnh luôn để lại ấn tượng sâu sắc với khách hàng bởi hương vị thơm ngon đặc trưng, bánh có độ xốp và mềm, được phổ biến trong các quán cà phê và bữa tiệc.",
    price: 24000,
    image: [muffin_nhi_nhanh],
    category: "BanhNgot",
    sizes: ["M", "L"],
    date: 1716666245448,
    bestseller: false,
  },
  {
    _id: "aaaby",
    name: "Muffin Vanilla",
    description:
      "Muffin Vanilla là món ăn được nhiều người yêu thích với từng miếng bánh ngọt ngào, mềm mại và thơm ngon, được sử dụng làm món tráng miệng hoặc bữa sáng đầy đủ dinh dưỡng cho cả nhà.",
    price: 8000,
    image: [muffin_vanilla],
    category: "BanhNgot",
    sizes: ["M", "L"],
    date: 1716667345448,
    bestseller: false,
  },
];
