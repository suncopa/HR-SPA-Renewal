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
}

export default ContentTitle;
