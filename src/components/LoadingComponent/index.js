import { Fragment } from 'react';

function LoadingComponent() {
  return (
    <Fragment>
      <div className="flex items-center justify-center h-[50vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"></div>
      </div>
    </Fragment>
  );
}

export default LoadingComponent;
