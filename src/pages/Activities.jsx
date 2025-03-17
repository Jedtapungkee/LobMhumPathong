import React from "react";
import { FaFacebook } from "react-icons/fa";

function Activities() {
  return (
    <main>
      <div className="min-h-screen p-5 pt-16 bg-white">
        <img src="/ac1.png" alt="" className="w-full h-[300px] md:h-[740px] object-cover" />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 md:-ml-[270px] md:h-[540px] mb-4">
          <img src="/ac2.png" alt="" className="w-full h-[300px] md:h-[540px] object-cover block" />
          <img src="/ac3.png" alt="" className="w-full h-[300px] md:h-[540px] object-cover block" />
        </section>
        <section className="mb-6 text-left">
          <h3 className="font-bold text-black text-base md:-ml-[240px] md:text-lg">
            Restaurant Activities
          </h3>
          <p className="pl-2 leading-relaxed text-gray-700 text-sm md:text-[16px] md:-ml-[230px]">
            กิจกรรมเเทงสนุ๊กโต๊ะพลู
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-6 gap-3 md:-ml-[270px] md:h-[800px] mb-3">
          <img src="/ac4.png" alt="บรรยากาศ" className="w-full h-[300px] md:h-[800px] md:col-span-3 object-cover" />
          <div className="grid grid-rows-2 gap-3 md:col-span-3">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <img src="/ac5.png" alt="บรรยากาศ" className="w-full h-[200px] md:h-[450px] object-cover" />
              <img src="/ac6.png" alt="บรรยากาศ" className="w-full h-[200px] md:h-[450px] object-cover" />
            </div>
            <div className="h-auto md:h-[350px]">
              <h3 className="p-3 font-bold text-black">Restaurant Activities</h3>
              <p className="text-left leading-relaxed text-gray-700 text-sm md:text-[16px] pl-5">
                กิจกรรมลอยกระทง
              </p>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-6 gap-3 md:-ml-[270px] md:h-[620px] mb-5">
          <img src="/ac7.png" alt="บรรยากาศ" className="w-full h-[300px] md:h-[620px] md:col-span-3 object-cover" />
          <div className="grid grid-rows-2 gap-3 md:col-span-3">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-1">
              <img src="/ac8.png" alt="บรรยากาศ" className="w-full h-[200px] md:h-[620px] object-cover md:-mt-[220px] md:w-full" />
            </div>
            <div className="h-auto md:h-[350px]">
              <h3 className="p-3 font-bold text-black">Restaurant Activities</h3>
              <p className="text-left leading-relaxed text-gray-700 text-sm md:text-[16px] pl-5">
                ให้อาหารปลา
              </p>
            </div>
          </div>
        </section>
        <section className="mb-6">
          <p className="flex items-center justify-end gap-1 text-xs italic text-black md:text-sm">
            Photo credit <FaFacebook size={14} color="#1877F2" /> :
            <span className="not-italic">เที่ยวภูเก็ต</span>
          </p>
        </section>
      </div>
    </main>
  );
}

export default Activities;
