import { useParams } from "react-router-dom";

const Diary = () => {

    const {id} = useParams(); //@PathVariable String id 유사

    return (
        <div>
            <h2>Diary 페이지 입니다.</h2>
            <h3>{id}번 일기를 보고 계십니다.</h3>
        </div>
    );
}

export default Diary;