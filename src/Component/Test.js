import { IMG_CDN_URL } from "../config";

const Test = (props) => {
  console.log(props);
  const { name, cloudinaryImageId, price } = props;
  return (
    <div className="w-56 p-4 m-2 shadow-lg bg-pink-600 rounded-lg">
      <img
        className="rounded-md"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="BUrger king"
      />
      <h2 className="font-bold text-xl text-white">{name}</h2>
      <h4 className="font-bold text-sm text-white">{price}</h4>
    </div>
  );
};

export default Test;
