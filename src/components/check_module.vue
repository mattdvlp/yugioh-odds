<script>
import Probability from "./probability.vue";

export default {
  components: {Probability},
  props: ['decks'],

  data() {
    return {
      deckChoose: false,
      whichDeck: [],
      cardsChoose: false,
      cardsList: []
    }
  },

  methods: {
    chooseDeck(id) {
      this.deckChoose = true;
      this.cardsChoose = false;
      this.whichDeck = this.decks[id];
      this.whichDeck = this.whichDeck[0].cards
      this.cardsList = [];
    },

    chooseCards(event, index) {
      this.cardsChoose = true;
      if (event.target.checked) {
        this.cardsList.push(this.whichDeck[index]);
      } else {
        const index_array = this.cardsList.indexOf(this.whichDeck[index]);
        if (index_array > -1) {
          this.cardsList.splice(index_array, 1);
        }
      }
    },
  }
}
</script>
<template>
    <div class="text-lg text-gray-600">Which deck do you want to use?</div>
    
      <div v-for="deck in decks">
        <div v-if="deck.length > 0" class="has-[:checked]:bg-indigo-50">
          <input name="deck" type="radio" v-bind:value="deck[0].id" @click="chooseDeck(deck[0].id)">
        <label class="flex" v-for="elements in deck">
          <span v-for="element in elements.cards">
           <img class="w-20" v-bind:src="element.image">
          </span>
        </label>
        </div>
      </div>

    <div v-if="deckChoose">
      <div>Choose which cards do you want in the first hand:</div>
      <div v-for="(card, index) in whichDeck">
          <input type="checkbox" @change="chooseCards($event,index)" v-bind:value="index"><label>{{card.name}}</label>
      </div>
    </div>
    
    <probability v-if="cardsChoose" :cards-list="cardsList"></probability>
</template>