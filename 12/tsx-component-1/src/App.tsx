import { ref } from 'vue';
// import { SquareExpr } from './components/SquareExpr';

const current = ref(2);

// JSXの生成関数（子）
const SquareExpr = () => {
  console.log('render SquareExpr');
  return (
    <div>
      {current.value} <sup>2</sup> = {current.value ** 2}
    </div>
  );
};

// JSXの生成関数（親）
const App = () => {
  console.log('render App');
  return (
    <div>
      <SquareExpr />
      {/* <SquareExpr current={current.value} /> */}
      <button onClick={() => (current.value = current.value ** 2)}>
        二乗する
      </button>
    </div>
  );
};

export default App;
