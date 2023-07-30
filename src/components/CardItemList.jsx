import { CardItem } from "./CardItem";
import GameData from "../app.mock";
import { useEffect, useState } from "react";

export const CardItemList = () => {
  const [cardList, setCardList] = useState([...GameData]);

  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);

  const onClickHandler = (currentId) => {
    first === null ? setFirst(currentId) : setSecond(currentId);
    // console.log(cardList[currentId]);
    // console.log(same);
  };

  const clear1 = () => {
    setFirst(null);
    setSecond(null);
  };

  useEffect(() => {
    setCardList((prevState) => {
      return prevState.map((i) => {
        if (i.id === first && i.isOpen === false) {
          return { ...i, isOpen: true };
        }
        return i;
      });
    });
  }, [first]);

  useEffect(() => {
    if (first && second) {
      console.log(first, second);
      if (cardList[first - 1].pic === cardList[second - 1].pic) {
        console.log(first, second);
        console.log("Matched");
        setCardList((prevCard) => {
          return prevCard.map((i) => {
            // console.log(i);
            if (i.id === first || i.id === second) {
              // console.log("hi their");
              return { ...i, isOpen: true };
            } else {
              return i;
            }
            // console.log(i);
          });
        });
        clear1();
      } else {
        setCardList((prevCard) => {
          return prevCard.map((i) => {
            // console.log(i);
            if (i.id === first || i.id === second) {
              console.log("hi their");
              return { ...i, isOpen: true };
            }
            // console.log(i);
            return i;
          });
        });

        setTimeout(() => {
          setCardList((prevCard) => {
            return prevCard.map((i) => {
              // console.log(i);
              if (i.id === first || i.id === second) {
                return { ...i, isOpen: false };
              }
              // console.log(i);
              return i;
            });
          });
        }, 500);
        clear1();
      }
    }
  }, [second]);

  return (
    <div className="card-item-list">
      {cardList.map((item) => {
        return (
          <CardItem
            key={item.id}
            id={item.id}
            image={item.pic}
            onClick={onClickHandler}
            isOpen={item.isOpen}
            disabled1={item.isOpen}
          ></CardItem>
        );
      })}
    </div>
  );
};
