import React, { useState, useContext } from 'react';
// import { Link, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Helmet } from 'react-helmet';
import { Collapse } from 'antd';

import Context from '~/Context';
import DefaultLayout from '~/components/Layouts/DefaultLayout';
import LoadingComponent from '~/components/LoadingComponent';

function DetailAudio() {
  const { idContentParam } = useParams();
  const listBox = useContext(Context);
  let isLoading = true;
  let idContent = 1;
  if (listBox.length > 1) {
    isLoading = false;
    idContent = idContentParam;
  }

  const [currentAudio, setCurrentAudio] = useState(0);

  const list = listBox[idContent - 1].item[currentAudio];

  const audioFiles = listBox[idContent - 1].audioFiles;

  const playNextAudio = () => {
    if (currentAudio === null) {
      setCurrentAudio(0);
    } else if (currentAudio < audioFiles.length - 1) {
      setCurrentAudio(currentAudio + 1);
    }
  };

  const playPrevAudio = () => {
    if (currentAudio > 0) {
      setCurrentAudio(currentAudio - 1);
    }
  };

  const changeAudio = (index) => {
    setCurrentAudio(index);
  };
  return (
    <DefaultLayout>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <Helmet>
            <title>{list.name} - Thư viện hồi tưởng</title>
          </Helmet>
          <div className="content mb-12 bg-gray-100 px-4 sm:px-6 lg:px-20 py-8 sm:py-18">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:max-w-7xl lg:grid-cols-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                Danh mục: {list.title}
              </h2>
            </div>
            <div>
              <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-4 lg:max-w-7xl lg:grid-cols-1">
                <div className="h-full w-full grid gap-4 sm:gap-6 lg:gap-8">
                  <AudioPlayer
                    autoPlay
                    src={audioFiles[currentAudio].src}
                    showSkipControls
                    onClickPrevious={playPrevAudio}
                    onClickNext={playNextAudio}
                    // other props here
                  />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">{list.name}</h2>
                <Collapse defaultActiveKey={['0', '1']} size="large">
                  <Collapse.Panel header="Danh sách lời ru">
                    <ul className="bg-white border border-solid border-gray-400">
                      {audioFiles.map((audioFile, index) => (
                        <li
                          className={`px-4 py-2 border-b border-solid border-gray-200 cursor-pointer hover:bg-gray-100 ${
                            index === currentAudio ? 'bg-orange-100' : ''
                          } `}
                          key={index}
                          onClick={() => {
                            changeAudio(index);
                          }}
                        >
                          {audioFile.name}
                        </li>
                      ))}
                    </ul>
                  </Collapse.Panel>
                  <Collapse.Panel header="Nội dung lời ru">
                    <div>
                      {/* Nội dung */}
                      <div className="max-h-[400px] overflow-y-auto">
                        <p
                          className="text-gray-500 text-justify"
                          dangerouslySetInnerHTML={{ __html: list.description }}
                        ></p>
                      </div>
                    </div>
                  </Collapse.Panel>
                </Collapse>
              </div>
            </div>
          </div>
        </>
      )}
    </DefaultLayout>
  );
}

export default DetailAudio;
