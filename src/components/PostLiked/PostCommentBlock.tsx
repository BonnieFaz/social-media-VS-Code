interface ICommentBlock {
  userImg: string;
  ownerComment: string;
  textComment: string;
  reply: string;
  date: string;
}

const PostCommentBlock = ({
  userImg,
  ownerComment,
  textComment,
  reply,
  date,
}: ICommentBlock) => {
  return (
    <div className="CommentBlock">
      <img src={userImg} alt="User" />
      <div className="comment__description">
        <a href="#" className="comment__owner">
          {ownerComment}
        </a>
        <p className="comment__text">{textComment}</p>
        <a href="#" className="reply">
          {reply}
        </a>
      </div>
      <span className="date">{date}</span>
      <svg
        className="icon icon-like"
        viewBox="0 0 23 23"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="icon"
          d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
        />
      </svg>
    </div>
  );
};

export default PostCommentBlock;
