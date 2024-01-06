const Activity = ({ isActive }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path fill={isActive ? '#0039fc' : '#D0D0D0'} d="M0 10C0 4.48 4.47 0 10 0C15.52 0 20 4.48 20 10C20 15.53 15.52 20 10 20C4.47 20 0 15.53 0 10ZM12.23 11.83L13.85 6.71C13.96 6.36 13.64 6.03 13.29 6.14L8.17 7.74C7.96 7.81 7.79 7.97 7.73 8.18L6.13 13.31C6.02 13.65 6.35 13.98 6.69 13.87L11.79 12.27C12 12.21 12.17 12.04 12.23 1 1.83Z" />
  </svg>
);
export default Activity;
