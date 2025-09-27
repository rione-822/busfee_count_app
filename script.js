document.addEventListener('DOMContentLoaded', ()=>{


    var didUse = document.getElementById('did-use-button');
    var message = document.getElementById('msg');
    let save = document.getElementById('save-button')

    function clickedUsedBtn(didUse){
        if (didUse.checked){
            message.textContent = 'ざんねん...。';
        } else {
            message.textContent = '節約だ！';
        }
    };

    didUse.addEventListener('click', () => {
        clickedUsedBtn(didUse);
        alert('ボタンがクリックされました！');
    });
    save.addEventListener('click', function(){
        alert('ボタンがクリックされました！');
    });

});