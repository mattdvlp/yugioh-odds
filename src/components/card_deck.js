
import card_selector from './card_selector.js';

export default {
    components: {card_selector},

data() {
    return {
        cards: []
    }
},


    /* html */
    template: `
    <h2>Create your deck</h2>
    <form @submit.prevent="addDeck">

      <div>Add a card</div>
      <card_selector @cardChoose="cardChoose"></card_selector>
      
     {{ cards }} 
     <div class="p-10">
    
        <input type="submit">
     </div>
    </form>
    `,

    methods: {
        addDeck() {
            this.$emit('addDeck', this.cards);
            this.cards = []
        },

        cardChoose(card) {
            this.cards.push(card)
        }
    }

}

