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
}

export default CardService;
