import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

function BoxImage({ listBox, idContent, title }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="grid">
      <div className="bg-gray-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl py-8 sm:py-18 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">{title}</h2>

            <div className="mt-6 sm:grid sm:grid-cols-2 sm:gap-x-4 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {listBox.map((list, index) => {
                const colSpanNumber = list.colSpanNumber || 1;
                const slug = list.main
                  ? slugify(list.title, { lower: true, replacement: '-' })
                  : slugify(list.name, { lower: true, replacement: '-' });
                return (
                  <Link
                    className={`group boxImage relative bg-white mb-8 lg:col-span-${colSpanNumber}`}
                    key={index}
                    onClick={scrollToTop}
                    to={
                      list.type === 'audio'
                        ? `/audio/${list.id + 1}/`
                        : list.main && list.item.length > 1
                          ? `/content/${list.id + 1}/${slug}`
                          : list.main && list.item.length <= 1
                            ? `/detail/${list.id + 1}/1/${slug}`
                            : `/detail/${idContent}/${index + 1}/${slug}`
                    }
                  >
                    <div className="flex justify-center relative h-[300px] w-full overflow-hidden rounded-lg bg-white group-hover:opacity-90 duration-200">
                      <img
                        src={
                          list.urlImage
                            ? list.urlImage[0]
                            : `https://i.ytimg.com/vi/${list.srcYtb.split('?')[0]}/hqdefault.jpg`
                        }
                        alt={list.main ? list.title : list.name}
                        className="h-full"
                      />
                    </div>
                    <div className="px-4 pt-2 pb-2">
                      <span className="">{list.main ? '' : list.title}</span>
                      <h2 className="text-hover table group-hover:bg-[size:100%_4px] font-semibold text-gray-900">
                        {list.main ? list.title : list.name}
                      </h2>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxImage;
