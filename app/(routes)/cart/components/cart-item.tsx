import Image from "next/image";
import { toast } from "react-hot-toast";
import { X, PlusCircle, MinusCircle } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart, { CartItemData } from "@/hooks/use-cart";

interface CartItemProps {
  data: CartItemData;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.product.id);
  };

  const onIncrement = () => {
    cart.incrementItem(data.product.id);
  };

  const onDecrement = () => {
    cart.decrementItem(data.product.id);
  };

  const productPrice = Number(data.product.price);

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.product.images?.[0]?.url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.product.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.product.color?.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{data.product.size?.name}</p>
          </div>
          <Currency value={productPrice * data.quantity} />
          <div className="flex items-center">
            <button
              disabled={data.quantity === 1} // Disable the minus button when quantity is 1
              onClick={onDecrement}
              className="text-gray-500"
            >
              <MinusCircle size={18} />
            </button>
            <p className="text-gray-500 mx-2">Quantity: {data.quantity}</p>
            <button onClick={onIncrement} className="text-gray-500">
              <PlusCircle size={18} />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
