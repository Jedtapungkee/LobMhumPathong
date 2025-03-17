import React from "react";
import { FaFacebook } from "react-icons/fa";

const menuItems = [
  {
    id: 1,
    name: "Deep fried sea bass with fish sauce",
    description: "ปลากะพงทอดน้ำปลา",
    price: "300",
    unit: "baht",
    image: "/rec1.png",
  },
  {
    id: 2,
    name: "Deep fried sea bass with fish sauce",
    description: "ปลากะพงทอดน้ำปลา",
    price: "300",
    unit: "baht",
    image: "/rec1.png",
  },
  {
    id: 3,
    name: "Shrimp in fish sauce",
    description: "กุ้งแช่น้ำปลา",
    price: "150",
    unit: "baht",
    image: "/rec2.png",
  },
  {
    id: 4,
    name: "Shrimp in fish sauce",
    description: "กุ้งแช่น้ำปลา",
    price: "150",
    unit: "baht",
    image: "/rec2.png",
  },
  {
    id: 5,
    name: "Fried chicken wings with fish sauce",
    description: "ปีกไก่ทอดน้ำปลา",
    price: "120",
    unit: "baht",
    image: "/rec4.png",
  },
  {
    id: 6,
    name: "Fried chicken wings with fish sauce",
    description: "ปีกไก่ทอดน้ำปลา",
    price: "120",
    unit: "baht",
    image: "/rec4.png",
  },
  {
    id: 7,
    name: "Oysters",
    description: "หอยนางรม",
    sideDish: "Side dishes",
    sideDishDescription: "เครื่องเคียง",
    price: "1/30",
    sideDishPrice: "1/20",
    unit: "baht",
    image: "/rec5.png",
  },
  {
    id: 8,
    name: "Oysters",
    description: "หอยนางรม",
    sideDish: "Side dishes",
    sideDishDescription: "เครื่องเคียง",
    price: "1/30",
    sideDishPrice: "1/20",
    unit: "baht",
    image: "/rec5.png",
  },
  {
    id: 1,
    name: "Deep fried sea bass with fish sauce",
    description: "ปลากะพงทอดน้ำปลา",
    price: "300",
    unit: "baht",
    image: "/rec1.png",
  },
  {
    id: 2,
    name: "Deep fried sea bass with fish sauce",
    description: "ปลากะพงทอดน้ำปลา",
    price: "300",
    unit: "baht",
    image: "/rec1.png",
  },
  {
    id: 3,
    name: "Shrimp in fish sauce",
    description: "กุ้งแช่น้ำปลา",
    price: "150",
    unit: "baht",
    image: "/rec2.png",
  },
  {
    id: 4,
    name: "Shrimp in fish sauce",
    description: "กุ้งแช่น้ำปลา",
    price: "150",
    unit: "baht",
    image: "/rec2.png",
  },
  {
    id: 5,
    name: "Fried chicken wings with fish sauce",
    description: "ปีกไก่ทอดน้ำปลา",
    price: "120",
    unit: "baht",
    image: "/rec4.png",
  },
  {
    id: 6,
    name: "Fried chicken wings with fish sauce",
    description: "ปีกไก่ทอดน้ำปลา",
    price: "120",
    unit: "baht",
    image: "/rec4.png",
  },
  {
    id: 7,
    name: "Oysters",
    description: "หอยนางรม",
    sideDish: "Side dishes",
    sideDishDescription: "เครื่องเคียง",
    price: "1/30",
    sideDishPrice: "1/20",
    unit: "baht",
    image: "/rec5.png",
  },
  {
    id: 8,
    name: "Oysters",
    description: "หอยนางรม",
    sideDish: "Side dishes",
    sideDishDescription: "เครื่องเคียง",
    price: "1/30",
    sideDishPrice: "1/20",
    unit: "baht",
    image: "/rec5.png",
  },
  {
    id: 1,
    name: "Deep fried sea bass with fish sauce",
    description: "ปลากะพงทอดน้ำปลา",
    price: "300",
    unit: "baht",
    image: "/rec1.png",
  },
  {
    id: 2,
    name: "Deep fried sea bass with fish sauce",
    description: "ปลากะพงทอดน้ำปลา",
    price: "300",
    unit: "baht",
    image: "/rec1.png",
  },
  {
    id: 3,
    name: "Shrimp in fish sauce",
    description: "กุ้งแช่น้ำปลา",
    price: "150",
    unit: "baht",
    image: "/rec2.png",
  },
  {
    id: 4,
    name: "Shrimp in fish sauce",
    description: "กุ้งแช่น้ำปลา",
    price: "150",
    unit: "baht",
    image: "/rec2.png",
  },
  {
    id: 5,
    name: "Fried chicken wings with fish sauce",
    description: "ปีกไก่ทอดน้ำปลา",
    price: "120",
    unit: "baht",
    image: "/rec4.png",
  },
  {
    id: 6,
    name: "Fried chicken wings with fish sauce",
    description: "ปีกไก่ทอดน้ำปลา",
    price: "120",
    unit: "baht",
    image: "/rec4.png",
  },
  {
    id: 7,
    name: "Oysters",
    description: "หอยนางรม",
    sideDish: "Side dishes",
    sideDishDescription: "เครื่องเคียง",
    price: "1/30",
    sideDishPrice: "1/20",
    unit: "baht",
    image: "/rec5.png",
  },
  {
    id: 8,
    name: "Oysters",
    description: "หอยนางรม",
    sideDish: "Side dishes",
    sideDishDescription: "เครื่องเคียง",
    price: "1/30",
    sideDishPrice: "1/20",
    unit: "baht",
    image: "/rec5.png",
  },
];

export default function MenuLayout() {
  return (
    <main>
      <div className="grid grid-cols-1 gap-6 p-5 md:grid-cols-2">
        {menuItems.map((item) => (
          <div key={item.id} className="flex flex-col justify-between md:flex-row">
            <img
              src={item.image}
              alt={item.name}
              className="object-cover w-full h-[200px] md:w-[250px] md:h-[160px]"
            />
            <div className="flex flex-col justify-between w-full p-4">
              <div>
                <h2 className="text-lg italic font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500">{item.description}</p>
                {item.sideDish && (
                  <>
                    <h2 className="mt-2 text-lg italic font-semibold text-gray-800">
                      {item.sideDish}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {item.sideDishDescription}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="p-4 flex flex-col justify-between text-right text-gray-800 min-w-[80px]">
              <div>
                <span className="text-xl font-bold">{item.price}</span>
                <span className="ml-1 text-sm">{item.unit}</span>
              </div>
              {item.sideDishPrice && (
                <div>
                  <span className="text-xl font-bold">{item.sideDishPrice}</span>
                  <span className="ml-1 text-sm">{item.unit}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <section className="mb-6">
        <p className="flex items-center justify-end gap-1 text-xs italic text-black md:text-sm">
          Photo credit <FaFacebook size={14} color="#1877F2" /> :
          <span className="not-italic">เที่ยวภูเก็ต</span>
        </p>
      </section>
      <div className="mt-10 mb-5 text-center">
        <button
          className="text-gray-700 hover:text-gray-900"
          onClick={() => (window.location.href = "/menu")}
        >
          ดูเมนูเพิ่มเติมได้ที่ menu
        </button>
      </div>
    </main>
  );
}
