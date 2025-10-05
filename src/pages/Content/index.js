import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import DefaultLayout from '~/components/Layouts/DefaultLayout';
import BoxImage from '~/components/BoxImage';
import Context from '~/Context';
import LoadingComponent from '~/components/LoadingComponent';

function Content() {
  const { idContentParam } = useParams();
  let listBox = useContext(Context);
  let isLoading = true;
  let idContent = 1;
  if (listBox.length > 1) {
    isLoading = false;
    idContent = idContentParam;
  }
  return (
    <DefaultLayout>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <Helmet>
            <title>{listBox[idContent - 1].title} - Thư viện hồi tưởng</title>
          </Helmet>
          <div className="content">
            <div className="menu-box mb-12">
              <BoxImage
                listBox={listBox[idContent - 1].item}
                idContent={idContent}
                title={listBox[idContent - 1].title}
              />
            </div>
          </div>
        </>
      )}
    </DefaultLayout>
  );
}

export default Content;
