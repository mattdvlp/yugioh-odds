
import Card_deck from "./components/card_deck.js";
import Check_module from './components/check_module.js';

export default {

    components: {Card_deck, Check_module},
    data() {
        return {
            probability_card: false,
            probability_check: false,
            decks: [],
            odds_history: null,

        }
    },

    methods: {
        addProbability() {
            this.probability_card = true
        },

        addDeck(cards) {
            this.decks.push(cards);
        },

        checkProbability() {
            this.probability_check = true
        }
    },

    
    /* html */
    template : `
      <div @click="addProbability()">Add a probability</div>
      <div v-if="probability_card">
        <card_deck @addDeck="addDeck"></card_deck>
      </div>
      
      Decks: {{decks}}
      
      <hr>
      
      <div @click="checkProbability()">Check Probability</div>
            <check_module :decks="decks"></check_module>
      
      
`

}