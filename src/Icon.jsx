const ReactIcon = () => {
  return (
    <svg
      viewBox="0 0 32 32"
      width="40"
      height="40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="2" fill="#61DAFB" />

      <ellipse
        cx="16"
        cy="16"
        rx="11"
        ry="4.2"
        stroke="#61DAFB"
        strokeWidth="1.5"
      />

      <ellipse
        cx="16"
        cy="16"
        rx="11"
        ry="4.2"
        transform="rotate(60 16 16)"
        stroke="#61DAFB"
        strokeWidth="1.5"
      />

      <ellipse
        cx="16"
        cy="16"
        rx="11"
        ry="4.2"
        transform="rotate(120 16 16)"
        stroke="#61DAFB"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default ReactIcon;