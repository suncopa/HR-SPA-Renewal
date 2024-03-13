import ContentTitle from "../components/ContentTitle.js";
import Component from "../core/Component.js";

class HomePage extends Component {
  mounted() {
    const parent = document.querySelector("#page_content");

    new ContentTitle(parent, {
      title: "Great People",
    });

    const cardContainer = document.createElement("div");
    cardContainer.id = "cards_container";
    parent.appendChild(cardContainer);

    (async () => {
      const res = await fetch("/web/src/data/new_data.json");
      const profiles = await res.json();

      profiles.forEach((profile, idx) => {
        new Card(document.querySelector("#cards_container"), {
          idx,
          profile,
        });
      });
    })();
  }
}

class Card extends Component {
  $elem;

  setup() {
    this.$state = {
      idx: this.$props.idx,
      profile: this.$props.profile,
    };
  }

  render() {
    this.$target.appendChild(this.template());
  }

  template() {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    const frontDiv = document.createElement("div");
    frontDiv.classList.add("card_plane", "card_plane--front");
    frontDiv.innerText = this.$state.profile.name;

    const backDiv = document.createElement("div");
    backDiv.classList.add("card_plane", "card_plane--back");
    backDiv.innerText = this.$state.profile.mbti;

    cardDiv.appendChild(frontDiv);
    cardDiv.appendChild(backDiv);
    this.$elem = cardDiv;

    return cardDiv;
  }

  addEvent(eventType, selector, callback) {
    //이벤트 등록 추상화
    this.$elem.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }

  setEvent() {
    this.addEvent("click", ".card", (e) => {
      const card = e.target.closest(".card");
      card.classList.toggle("is-flipped");
    });
  }
}

export default HomePage;
