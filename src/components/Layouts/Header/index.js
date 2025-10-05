import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Tippy from '@tippyjs/react/headless';

import logo from '~/assets/images/logo512.png';

function Header({ home, introduce, useAtHospital, useAtHome, document, ancientPictures }) {
  const navigation = [
    { name: 'Trang chủ', href: '/', current: home },
    { name: 'Giới thiệu', href: '/gioi-thieu', current: introduce },
    { name: 'Cách sử dụng tại viện dưỡng lão', href: '/cach-su-dung-tai-vien-duong-lao', current: useAtHospital },
    { name: 'Cách sử dụng tại nhà', href: '/cach-su-dung-tai-nha', current: useAtHome },
    {
      name: 'Hình ảnh xưa',
      subMenu: [
        {
          name: 'Trang Phục',
          href: '/content/1/trang-phuc',
        },
        {
          name: 'Dụng cụ',
          href: '/content/2/dung-cu',
        },
        {
          name: 'Ẩm thực',
          href: '/content/4/am-thuc',
        },
        {
          name: 'Trò chơi',
          href: '/content/5/tro-choi',
        },
        {
          name: 'Tết',
          href: '/content/6/tet',
        },
        {
          name: 'Hình ảnh ngày xưa',
          href: '/content/7/hinh-anh-ngay-xua',
        },
        {
          name: 'Đám tiệc xưa',
          href: '/content/8/djam-tiec-xua',
        },
        {
          name: 'Tiền xưa',
          href: '/content/9/tien-xua',
        },
        {
          name: 'Mỹ phẩm xưa',
          href: '/content/11/my-pham-xua',
        },
        {
          name: 'Trái cây',
          href: '/content/12/trai-cay',
        },
        {
          name: 'Trường học',
          href: '/content/13/truong-hoc',
        },
        {
          name: 'Tem phiếu',
          href: '/content/14/tem-phieu',
        },
        {
          name: 'Sách tập đọc',
          href: '/content/15/sach-tap-djoc',
        },
      ],
      href: '/hinh-anh-xua',
      current: ancientPictures,
    },
    {
      name: 'Tư liệu xưa',
      subMenu: [
        {
          name: 'Cải lương',
          href: '/content/3/am-nhac',
        },
        {
          name: 'Phim ảnh',
          href: '/content/10/phim-anh',
        },
        {
          name: 'Lời ru',
          href: '/audio/16',
        },
        {
          name: 'Ca nhạc vàng',
          href: '/content/17/ca-nhac-vang',
        },
        {
          name: 'Nhạc tiền chiến',
          href: '/content/18/nhac-tien-chien',
        },
        {
          name: 'Vọng cổ',
          href: '/content/19/vong-co',
        },
      ],
      href: '/tu-lieu-xua',
      current: document,
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="sticky z-[999] top-0 min-h-full mb-12">
      <Disclosure as="nav" className="bg-[#f26f21]">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 sm:h-24 h-16 flex justify-between w-full">
              <div className="flex items-center justify-between w-full">
                <Link to="/" className="min-w-[60px]">
                  <img className="w-[42px] sm:w-[50px] lg:w-[50px]" src={logo} alt="" />
                </Link>
                <div className="hidden lg:block">
                  <div className="ml-10 flex items-center space-x-2">
                    {navigation.map((item, key) => {
                      return (
                        <Tippy
                          key={key}
                          interactive={true}
                          placement="bottom-start"
                          render={(attrs) => (
                            <div className="shadow-[5px_5px_20px_rgba(0,0,0,0.7)]" {...attrs}>
                              {item.subMenu &&
                                item.subMenu.map((sub, key) => {
                                  return (
                                    <div key={key} className="bg-[#f26f21] min-w-[200px]">
                                      <Link
                                        onClick={scrollToTop}
                                        key={key}
                                        to={sub.href}
                                        className="hover:bg-[#3ba03b] text-white w-full block px-3 py-2 text-base font-medium border-b border-solid border-gray-200"
                                      >
                                        {sub.name}
                                      </Link>
                                    </div>
                                  );
                                })}
                            </div>
                          )}
                        >
                          <Link
                            onClick={scrollToTop}
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current ? 'bg-[#008000]' : 'hover:bg-[#3ba03b]',
                              'text-white rounded-lg px-3 py-2 font-medium text-xl text-center',
                              item.subMenu && 'hidden xl:block',
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        </Tippy>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex xl:hidden items-center justify-between">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative p-3 text-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            <Disclosure.Panel className="xl:hidden">
              <div className="px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current ? 'bg-[#008000]' : 'hover:bg-[#3ba03b]',
                      'text-white block rounded-lg px-3 py-2 text-xl font-medium',
                      !item.subMenu && 'lg:hidden',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Header;
