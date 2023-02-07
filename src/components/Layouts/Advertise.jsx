import { Image } from '../../components';
import { images } from '../../assets/constants';
import { Link } from 'react-router-dom';
function Advertise() {
  return (
    <div className="mx-auto flex max-w-container gap-x-3 py-14 md:gap-8">
      <div className=" w-1/2">
        <Link>
          <Image className=" " src={images.ad_1} />
        </Link>
      </div>
      <div className="w-1/2">
        <div className="mb-3 md:mb-8">
          <Link>
            <Image className="" src={images.ad_2} />
          </Link>
        </div>
        <div className="">
          <Link>
            <Image className="h-full" src={images.ad_3} />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Advertise;
