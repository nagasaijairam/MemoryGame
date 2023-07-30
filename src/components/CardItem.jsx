import { blankCard as defaultImage } from "./../images";

export const CardItem = ({ isOpen, image, id, onClick, disabled1 }) => {
  const imagePath = isOpen ? image : defaultImage;

  return (
    <div
      className="card-item"
      onClick={!disabled1 ? () => onClick(id) : undefined}
    >
      <img src={imagePath} alt="Image" />
    </div>
  );
};
