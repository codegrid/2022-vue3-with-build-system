import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Counter',
  props: {
    initialCount: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const count = ref(props.initialCount);
    const countUp = () => count.value++;
    return { count, countUp };
  },
});
