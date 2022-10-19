const inputValue = document.querySelector('#inputValue'); /** selecionando o input */
const btnValue = document.querySelector('#btnValue'); /** selecionando o botão */
const imgQrcode = document.querySelector('#imgQrcode'); /** selecionando a imagem */
const baixarImg = document.querySelector('#baixarImg'); /** selecionando botão de download da imagem */
const wrapper = document.querySelector('.wrapper'); /** selecionando a class */
let valueDefault; /** variavel */


// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

btnValue.addEventListener('click', () => {
    let qrcodeValue = inputValue.value.trim();
    if(!qrcodeValue || qrcodeValue === valueDefault) return;
    valueDefault = qrcodeValue;
    btnValue.innerText = 'Gerando QR code...';
    imgQrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}` /** coloca a imagem gerada no resultado */
    baixarImg.href = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}&download=1` /** Coloca a imgem dentro do botão de download */
    imgQrcode.addEventListener('load',() =>{
        wrapper.classList.add('active');
        btnValue.innerText = 'Gerar QR code'
        inputValue.value = "";
    })
})