import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';

import DefaultLayout from '~/components/Layouts/DefaultLayout';
import Virtualtour from '~/components/Virtualtour';
import LoadingComponent from '~/components/LoadingComponent';
import BoxImage from '~/components/BoxImage';
import Context from '~/Context';

function Home() {
  const listBox = useContext(Context);
  return (
    <DefaultLayout home={true}>
      <Helmet>
        <title>Trang chủ - Thư viện hồi tưởng</title>
      </Helmet>
      <div className="content">
        <Virtualtour />
        <div className="menu-box mb-12">
          {listBox.length <= 1 ? <LoadingComponent /> : <BoxImage listBox={listBox} tilte="Danh mục" />}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Home;
