const CARD_API = "https://wishboard-backend-ianv.vercel.app/api/cards";

class CardService {
  static async getCards() {
    try {
      const response = await fetch(CARD_API);
      const cards = await response.json();
      return cards;
    } catch (e) {
      console.log(e);
    }
  }

  static async getCardById(id) {
    try {
      const response = await fetch(`${CARD_API}/${id}`);
      const card = await response.json();
      return card;
    } catch (e) {
      console.log(e);
    }
  }

  static async postCard(card) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(card),
    };

    try {
      const response = await fetch(CARD_API, options);
      const card = await response.json();
      return card;
    } catch (e) {
      console.log(e);
    }
  }

  static async editCard(card) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(card),
    };

    try {
      const response = await fetch(CARD_API, options);
      const card = await response.json();
      return card;
    } catch (e) {
      console.log(e);
    }
  }

  static async removeCard(card) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(card),
    };

    try {
      const response = await fetch(CARD_API, options);
      const card = await response.json();
      return card;
    } catch (e) {
      console.log(e);
    }
  }
}

export default CardService;
