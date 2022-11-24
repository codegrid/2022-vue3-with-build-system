import { defineComponent, ref } from 'vue';
import './Counter.css';

export default defineComponent({
  setup() {
    const count = ref(0);
    const countUp = () => count.value++;
    return { count, countUp };
  },
  template: /* html */ `
    <div class="Counter">
      <button class="Counter-UpButton" @click="countUp">{{ count }}</button>
    </div>
  `,
});
