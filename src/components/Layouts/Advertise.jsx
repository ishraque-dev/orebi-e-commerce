import { Image, AdBox } from '../../components';
import { images } from '../../assets/constants';
import { Link } from 'react-router-dom';

function Advertise() {
  return (
    <div className="relative z-10 mx-auto flex max-w-container gap-x-2 md:-mt-[170px]  lg:gap-x-3">
      <AdBox Image={Image} images={images} />
      <div className=" w-[48%]">
        <div className="mb-3 w-full md:mb-8">
          <Link>
            <Image className="w-full object-contain" src={images.ad6} />
          </Link>
        </div>
        <div className="">
          <Link>
            <Image className="h-full w-full" src={images.ad_3} />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Advertise;
