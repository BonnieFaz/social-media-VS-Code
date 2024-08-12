interface IListUserElem {
  mainText: string;
  text: string;
  badgeNumber: number | null;
  img: string;
}

const ListUserElem = ({ mainText, text, badgeNumber, img }: IListUserElem) => {
  return (
    <div className="UserElem">
      <img src={img} alt="User" />
      <div className="user__description">
        <p className="main__text">{mainText}</p>
        <p className="secondary__text">{text}</p>
      </div>
      <span className={`${badgeNumber !== null ? "Badge" : ""}`}>
        {badgeNumber}
      </span>
    </div>
  );
};

export default ListUserElem;
