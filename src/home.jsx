import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>慢性硬膜下血肿患者资料登记系统</h1>
      <Link to="/add" className="btn btn-primary">
        输入新病例
      </Link>
      <button className="btn btn-primary">导出数据</button>
      <Link to="/patients" className="btn btn-primary">
        展示全部病例
      </Link>
      <button className="btn btn-primary">退出</button>
    </>
  );
}

export default Home;
