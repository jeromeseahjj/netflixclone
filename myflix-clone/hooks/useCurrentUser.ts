import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

// No matter where we use this hook, it is not going to fetch it again if data exist
// This means we don't need redux or any state management
const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default useCurrentUser