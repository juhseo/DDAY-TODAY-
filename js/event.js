//선택자
const btns = document.querySelector('#btns');
const text = document.querySelector('#text');

//event 연결
btns.addEventListener('click',function(e){
    let value = e.target.dataset.value;
    let getDay = getInputValue();
    let firstDay = new Date(getDay.year, getDay.month, getDay.date);
    let toDay = new Date();
    let startTime = firstDay.getTime();
    let todayTime = toDay.getTime();
    if(value=='today'){
        let re = Math.floor((todayTime - startTime)/(1000*60*60*24));
        text.innerHTML = `우리가 만난지 ${re}일이 되었습니다.`;
    }else if ( value == 50){
        firstDay.setDate(firstDay.getDate()+50);
        text.innerHTML =` 50일은
            ${firstDay.getFullYear()}년 
            ${firstDay.getMonth()+1}월
            ${firstDay.getDate()}일 입니다.`;
    }else {
        firstDay.setDate(firstDay.getDate()+100);
        text.innerHTML =` 100일은
            ${firstDay.getFullYear()}년 
            ${firstDay.getMonth()+1}월
            ${firstDay.getDate()}일 입니다.`;
    }
})

//숫자만 입력되도록 설정
function getInputValue(){
    const year = Number(document.querySelector('#year').value);
    const month = Number(document.querySelector('#month').value);
    const date = Number(document.querySelector('#date').value);
    console.log(year,month,date);
    if(isNaN(year) || isNaN(month) || isNaN(date)){
        alert('숫자만 입력해주세요');
        return;
    }
    if(!year || !month || !date){
        alert('전체를 입력해주세요')
        return;
    }
    const firstday = {
        year: year,
        month: month-1,
        date:date
    }
    return firstday;
}