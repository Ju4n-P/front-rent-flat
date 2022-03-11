import React from "react";

class UpdateArticle extends React.Component {
  constructor(props) {
    super(props);
    const { id, title, content } = props.location.state.article;
    this.state = {
      id,
      title,
      content,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.title === "" || this.state.content === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.updateArticleHandler(this.state);
    this.setState({ title: "", content: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Article</h2>
        <form className="ui form" onSubmit={this.update}>
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
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default UpdateArticle;
