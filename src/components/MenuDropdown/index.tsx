/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import * as React from "react";

import "./scss/index.scss";

class MenuDropdown extends React.Component<
  {
    head: React.ReactElement<{}>;
    content: React.ReactElement<{}>;
    suffixClass: string;
  },
  { active: boolean }
> {
  static defaultProps = {
    suffixClass: "",
  };

  ref: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    this.state = { active: false };
    this.ref = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
  }

  handleClick = event => {
    const { target } = event;
    if (!this.ref.current.contains(target)) {
      this.setState({ active: false });
    }
  };

  toggleList = () => {
    this.setState(prevState => ({
      active: !prevState.active,
    }));
  };

  render() {
    return (
      <div
        data-test="userButton"
        className="menu-dropdown"
        onClick={this.toggleList.bind(this)}
        onBlur={() => this.setState({ active: false })}
        ref={this.ref}
      >
        {this.props.head}

        <div
          className={`menu-dropdown__body${` menu-dropdown__body${this.props.suffixClass}`}${
            this.state.active ? " menu-dropdown__body--visible" : ""
          }`}
        >
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default MenuDropdown;
