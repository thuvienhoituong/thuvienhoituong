import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';

import DefaultLayout from '~/components/Layouts/DefaultLayout';
import Virtualtour from '~/components/Virtualtour';
import LoadingComponent from '~/components/LoadingComponent';
import BoxImage from '~/components/BoxImage';
import Context from '~/Context';

function AncientDocuments() {
  const listBox = useContext(Context);
  const data = listBox.filter((item) => item.document === true);

  let isLoading = true;
  if (listBox.length > 1) {
    isLoading = false;
  }
  return (
    <DefaultLayout document={true}>
      <Helmet>
        <title>Tư liệu xưa - Thư viện hồi tưởng</title>
      </Helmet>
      <div className="content">
        <Virtualtour />
        <div className="menu-box mb-12">
          {isLoading ? <LoadingComponent /> : <BoxImage listBox={data} tilte="Tài liệu xưa" />}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default AncientDocuments;
