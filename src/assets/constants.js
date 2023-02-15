import { FaBars } from 'react-icons/fa';
import {
  AiOutlineCloseCircle,
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineHeart,
} from 'react-icons/ai';

import { RiBarChartHorizontalLine, RiNumber2 } from 'react-icons/ri';
import { FiSearch, FiTruck, FiRefreshCcw } from 'react-icons/fi';
import { BiUser, } from 'react-icons/bi';
import {HiPlusSm} from 'react-icons/hi'
import {
  RxTriangleDown,
  RxTriangleUp,
  RxTriangleLeft,
  RxTriangleRight,
} from 'react-icons/rx';
import boxShow5 from '/imgs/boxShow5.png';
import boxShow1 from '/imgs/boxShow1.jpg';
import boxShow2 from '/imgs/boxShow2.jpg';
import boxShow3 from '/imgs/boxShow3.jpg';
import boxShow4 from '/imgs/boxShow4.jpg';

// import banner from '/imgs/banner.png';
import ad_1 from '/imgs/ad_1.png';
import ad_2 from '/imgs/ad_2.png';
import ad_3 from '/imgs/ad_3.png';
import product from '/imgs/product.png';
import ads_2 from '/imgs/ads_2.png';
import banner1 from '/imgs/banner1.jpg';
import banner2 from '/imgs/banner2.jpg';
import banner3 from '/imgs/banner3.jpg';
import banner4 from '/imgs/banner4.jpg';
import comWithTab from '/imgs/comWithTab.jpg';
import ad4 from '/imgs/ad4.jpg';
import ad6 from '/imgs/ad6.jpg';

import compTable from '/imgs/comTable.jpg';
import fr_ad from '/imgs/fresh.gif';

import electronic from '/imgs/electronic.jpg';
import under99 from '/imgs/under99.jpg';
export const images = {
  under99,
  comWithTab,
  compTable,
  electronic,
  fr_ad,
  product,
  banner1,
  banner2,
  banner3,
  banner4,
  boxShow5,
  boxShow1,
  boxShow2,
  boxShow3,
  boxShow4,
  ad6,
  ad_1,
  ad_2,
  ad_3,
  ads_2,
  ad4,
};
export const icons = {
  plus:HiPlusSm,
  heart: AiOutlineHeart,
  bar: FaBars,
  catBar: RiBarChartHorizontalLine,
  search: FiSearch,
  user: BiUser,
  angleUp: RxTriangleUp,
  angleDown: RxTriangleDown,
  cart: AiOutlineShoppingCart,
  close: AiOutlineClose,
  number2: RiNumber2,
  truck: FiTruck,
  return: FiRefreshCcw,
  next: RxTriangleRight,
  previous: RxTriangleLeft,
};

export const links = [
  { name: 'Home', to: '/' },
  { name: 'Shop', to: '/shop' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
  { name: 'Journal', to: '/journal' },
];
export const category = [
  'All',
  'Accesories',
  'Furniture',
  'Electronics',
  'Clothes',
  'Bags',
  'Home appliances',
];
export const help = [
  { name: 'Privacy and Policy', to: '/' },
  { name: 'Terms and Condition', to: '/' },
  { name: 'Special E-commerce', to: '/' },
  { name: 'Shipping', to: '/' },
  { name: 'Payments', to: '/' },
];
export const dropdownAnimationVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
export const dropUlAnimVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
export const dropdownLiAnimVariant = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
};
