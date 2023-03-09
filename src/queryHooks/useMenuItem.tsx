import { getMenuData } from "@/utils/network";
import { useQuery } from "@tanstack/react-query";

export function useMenuItem(
  venueId: number = 1,
  timeZone: string = "America/Los_Angeles"
) {
  const {
    data: menuData,
    isSuccess,
    isLoading,
  } = useQuery(["menuItems", venueId], () => getMenuData(venueId, timeZone), {
    staleTime: 2400000, // 40 mins to refetch
    cacheTime: 3600000, // 30 mins for cache data
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { menuData, isSuccess, isLoading };
}
