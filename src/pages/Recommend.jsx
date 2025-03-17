import React from "react";
import { FaFacebook } from "react-icons/fa";

const RecommendMenu = () => {
  return (
    <div className="min-h-screen p-5 bg-white md:p-10">
      {/* เมนูที่ 1 */}
      <div className="grid grid-cols-1 gap-1 pb-4 mb-1 border-b md:grid-cols-2 md:border-none md:pb-0">
        <img
          src="/rec1.png"
          alt="Deep fried sea bass with fish sauce"
          className="w-full h-[250px] md:h-[325px] object-cover rounded-md"
        />
        <div className="flex flex-col justify-center md:ml-5">
          <div>
            <h3 className="text-lg font-semibold md:text-xl">
              Deep fried sea bass with fish sauce
            </h3>
            <p className="text-sm text-gray-600">ปลากะพงทอดน้ำปลา</p>
          </div>
          <p className="text-lg font-semibold text-right md:text-xl">300 baht -</p>
        </div>
      </div>

      {/* เมนูที่ 2 */}
      <div className="grid grid-cols-1 gap-1 pb-4 mb-1 border-b md:grid-cols-2 md:border-none md:pb-0">
        <div className="flex flex-col justify-center md:mr-5">
          <div>
            <h3 className="text-lg font-semibold md:text-xl">Shrimp in fish sauce</h3>
            <p className="text-sm text-gray-600">กุ้งแช่น้ำปลา</p>
          </div>
          <p className="text-lg font-semibold text-right md:text-xl">150 baht -</p>
        </div>
        <img
          src="/rec2.png"
          alt="Shrimp in fish sauce"
          className="w-full h-[250px] md:h-[325px] object-cover rounded-md"
        />
      </div>

      {/* เมนูที่ 3 */}
      <div className="grid grid-cols-1 gap-1 pb-4 mb-1 border-b md:grid-cols-2 md:border-none md:pb-0">
        <img
          src="/rec3.png"
          alt="Fried chicken wings with fish sauce"
          className="w-full h-[250px] md:h-[325px] object-cover rounded-md"
        />
        <div className="flex flex-col justify-center md:ml-5">
          <div>
            <h3 className="text-lg font-semibold md:text-xl">Shrimp in fish sauce</h3>
            <p className="text-sm text-gray-600">กุ้งแช่น้ำปลา</p>
          </div>
          <p className="text-lg font-semibold text-right md:text-xl">150 baht -</p>
        </div>
      </div>

      {/* เมนูที่ 4 */}
      <div className="grid grid-cols-1 gap-1 pb-4 mb-1 border-b md:grid-cols-2 md:border-none md:pb-0">
        <div className="flex flex-col justify-center md:mr-5">
          <div>
            <h3 className="text-lg font-semibold md:text-xl">
              Fried chicken wings with fish sauce
            </h3>
            <p className="text-sm text-gray-600">ปีกไก่ทอดน้ำปลา</p>
          </div>
          <p className="text-lg font-semibold text-right md:text-xl">120 baht -</p>
        </div>
        <img
          src="/rec4.png"
          alt="Oysters"
          className="w-full h-[250px] md:h-[325px] object-cover rounded-md"
        />
      </div>

      {/* เมนูที่ 5 */}
      <div className="grid grid-cols-1 gap-1 mb-1 md:grid-cols-2">
        <img
          src="/rec5.png"
          alt="Fried chicken wings with fish sauce"
          className="w-full h-[250px] md:h-[325px] object-cover rounded-md"
        />
        <div className="flex flex-col justify-center md:ml-5">
          <div>
            <h3 className="text-lg font-semibold md:text-xl">Oysters</h3>
            <p className="text-sm text-gray-600">หอยนางรม</p>
            <p className="font-semibold text-right">1/30 baht -</p>
            <h3 className="text-lg font-semibold md:text-xl">Side dishes</h3>
            <p className="text-sm text-gray-600">เครื่องเคียง</p>
            <p className="font-semibold text-right">1/20 baht -</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="flex items-center justify-end gap-1 text-xs italic text-right text-black md:text-sm">
          Photo credit <FaFacebook size={14} color="#1877F2" /> :
          <span className="not-italic">เที่ยวภูเก็ต</span>
        </p>
      </div>

      {/* ปุ่มเพิ่มเติม */}
      <div className="mt-10 text-center">
        <button className="text-gray-700 hover:text-gray-900" onClick={() => window.location.href = '/menu'}>
          ดูเมนูเพิ่มเติมได้ที่ menu
        </button>
      </div>
    </div>
  );
};

export default RecommendMenu;