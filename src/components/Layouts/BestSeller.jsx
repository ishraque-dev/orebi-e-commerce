import { Heading, Product } from '../index';
import { images } from '../../assets/constants';
function BestSeller() {
  return (
    <div className="mx-auto mb-5 mt-10 max-w-container">
      <Heading title="Best Seller" />

      <div className="mt-5 flex flex-wrap justify-center gap-2 lg:mt-10">
        <div className="w-[270px]">
          <Product image={images.product} badge={true} badgeSlag="New" />
        </div>
        <div className="w-[270px]">
          <Product image={images.product} badge={true} badgeSlag="New" />
        </div>
        <div className="w-[270px]">
          <Product image={images.product} badge={true} badgeSlag="New" />
        </div>
        <div className="w-[270px]">
          <Product image={images.product} badge={true} badgeSlag="New" />
        </div>
      </div>
    </div>
  );
}
export default BestSeller;
