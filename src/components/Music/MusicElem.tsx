interface IMusicElem{
    albunImg: string;
    musicName: string;
    musicAuthor: string;
    isActive: boolean;
}

const MusicElem = ({albunImg, musicName, musicAuthor, isActive}: IMusicElem) => {
    return (
        <div className="MusicElem"> 
          <img src={albunImg} alt="Album" />
          <div className="music__description">
            <p className="main__text">{musicName}</p>
            <p className="secondary__text">{musicAuthor}</p>
          </div>
          <div className={`plus-button ${isActive ? "_active" : ''}`}></div>
        </div>
    );
};

export default MusicElem;