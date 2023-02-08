import { Heading, Product } from '../index';
import { images } from '../../assets/constants';
function BestSeller() {
  return (
    <div className="mx-auto mb-5 mt-10 max-w-container">
      <Heading title="Best Seller" />

      <div className="mt-5 flex">
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
        <div className="mx-w-[370px]">
          <Product image={images.product} badge={true} badgeSlag="New" />
        </div>
      </div>
    </div>
  );
}
export default BestSeller;
