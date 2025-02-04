
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const startPokedex = () => {
    navigate("/dex");
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={startPokedex}>포켓몬 도감 시작하기</button>
    </div>
  );
};

export default Home;
