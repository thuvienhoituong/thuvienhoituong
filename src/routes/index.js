import Home from '~/pages/Home';
import Content from '~/pages/Content';
import Detail from '~/pages/Detail';
import DetailAudio from '~/pages/DetailAudio';
import Introduce from '~/pages/Introduce';
import UseAtHospital from '~/pages/UseAtHospital';
import UseAtHome from '~/pages/UseAtHome';
import AncientDocuments from '~/pages/AncientDocuments';
import AncientPictures from '~/pages/AncientPictures';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/gioi-thieu', component: Introduce },
  { path: '/cach-su-dung-tai-vien-duong-lao', component: UseAtHospital },
  { path: '/cach-su-dung-tai-nha', component: UseAtHome },
  { path: '/hinh-anh-xua', component: AncientPictures },
  { path: '/tu-lieu-xua', component: AncientDocuments },
  { path: '/content/:idContentParam/:slug', component: Content },
  { path: '/detail/:idContentParam/:idDetailParam/:slug/', component: Detail },
  { path: '/audio/:idContentParam/', component: DetailAudio },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
