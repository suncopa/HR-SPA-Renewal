import Component from "../core/Component.js";

class ContentTitle extends Component {
  setup() {
    this.$state = { title: this.$props.title };
  }

  template() {
    return `
        <div class="content_title">
            <h1>${this.$state.title}</h1>
        </div>
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

export default ContentTitle;
