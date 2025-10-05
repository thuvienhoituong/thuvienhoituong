import React, { useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import slugify from 'slugify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ImageGallery from 'react-image-gallery';

import DefaultLayout from '~/components/Layouts/DefaultLayout';
import Button from '~/components/Button';
import Context from '~/Context';
import LoadingComponent from '~/components/LoadingComponent';

function Detail() {
  const { idContentParam, idDetailParam } = useParams();
  const listBox = useContext(Context);
  let isLoading = true;
  let idContent = 1;
  let idDetail = 1;
  if (listBox.length > 1) {
    isLoading = false;
    idContent = Number(idContentParam);
    idDetail = Number(idDetailParam);
  }

  const list = listBox[idContent - 1].item[idDetail - 1];
  const listPrev = listBox[idContent - 1].item[idDetail - 2];
  const listNext = listBox[idContent - 1].item[idDetail];
  const slugPrev = listPrev ? slugify(listPrev.name, { lower: true, replacement: '-' }) : '';
  const slugNext = listNext ? slugify(listNext.name, { lower: true, replacement: '-' }) : '';

  const targetRef = useRef(null);

  const handleClick = () => {
    const offset = 80;
    const targetPosition = targetRef.current.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };

  const images =
    list.urlImage &&
    list.urlImage.map((image) => ({
      original: image,
      thumbnail: image,
    }));

  return (
    <DefaultLayout>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <Helmet>
            <title>{list.name} - Thư viện hồi tưởng</title>
          </Helmet>
          <div ref={targetRef} className="content mb-12 bg-gray-100 px-4 sm:px-6 lg:px-20 py-8 sm:py-18">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:max-w-7xl lg:grid-cols-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                Danh mục: {list.title}
              </h2>
            </div>
            <div className="mb-12">
              <div
                className={`mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:max-w-7xl ${
                  list.srcYtb || list.srcAudio ? 'lg:grid-cols-1' : 'sm:grid-cols-2 lg:grid-cols-2'
                }`}
              >
                <div className="h-full w-full grid gap-4 sm:gap-6 lg:gap-8">
                  {/* Hiển thị hình ảnh hoặc video youtube */}
                  {list.urlImage ? (
                    <div className="grid items-start grid-cols-1 w-full">
                      <div>
                        <ImageGallery items={images} lazyLoad={true} />
                        {list.sourceImage && list.sourceImage.length > 0 && (
                          <p className="mt-4">
                            Nguồn ảnh:&nbsp;
                            {list.sourceImage.map((item, index) => (
                              <a key={index} href={item} className="text-blue-500" target="_blank" rel="noreferrer">
                                link {index + 1}
                                {index < list.sourceImage.length - 1 && ', '}
                              </a>
                            ))}
                          </p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <iframe
                      className="w-full lg:w-[80%] lg:min-h-[560px] sm:min-h-[400px] min-h-[300px] mx-auto rounded-lg bg-gray-100"
                      src={`https://www.youtube.com/embed/${list.srcYtb}`}
                      title="Dấu Chân Kỷ Niệm - Tuấn Vũ (Tác giả: Mạnh Phát, Thanh Phương) | Nhạc Vàng Xưa Bất Hủ"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen={true}
                    ></iframe>
                  )}
                </div>
                <div>
                  {/* Nội dung */}
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">{list.name}</h2>
                  <p dangerouslySetInnerHTML={{ __html: list.description }} className="text-gray-500 text-justify"></p>
                </div>
              </div>
            </div>
            <div className="mx-auto flex align-center justify-center">
              {listPrev ? (
                <Button onClick={handleClick} url={`/detail/${idContent}/${idDetail - 1}/${slugPrev}`}>
                  <FontAwesomeIcon className="mr-2" icon={faAngleLeft} />
                  Trang trước
                </Button>
              ) : (
                <Button disabled={true}>
                  <FontAwesomeIcon className="mr-2" icon={faAngleLeft} />
                  Trang trước
                </Button>
              )}
              {listNext ? (
                <Button onClick={handleClick} url={`/detail/${idContent}/${idDetail + 1}/${slugNext}`}>
                  Trang sau
                  <FontAwesomeIcon className="ml-2" icon={faAngleRight} />
                </Button>
              ) : (
                <Button disabled={true}>
                  Trang sau
                  <FontAwesomeIcon className="ml-2" icon={faAngleRight} />
                </Button>
              )}
            </div>
          </div>
        </>
      )}
    </DefaultLayout>
  );
}

export default Detail;
