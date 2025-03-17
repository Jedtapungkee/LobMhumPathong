import React from "react";
import { useParams } from "react-router-dom";

const menuNames = {
  "isaan-food": {
    categoryName: "เมนูอาหารอีสาน",
    items: [
      {
        name: "Papaya salad and pickled fish",
        thaiName: "ส้มตำปลาร้า",
        price: 50,
        unit: "baht",
      },
      { name: "Papaya salad", thaiName: "ตำไทย", price: 60, unit: "baht" },
      { name: "Papaya salad and salted egg", thaiName: "ตำไทยไข่เค็ม", price: 70, unit: "baht" },
      { name: "Corn papaya salad", thaiName: "ตำข้าวโพด", price: 70, unit: "baht" },
      { name: "Corn papaya salad and salted egg", thaiName: "ตำข้าวโพดไข่เค็ม", price: 80, unit: "baht" },
      { name: "Papaya salad with shrimp", thaiName: "ตำกุ้งสด", price: 100, unit: "baht" },
      { name: "Mix papaya salad", thaiName: "ตำป่า", price: 80, unit: "baht" },
      { name: "Papaya salad with seafood ", thaiName: "ตำทะเล", price: 100, unit: "baht" },
      { name: "Cucumber salad", thaiName: "ตำแตง", price: 60, unit: "baht" },
      { name: "Papaya sald with rice noodles", thaiName: "ตำซั่ว", price: 70, unit: "baht" },
      { name: "Long bean salad", thaiName: "ตำถั่ว", price: 60, unit: "baht" },
      { name: "Spicy salad with squid", thaiName: "ตำโวยวาย", price: 100, unit: "baht" },
      { name: "Spicy minced beef salad", thaiName: "ลาบเนื้อ", price: 150, unit: "baht" },
      { name: "Spicy minced pork salad", thaiName: "ลาบหมู", price: 120, unit: "baht" },
      { name: "Spicy minced chicken salad", thaiName: "ลาบไก่", price: 100, unit: "baht" },
      { name: "sweet liver", thaiName: "ตับหวาน", price: 120, unit: "baht" },
      { name: "Spicy minced beef salad", thaiName: "น้ำตกเนื้อ", price: 150, unit: "baht" },
      { name: "Spicy minced pork salad", thaiName: "น้ำตกหมู", price: 120, unit: "baht" },
      { name: "northern thai spicy soup", thaiName: "แกงอ่อม,ไก่,เนื้อ,หมู", price: 80, unit: "baht" },
      { name: "Tom yum cartilage", thaiName: "ต้มแซ่บกระดูกอ่อน", price: 150, unit: "baht" },
      { name: "Fried pork", thaiName: "คอหมูย่าง", price: 150, unit: "baht" },
      { name: "Fried chicken", thaiName: "ไก่ย่าง", price: 70, unit: "baht" },
      { name: "Roast beef", thaiName: "เสือร้องไห้", price: 150, unit: "baht" },
      { name: "Larb duck", thaiName: "ลาบเป็ด", price: 120, unit: "baht" },
      { name: "Cherry clams larb", thaiName: "ก้อยหอยเชอรี่", price: 120, unit: "baht" },
      { name: "Rice stik", thaiName: "ข้าวเหนียว", price: 10, unit: "baht" },
      { name: "Khanom Jeen", thaiName: "ขนมจีน", price: 10, unit: "baht" },
    ],
  },
  "deep-fried-or-stir-fried": {
    categoryName: "เมนูผัด/ทอด",
    items: [
      { name: "Deep fried sea bass with fish sauce", thaiName: "ปลากระพงทอดน้ำปลา", price: 300, unit: "baht" },
      { name: "Fried chicken wings with sauce", thaiName: "ปีกไก่ทอดน้ำปลา", price: 120, unit: "baht" },
      { name: "Fried chicken  with garilic", thaiName: "ไก่ทอดกระเทียม", price: 100, unit: "baht" },
      { name: "Fried pork with garilic", thaiName: "หมูทอดกระเทียม", price: 120, unit: "baht" },
      { name: "Fried shrimp with garilic", thaiName: "กุ้งทอดกระเทียม", price: 150, unit: "baht" },
      { name: "Fried squid with garilic", thaiName: "หมึกทอดกระเทียม", price: 150, unit: "baht" },
      { name: "Chicken tendon", thaiName: "เอ็นไก่ทอด", price: 120, unit: "baht" },
      { name: "Fried duck", thaiName: "ปากเป็ดทอด", price: 120, unit: "baht" },
      { name: "Fried nuggets", thaiName: "นักเก็ตไก่ทอด", price: 80, unit: "baht" },
      { name: "Fried cashew nuts", thaiName: "เม็ดมะม่วงหิมพานทอด", price: 80, unit: "baht" },
      { name: "Fried sun dried beef", thaiName: "เนื้อแดดเดียวทอด", price: 150, unit: "baht" },
      { name: "Fried sun dried pork", thaiName: "ปีกไก่ทอดน้ำปลา", price: 120, unit: "baht" },
      { name: "French fries", thaiName: "เฟรนฟรายทอด", price: 80, unit: "baht" },
      { name: "pork omelet", thaiName: "ไข่เจียวหมูสับ", price: 80, unit: "baht" },
      

    ],
  },
  "thai-soup-dishes": {
    categoryName: "เมนูอาหารต้ม/ซุป",
    items: [
      { name: "Spicy and Sour Shrimp Soup", thaiName: "ต้มยำกุ้ง/น้ำข้น/น้ำใส", price: 150, unit: "baht" },
      { name: "Spicy and Sour Mixed Seafood Soup", thaiName: "ต้มยำทะเลรวม", price: 150, unit: "baht" },
      { name: "Spicy Sea Bass Soup", thaiName: "ต้มยำยปลากระพง", price: 150, unit: "baht" },
      { name: "Spicy Sea tilapia Soup", thaiName: "ต้มยำปลานิล", price: 150, unit: "baht" },
      { name: "Spicy Chicken Soup", thaiName: "ต้มยำไก่", price: 150, unit: "baht" },
      { name: "Spicy Chicken Tendon Soup", thaiName: "ต้มแซ่บเอ็นไก่", price: 150, unit: "baht" },
      { name: "Sea fish curry", thaiName: "แกงส้มปลาทะเล", price: 150, unit: "baht" },
      { name: "Fish Coconut Milk Curry", thaiName: "แกงกะทิปลา", price: 150, unit: "baht" },
      { name: "Green curry with chicken and pork", thaiName: "แกงเขียวหวานไก่/หมู", price: 120, unit: "baht" },
      { name: "Soup with tofu and minced pork", thaiName: "ต้มจืดเต้าหู้หมูสับ", price: 100, unit: "baht" },
    ],
  },
  "spicy-salad-dishes":{
    categoryName: "เมนูยำ",
    items: [
      { name: "Glass noodles salad with minced pork", thaiName: "ยำวุ้นเส้นหมูสับ", price: 120, unit: "baht" },
      { name: "Glass noodles salad with seafood", thaiName: "ยำวุ้นเส้นทะเลรวม", price: 150, unit: "baht" },
      { name: "Seafood salad spicy", thaiName: "ยำทะเลรวม", price: 150, unit: "baht" },
      { name: "Salled egg salad", thaiName: "ยำไข่เค็ม", price: 120, unit: "baht" },
      { name: "Century egg salad spicy", thaiName: "ยำไข่เยี่ยวม้า", price: 120, unit: "baht" },
      { name: "salad 3 krob spicy", thaiName: "ยำสามกรอบ", price: 120, unit: "baht" },
      { name: "Mango salad spicy", thaiName: "ยำมะม่วง", price: 100, unit: "baht" },
      { name: "Salad fried egg", thaiName: "ยำไข่ดาว", price: 100, unit: "baht" },
      { name: "Spicy Chicken Feet Salad", thaiName: "ยำตีนไก่", price: 120, unit: "baht" },
      { name: "Spicy  Noodle Minced Pork Salad", thaiName: "ยำมาม่าหมูสับ", price: 120, unit: "baht" },
      { name: "Spicy  Noodle seafood Salad", thaiName: "ยำมาม่าทะเล", price: 150, unit: "baht" },
      
      

    ],
  },
  "local-thai-delicacies":{
    categoryName: "เมนูอาหารพื้นบ้าน",
    items: [
      { name: "Stir-fried Pork with Red Curry Paste", thaiName: "ผัดพริกแกงหมู,ไก่", price: 120, unit: "baht" },
      { name: "Stir-fried stinky beans with chili and pork curry", thaiName: "สะตอผัดพริกแกงหมู,ไก่", price: 120, unit: "baht" },
      { name: "Stir-fried stinky beans with seafood curry paste", thaiName: "สะตอผัดพริกแกงหมู,ไก่", price: 120, unit: "baht" },
      { name: "Stir-fried seafood curry paste", thaiName: "ผัดพริกแกงทะเล", price: 150, unit: "baht" },
      { name: "Stir-fried Chinese Kale with Crispy Pork", thaiName: "ผัดคะน้าหมูกรอบ", price: 120, unit: "baht" },
      { name: "Stir-fried spicy pork /chicken", thaiName: "ผัดเผ็ดหมู,ไก่", price: 120, unit: "baht" },
      { name: "Stir-fried Spicy Seafooก", thaiName: "ผัดเผ็ดทะเล", price: 150, unit: "baht" },
      { name: "Stir-fried Spicy Seafood with Herbs", thaiName: "ปลาผัดฉ่า", price: 150, unit: "baht" },
      { name: "Drunken Stir-fried Seafood", thaiName: "ผัดขี้เมาทะเล", price: 150, unit: "baht" },
      { name: "Stir-fried Mixed Vegetables", thaiName: "ผัดผักรวม", price: 100, unit: "baht" },
      { name: "Stir-fried Malindjo Leaves with Egg", thaiName: "ใบเหลียงผัดไข่", price: 150, unit: "baht" },
      { name: "Shrimp Paste Chili Dip", thaiName: "น้ำพริกกะปิ", price: 100, unit: "baht" },
      { name: "Spicy Shrimp Chili Paste", thaiName: "น้ำพริกกุ้งเสียบ", price: 120, unit: "baht" },
    ],
  },
  "one-dish-meal":{
    categoryName: "เมนูอาหารจานด่วน",
    items: [
      { name: "Chicken/pork basil fried rice", thaiName: "ข้าวผัดกระเพราหมู/ไก่", price: 50, unit: "baht" },
      { name: "Seafood basil fried rice", thaiName: "ข้าวผัดกระเพราทะเล", price: 60, unit: "baht" },
      { name: "Fried rice with chicken/pork curry paste", thaiName: "ข้าวผัดพริกแกงไก่/หมู", price: 50, unit: "baht" },
      { name: "Fried rice with seafood curry paste", thaiName: "ข้าวผักพริกแกงทะเล", price: 60, unit: "baht" },
      { name: "Shrimp Fried Rice", thaiName: "ข้าวผัดกุ้ง", price: "50/120/200", unit: "baht" },
      { name: "Squid Fried Rice", thaiName: "ข้าวผัดปลาหมึก", price: "50/120/200", unit: "baht" },
      { name: "Seafood Fried Rice", thaiName: "ข้าวผัดทะเล", price: "60/150/250", unit: "baht" },
      { name: "Padthai", thaiName: "ผัดไทย", price: 70, unit: "baht" },
      { name: "Stir-fried Flat Noodles with Pork/chicken and Soy Sauce", thaiName: "ผัดซีอิ้วหมู/ไก่", price: 60, unit: "baht" },
      { name: "Stir-fried Flat Noodles with seafood and Soy Sauce", thaiName: "ผัดซีอิ้วทะเล", price: 70, unit: "baht" },
      { name: "Stir fried instant noodles pork/chicken", thaiName: "ผัดขี้เมาหมู/ไก่", price: 60, unit: "baht" },
      { name: "Stir fried instant noodles seafood", thaiName: "ผัดขี้เมาทะเล", price: 70, unit: "baht" },
      { name: "Fried egg", thaiName: "ไข่ดาว", price: 10, unit: "baht" },
      { name: "Rice big", thaiName: "ข้าวโถใหญ่", price: 60, unit: "baht" },
      { name: "Rice small", thaiName: "ข้าวจานเล็ก", price: 10, unit: "baht" },
    ],
  },
};

const menuImages = {
  "isaan-food": [
    "/is1.png",
    "/is2.png",
    "/is3.png",
    "/is4.png",
    "/is5.png",
    "/is6.png",
    "/is7.png",
    "/is8.png",
    "/is9.png",
    "/is10.png",
    "/is11.png",
    "/is12.png",
  ],
  "deep-fried-or-stir-fried": [
    "/de1.png",
    "/de2.png",
    "/de3.png",
    "/de4.png",
    "/de5.png",
    "/de6.png",
    "/de7.png",
    "/de8.png",

  ],

  "thai-soup-dishes": [
    "/so1.png",
    "/so2.png",
    "/so3.png",
    "/so4.png",
    "/so5.png",
    "/so6.png",

  ],
  "spicy-salad-dishes": [
    "/sp1.png",
    "/sp2.png",
    "/sp3.png",
    "/sp4.png",
    "/sp5.png",
    "/sp6.png",

  ],
  "local-thai-delicacies": [
    "/lo1.png",
    "/lo2.png",
    "/lo3.png",
    "/lo4.png",
    "/lo5.png",
    "/lo6.png",
    "/lo7.png",

  ],
  "one-dish-meal": [
    "/on1.png",
    "/on2.png",
    "/on3.png",
    "/on4.png",
    "/on5.png",
    "/on6.png",

  ],
};
function Menu() {
  const { category } = useParams();
  const categoryData = menuNames[category];
  const images = menuImages[category] || [];
  const items = categoryData ? categoryData.items : [];

  return (
    <div>
      {!category ? (
        <div className="grid grid-cols-2 p-4 md:grid-cols-2 md:p-20 md:ml-5">
          <img src="/menu1.png" alt="Isaan food" className="w-full h-40 object-cover md:h-[500px]" />
          <img src="/menu2.png" alt="Thai soup dishes" className="w-full h-40 object-cover md:h-[500px]" />
          <img src="/menu3.png" alt="Thai soup dishes" className="w-full h-40 object-cover md:h-[500px]" />
          <img src="/menu4.png" alt="Thai soup dishes" className="w-full h-40 object-cover md:h-[500px]" />
          <img src="/menu5.png" alt="Thai soup dishes" className="w-full h-40 object-cover md:h-[500px]" />
          <img src="/menu6.png" alt="Thai soup dishes" className="w-full h-40 object-cover md:h-[500px]" />
        </div>
      ) : (
        <div className="flex flex-col gap-5 p-4 md:flex-row md:gap-10 md:p-10">
          <div className="grid w-full grid-cols-2 gap-2">
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Menu Image ${index + 1}`} className="object-cover w-full rounded" />
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-xl italic font-bold capitalize md:text-3xl">
              {category.replace(/-/g, " ")}
            </h1>
            <h3 className="mb-4 text-xs capitalize md:text-sm">
              {menuNames[category].categoryName}
            </h3>
            <ul className="space-y-2 md:space-y-4">
              {items.map((item, index) => (
                <li key={index} className="flex justify-between pb-1 border-b md:pb-2">
                  <div>
                    <span className="text-xs font-semibold md:text-base">{item.name}</span>
                    <p className="text-xs text-gray-500 md:text-sm">{item.thaiName}</p>
                  </div>
                  <div>
                    {item.price} <span className="text-gray-500">{item.unit}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;

