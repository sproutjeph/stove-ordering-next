import { type } from "os";
import { IconType } from "react-icons";

export type INavLinkTypes = {
  text: string;
  id: string;
  isActive: boolean;
  path: string;
};

export interface IAccount {
  Icon: IconType;
  text: string;
  id?: number;
  active?: boolean;
}

export interface PageMeta {
  title: string;
  description: string;
  // cardImage: string;
}

export interface IUserLogin {
  userName: string;
  password: string;
}

export type IUserRegData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  password2: string;
};

export interface ReturnData {
  result: number;
  message: string;
  menuCat: MenuCat[];
  menuItems: MenuItem[];
  venuePromo: VenuePromo[];
  menuAltMods: MenuAltMod[];
  sources: Source[];
  order_types: OrderType[];
  menuClass: MenuClass[];
  table_section: TableSection[];
}

export interface MenuCat {
  menucat: number;
  menu_name: string;
  sortorder: number;
}

export interface MenuItem {
  itemid: number;
  item_name: string;
  menucatid: number;
  item_price: string;
  taxrate: string;
  item_mods: string;
  itemOptions_json?: ItemOptionsJson[];
  mod_prompt: number;
  active: string;
  printerid: string;
  backgroundcolor: string;
  hungritemid: string;
  item_class: string;
  ingredients_json?: IngredientsJson;
  multiPrice_json?: any[];
  barcodeid: any;
}

export interface ItemOptionsJson {
  id: string;
  sku: string;
  name: string;
  options: Option[];
  required: number;
  optionType: number;
  displayOrder: number;
  eligibleQuantityMax: number;
  eligibleQuantityMin?: number;
}

export interface Option {
  id: string;
  sku: string;
  name: string;
  price?: number;
  description?: string;
  displayOrder: number;
  priceCurrency?: string;
  options?: Option2[];
  required?: number;
  optionType?: number;
  eligibleQuantityMax?: number;
  isSelected?: boolean;
}

export interface Option2 {
  id: string;
  sku: string;
  name: string;
  options: Option3[];
  required: number;
  optionType: number;
  displayOrder: number;
  eligibleQuantityMax: number;
}

export interface Option3 {
  id: string;
  sku: string;
  name: string;
  price: number;
  description: string;
  displayOrder: number;
  priceCurrency: string;
}

export interface IngredientsJson {
  plating: Plating[];
  ingredients: Ingredient[];
  instructions: Instruction[];
  featured_images: string[];
  prep_instructions: PrepInstruction[];
}

export interface Plating {
  text: string;
  image: string;
  sortOrder: number;
}

export interface Ingredient {
  qty: string;
  sku: string;
  name: string;
  unit: string;
  sortOrder: number;
}

export interface Instruction {
  text: string;
  image: string;
  sortOrder: number;
}

export interface PrepInstruction {
  text: string;
  image: string;
  sortOrder: number;
}

export interface VenuePromo {
  recid: number;
  promo_code: string;
  promo_name: string;
  promo_type: number;
  promo_value: string;
  promo_use_per_user: any;
  promo_created: any;
  promo_active: string;
  promo_start_date: any;
  promo_end_date: any;
  venueid: string;
  usefirst: any;
  useonce: any;
  minamount: any;
  itemid: any;
  background_color: any;
  displayButton: string;
  buttonText: string;
  receiptText: string;
  availableOnsite: number;
  availableOnline: number;
  includeTax: number;
  availableKiosk: number;
  catid: any;
  restrictions?: string;
}

export interface MenuAltMod {
  recid: number;
  mod_name: string;
  mod_printed_name: string;
  mod_printed_name_altlang?: string;
  mod_price: string;
  mod_type: string;
  mod_status: any;
  venueid: number;
  sortorder?: number;
  menucatid: any;
  printerid: any;
}

export interface Source {
  id: number;
  name: string;
  type: string;
}

export interface OrderType {
  id: number;
  name: string;
  status: boolean;
  promptFirst: boolean;
  required_customer_name: boolean;
}

export interface MenuClass {
  id: number;
  name: string;
  defaultprinterid: string;
  taxrate: string;
}

export interface TableSection {
  id: number;
  name: string;
}

export interface ICartItem extends MenuItem {
  qty?: number;
  addedModifiers?: Option[];
}

//venue type

export type Root = VenueData[];

export interface VenueData {
  venueid: number;
  venuecat: number;
  venuestatus: number;
  venuefeatured: any;
  venuefeaturecat: any;
  venuename: string;
  venuesubname: string;
  venueparent: string;
  venueparentid: any;
  venuelegalname: any;
  venueslogan: string;
  venuelogourl: string;
  venuelogourl_mobile: any;
  venuebannerurl_mobile: any;
  venuebannerurl_web: any;
  venue_pay_type: string;
  venue_api_key: string;
  venue_ext_api_key: string;
  venue_pos: string;
  venue_access_ip: string;
  deliver_delay: string;
  cust_service_phone: any;
  cust_service_email: any;
  order_phone: any;
  order_email: any;
  accept_order_type: any;
  contact_phone: any;
  contact_email: any;
  datecreated: any;
  datemodified: any;
  lat: any;
  lng: any;
  addr1: any;
  addr2: any;
  city: any;
  state: any;
  zip: any;
  country: any;
  allow_online_order: any;
  remit_payment_type: any;
  payment_address: any;
  payment_city: any;
  payment_state: any;
  payment_zip: any;
  payment_county: any;
  payment_contact_name: any;
  payment_contact_phone: any;
  primary_contact: any;
  primary_contact_email: any;
  taxrate: any;
  order_fee_venue_type: any;
  order_fee_venue_amount: any;
  deliver_fee_type: any;
  deliver_fee_amount: any;
  order_fee_amount: any;
  order_fee_split: any;
  hours_all: any;
  hours_deliver: any;
  percent_food: any;
  monthly_fee: any;
  annualmonthly: any;
  billing_date: any;
  payment_fee_type: any;
  ccnum: any;
  ld: any;
  exp: any;
  cczip: any;
  cvv2: any;
  card_name: any;
  company_type: any;
  franchise: any;
  dinetype: any;
  locationqty: any;
  foodtruck: string;
  venueonline: any;
  internal_ip_addr: string;
  external_ip_addr: string;
  printer_ip_addr: string;
  printer_name: string;
  printer_type: string;
  config_data: string;
  terms_ver: string;
  terms_agreed_date: any;
  terms_agreed_by: any;
  int_notes: any;
  notes: any;
  hour_offset: string;
  merchant_processor: any;
  marchant_processor_api: any;
  merchant_gateway: any;
  merchant_gateway_api: any;
  merchant_gateway_url: any;
  timezonename: string;
  venueauthcode: string;
  orderrelay_enabled: number;
  hungr_enabled: number;
  onlineorder_enabled: number;
  terminaltypes: string;
  hungrvenueid: string;
  orderrelayvenueid: any;
  thermalreceipt_header: string;
  thermalreceipt_footer: string;
  orderprogresstext: string;
  promptfortip: number;
  deliverydefaultprinter: string;
  rearscreenpicture: any;
  reartimeoutpicture: any;
  printcustomerreceiptonsend: number;
  nightlyreportemail: string;
  lock_orders_to_user: number;
  cc_surcharge: any;
  employee_code_length: number;
  login_screen_image: any;
  venueSettings: string;
}
