<template>
  <div class="ch-chatroom-head">
    <div class="head-tab"></div>
    <div
      class="head-user-info"
      @click="handleUserInfoClick" >
      <div class="head-user-info-display">
        {{userInfo ? userInfo : '請先輸入身份'}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ChChatroomHead',
  props: {
    userInfo: String,
    updateUserInfo: Function,
  },
  methods: {
    handleUserInfoClick() {
      const res = prompt('請輸入用戶名');
      if (res !== this.userInfo) this.updateUserInfo(res);
    },
  },
};
</script>
<style lang="stylus">
@import '../theme/const.styl'
.ch-chatroom-head
  height 50px
  box-shadow 0 2px 5px $shadow
  display flex
  .head-tab
    flex 1
  .head-user-info
    min-width 60px
    background-color $blue
    color white
    line-height 50px
    padding 0 20px
    box-sizing border-box
    display flex
    .head-user-info-edit
      display flex
      .ch-input
        margin 5px
        .input__content
          width 60px
</style>
