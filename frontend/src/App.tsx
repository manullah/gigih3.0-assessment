import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IndexPage from './pages';
import DetailPage from './pages/[videoId]';
import { QueryClient, QueryClientProvider } from 'react-query';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/:videoId',
    element: <DetailPage />,
  },
]);

const App = () => {
  // Add backgound class to body
  useEffect(() => {
    document.body.classList.add('bg-gray-900');
    document.body.classList.add('text-white');
  }, []);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        keepPreviousData: true,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};

export default App;
