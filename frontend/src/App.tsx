import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IndexPage from './pages';
import DetailPage from './pages/[videoId]';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MantineProvider } from '@mantine/core';

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
        <MantineProvider
          theme={{
            fontFamily: `'Poppins', sans-serif`,
            colorScheme: 'dark',
            colors: {
              primary: [
                '#dfffe2',
                '#b2feb6',
                '#82fb8a',
                '#52fa5d',
                '#25f930',
                '#10df18',
                '#05ad10',
                '#007c0a',
                '#004a03',
                '#001a00',
              ],
            },
            primaryColor: 'primary',
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <div>
            <RouterProvider router={router} />
          </div>
        </MantineProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
