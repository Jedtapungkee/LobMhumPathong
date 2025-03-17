import React from "react";
import { FaFacebook } from "react-icons/fa";

const Home = () => {
  return (
    <main>
      <div className="min-h-screen p-5 pt-16 bg-white">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-1.5 mb-8">
          <img
            src="/home1.png"
            alt="บรรยากาศร้าน"
            className="col-span-12 md:col-span-6 row-span-2 w-full h-[300px] md:h-[500px] object-cover rounded-md"
          />

          <img
            src="/home2.png"
            alt="บ่อปลา"
            className="col-span-12 md:col-span-4 w-full h-[300px] md:h-[500px] object-cover rounded-md"
          />

          <div className="col-span-12 md:col-span-2">
            <div className="grid grid-rows-2 gap-1">
              <img
                src="/home3.png"
                alt="โต๊ะพูล"
                className="w-full h-[150px] md:h-[250px] rounded-md object-cover"
              />
              <img
                src="/home4.png"
                alt="บรรยากาศกลางคืน"
                className="w-full h-[150px] md:h-[250px] rounded-md object-cover"
              />
            </div>
          </div>
        </section>

        <section className="text-left mb-9">
          <p className="pl-4 text-sm leading-relaxed text-gray-700 md:text-base">
            เชิญสัมผัสรสชาติความอร่อย ท่ามกลางบรรยากาศธรรมชาติ ที่
            “ร้านอาหารในหุบเขาห้าสิบปี” ป่าตอง อิ่มอร่อยกับเมนูอาหารหลากหลาย
            ไม่ว่าจะเป็น อาหารอีสานรสแซ่บ อาหารพื้นบ้านสูตรดั้งเดิม
          </p>
          <p className="text-sm leading-relaxed text-gray-700 md:text-base">
            หรือเมนูจานเดียวสุดอร่อย ทั้งผัด ต้ม ทอด และยำ
            เราคัดสรรวัตถุดิบสดใหม่ ปรุงด้วยความใส่ใจ เพื่อให้ทุกจานอร่อยถึงใจ
            บรรยากาศริมบึงสุดชิล ท่ามกลางธรรมชาติ เงียบสงบ ลมพัดเย็นสบาย
            เหมาะสำหรับการนั่งพักผ่อน ทานอาหารกับครอบครัว เพื่อนฝูง หรือคนรู้ใจ
          </p>
        </section>

        {/* รูปภาพเพิ่มเติม */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-0 md:-ml-[270px]">
            <img
              src="/home5.png"
              alt="วิวบึง"
              className="col-span-12 md:col-span-6 w-full h-[300px] md:h-[600px] object-cover block"
            />
            <img
              src="/home6.png"
              alt="วิวบึง"
              className="col-span-12 md:col-span-3 w-full h-[300px] md:h-[600px] object-cover block"
            />
            <div className="grid col-span-12 grid-rows-3 gap-1 md:col-span-3 md:gap-0">
              <div className="grid grid-cols-2 gap-1 md:gap-0">
                <img
                  src="/home7.png"
                  alt="บ่อปลา"
                  className="w-full h-[150px] md:h-[200px] object-cover block"
                />
                <img
                  src="/home8.png"
                  alt="บรรยากาศร้าน"
                  className="w-full h-[150px] md:h-[200px] object-cover block"
                />
              </div>
              <img
                src="/home9.png"
                alt="โต๊ะพูล"
                className="w-full h-[150px] md:h-[200px] object-cover block"
              />
              <img
                src="/home10.png"
                alt="บรรยากาศกลางคืน"
                className="w-full h-[150px] md:h-[200px] object-cover block"
              />
            </div>
          </div>
        </section>

        {/* เครดิตช่างภาพก่อน Footer */}
        <section className="mb-6">
          <p className="flex items-center justify-end gap-1 text-xs italic text-right text-black md:text-sm">
            Photo credit <FaFacebook size={14} color="#1877F2" /> :
            <span className="not-italic">เที่ยวภูเก็ต</span>
          </p>
        </section>
      </div>
    </main>
  );
};

export default Home;
