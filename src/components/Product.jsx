import { Badge, Image } from './';
import { icons } from '../assets/constants';

function Product({ image, badge, badgeSlag, name }) {
  return (
    <>
      <div className="border-2-solid group relative mr-3 animate-slowfade overflow-y-hidden border">
        <div>{badge && <Badge slag={badgeSlag} />}</div>
        <Image src={image} className="w-full" />
        <div className="h-30 absolute bottom-[-50%] left-0 hidden w-full bg-slate-300 duration-300 ease-in group-hover:bottom-0 md:block lg:bottom-[-60%]">
          <div className="flex w-full flex-col items-end gap-2 p-3">
            <div className="flex items-center">
              <span className="inline-block p-1 font-dm text-[#767676]">
                Add to wishlist
              </span>
              <icons.heart />
            </div>
            <div className="flex items-center">
              <span className="inline-block p-1 font-dm text-[#767676]">
                Compare
              </span>
              <icons.return />
            </div>
            <div className="flex items-center">
              <span className="inline-block p-1 font-dm text-[#767676]">
                Add to Cart
              </span>
              <icons.cart />
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between p-2">
            <h3 className="font-dm text-xl font-bold text-primary-black">
              {name}
            </h3>

            <h5 className="font-dm text-base font-bold text-[#767676]">$44</h5>
          </div>
          <div>
            <p className="font-dm text-base  text-[#767676]">Brand Name</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
