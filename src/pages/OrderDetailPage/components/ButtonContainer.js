import { useNavigate } from "react-router-dom";



function ButtonContainer() {
    const navigate = useNavigate();

    return (
        <div className="bg-neutral-800 text-center rounded-lg mt-[5px] p-5 w-full flex justify-between">
            <button
                className="px-5 py-2.5 border-none rounded text-base cursor-pointer mx-0.5 transition-colors bg-neutral-600 text-white hover:bg-neutral-500"
                onClick={() => navigate(-1)}
            >
                뒤로가기
            </button>
            <button
                className="px-5 py-2.5 border-none rounded text-base cursor-pointer mx-0.5 transition-colors bg-red-600 text-white hover:bg-red-700"
            >
                주문 취소
            </button>
        </div>
    )
}

export default ButtonContainer