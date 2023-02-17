import { Image } from '../UI';
import { AdBox } from './index';
import { images } from '../../assets/constants';
import { Link } from 'react-router-dom';

function Advertise() {
  return (
    <div className="relative z-10 mx-auto flex max-w-container gap-x-1 md:-mt-[170px]  lg:gap-x-3">
      <AdBox Image={Image} images={images} />
      <div className="flex w-[48%] flex-col justify-between">
        <div className="mb-3 w-full md:mb-8">
          <Link>
            <Image className="w-full object-contain" src={images.ad6} />
          </Link>
        </div>
        <div className="">
          <Link>
            <Image className=" w-full" src={images.ad_3} />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Advertise;
