import { useContext } from "react";
import { ShopContext } from "../context";
import { GoodsItem } from "./GoodsItem";

function GoodsList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>NOTHING HERE !</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export { GoodsList };
