import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";

const Home = () => {

    // const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get("memberid")); //request.getParameter("memberid") 유사

    return (
        <div>
            <h2>Home 페이지 입니다.</h2>
            <Button type={"positive"} text={"긍정 버튼"} onClick={()=>{alert("positive button");}} />
            <Button type={"negative"} text={"부정 버튼"} onClick={()=>{alert("negative button");}} />
            <Button text={"기본 버튼"} onClick={()=>{alert("default button");}} />
        </div>
    );
}

export default Home;

//function Home() {
// return (<div></div>);
//}