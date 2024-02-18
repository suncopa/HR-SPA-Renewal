import ContentTitle from "../components/ContentTitle.js";
import Component from "../core/Component.js";

class SignupPage extends Component {
  template() {
    return `
        <div id="cards_container"><div>
    `;
  }

  mounted() {
    new ContentTitle(document.querySelector("#page_content"), {
      title: "Signup Great People!",
    });
  }
}

export default SignupPage;
