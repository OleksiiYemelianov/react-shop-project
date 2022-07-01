import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
  const { goods = [], addTobasket = Function.prototype } = props;

  if (!goods.length) {
    return <h3>NOTHING HERE !</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} addTobasket={addTobasket} />
      ))}
    </div>
  );
}

export { GoodsList };
