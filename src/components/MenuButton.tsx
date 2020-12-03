const MenuButton = () => (
  <button className="menu icon" aria-label="Menu">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <defs>
        <rect id="bar" width="256" height="48" rx="16" />
      </defs>
      <use href="#bar" transform="translate(0, 16)" />
      <use href="#bar" transform="translate(0, 96)" />
      <use href="#bar" transform="translate(0, 176)" />
    </svg>
  </button>
);
export default MenuButton;
