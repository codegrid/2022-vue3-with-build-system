import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    initialCount: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const count = ref<number>(props.initialCount);
    const countUp = (): number => count.value++;
    return { count, countUp };
  },
});
