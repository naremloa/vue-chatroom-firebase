<template>
  <div class="ch-chatroom-input">
    <ch-input v-model="inputValue" :disabled="disabled" @keypress.enter.native="handleClick" />
    <div class="chatroom-input-button">
      <i
        :class="{ disabled }"
        class="fas fa-location-arrow"
        @click="handleClick" />
    </div>
  </div>
</template>
<script>
import { isFunction } from 'lodash';
import ChInput from './ChInput.vue';

export default {
  name: 'ChChatroomInput',
  components: { ChInput },
  props: {
    userInfo: String,
    updateMsgList: {
      validator: (val) => val === null || isFunction(val),
    },
  },
  computed: {
    disabled() { return !this.userInfo; },
  },
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    handleClick() {
      if (this.disabled) return;
      if (this.updateMsgList !== null && this.inputValue !== '') {
        const msgObj = {
          msg: this.inputValue,
          people: this.userInfo,
          timestamp: (new Date()).getTime(),
        };
        this.updateMsgList(msgObj);
      }
      this.inputValue = '';
    },
  },
};
</script>
<style lang="stylus">
.ch-chatroom-input
  height 30px
  display flex
  padding 10px 20px
  box-shadow 0 -2px 5px rgba(0, 0, 0, .1)
  .ch-input
    flex 1
  .chatroom-input-button
    min-width 80px
    display flex
    justify-content flex-end
    align-items center
    i
      transform rotate(45deg)
      font-size 24px
      margin-right 20px
      cursor pointer
      &.disabled
        color grey
        cursor not-allowed
</style>
