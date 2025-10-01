import { useState } from "react";
import "./Editor.css"
import { getFormattedDate } from "../util";


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
            <div className="editor_section">
                {/* 작성완료 버튼, 취소 버튼 */}
            </div>
        </div>
    );
}

export default Editor;