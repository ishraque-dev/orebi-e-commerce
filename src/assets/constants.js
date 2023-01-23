import { FaBars } from 'react-icons/fa';
import { AiOutlineCloseCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';

export const icons = {
  bar: FaBars,
  close: AiOutlineCloseCircle,
  catBar: RiBarChartHorizontalLine,
  search: FiSearch,
  user: BiUser,
  angleUp: RxTriangleUp,
  angleDown: RxTriangleDown,
  cart: AiOutlineShoppingCart,
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
