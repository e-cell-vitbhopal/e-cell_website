import {format} from "date-fns";
import {Link} from "react-router-dom";

export default function Post({_id,title,summary,cover,content,createdAt,author}) {

  return (
    <div className="post">
      <div className="">
        <Link to={`post/${_id}`}>
          <img className="post-image" src={cover} alt=""/>
        </Link>
      </div>
      <div className="texts">
        <Link to={`post/${_id}`}>
        <div className="post-heading">{title}</div>
        </Link>
        <p className="bogs_info">
          <time>{createdAt ? format(new Date(createdAt), "MMMM dd, yyyy") : "Invalid Date"}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}