

function QRContainer() {
    return (

        <div class="qr-code-container">
            <h3>입장 QR 코드</h3>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ORDER2709290" alt="QR 코드" class="qr-code" />
            <p>* 공연장 입장 시 위의 QR 코드를 제시해 주세요.</p>
        </div>

    )

}

export default QRContainer