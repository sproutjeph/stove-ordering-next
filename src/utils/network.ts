import axios, { AxiosRequestConfig } from "axios";
import { IUserLogin } from "./types";
import { ReturnData, MenuItem } from "./types";
const baseURL = "https://external.stovepos.com/sys/";

const config: AxiosRequestConfig = { baseURL };

const axiosInstance = axios.create(config);

export async function getMenuData(venueId: number, timeZone: string) {
  const { data } = await axiosInstance.get(
    `/v4/menu/getMenu?venueid=${venueId}&timezone=${timeZone}`
  );

  return data;
}

export async function getVenueData(venueId: number, terminalId: number) {
  const { data } = await axiosInstance.get(
    `/v4/venue/getVenueInfo?venueid=${venueId}&terminalid=${terminalId}`
  );

  return data;
}

export async function loginUser(userLoginData: IUserLogin) {
  const { data: userData } = await axiosInstance.post(
    `/v4/users/login`,
    userLoginData
  );

  return userData;
}

export function getMenuItem(
  menuData: ReturnData,
  menuItemId: number
): MenuItem | undefined {
  const { menuItems } = menuData;

  return menuItems.find((item: any) => item.id === menuItemId);
}
