document.addEventListener('DOMContentLoaded', ()=>{

    const calenderWrapper = document.getElementById("calender-wrapper");
    const yearMonthNow = document.getElementById("calender-header");
    const calender = document.getElementById("calender");
    
    //const dateList = calender.querySelectorAll(".date");
    const pastCalender = document.getElementById("prev");
    const nextCalender = document.getElementById("next");
    

    const week = ["日", "月", "火", "水", "木", "金", "土"];

    //初期設定
    const today = new Date();
    let showDate = new Date(today.getFullYear(), today.getMonth(), 1);


    //表示
    showCalender(today);
    pastCalender.addEventListener('click', () =>{
        pastCalenderShow();
    });
    nextCalender.addEventListener('click', () =>{
        nextCalenderShow();
    });
    
    
    

    //カレンダー表示

    function showCalender(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        showStr = `${year}年${month}月`;
        yearMonthNow.innerHTML = showStr;
        createCalender(date);
        selectDate();
        
    }

    //先月・来月表示
    
    function pastCalenderShow(){
        
        showDate.setMonth(showDate.getMonth() - 1);
        const dateList = calender.querySelectorAll(".date, .past-month, .next-month");
        dateList.forEach(date => {
            date.remove();
        });
        showCalender(showDate);
        
    }


    function nextCalenderShow(){

        showDate.setMonth(showDate.getMonth() + 1);
        const dateList = calender.querySelectorAll(".date, .past-month, .next-month");
        dateList.forEach(date => {
            date.remove();
        });
        showCalender(showDate);
    }






    //カレンダー作成

    function createCalender(date){
        const firstDayNowMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDayNowMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
         
        //前月分の空白を埋める
        for (let i = firstDayNowMonth.getDay(); i > 0; i--){
            const pastDate = new Date(date.getFullYear(), date.getMonth(), 1-i).getDate();
            const dateDiv = document.createElement("button");
            dateDiv.className = "past-month";
            dateDiv.textContent = pastDate;
            calender.appendChild(dateDiv);
        }

        //今月分を埋める
        for (let i = 1; i <= lastDayNowMonth.getDate(); i++){
            const dateDiv = document.createElement("button");
            
            dateDiv.textContent = i;
            dateDiv.classList.add("date");

            //今日をセレクト状態に
            if(date.getMonth() === today.getMonth()){
                if(i === today.getDate()){
                    dateDiv.classList.add("today");
                    dateDiv.setAttribute("id", "selected");
                } 
            //違う月の場合は1日をセレクト状態に
            } else {
                if(i === 1){
                    dateDiv.setAttribute("id", "selected");
                }
            }
            calender.appendChild(dateDiv);
        }

        //来月分の空白を埋める
        for (let i = 1; i <= 6 - lastDayNowMonth.getDay(); i++){
            const dateDiv = document.createElement("button");
            dateDiv.className = "next-month";
            dateDiv.textContent = i ;
            calender.appendChild(dateDiv);
        }
        
    };


    //カレンダーの日付選択
    function selectDate(){
        let selectedDate = document.getElementById("selected");
        const dateList = calender.getElementsByClassName("date");
        const pastDateList = calender.getElementsByClassName("past-month");
        const nextDateList = calender.getElementsByClassName("next-month");

        for (i = 0; i < dateList.length; i++){
            const date = dateList[i];
            date.addEventListener('click',()=>{
                if(date == selectedDate){
                    //ボタン画面に移りたい
                    alert("ボタン押したぞ！");
                } else {
                    if(selectedDate){
                        selectedDate.removeAttribute("id");
                        console.log(selectedDate);
                    }

                    date.setAttribute("id","selected");
                    selectedDate = date;
                    console.log(selectedDate);
                }
            });
        }

        for (i = 0; i < pastDateList.length; i++){
            const pastDate = pastDateList[i];
            pastDate.addEventListener('click', () => {
                pastCalenderShow();
            });
        }

        for (i = 0; i < nextDateList.length; i++){
            const nextDate = nextDateList[i];
            nextDate.addEventListener('click', ()=>{
                nextCalenderShow();
            })
        }

        
    }
    /*dateList.forEach(date => {
        date.addEventListener('click', () =>{
            if(date == selectedDate){
                //ボタン画面に移りたい
                alert("ボタン押したぞ！");
            } else {
                if(selectedDate){
                    selectedDate.removeAttribute("id");
                }

                date.setAttribute("id","selected");
                selectedDate = date;
            }


        });
    });*/







});
