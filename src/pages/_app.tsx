import 'swiper/css';
import 'app/scss/index.scss';

import { useState } from 'react';
import { HydrationBoundary, QueryClient, QueryClientProvider  } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    placeholderData: (previousData: unknown) => previousData
                },
            },
        })
    );

    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={pageProps.dehydratedState}>
                <Component {...pageProps} />
            </HydrationBoundary>
        </QueryClientProvider>
    );
}
