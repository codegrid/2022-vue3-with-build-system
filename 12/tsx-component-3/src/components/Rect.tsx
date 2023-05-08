import { computed, defineComponent } from 'vue';

const adjustPosition = (size: number, x: number, y: number, _angle: number) => {
  // そこそこ重い処理
  for (let i = 0; i <= 100000000; i++) {
    if (i % 10000000 == 0) console.log(`progress: ${i / 1000000}%`);
    Math.random();
  }
  return {
    x:
      document.body.clientWidth < x + size
        ? document.body.clientWidth - size
        : x,
    y:
      document.documentElement.clientHeight < y + size
        ? document.documentElement.clientHeight - size
        : y,
  };
};

export const Rect = defineComponent({
  props: {
    size: { type: Number, required: true },
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    angle: { type: Number, required: true },
    color: { type: String, required: true },
  },
  setup(props) {
    // コンポーネントの初期化時に一度だけ実行される
    const position = computed(() =>
      adjustPosition(props.size, props.x, props.y, props.angle)
    );
    // 描画関数の中身はJSXの定義だけにする
    return () => (
      <div>
        <div
          style={{
            position: 'absolute',
            left: `${position.value.x}px`,
            top: `${position.value.y}px`,
            width: `${props.size}px`,
            height: `${props.size}px`,
            transform: `translate(${position.value.x}px, ${position.value.y}px) rotate(${props.angle}deg)`,
            backgroundColor: props.color,
          }}
        />
      </div>
    );
  },
});
