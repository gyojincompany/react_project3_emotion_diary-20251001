import { useSearchParams } from "react-router-dom";

const Home = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("memberid")); //request.getParameter("memberid") 유사

    return (
        <div>
            <h2>Home 페이지 입니다.</h2>
        </div>
    );
}

export default Home;

//function Home() {
// return (<div></div>);
//}