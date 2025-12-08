import React from "react";
import { useNavigate } from "react-router-dom";

function SearchAgainForm() {
  const [text, setText] = React.useState("");
  const navigate = useNavigate();

  const submitSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${text}`);
  };

  return (
    <form className="search-form" onSubmit={submitSearch}>
      <input
        type="text"
        placeholder="Search.."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="round-btn">Search</button>
    </form>
  );
}
export default SearchAgainForm;
