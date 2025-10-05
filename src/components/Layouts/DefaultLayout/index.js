import React from 'react';

import Menu from '~/components/Layouts/Header';
import Footer from '~/components/Layouts/Footer';
import ScrollToTopButton from '~/components/ScrollToTopButton';

function DefaultLayout({ children, home, introduce, useAtHospital, useAtHome, document, ancientPictures }) {
  return (
    <div className="mx-auto">
      <Menu
        home={home}
        introduce={introduce}
        useAtHospital={useAtHospital}
        useAtHome={useAtHome}
        document={document}
        ancientPictures={ancientPictures}
      />
      {children}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default DefaultLayout;
