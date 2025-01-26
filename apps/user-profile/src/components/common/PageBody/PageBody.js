import Loader from './../../common/Loader';

/**
 * PageBody Component
 *
 * A wrapper component that handles three states for a page:
 * 1. **Loading State**: Displays a loader while content is being fetched.
 * 2. **Error State**: Shows an error message if there is an issue loading the content.
 * 3. **Content State**: Renders the children when the page is successfully loaded.
 *
 * Props:
 * - `children` (ReactNode): The content to render when loading is complete and no error exists.
 * - `loading` (Boolean): Indicates if the page is currently loading.
 * - `error` (Object|null): An optional error object to display error-related messages.
 *
 * @param {Object} props - The component props.
 * @return {JSX.Element} The rendered PageBody component.
 */
function PageBody({ children, loading = false, error = null }) {
  /**
   * Determines the page content based on the state.
   *
   * @return {JSX.Element} The content to display (loader, error message, or children).
   */
  const page = () => {
    // Show loader when loading
    if (loading) {
      return (
        <div className="flex items-center justify-center min-h-[75.4vh]">
          <Loader heightClass={'h-20 w-20'} borderWidthClass={'border-4'} />
        </div>
      );
    }

    // Handle errors (other than unauthorized - 401)
    if (error && error?.response?.status != 401) {
      return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-[75.4vh] text-grayscale-700">
          <p>
            Failed to load page, experiencing some issues
            {error?.response?.status ? ` (${error?.response?.status})` : ''}
            {' :('}
          </p>
          <p>Please refresh & try again after some time.</p>
        </div>
      );
    }

    // Render children if no errors or loading
    return children;
  };

  // Log error details for debugging purposes
  if (error) {
    console.log('Error: ', error);
  }

  // Return the appropriate content based on the state
  return page();
}

export default PageBody;
