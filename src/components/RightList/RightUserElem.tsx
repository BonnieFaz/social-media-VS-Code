interface IRightUserelem{
    userImg: string;
    mainText: string;
    secontText: string;
    isOnline: boolean;
    badgeNumber: number | null;
}

const RightUserElem = ({userImg, mainText, isOnline, secontText, badgeNumber}: IRightUserelem) => {
    return (
        <div className="UserElem">
        <img src={userImg} alt="User" />
        <div className="user__description">
          <p className="main__text">{mainText}</p>
          <p className={`secondary__text ${isOnline ? "_online" : ''}`}>{secontText}</p>
        </div>
        <span className={`${badgeNumber !== null ? 'Badge': ''}`}>{badgeNumber}</span>
      </div>

    );
};

export default RightUserElem;