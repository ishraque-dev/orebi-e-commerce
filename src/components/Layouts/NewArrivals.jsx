import { Heading, Product } from '../index';
import { images } from '../../assets/constants';
function NewArrivals() {
  return (
    <div className="mx-auto max-w-container">
      <Heading title="New Arrivals" />
      <div className="flex gap-2">
        <div className="mx-w-[370px]">
          <Product image={images.product} badge={true} badgeSlag="New" />
        </div>
        <div className="mx-w-[370px]">
          <Product image={images.product} badge={true} badgeSlag="New" />
        </div>
        <div className="mx-w-[370px]">
          <Product image={images.product} badge={true} badgeSlag="New" />
        </div>
        <div className="mx-w-[370px]">
          <Product image={images.product} badge={true} badgeSlag="New" />
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
