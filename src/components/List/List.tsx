import { Heading } from "../Index";
import ListUserElem from "./ListUserElem";

const List = () => {
  return (
    <div className="List">
      <div className="List__title">
        <Heading text="Подписки" variant="h1" />
        <span className="count">123</span>
      </div>
      <ListUserElem
        img="./img/profile/profile-img-1.jpeg"
        mainText="N E W"
        text="Развитие"
        badgeNumber={3}
      />
      <ListUserElem
        img="./img/profile/profile-img-2.jpeg"
        mainText="Aesthetics"
        text="Стиль"
        badgeNumber={3}
      />
      <ListUserElem
        img="./img/profile/profile-img-3.jpeg"
        mainText="дом твоей эстетики"
        text="Творчество"
        badgeNumber={3}
      />
      <ListUserElem
        img="./img/profile/profile-img-4.jpeg"
        mainText="wailet"
        text="Искусство"
        badgeNumber={3}
      />
      <ListUserElem
        img="./img/profile/profile-img-5.jpeg"
        mainText="A W E S O M E"
        text="Стиль"
        badgeNumber={3}
      />
      <ListUserElem
        img="./img/profile/profile-img-6.jpeg"
        mainText="minimalism"
        text="Фотография"
        badgeNumber={3}
      />
      <ListUserElem
        img="./img/profile/profile-img-7.jpeg"
        mainText="Словарный запасы"
        text="Литература"
        badgeNumber={3}
      />
      <ListUserElem
        img="./img/profile/profile-img-8.jpeg"
        mainText="Look"
        text="Мода"
        badgeNumber={3}
      />
    </div>
  );
};

export default List;
