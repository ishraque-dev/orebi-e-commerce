import { FaBars } from 'react-icons/fa';
import {
  AiOutlineCloseCircle,
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineHeart,
} from 'react-icons/ai';

import { RiBarChartHorizontalLine, RiNumber2 } from 'react-icons/ri';
import { FiSearch, FiTruck, FiRefreshCcw } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import headset from '/imgs/headset.png';
import banner from '/imgs/banner.png';
import ad_1 from '/imgs/ad_1.png';
import ad_2 from '/imgs/ad_2.png';
import ad_3 from '/imgs/ad_3.png';
import product from '/imgs/product.png';
export const images = {
  product,
  headset,
  banner,
  ad_1,
  ad_2,
  ad_3,
};
export const icons = {
  heart:AiOutlineHeart,
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
