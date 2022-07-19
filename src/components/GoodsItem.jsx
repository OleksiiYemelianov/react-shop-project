import {useContext} from 'react';
import {ShopContext} from '../context';

function GoodsItem(props) {
  const {
    id,
    name,
    description,
    price,
    full_background,

  } = props;

  const {addTobasket} = useContext(ShopContext);

  return (
    <div className="card">
      <div className="card-image">
        <img alt={name} src={full_background} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn #00c853 green accent-4"
          onClick={() =>
            addTobasket({
              id,
              name,
              price,
            })
          }
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price} ₴
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
