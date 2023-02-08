import { icons } from '../assets/constants';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-[35%] right-0 !flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(0,0,0,.20)]"
      style={{ ...style }}
      onClick={onClick}
    >
      <icons.next className="text-2xl" />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-[35%] z-10 !flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(0,0,0,.20)]"
      style={{ ...style }}
      onClick={onClick}
    >
      <icons.previous className="text-2xl" />
    </div>
  );
}

export { SampleNextArrow, SamplePrevArrow };
