import React from 'react';

function Virtualtour() {
  return (
    <div className="virtualtour group mb-12 relative bg-gray-200">
      <a href="/virtualtour/index.html" target="_blank">
        <h1 className="absolute left-[50%] top-[50%] z-[50] translate-x-[-50%] translate-y-[-50%] rounded-xl">
          <div className="group-hover:hidden text-center px-1 sm:px-4 py-1 text-white bg-gray-800/75 shadow-[5px_5px_20px_rgba(0,0,0,0.7)]">
            NHÀ THỜI XƯA 3D
          </div>
          <div className="hidden group-hover:block animate-[fadeIn_0.2s_ease-in]">
            <p className="px-6 py-2 text-white text-base m-2 rounded-2xl bg-orange-500 hover:bg-orange-600">
              Xem ảnh 3D
            </p>
          </div>
        </h1>
        <div className="group relative">
          <div className="relative h-80 w-full overflow-hidden group-hover:opacity-90 duration-200">
            <img
              src="https://cdn.thuvienhoituong.com/images/common/Chanh-dien.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </a>
    </div>
  );
}

export default Virtualtour;
