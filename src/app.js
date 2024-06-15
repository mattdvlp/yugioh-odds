
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

            arr.push([{'id': this.decks.length,'cards':cards}]);

            localStorage.decks = JSON.stringify(arr);

            this.decks.push([{'id': this.decks.length,'cards':cards}]);
        },

        checkProbability() {
            this.probability_check = true
        },

    },
    mounted() {
        if (localStorage.decks) {
            this.decks = JSON.parse(localStorage.decks)
        }
    },

    
    /* html */
    template : `
      <div class="grid grid-flow-row-dense grid-cols-3">
        <div class="col-span-2">
        <div class="text-5xl" @click="checkProbability()">Check Probability</div>
            <check_module :decks="decks" @calculator="calculator"></check_module>
        </div>
      
      <div class="flex justify-end">
      <a href="#" @click="addProbability()" class="w-fit h-fit p-2 bg-orange-300 rounded hover:bg-orange-200" v-if="!probability_card">
        Add a deck
      </a>
      </div>
     
      </div>

      <div v-if="probability_card">
        <card_deck @addDeck="addDeck" @addProbability ="addProbability"></card_deck>
      </div>
    `

}