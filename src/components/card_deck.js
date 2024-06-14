
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
      <div class="border border-gray-200 p-5 rounded bg-gray-100 drop-shadow">
    <h2 class="text-2xl mb-2">Create your deck</h2>
    <form @submit.prevent="addDeck">
      
      <card_selector @cardChoose="cardChoose"></card_selector>
      
      <div v-if="cards.length > 0">
      <h2>Your Deck</h2>
        <div class="flex p-2 bg-white border drop-shadow-sm rounded">
        <span class="inline" v-for="card in cards">
              <img class="w-1/3 md:w-1/5" v-bind:src="card.image"/>
            </span>
        </div>
      </div>
     <div class="p-10">
    
        <input type="submit" value="Save the deck">
     </div>
    </form>

      </div>
    `,

    methods: {
        addDeck() {
            this.$emit('addDeck', this.cards);
            this.cards = []
        },

        cardChoose(card) {
            this.cards.push(card);
        }
    }
}

