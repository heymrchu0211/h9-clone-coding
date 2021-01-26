if (window.innerWidth <= 419) { // 브라우저의 너비가 419px 이하일때

  var title_textWrap = document.querySelector('.toggle-class-elem');
  var title_text = title_textWrap.querySelectorAll('span');

  title_textWrap.classList.remove('careers__white-box');
  for (var i = 0; i < title_text.length; i++) {
    title_text[i].classList.add('careers__white-box');
  }
}

var fade_target = document.querySelectorAll('.careers .careers__white-box'); // title의 텍스트 요소들을 fade_target이라는 변수에 저장합니다. 이 요소들의 가상요소에는 흰색배경의 박스가 있는데 이 흰색배경의 박스를 제어하기 위한 용도로 변수를 만들었습니다.
var logo = document.querySelector('.header__change-nine'); // 스크롤 양에 따라서 바뀌게 될 로고의 특정 부분을 logo라는 변수에 저장합니다.
var sequential_parent = document.querySelector('.careers__recruitment-list'); // 스크롤 양에 따라서 순차적으로 보이게 될 요소들의 부모요소를 sequential_target이라는 변수에 저장합니다.
var sequential_target = sequential_parent.querySelectorAll('.careers__recruitment-item'); // 스크롤 양에 따라서 순차적으로 보이게 될 요소들을 sequential_target이라는 변수에 저장합니다.
var btn_moveTop = document.querySelector('.btn-move-top') // 클릭시 문서의 최상단으로 이동하는 버튼을 btn_moveTop이라는 변수에 저장합니다.

window.addEventListener('load', function () { // 윈도우가 로드 되면
  for (var i = 0; i < fade_target.length; i++) {
    fade_target[i].classList.add('fade'); // 모든 fade_target요소들에게 class fade를 추가합니다. 그러면 흰색배경의 박스가 사라지게 됩니다.
  }
  document.querySelector('.careers__description-wrap').classList.add('active'); // .careers__description-wrap에 class active를 추가하여 opacity 0에서 opacity 1이 되도록 합니다. 
});

window.addEventListener('scroll', function () { // 윈도우에 스크롤이벤트가 발생되면

  /********** 로고 **********/
  if (pageYOffset) { // pageYOffset(세로 스크롤의 양)이 참이면. 즉, 1 이상이면.
    logo.textContent = '9'; // logo의 텍스트를 9로 바꿉니다.
    logo.classList.add('active'); // logo에게 class active를 추가하여 애니메이션을 줍니다.
  } else { // pageYOffset(세로 스크롤의 양)의 값이 0보다 크지 않으면. 즉, 0이면.
    logo.textContent = 'nine'; // logo의 텍스트를 nine으로 바꿉니다.
    logo.classList.remove('active'); // // logo에게 class active를 제거하여 애니메이션을 뺍니다.
  }

  /********** moveTop 버튼 **********/
  if (pageYOffset >= document.documentElement.scrollHeight - window.innerHeight) { // 스크롤 양이 문서 전체높이 - viewport 높이의 값과 같거나 크면
    btn_moveTop.classList.add('active'); // btn_moveTop에 class active를 추가하여 화면에서 보이도록 합니다.
  } else {
    btn_moveTop.classList.remove('active'); // btn_moveTop에 class active를 추가하여 화면에서 안보이도록 합니다.
  }

  /********** 순차적으로 보이게 될 요소들 **********/
  if (pageYOffset >= sequential_parent.offsetTop - window.innerHeight) { // 스크롤 양이 sequential_parent가 부모요소로부터 떨어진 수직 길이 - viewport의 높이와 같거나 크면. ( offsetTop 프로퍼티는 가장 가까운 부모요소 중에서 position속성의 값이 relative인 요소를 기준으로 합니다. 그런데 여기서는 부모중에 relative인 부모가 없기 때문에 결국 브라우저를 기준으로 하게 됩니다.)

    for (var i = 0; i < sequential_target.length; i++) {
      sequential_target[i].classList.add('active'); // class active를 추가하여 요소들이 순차적으로 보이도록 합니다.
    }
  } else {
    for (var i = 0; i < sequential_target.length; i++) {
      sequential_target[i].classList.remove('active'); // class active를 제거하여 요소들이 순차적으로 안보이도록 합니다.
    }
  }
});

btn_moveTop.addEventListener('click', function () { // btn_moveTop을 클릭했을때

  var moveTop = setInterval(function () {
    if (pageYOffset) { // pageYOffset(세로 스크롤의 양)이 0이 아니라면
      window.scrollBy(0, -50); // 0.02초마다 세로스크롤 값을 -55씩 뺍니다.
    } else { // pageYOffset(세로 스크롤의 양)이 0이라면
      clearInterval(moveTop); // setInterval를 멈춥니다.
    }
  }, 20);
});




