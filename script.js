document.addEventListener('DOMContentLoaded', ()=>{


    let didUse = document.getElementById('did-use-button');
    const message = document.getElementById('msg');
    const save = document.getElementById('save-button');
    

    function clickedUsedBtn(didUse){
        if (didUse.checked){
            message.textContent = 'ざんねん...。';
        } else {
            message.textContent = '節約だ！';
        }
    };

    didUse.addEventListener('click', () => {
        clickedUsedBtn(didUse);
    });
    save.addEventListener('click', function(){
        alert('ボタンがクリックされました！');
    });

});