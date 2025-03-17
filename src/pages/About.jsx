import React from "react";
import { FaFacebook } from "react-icons/fa";

function About() {
  return (
    <main>
      <div className="p-5 pt-16 bg-white ">
        <img src="/home5.png" alt="บรรยากาศ" className="w-full h-[300px] md:h-[740px] object-cover" />
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 md:-ml-[270px]">
        <img src="/ab1.png" alt="บรรยากาศ" className="w-full h-[300px] md:h-[600px] object-cover block" />
        <img src="/ab2.png" alt="บรรยากาศ" className="w-full h-[300px] md:h-[600px] object-cover block" />
      </section>
      <section className="m-5 mb-6 text-left">
        <h3 className="font-bold text-black md:-ml-[240px] text-base md:text-lg">
          สัมผัสรสชาติอร่อย ท่ามกลางบรรยากาศธรรมชาติที่เงียบสงบ
        </h3>
        <p className="pl-4 leading-relaxed text-gray-700 text-sm md:text-[16px] md:-ml-[220px]">
          หากคุณกำลังมองหาสถานที่รับประทานอาหารที่มาพร้อมกับวิวสวยงามและบรรยากาศอันเงียบสงบ
          ร้านอาหารของเราคือคำตอบที่สมบูรณ์แบบ! ตั้งอยู่ท่ามกลางขุนเขาและริมบึงน้ำอันร่มรื่น
        </p>
        <p className="leading-relaxed text-gray-700 text-sm md:text-[16px] md:-ml-[220px]">
          ให้คุณได้สัมผัสกับธรรมชาติในแบบที่ไม่เหมือนใคร เพลิดเพลินกับสายลมเย็น ๆ และเสียงน้ำกระเพื่อมเบา ๆ
          สร้างบรรยากาศที่เหมาะแก่การพักผ่อนและรับประทานอาหารแสนอร่อย
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-5 gap-2 md:-ml-[270px] h-auto md:h-[800px] mb-3">
        <img src="/ab3.png" alt="บรรยากาศ" className="w-full h-[300px] md:col-span-2 md:h-[800px]" />
        <div className="grid grid-rows-2 gap-3 md:col-span-3">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <img src="/ab4.png" alt="บรรยากาศ" className="w-full h-[200px] md:h-[450px]" />
            <img src="/ab5.png" alt="บรรยากาศ" className="w-full h-[200px] md:h-[450px]" />
          </div>
          <div className="m-5 mb-6 text-left">
            <h3 className="font-bold text-black">Restaurant Activities</h3>
            <p className="px-2 md:px-5 pt-2 leading-relaxed text-gray-700 text-sm md:text-[16px]">
              นอกจากอาหารรสเลิศและบรรยากาศที่เงียบสงบท่ามกลางธรรมชาติแล้วทางร้านของเรายังมีกิจกรรม
            </p>
            <p className="leading-relaxed text-gray-700 text-sm md:text-[16px]">
              ให้ลูกค้าได้เพลิดเพลินระหว่างการมาทานอาหารอีกด้วย ไม่ว่าจะเป็นการให้อาหารปลาที่แหวกว่ายในบึงน้ำ
              พายเรือคายัคชมธรรมชาติ หรือสนุกกับโต๊ะพลูในบรรยากาศชิล ๆ
            </p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-2 md:-ml-[270px] mb-3 h-auto md:h-[600px]">
        <img src="/ab6.png" alt="บรรยากาศ" className="w-full h-[300px] md:col-span-2 md:h-[600px]" />
        <img src="/ab7.png" alt="บรรยากาศ" className="w-full h-[300px] md:col-span-2 md:h-[600px]" />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-5 gap-2 md:-ml-[270px] h-auto md:h-[750px] mb-3">
        <img src="/ab8.png" alt="บรรยากาศ" className="w-full h-[300px] md:col-span-2 md:h-[750px] object-cover block" />
        <img src="/home10.png" alt="บรรยากาศ" className="w-full h-[300px] md:col-span-3 md:h-[750px] object-cover block" />
      </section>
      <section className="mb-6">
        <p className="flex items-center justify-end gap-1 text-xs italic text-black md:text-sm">
          Photo credit <FaFacebook size={14} color="#1877F2" /> :
          <span className="not-italic">เที่ยวภูเก็ต</span>
        </p>
      </section>
    </main>
  );
}

export default About;
