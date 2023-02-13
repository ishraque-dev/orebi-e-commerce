import { Badge, Image } from '..';
import { icons } from '../../assets/constants';

function Product({ image, badge, badgeSlag, name }) {
  return (
    <>
      <div className="border-2-solid group relative mr-3 animate-slowfade overflow-hidden border p-2">
        <div>{badge && <Badge slag={badgeSlag} />}</div>
        <Image src={image} className="w-full" />
        <div>
          <h3>Name</h3>
        </div>
        <div className="absolute w-full opacity-0 duration-300 ease-in group-hover:opacity-100">
          <div className="mt-4 flex w-full items-center justify-start gap-4 lg:justify-center">
            <div className="">
              <icons.heart />
            </div>
            <div className=" ">
              <icons.return />
            </div>
            <div className="">
              <icons.cart />
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-between p-2">
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
