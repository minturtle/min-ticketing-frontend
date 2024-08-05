import { useNavigate } from "react-router-dom";



function ButtonContainer() {
    const navigate = useNavigate();

    return (
        <div class="button-container">
            <button class="btn btn-back" onClick={() => navigate(-1)}>뒤로가기</button>
            <button class="btn btn-cancel">주문 취소</button>
        </div>
    )
}

export default ButtonContainer