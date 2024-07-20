import Loader from './../../common/Loader';

function PageBody({ children, loading = false, error = null }) {
  const page = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen max-h-[800px]">
          <Loader heightClass={'h-20 w-20'} borderWidthClass={'border-4'} />
        </div>
      );
    } else {
      if (error) {
        return (
          <div className="flex flex-col gap-4 items-center justify-center h-screen max-h-[800px] text-grayscale-700">
            <p>
              Failed to load page, experiencing some issues
              {error?.response?.status ? `(${error?.response?.status})` : ''}
              {' :('}
            </p>
            <p>Please refresh & try again after some time.</p>
          </div>
        );
      } else {
        return children;
      }
    }
  };

  error && console.log('Error: ', error);
  return <div className="w-full h-auto">{page()}</div>;
}

export default PageBody;
