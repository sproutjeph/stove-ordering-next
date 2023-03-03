import { useQuery } from "@tanstack/react-query";
import { getVenueData } from "@/utils/network";

export function useVenueData(venueId: number = 1, terminalId: number = 1) {
  const {
    data: venueData,
    isSuccess,
    isLoading,
  } = useQuery(["venueData"], () => getVenueData(venueId, terminalId), {
    staleTime: 1200000, // 20 mins to refetch
    cacheTime: 1800000, // 30 mins for cache data
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { venueData, isSuccess, isLoading };
}
