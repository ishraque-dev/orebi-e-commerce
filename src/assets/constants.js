import { FaBars } from 'react-icons/fa';
import {
  AiOutlineCloseCircle,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from 'react-icons/ai';
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import headset from '../../public/imgs/headset.png';
import banner from '../../public/imgs/banner.png';

export const images = {
  headset,
  banner,
};
export const icons = {
  bar: FaBars,
  catBar: RiBarChartHorizontalLine,
  search: FiSearch,
  user: BiUser,
  angleUp: RxTriangleUp,
  angleDown: RxTriangleDown,
  cart: AiOutlineShoppingCart,
  close: AiOutlineClose,
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
