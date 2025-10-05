import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get } from 'firebase/database';

import LoadingComponent from '~/components/LoadingComponent';

const getFooterDescription = () => {
  const [footerDesc, setFooterDesc] = useState([]);
  const itemFooterStr = localStorage.getItem('footer');
  useEffect(() => {
    if (itemFooterStr) {
      const itemCategory = JSON.parse(itemFooterStr);
      setFooterDesc(itemCategory);
    }
    const database = getDatabase();
    const dataRef = ref(database, 'footer');
    get(dataRef)
      .then((snapshot) => {
        const footer = snapshot.val();
        setFooterDesc(footer);
        localStorage.setItem('footer', JSON.stringify(footer));
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      // Mã lệnh thực thi khi component bị unmount hoặc các dependency thay đổi trước lần render tiếp theo
    };
  }, []);
  return footerDesc;
};

function Footer() {
  const footerDesc = getFooterDescription();
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-6 sm:py-12">
      {footerDesc.length === 0 ? (
        <LoadingComponent />
      ) : (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Về chúng tôi</h2>
          <div className="grid mt-6 grid-cols-1 gap-8">
            <p
              className={`text-lg indent-8 leading-8 text-justify text-white`}
              dangerouslySetInnerHTML={{ __html: footerDesc[0].text }}
            ></p>
          </div>

          <div className="grid mt-6 grid-cols-1 lg:grid-cols-5 gap-8">
            <p className="text-lg indent-8 col-span-1 lg:col-span-3 leading-8 text-justify text-white">
              <p className={`mb-4`} dangerouslySetInnerHTML={{ __html: footerDesc[1].text }}></p>
              <p className={`mb-4`} dangerouslySetInnerHTML={{ __html: footerDesc[2].text }}></p>
            </p>
            <p className="text-lg leading-8 col-span-1 lg:col-span-2 text-justify text-white">
              <img src="/images/common/hoatdong.jpg" alt="" />
            </p>
          </div>
          <div className="grid mt-6 grid-cols-1 gap-8">
            <p
              className={`text-lg indent-8 leading-8 text-justify text-white`}
              dangerouslySetInnerHTML={{ __html: footerDesc[3].text }}
            ></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
