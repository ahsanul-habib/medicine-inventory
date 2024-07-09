import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface MediInterface {
  name: string;
  price: number;
  quantity: number;
}

const CreateBilling = () => {
  const [total, changeTotal] = useState(0);
  const [medicines, changeMedicines] = useState<MediInterface[]>([
    {
      name: 'Clonazepam',
      price: 30,
      quantity: 0,
    },
    {
      name: 'Clonazepam',
      price: 45,
      quantity: 0,
    },
  ]);

  useEffect(() => {
    let sum = 0;
    medicines.forEach((product) => (sum += product.price * product.quantity));
    changeTotal(sum);
  }, [medicines]);

  const setQuantity = (quantity: number, index: number) => {
    changeMedicines((prevmed) => {
      return prevmed.map((current, i) => {
        if (i === index) {
          return { ...current, quantity: quantity };
        }
        return current;
      });
    });
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-2/3 p-3">
        <div className="bg-white rounded-2xl">
          {medicines.map((product, index) => (
            <div className="py-2 border-2" key={index}>
              <span className="ml-3 font-bold">{product.name}</span>
              <div className="flex justify-evenly items-center">
                <div className="flex gap-3 items-center">
                  <button
                    className="bg-accent text-white text-2xl rounded-full w-6 h-6 flex justify-center items-center"
                    onClick={() => setQuantity(product.quantity + 1, index)}
                  >
                    +
                  </button>
                  <div className="bg-grays p-2 rounded-lg">
                    <input
                      className="bg-grays boder-2"
                      type="number"
                      value={product.quantity}
                      onChange={(e) =>
                        setQuantity(parseInt(e.target.value), index)
                      }
                    />
                    <span>unit</span>
                  </div>
                  <button
                    className="bg-accent text-white text-2xl rounded-full w-6 h-6 flex justify-center items-center"
                    onClick={() => setQuantity(product.quantity - 1, index)}
                  >
                    -
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <span>Price per unit</span>
                  {product.price}
                </div>
                <div className="flex flex-col gap-2">
                  <span>Total</span>
                  {product.price * product.quantity}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/3 p-3">
        <div className="bg-white rounded-lg p-6 flex flex-col gap-3">
          <span className="text-2xl">Total Summary</span>
          <div className="flex justify-between">
            <span>Total Purchase</span>
            <span>{total}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount 10%</span>
            <span>{total * 0.1}</span>
          </div>
          <div className="flex justify-between border-dotted border-b-2 border-b-black pb-5">
            <span>Vat 5%</span>
            <span>{total * 0.05}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Bill</span>
            <span>{total * 1.15}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBilling;
