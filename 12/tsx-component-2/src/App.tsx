import { ref } from 'vue';

import { Rect } from './components/Rect';

const size = ref(300);
const x = ref(100);
const y = ref(100);
const angle = ref(45);
const color = ref('#ff0000');

const App = () => {
  return (
    <div>
      <div>
        x:
        <select v-model={x.value}>
          <option value={100}>100</option>
          <option value={150}>150</option>
        </select>
      </div>
      <div>
        y:
        <select v-model={y.value}>
          <option value={100}>100</option>
          <option value={150}>150</option>
        </select>
      </div>
      <div>
        angle
        <select v-model={angle.value}>
          <option value={0}>0°</option>
          <option value={45}>45°</option>
        </select>
      </div>
      <div>
        size:
        <label>
          <input type="radio" value={300} v-model={size.value} />
          300
        </label>
        <label>
          <input type="radio" value={350} v-model={size.value} />
          350
        </label>
      </div>

      <div>
        color: <input type="color" v-model={color.value} />
      </div>
      <div style="position:realative">
        <Rect
          size={size.value}
          x={x.value}
          y={y.value}
          angle={angle.value}
          color={color.value}
        />
      </div>
    </div>
  );
};

export default App;
