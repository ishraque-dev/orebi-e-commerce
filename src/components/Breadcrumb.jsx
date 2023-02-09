import { useLocation } from 'react-router-dom';

export default function () {
  let { pathname } = useLocation();
  pathname = pathname.charAt(1).toUpperCase() + pathname.slice(2);

  return (
    <>
      <div>
        <p className="font-regular font-dm text-xs text-[#767676]">
          Home {'> '}
          {pathname}
        </p>
      </div>
    </>
  );
}
