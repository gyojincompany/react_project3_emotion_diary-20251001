import "./Button.css"

//Button 컴포넌트 props->버튼의 이름 text, 이벤트 핸들러 onClick
const Button = ({text, type, onClick}) => {

    const btnType = ["positive","negative"].includes(type) ? type : "default";
    //postive-> button의 클래스이름->Button Button_positive

    return (       
        <button className={["Button",`Button_${btnType}`].join(" ")} onClick={onClick}>{text}</button>
    );
};

export default Button;