
function QRContainer() {
    return (
        <div className="bg-neutral-800 text-center rounded-lg mt-[5px] p-5 w-full">
            <h3 className="text-lg font-bold mb-4">입장 QR 코드</h3>
            <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ORDER2709290"
                alt="QR 코드"
                className="w-[200px] h-[200px] mx-auto"
            />
            <p className="mt-4 text-sm text-gray-300">* 공연장 입장 시 위의 QR 코드를 제시해 주세요.</p>
        </div>
    )
}

export default QRContainer