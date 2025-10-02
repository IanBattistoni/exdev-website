import { useNavigate } from "react-router-dom";

const ContacButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/apply");
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll suave
  };

  return (
    <button className="btn primary" onClick={handleClick}>
      Contáctanos
    </button>
  );
};

export default ContacButton;