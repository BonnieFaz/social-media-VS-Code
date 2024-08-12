interface IListUserElem{
    img : string
    main__text : string
    secondary__text : string
}

const PostUserElem = ({img, main__text, secondary__text}: IListUserElem) => {
    return (
        <div className="UserElem">
          <img src={img} alt="User" />
          <div className="user__description">
            <a href="#" className="main__text">
              {main__text}
            </a>
            <p className="secondary__text">{secondary__text}</p>
          </div>
        </div>
        
    );
};

export default PostUserElem;