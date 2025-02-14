import 'swiper/css';
import 'app/scss/index.scss';

import { useState } from 'react';
import { HydrationBoundary, QueryClient, QueryClientProvider  } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { WalletModal } from 'widgets/wallet';
import { AuthModal } from 'widgets/07-auth-screens';

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
                <WalletModal />
                <AuthModal />
            </HydrationBoundary>
        </QueryClientProvider>
    );
}
