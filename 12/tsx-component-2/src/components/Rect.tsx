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

export const Rect = (props: {
  size: number;
  x: number;
  y: number;
  angle: number;
  color: string;
}) => {
  const { x, y } = adjustPosition(props.size, props.x, props.y, props.angle);
  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: `${props.size}px`,
        height: `${props.size}px`,
        transform: `translate(${x}px, ${y}px) rotate(${props.angle}deg)`,
        backgroundColor: props.color,
      }}
    />
  );
};
