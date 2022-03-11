import React from "react";

class AddArticle extends React.Component {
  state = {
    title: "",
    content: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.title === "" || this.state.content === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addArticleHandler(this.state);
    this.setState({ title: "", content: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Article</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Content</label>
            <input
              type="text"
              name="content"
              placeholder="Content"
              value={this.state.content}
              onChange={(e) => this.setState({ content: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddArticle;
