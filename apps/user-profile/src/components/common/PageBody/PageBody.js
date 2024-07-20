import Loader from './../../common/Loader';

function PageBody({ children, loading = false, error = null }) {
  const page = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen max-h-[800px]">
          {' '}
          <Loader
            heightClass={'h-20 w-20'}
            borderWidthClass={'border-4'}
          />{' '}
        </div>
      );
    } else {
      if (error) {
        return (
          <div className="flex items-center justify-center h-screen">
            {' '}
            ERROR{' '}
          </div>
        );
      } else {
        return children;
      }
    }
  };

  return <div className="w-full h-auto">{page()}</div>;
}

export default PageBody;
