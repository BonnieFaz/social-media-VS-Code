import { Heading } from "../Index";
import RightUserElem from "./RightUserElem";

const RightList = () => {
  return (
    <div className="List">
      <div className="List__title">
        <Heading text="Близкие друзья" variant="h2" />
        <span className="count">123</span>
      </div>
      <RightUserElem
        userImg="./img/users/aleksandr-maykov.jpeg"
        mainText="Александр Майков"
        secontText="Онлайн"
        isOnline={true}
        badgeNumber={3}
      />
      <RightUserElem
        userImg="./img/users/aleksandr-maykov.jpeg"
        mainText="Александр Майков"
        isOnline={false}
        secontText="Онлайн"
        badgeNumber={3}
      />
      <RightUserElem
        userImg="./img/users/aleksandr-maykov.jpeg"
        mainText="Александр Майков"
        secontText="Онлайн"
        isOnline={true}
        badgeNumber={3}
      />
    </div>
  );
};

export default RightList;
