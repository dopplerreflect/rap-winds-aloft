const Arrow: React.FC<{ dir: number }> = ({ dir }) => (
  <svg viewBox="0 0 512 512" height="2em" width="2em">
    <circle
      cx="256"
      cy="256"
      r="237.32505032019532"
      fill="hsl(210, 100%, 33%)"
      stroke="hsl(210, 100%, 66%)"
      strokeWidth="37.349899359609346"
    />
    <path
      d="
        M 260.4 0
        L 269.56814539771983 274.6749500197458
        L 313.475583094649 335.1083534400135
        L 256 512
        L 198.52441690535102 335.1083534400135
        L 242.43185460228014 274.6749500197458
        L 251.6 0
        Z"
      fill="hsl(30, 100%, 50%)"
      transform={`rotate(${dir}, 256, 256)`}
    />
  </svg>
);
export default Arrow;
