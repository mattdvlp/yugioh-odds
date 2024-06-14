
import Card_deck from "./components/card_deck.js";
import Check_module from './components/check_module.js';

export default {

    components: {Card_deck, Check_module},
    data() {
        return {
            probability_card: false,
            probability_check: false,
            decks: [
                {
                    id:'',
                    deck: ''}
            ],
            odds_history: null,

        }
    },

    methods: {
        addProbability() {
            this.probability_card = true
        },

        addDeck(cards) {
            if(this.probability_card !== false) {
                this.probability_card = false
            }

            let arr = [{}];

            if (!localStorage.decks) {
                localStorage.setItem('decks', [{}]);
            } else {
                arr = JSON.parse(localStorage.decks);
            }
            console.log(arr);
            arr.push([{'id': this.decks.length +1,'cards':cards}]);

            localStorage.decks = JSON.stringify(arr);

            this.decks.push([{'id': this.decks.length +1,'cards':cards}]);
        },

        checkProbability() {
            this.probability_check = true
        }
    },
    mounted() {
        if (localStorage.decks) {
            this.decks = JSON.parse(localStorage.decks)
        }
    },

    
    /* html */
    template : `
      <div class="w-fit p-2 bg-orange-300 rounded hover:bg-orange-200" v-if="!probability_card"><a href="#" @click="addProbability()">Add a deck</a></div>
      <div v-if="probability_card">
        <card_deck @addDeck="addDeck" @addProbability ="addProbability"></card_deck>
      </div>
      
      {{decks}}
      <div v-if="decks.length > 0" class="mt-10">
        <h2 class="text-lg">Decks:</h2>
        <div v-for="deck in decks">
          <div v-if="deck.length > 0" class="border border-gray-200 rounded p-3">
          <div v-for="card in deck[0].cards">
          <img v-bind:src="card.image" class="w-1/5 md:1/8">
          </div>
          </div>
        </div>
      </div>
      <hr class="mt-5 mb-5">
      
      <div @click="checkProbability()">Check Probability</div>
            <check_module :decks="decks"></check_module>
`

}