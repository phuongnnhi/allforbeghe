$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})
function firstQuestion(){
    
    $('.content').hide();
    Swal.fire({
        title: 'bé ghệ uiiii',
        text: 'mừng ngày 14/3 bé ghệ cần làm 1 cái quiz',
        imageUrl: 'img/cuteCat.jpg',
        imageWidth: 300,
        imageHeight: 300,
        background: '#ef6a8a url("../img/iput-bg.jpg")',
        imageAlt: 'Custom image',
      }).then(function(){
        $('.content').show(200);
      })
}

 // switch button position
 function switchButton() {
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button position
function moveButton() {
    var audio = new Audio('./sound/Swish1.mp3');
    audio.play();
    if (screen.width<=600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
    } else{
        var x = Math.random() * 500;
        var y = Math.random() * 500;
    }
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}


var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})

// generate text in input
function textGenerate() {
    var n = "";
    var text = " nhận một nụ hun từ bebi ;) ";
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
            }
        }
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}
function play() {
  var audio = new Audio('./sound/MCR.mp3');
  audio.play();
}
// show popup
$('#yes').click(function() {
    var audio = new Audio('./sound/tick.mp3');
    audio.play();
    Swal.fire({
        title: 'món quà trong mơ của bé ghệ là',
        html: true,
        width: 900,
        padding: '3em',
        html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='tell me'>",
        background: '#ef6a8a url("../img/iput-bg.jpg")',
        backdrop: `
              rgba(0,0,123,0.4)
              url("img/giphy2.gif")
              left top
              no-repeat
            `,
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#fe8a71',
        cancelButtonColor: '#f6cd61',
        confirmButtonText: 'gửi điều ước'
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
                confirmButtonText: 'đi ăn với bebi',
                background: '#ef6a8a url("../img/iput-bg.jpg")',
                title: 'Happy White Valentine bé ghệ <3',
                text: "I love how you open the footrests for me, hug and kiss me everytime we say goodbye, switch your food with me if I like yours better, gently rub my finger whenever we hold hands, buy me milktea when picking me up after class, compassionately listen to my stories, and learn my love language. Thank you for always being so kind, calm, respectful, and super supportive. Everything lasts for a while, and this might be among those whiles I dont ever want to pass. xoxo.",
                confirmButtonColor: '#83d0c9',
                onClose: () => {
            window.location = "https://www.facebook.com/phuongnhi.ledoan/";
          },
            })
        }
    })
})