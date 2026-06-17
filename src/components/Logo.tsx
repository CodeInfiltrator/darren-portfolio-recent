export function Logo() {
  return (
    <div className="logo-lockup" aria-label="Darren logo">
      <span className="logo-mark" aria-hidden="true">
        <svg
          viewBox="0 0 48 48"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="logo-shape"
            d="M7 8H25.5C36 8 43 14.7 43 24C43 33.3 36 40 25.5 40H7V8Z"
          />
          <path
            className="logo-cut"
            d="M17 17H25.2C30.2 17 33.6 19.7 33.6 24C33.6 28.3 30.2 31 25.2 31H17V17Z"
          />
          <path
            className="logo-cut"
            d="M7 30H20.8L15.2 40H7V30Z"
          />
          <path
            className="logo-cut"
            d="M7 8H15.2L20.8 18H7V8Z"
          />
        </svg>
      </span>

      <span className="logo-word">Frizzia</span>
    </div>
  );
}