<template>
  <div
    :class="userInfo === people ? { 'right': true } : { 'left': true } "
    class="ch-chatroom-msg-bubble">
    <div class="msg">
      <div class="msg-people">{{people}}</div>
      <div class="msg-bubble left">
        {{msg}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ChChatroomMsgBubble',
  props: {
    people: String,
    msg: String,
    timestamp: [String, Number],
    userInfo: String,
  },
};
</script>
<style lang="stylus">
@import '../theme/const.styl'
.ch-chatroom-msg-bubble
  box-sizing border-box
  display flex
  margin-bottom 20px
  &.left
    justify-content flex-start
  &.right
    justify-content flex-end
    .msg-people
      text-align right
      color $blue
    .msg-bubble
      border-radius 18px 0px 18px 18px
      border 2px solid $blue
      background-color $blue
      color white
  .msg-people
    color $red
    margin-bottom 10px
  .msg-bubble
    border 2px solid $red
    padding 15px 30px 15px 15px
    border-radius 0 18px 18px 18px
</style>
