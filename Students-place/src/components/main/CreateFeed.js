import React from "react";

const Post = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    const vl = e.target.value;
    setValue(vl);
    // console.log(value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    axios
      .post(
        "http://127.0.0.1:8000/api/feeds/create/",
        {
          content: value,
        },
        { headers: headers }
      )
      .then((res) => {
        console.log(res);
      });
    console.log(token);
    // console.log()
    console.log(value);
  };

  return (
    <div className="post-create-container">
      <form>
        <div className="post-create-input">
          <div className="create">
            <input type="text" value={value} onChange={handleChange} />
            <button type="submit" onClick={handlesubmit}>
              submit
            </button>
          </div>
          <input type="text" />
        </div>
        <div className="post-create-alt"></div>
      </form>
    </div>
  );
};

export default Post;
