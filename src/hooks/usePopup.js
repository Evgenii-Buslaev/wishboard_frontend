import { useNavigate } from "react-router-dom";

const usePopup = () => {
  const navigator = useNavigate();

  return (e) => {
    if (
      e.target.tagName !== "FORM" &&
      e.target.tagName !== "INPUT" &&
      e.target.tagName !== "BUTTON" &&
      e.target.tagName !== "SELECT" &&
      e.target.tagName !== "A"
    )
      navigator("/");
  };
};

export default usePopup;
