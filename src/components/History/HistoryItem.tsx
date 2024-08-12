interface IHistoryItem {
  imgPoster: string;
  imgOwner: string;
  ownerName: string;
}

const HistoryItem = ({ imgPoster, imgOwner, ownerName }: IHistoryItem) => {
  return (
    <div className="History__item">
      <img src={imgPoster} alt="History Poster" />
      <div className="History__owner">
        <img className="owner__img" src={imgOwner} alt="History Owner" />
        <span className="owner__name">{ownerName}</span>
      </div>
    </div>
  );
};

export default HistoryItem;
