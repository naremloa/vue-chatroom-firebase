<template>
  <div class="ch-input">
    <div
      v-if="label"
      class="input__label">
      {{label}}
    </div>
    <input
      class="input__content"
      v-bind="$attrs"
      :value="value"
      @input="handleInput" />
  </div>
</template>
<script>
export default {
  name: 'ChInput',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    label: String,
    value: [String, Number],
  },
  methods: {
    handleInput($event) {
      const { target: { value } } = $event;
      this.$emit('input', value);
    },
  },
};
</script>
<style lang="stylus">
.ch-input
  display flex
  input
    outline none
    border 1px solid rgb(74, 82,124)
    border-radius 20px
    background-color rgb(242, 242, 236)
    padding 0 10px
  .input__label
    margin-right 20px
    text-align right
    flex-grow 1
  .input__content
    flex-grow 2
</style>
