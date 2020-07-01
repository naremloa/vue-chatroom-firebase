<template>
  <div class="home">
    <ch-chatroom
      @click.native="focus = 'left'"
      :class="{ 'focus-left': focus === 'left' }"
      :userInfo="leftUserInfo"
      :updateUserInfo="updateUserInfo('leftUserInfo')" />
    <ch-chatroom
      @click.native="focus = 'right'"
      :class="{ 'focus-right': focus === 'right' }"
      :userInfo="rightUserInfo"
      :updateUserInfo="updateUserInfo('rightUserInfo')" />
  </div>
</template>

<script>
import ChChatroom from '../components/ChChatroom.vue';

export default {
  name: 'Home',
  components: {
    ChChatroom,
  },
  data() {
    return {
      focus: 'left',
      leftUserInfo: '',
      rightUserInfo: '測試2',
    };
  },
  methods: {
    updateUserInfo(dataKey) {
      return (name) => {
        if (name !== this[dataKey]) this[dataKey] = name;
      };
    },
  },
};
</script>
<style lang="stylus">
@import '../theme/const.styl'
.home
  display flex
  height 100vh
  width 100vw
  .ch-chatroom
    flex 1
    &.focus-left
      box-shadow 10px 0  25px $shadow
    &.focus-right
      box-shadow -10px 0  25px $shadow
</style>
