import { Image } from '../../components';
import { images } from '../../assets/constants';
import { Link } from 'react-router-dom';
export default function MiddleAdContainer() {
  return (
    <div className="my-10">
      <div className="mx-auto max-w-container">
        <Link>
          <Image src={images.ads_2} />
        </Link>
      </div>
    </div>
  );
}