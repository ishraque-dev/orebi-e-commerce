import { useLocation } from 'react-router-dom';

export default function ({className}) {
  let { pathname } = useLocation();
  pathname = pathname.charAt(1).toUpperCase() + pathname.slice(2);

  return (
    <>
      <div className={className}>
        <p className="font-regular font-dm text-xs text-[#767676]">
          Home {'> '}
          {pathname}
        </p>
      </div>
    </>
  );
}
