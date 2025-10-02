import { useEffect, useState } from "react";
import "./Editor.css"
import { emotionList, getFormattedDate } from "../util";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { getEmotionImgById } from "../util";
import EmotionItem from "./EmotionItem";


//props initData->입력창 또는 수정창에서 다르게 보여질 입력내용
//수정->기존에 입력한 내용이 출력되어야 함
//onSubmit->작성완료 버튼을 클릭했을 때 실행되는 이벤트 핸들러 함수
const Editor = ({initData, onSubmit}) => {

    // const [date, setDate] = useState("");
    // const [emotionId, setImotionId] = useState(3);
    // const [content, setContent] = useState("");

    const [state, setState] = useState(
        {
            date: getFormattedDate(new Date()),
            emotionId:3,
            content:""
        }
    );

    const handleChangeDate = (e) => {
        setState({ //state 객체 내의 날짜 속성값 변경하기
            ...state, 
            date : e.target.value
        });
    }

    const handleChangeContent = (e) => {
        setState({ //state 객체 내의 content 속성값 변경하기
            ...state, 
            content : e.target.value
        });
    }

    const handleSubmit = () => { //작성완료 버튼 이벤트 핸들러
        onSubmit(state);
    }

    const navigate = useNavigate();

    //취소버튼 이벤트 핸들러
    const handleOnGoBack = () => {
        navigate(-1); //이전 페이지로 이동, (-2)->2단계 이전
        //window.history.go(-1);
    }

    //이미지가 클릭 이벤트 핸들러
    const handleChangeEmotion = (emotionId) => {
        setState({ //state 객체 내의 emotionId의 속성값 변경하기
            ...state, 
            emotionId
        });
    }

    useEffect(()=> { //->의존성배열 [initData] 값이 변경되면 리렌더
        //initData 존재 여부 확인->true->initData props 상위 컴포넌트에 전달됨
        //initData가 존재하면 일기 수정, 존재하지 않으면 새 글 쓰기
        //initData이 존재하면 현재 보여지는 내용이 initData의 내용이어야 함
        if(initData) { //참이면->수정하기 실행, 거짓이면->새글쓰기 쓰기
            setState({ //state 객체 내의 날짜 속성값 변경하기
            ...initData, 
            date : getFormattedDate(new Date(parseInt(initData.date)))
            //date값->getTime()->정수->날짜형식->yyyy-mm-dd 로 변경
        });
        }
    },[initData]);//initData는 처음 들어올때 1번만 변경->useEffect는 1번만 실행

    return (
        <div className="Editor">
            <div className="editor_section">
                <h4>오늘의 날짜</h4>
                {/* 날짜 입력창 */}
                <div className="input_wrapper">
                    <input type="date" value={state.date} onChange={handleChangeDate} />
                </div> 
            </div>
            <div className="editor_section">
                <h4>오늘의 감정</h4>
                {/* 감정 이미지 선택창 */}
                <div className="input_wrapper emotion_list_wrapper">
                   {emotionList.map((item)=>(
                        <EmotionItem key={item.id} {...item} onClick={handleChangeEmotion} isSelected={item.id === state.emotionId} />
                   ))}
                </div>
            </div>
            <div className="editor_section">
                <h4>오늘의 일기</h4>
                {/* 일기 입력창 또는 수정창 */}
                <div className="input_wrapper">
                    <textarea
                        placeholder="오늘은 어땠나요?"
                        value={state.content}
                        onChange={handleChangeContent}
                    />
                </div>
            </div>
            <div className="editor_section bottom_section">
                {/* 작성완료 버튼, 취소 버튼 */}
                <Button text={"취소하기"} onClick={handleOnGoBack} />
                <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit} />
            </div>
        </div>
    );
}

export default Editor;