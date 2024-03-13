import Component from "../core/Component.js";
import { navigate } from "../index.js";
class Header extends Component {
  template() {
    return `
        <header>
          <div class="header header_left">
              <span class="menu_name" id="menu_home">HOME</span>
          </div>
          <div class="header header_right">
              <span class="menu_name" id="menu_signup">SIGNUP</span>
          </div>
        </header>
    `;
  }

  setEvent() {
    this.addEvent("click", ".menu_name", (e) => {
      const $menu = e.target.id;
      if ($menu === "menu_home") {
        navigate("/web/");
      } else if ($menu === "menu_signup") {
        navigate("/web/signup");
      }
    });
  }
}

export default Header;
