document.addEventListener('DOMContentLoaded', ()=>{

    const calenderWrapper = document.getElementById("calender-wrapper");
    const yearMonthNow = document.getElementById("calender-header");
    const calender = document.getElementById("calender");
    const calenderDate = document.getElementById("calender-date");
    const pastCalender = document.getElementById("prev");
    const nextCalender = document.getElementById("next");

    const week = ["日", "月", "火", "水", "木", "金", "土"];

    //初期設定
    const today = new Date();
    let showDate = new Date(today.getFullYear(), today.getMonth(), 1);

    showCalender(today);


    
    

    //カレンダー表示

    function showCalender(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        showStr = `${year}年${month}月`;
        yearMonthNow.innerHTML = showStr;
        createCalender(date);
    };

    //先月・来月表示
    
    pastCalender.addEventListener('click', () =>{
        showDate.setMonth(showDate.getMonth() - 1);
        const dateList = calender.querySelectorAll(".date");
        dateList.forEach(date => {
            date.remove();
        });
        showCalender(showDate);
    });

    nextCalender.addEventListener('click', () => {
        showDate.setMonth(showDate.getMonth() + 1);
        const dateList = calender.querySelectorAll(".date");
        dateList.forEach(date => {
            date.remove();
        })
        showCalender(showDate);
    });




    //カレンダー作成

    function createCalender(date){
        const firstDayNowMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDayNowMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
         
        //前月分の空白を埋める
        for (let i = firstDayNowMonth.getDay(); i > 0; i--){
            const pastDate = new Date(date.getFullYear(), date.getMonth(), 1-i).getDate();
            const dateDiv = document.createElement("button");
            dateDiv.className = "date not-now";
            dateDiv.textContent = pastDate;
            calender.appendChild(dateDiv);
        }

        //今月分を埋める
        for (let i = 1; i <= lastDayNowMonth.getDate(); i++){
            const dateDiv = document.createElement("button");
            dateDiv.className = "date";
            dateDiv.textContent = i;
            calender.appendChild(dateDiv);
            
        }

        //来月分の空白を埋める
        for (let i = 1; i <= 6 - lastDayNowMonth.getDay(); i++){
            const dateDiv = document.createElement("button");
            dateDiv.className = "date not-now";
            dateDiv.textContent = i ;
            calender.appendChild(dateDiv);
        }
    
    };
});
