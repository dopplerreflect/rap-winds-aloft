type NavButtonProps = {
  direction?: 'left' | 'right';
};
const NavButton: React.FC<NavButtonProps> = ({ direction = 'left' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <path
        data-testid="forward-button"
        className="arrow"
        d="M 128 24 L 18 128 L 128 232"
        fill="none"
        strokeWidth="48"
        strokeLinejoin="round"
        strokeLinecap="round"
        transform={
          direction === 'right' ? 'rotate(180, 128 128) translate(48,0)' : ''
        }
      />
    </svg>
  );
};

export default NavButton;
