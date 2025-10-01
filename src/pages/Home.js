import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";

const Home = () => {

    // const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get("memberid")); //request.getParameter("memberid") 유사

    return (
        <div>
            <Header title={"HOME"}
              leftChild={<Button type={"positive"} text={"긍정 버튼"} onClick={()=>{alert("positive button");}} />}  
              rightChild={<Button type={"negative"} text={"부정 버튼"} onClick={()=>{alert("negative button");}} />}            
            />
          
        </div>
    );
}

export default Home;

//function Home() {
// return (<div></div>);
//}