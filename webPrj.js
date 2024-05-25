let ballColor = "#1111ff";
let bouncingBallColor = ballColor;
let backgroundMusic = "music1.mp3";
let audio = new Audio(backgroundMusic);
let settingball;
audio.loop = true;
audio.autoplay = true;

$(window).on("load", function () {
	////////////      FRONT-PAGE        ///////////
	setInterval(function () {
		if($("#main-menu-img img").attr('src') === 'main-menu/main-img-black.png')
			$("#main-menu-img img").attr('src','main-menu/main-img-orange.png')
		else
			$("#main-menu-img img").attr('src','main-menu/main-img-black.png')
	}, 1000);

	$("#main-menu-start-btn img").hover(function () {
		$(this).attr('src', 'main-menu/main-start-hover.png');
	}, function () {
		$(this).attr('src', 'main-menu/main-start.png');
	});

	$("#main-menu-setting-btn img").hover(function () {
		$(this).attr('src', 'main-menu/main-setting-hover.png');
	}, function () {
		$(this).attr('src', 'main-menu/main-setting.png');
	});

	////////////      MAIN-MENU EVENT        ///////////
	////////////////////////// 이미지 슬라이드쇼 관련 변수 및 함수 ///////////////////////////////
	const images = [
	    { src: 'd1.png', description: '화목했던 톰과 제리는 '},
	    { src: 'd2.png', description: '어느 날 둘이 사소한 일로 다투게 되는데...' },
	    { src: 'd3.png', description: '톰은 이내 제리에게 복수를 하기 위해서 계획을 세운다...!' },
	    { src: 'd4.png', description: '제리는 그런줄도 모르고 본인이 좋아하는 치즈를 먹고만 있는데..' },
	    { src: 'd5.png', description: '과연 톰은 어떤 계획과 계략으로 제리를 잡는데 성공할지 의문이다.' }
	];
	let currentIndex = -1;
	let intervalId;
	let interval;

	const imgElement = document.getElementById('scenario-image');
	const animation = document.getElementById('slideshow-container')
	const descriptionElement = document.getElementById('scenario-description');
	const startButton = document.getElementById('main-menu-start-btn');
	const stageMenu = document.getElementById('stage-menu');

	// 메인 메뉴 시작 버튼 클릭 이벤트를 통합하여 수정
	$(startButton).click(function () {
	    $('#main-menu').hide(); // 메인 메뉴 숨김
	    $(animation).show();
	    startSlideshow();
	});

	// 시나리오 스킵(클릭 혹은 아무 키 누를 시-> 아무 키는 아래 keydown에서)
	$(animation).click(function () {
		$(animation).hide();
		clearInterval(intervalId);
		clearInterval(interval);
		startButton.style.display = 'block';
		$("#stage-menu").show();
	});

	function startSlideshow() {
	    startButton.style.display = 'none'; // 시작 버튼 숨김
	    imgElement.style.display = 'block';
	    animation.style.display = 'block';
	    descriptionElement.style.display = 'block';
	    currentIndex=0;
	    imgElement.src = images[currentIndex].src;
	    updateDescription(images[currentIndex].description);
	    intervalId = setInterval(() => {
	        currentIndex++;
	        if (currentIndex >= images.length) {
	            clearInterval(intervalId);
	            currentIndex = -1;
	            imgElement.style.display= 'none';
	            descriptionElement.textContent = ''; 
	            descriptionElement.style.display = 'none';
	            animation.style.display = 'none';
	            startButton.style.display = 'block';

	            // 슬라이드쇼 종료 후 stage-menu를 보여줌
	            stageMenu.style.display = 'block';
	            return;
	        }

	        imgElement.src = images[currentIndex].src;
	        updateDescription(images[currentIndex].description);
	    }, 4000); 
	}

	function updateDescription(description) {
	    descriptionElement.textContent = ''; 
	    let index = 0; 
	    interval = setInterval(() => {
	        descriptionElement.textContent += description[index++]; 
	        if (index >= description.length) {
	            clearInterval(interval);
	        }
	    }, 100); 
	}
	//////////////////////////////////////////////////////////////////////////////////////////////
	
	$('#main-menu-setting-btn').click(function () {
		$('#main-menu').hide();
		$('#setting-page').show();
		settingball = setInterval(settingDraw, 10);

		$('#go-to-main-menu-btn').text('go-to-main-menu'); // 이미지로 바꿀 경우 주소를 바꾸면 됌
	});

	////////////////////////////////////////////////////

	////////////      STAGE-MENU EVENT      ////////////

	setInterval(function () {
		if($("#stage-menu-title > img").attr('src') == 'stageTitle1.png')
			$("#stage-menu-title > img").attr('src','stageTitle2.png')
		else
			$("#stage-menu-title > img").attr('src','stageTitle1.png')
	}, 1000);
	

	function updateDescriptionStages(description, descriptionElement) {
	    descriptionElement.textContent = ''; 
	    let index = 0; 
	    const interval = setInterval(() => {
	        descriptionElement.textContent += description[index++]; 
	        if (index >= description.length) {
	            clearInterval(interval);
	        }
	    }, 100); 
	}

	///////////////////////////////// 스테이지 1 시작 전 시나리오 ///////////////////////////////////
	const images1 = [
	    { src: 'd1.png', description: '화목했던 톰과 제리는 '},
	    { src: 'd2.png', description: '어느 날 둘이 사소한 일로 다투게 되는데...' },
	    { src: 'd3.png', description: '톰은 이내 제리에게 복수를 하기 위해서 계획을 세운다...!' },
	    { src: 'd4.png', description: '제리는 그런줄도 모르고 본인이 좋아하는 치즈를 먹고만 있는데..' },
	    { src: 'd5.png', description: '과연 톰은 어떤 계획과 계략으로 제리를 잡는데 성공할지 의문이다.' }
	];
	let currentIndex1 = -1;
	let intervalId1;
	let interval1;

	const imgElement1 = document.getElementById('scenario-image1');
	const animation1 = document.getElementById('slideshow-container1');
	const descriptionElement1 = document.getElementById('scenario-description1');

	// 스테이지 1 버튼 이벤트
	$(stage1).click(function () {
		$("#stage-menu").hide();
	    $(animation1).show();
	    startSlideshow1();

	});

	// 시나리오 스킵(클릭 혹은 아무 키 누를 시-> 아무 키는 아래 keydown에서)
	$(animation1).click(function () {
		$(animation1).hide();
		clearInterval(intervalId1);
		clearInterval(interval1);
		stage_level = 1; 
		$("#ingame").show();
		init_stage();
	});

	function startSlideshow1() {
	    //startButton.style.display = 'none'; // 시작 버튼 숨김
	    imgElement1.style.display = 'block';
	    animation1.style.display = 'block';
	    descriptionElement1.style.display = 'block';
	    stageMenu.style.display = 'none';
	    currentIndex1=0;
	    imgElement1.src = images1[currentIndex1].src;
	    updateDescriptionStages(images1[currentIndex1].description, descriptionElement1);
	    intervalId1 = setInterval(() => {
	        currentIndex1++;
	        if (currentIndex1 >= images1.length) {
	            clearInterval(intervalId1);
	            currentIndex1 = -1;
	            imgElement1.style.display= 'none';
	            descriptionElement1.textContent = ''; 
	            descriptionElement1.style.display = 'none';
	            animation1.style.display = 'none';

	            // 슬라이드쇼 종료 후 ingame을 보여줌
	            stage_level = 1; 
	            $('#ingame').show();   
				init_stage();
	            return;
	        }

	        imgElement1.src = images1[currentIndex1].src;
	        updateDescriptionStages(images1[currentIndex1].description, descriptionElement1);
	    }, 4000); 
	}

	/////////////////////////////////// 스테이지 2 시작 전 시나리오 ////////////////////////////////////////
	const images2 = [
	    { src: 'a1.png', description: '화목했던 톰과 제리는 '},
	    { src: 'a2.png', description: '어느 날 둘이 사소한 일로 다투게 되는데...' },
	    { src: 'a3.png', description: '톰은 이내 제리에게 복수를 하기 위해서 계획을 세운다...!' },
	    { src: 'a4.png', description: '제리는 그런줄도 모르고 본인이 좋아하는 치즈를 먹고만 있는데..' },
	    { src: 'a5.png', description: '과연 톰은 어떤 계획과 계략으로 제리를 잡는데 성공할지 의문이다.' }
	];
	let currentIndex2 = -1;
	let intervalId2;

	const imgElement2 = document.getElementById('scenario-image2');
	const animation2 = document.getElementById('slideshow-container2');
	const descriptionElement2 = document.getElementById('scenario-description2');

	// 스테이지 2 클릭 버튼
	$(stage2).click(function () {
		$("#stage-menu").hide();
	    $(animation2).show();
	    startSlideshow2();

	});

	function startSlideshow2() {
	    imgElement2.style.display = 'block';
	    animation2.style.display = 'block';
	    descriptionElement2.style.display = 'block';
	    stageMenu.style.display = 'none';
	    currentIndex2=0;
	    imgElement2.src = images2[currentIndex2].src;
	    updateDescriptionStages(images2[currentIndex2].description, descriptionElement2);
	    intervalId2 = setInterval(() => {
	        currentIndex2++;
	        if (currentIndex2 >= images2.length) {
	            clearInterval(intervalId2);
	            currentIndex2 = -1;
	            imgElement2.style.display= 'none';
	            descriptionElement2.textContent = ''; 
	            descriptionElement2.style.display = 'none';
	            animation2.style.display = 'none';

	            // 슬라이드쇼 종료 후 ingame를 보여줌

	            stage_level = 2; 
	            $('#ingame').show();   
				init_stage();
	           	return;
	        }

	        imgElement2.src = images2[currentIndex2].src;
	        updateDescriptionStages(images2[currentIndex2].description, descriptionElement2);
	    }, 4000); 
	}

	////////////////////////////// 스테이지 3 시작 시나리오 /////////////////////////////////////////
	const images3 = [
	    { src: 'b1.png', description: '화목했던 톰과 제리는 '},
	    { src: 'b2.png', description: '어느 날 둘이 사소한 일로 다투게 되는데...' },
	    { src: 'a3.png', description: '톰은 이내 제리에게 복수를 하기 위해서 계획을 세운다...!' },
	    { src: 'a4.png', description: '제리는 그런줄도 모르고 본인이 좋아하는 치즈를 먹고만 있는데..' },
	    { src: 'a5.png', description: '과연 톰은 어떤 계획과 계략으로 제리를 잡는데 성공할지 의문이다.' }
	];
	let currentIndex3= -1;
	let intervalId3;

	const imgElement3 = document.getElementById('scenario-image3');
	const animation3 = document.getElementById('slideshow-container3');
	const descriptionElement3 = document.getElementById('scenario-description3');

	// 스테이지 3 버튼 이벤트
	$(stage3).click(function () {
		$("#stage-menu").hide();
	    $(animation3).show();
	    startSlideshow3();

	});
	function startSlideshow3() {
	    imgElement3.style.display = 'block';
	    animation3.style.display = 'block';
	    descriptionElement3.style.display = 'block';
	    stageMenu.style.display = 'none';
	    currentIndex3=0;
	    imgElement3.src = images3[currentIndex3].src;
	    updateDescriptionStages(images3[currentIndex3].description, descriptionElement3);
	    intervalId3 = setInterval(() => {
	        currentIndex3++;
	        if (currentIndex3 >= images3.length) {
	            clearInterval(intervalId3);
	            currentIndex3 = -1;
	            imgElement3.style.display= 'none';
	            descriptionElement3.textContent = ''; 
	            descriptionElement3.style.display = 'none';
	            animation3.style.display = 'none';

	            // 슬라이드쇼 종료 후 ingame을 보여줌

	            stage_level = 3; 
	            $('#ingame').show();   
				init_stage();
	            return;
	        }

	        imgElement3.src = images3[currentIndex3].src;
	        updateDescriptionStages(images3[currentIndex3].description, descriptionElement3);
	    }, 4000); 
	}

	$("#stage-menu-mainbtn > img").hover(function () {
		$(this).attr('src', 'stageMainBtn_hover.png');
	}, function () {
		$(this).attr('src', 'stageMainBtn_default.png');
	});

	$("#stage-menu-mainbtn > img").click(function() {
		$('#stage-menu').hide();
		$('#main-menu').show();
	})

	////////////////////////////////////////////////////

	////////////      GAME INITIALIZE       ////////////

	// 각 스테이지 진입 시 init_stage() 호출

	////////////////////////////////////////////////////

	////////////      BLOCK GAME PART       ////////////

	frame = $('#gFrame')[0].getContext("2d");
	drawBar();

	// 방향키 입력 감지
	var catchIngame = document.getElementById('ingame');

	$(document).keydown(function (e) {
		if(catchIngame.style.display == 'block') {
			if(e.keyCode == 27 && !offpause) {
				if(!pauseFlag) {
					// 게임 일시정지 시간 측정 시작
					pause_start = Number(new Date());
					// 팝업 창 열리는 처리
					$('#setting-popup').show();

				}
				else {
					// 팝업 창 닫히는 처리
					$('#setting-popup').hide();





					// 멈추는 거 풀 때 일시정지 시간 측정 종료
					pause_end = Number(new Date());
					pause_cum += Math.floor((pause_end - pause_start)/1000);
				}
				pauseFlag = !pauseFlag;
			}
			else if(e.keyCode != 27)
				keyState[e.keyCode] = true;
		} else if(animation.style.display == 'block') {
			$(animation).hide();
			clearInterval(intervalId);
			clearInterval(interval);
			startButton.style.display = 'block';
			$("#stage-menu").show();
		}
	});
	$(document).keyup(function (e) {
		if(catchIngame.style.display == 'block') {
			if(e.keyCode != 27)
				keyState[e.keyCode] = false;
		}
	});	

	// 출구 위치 랜덤 생성은
	// 초기화 될 때마다 함께 되도록

	////////////////////////////////////////////////////

	//////////      GAME SETTING EVENT       ///////////

	if(backgroundMusic === "music1.mp3") {  // code that initialize music button
		$("#music1").attr("checked", true)
	} else if (backgroundMusic === "music2.mp3") {
		$("#music2").attr("checked", true);
	}

	$('#colorpicker').attr("value", ballColor);	// initialize with given color
	$('#colorpicker').on("input", function (e) {
		bouncingBallColor = e.target.value;
	})

	if(audio.paused) {	// if music is not auto-played mute button should be active
		$("#mute-input").attr("checked", true);
	}

	$('#mute-btn').click(function () {	// mute-btn listner
		if($('#mute-input').is(':checked')) {
			audio.play();
		} else {
			audio.pause();
		}
	});
  
	$('#colorpicker').attr("value", ballColor);	// initialize with given color

	$('#apply-btn').click(function () {  // Applying music setting(Except muting) & ballColor Setting
		if ($('#music1').is(':checked')) {
			backgroundMusic = "music1.mp3"
		} else if ($('#music2').is(':checked')) {
			backgroundMusic = "music2.mp3";
		}
		alert(backgroundMusic); // for debugging (should be deleted)

		audio.setAttribute("src", backgroundMusic);
		audio.load();

		ballColor = document.getElementById("colorpicker").value;
		alert(ballColor);   // for debugging
	});

	// 메인으로 가거나 인게임으로 돌아가는 button
	$('#go-to-main-menu-btn').click(function () {
		$('#setting-page').hide();
		clearInterval(settingball);
		if(catchIngame.style.display != 'block') {
			$('#main-menu').show();
		} else {
			$('#setting-popup').show();
		}
	});

	let canvas = document.getElementById('myCanvas');
	let context = canvas.getContext('2d');

	var settingdx = 2;
	var settingdy = 2;

	var x = 100;
	var y = 50;

  // is it ok? to origin draw, drawBall, ball, dx, dy
	function settingDraw() {
		context.clearRect(0, 0, 250, 250);
		settingDrawBall();
	}

	function settingDrawBall() {
		context.beginPath();
		context.arc(x, y, 20, 0, 2.0 * Math.PI, true);
		context.fillStyle = bouncingBallColor;
		context.closePath();
		context.fill();

		if((y>=230 && x>0) || (y<=20 && x>0)) { // bottom, top
			settingdy *= -1;
		}
		else if((y>0 && x>=230) || (y>0 && x<=20)) { // right. left
			settingdx *= -1;
		}

		x += settingdx;
		y += settingdy;
	}

	////////////////////////////////////////////////////

	///////////       setting popup          ///////////

	$('#pause-setting').click(function () {
		// alert('called');
		// 일시정지 처리
		pasueFlag = true;
		pause_start = Number(new Date());

		// setting-btn의 go-to-main을 go-to-ingame으로 바꿔야(img의 경우에는 img의 src를 바꿔주면 OK)
		$('#go-to-main-menu-btn').text('go-to-ingame');

		$('#setting-page').show();
		settingball = setInterval(settingDraw, 10);
		$('#setting-popup').hide();
	});

	$('#pause-main-menu').click(function () {
      	// 인게임 종료 -> 메인 메뉴로
      	pauseFlag = false;
      	clearInterval(ball);
      	clearInterval(bar);   
      	if(stage_level == 1)
         	clearTimeout(lightHandler);   
      	else if(stage_level == 3) {
         	clearTimeout(attackInterval);
         	attack.y = 600;
      	}

      	catchIngame.style.display = 'none';

      	$('#setting-popup').hide();
      	$('#main-menu').show();
   });

	////////////////////////////////////////////////////

	//////////////      SCORE PART       ///////////////

	// (게임 점수 출력시 이벤트 처리)

	$("#score-stage-btn").click(function () {
      	$("#ingame").hide();
      	$("#score").hide();
     	 pauseFlag = false;
      	clearTimeout(showNextStage);
      	if(stage_level == 1)
         	clearTimeout(lightHandler);

      	$("#stage-menu").show();
    });

	////////////////////////////////////////////////////



});

var keyState = {};
function barController() {
	if(!pauseFlag) {
		if(keyState[37] && barX > 0){
			barX-=3;
		}
		else if(keyState[39] && barX < ingame_canvas_width-barWidth) {
			barX+=3;
		}
	}
}

// stage info
var stage_level = 1;
var showNextStage;

// pause info
var pauseFlag = true;
var offpause = false;

// game canvas info
var frame;
var frameRate = 5;
var ingame_canvas_width = 810;
var ingame_canvas_height = 500;

// bar info
var bar;
var barWidth = 100;
var barHeight = 10;
var barX;
var barY;
var bar_jerry = new Image();
bar_jerry.src = 'barJerry.png';

// ball info
var ball;
var ballRad = 5;
var dx;
var dy;
var ballX = 300;
var ballY = 300;

// block info
var block = [
	[1, 1, 1, 1, 3, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	];
var blockX = 0;
var blockY = 50;
var blockWidth = 90;
var blockHeight = 40;
var cheese_block = new Image();

// hole info
var holeX;
var holeWidth = 90;

// score info
var pause_start;
var pause_end;
var pause_cum = 0;
var start_time;
var end_time;
var clear_time;
var score_cum;

// stage 1 light(on&off) info
var lightDrawer;
var nextLightOff = 5000;

// 상태 초기화 : 스테이지 바뀔 때, 재시작할 때, 등등..
function init_stage() {

	//pasueFlag
	pauseFlag = false;
	offpause = false;

	// bar init
	barX = 375;
	barY = 450;
	bar = setInterval(barController, frameRate);

	// ball init
	ballX = 300;
	ballY = 300;
	dx = Math.sqrt(2.5);
	dy = Math.sqrt(2.5);

	// block init
	block = [
	[1, 1, 1, 1, 3, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 2, 1, 1, 1, 2, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	];

	// hole init
	var holeX = Math.floor(Math.random() * 721);
	var hole = $("#hole");
	hole.attr('src', 'hole.png');
	hole.css({position:'absolute', top:'54px', left:`${50+holeX}px`});

	// score init
	start_time = Number(new Date());
	pause_cum = 0;

	switch (stage_level) {
	case 1:
		// stage-background change
		$("#stage-background").css('background-color', 'peru');

		// stage 1 light on & off 
		lightHandler = setTimeout(lightDrawer, nextLightOff);


		ball = setInterval(function () {
			if(holeX <= ballX && ballX <= holeX + holeWidth && ballY-ballRad <= 0 || keyState[77]) {
				clearInterval(ball);
				clearInterval(bar);
				clearTimeout(lightHandler);
				// 1단계 클리어 처리
				// 스토리 진행 후
				// 점수창 출력
				// 점수창
				curr_time = Number(new Date());
				clear_time = Math.floor((curr_time - start_time)/1000) - pause_cum;
				$("#score").slideDown('slow');
				$("#score-result").html(`clear time : ${clear_time} sec<br><br>number of cheese: ${getScore()}`);
				offpause = true; // 스코어 보드 떠 있는 동안은 pause 사용 불가하게









				showNextStage = setTimeout(function () {
					$("#score").fadeOut('fast');
					stage_level = 2;
					init_stage();
				}, 5000);
			} else if(ballY+ballRad >= ingame_canvas_height) {
				offpause = true;
				clearTimeout(lightHandler);
				clearInterval(ball);
				clearInterval(bar);
				setTimeout(function () {
					init_stage();
				}, 1000);
			}
			draw();
		}, frameRate);

		break;
	case 2:
    // stage-background change
    $("#stage-background").css('background-color', '#B5928D');

    ball = setInterval(function () {
        if (holeX <= ballX && ballX <= holeX + holeWidth && ballY - ballRad <= 0 || keyState[77]) {
            clearInterval(ball);
            clearInterval(bar);
            // 2단계 클리어 처리
            curr_time = Number(new Date());
            clear_time = Math.floor((curr_time - start_time) / 1000);
            $("#score").slideDown('slow');
            $("#score-result").html(`clear time : ${clear_time} sec<br><br>number of cheese: ${getScore()}`);
            offpause = true;

            showNextStage = setTimeout(function () {
                $("#score").fadeOut('fast');
                stage_level = 3;
                init_stage();
            }, 5000);
        } else if (ballY + ballRad >= ingame_canvas_height) {
            clearInterval(ball);
            clearInterval(bar);
            setTimeout(function () {
                init_stage();
            }, 1000);
        }
        draw();
    }, frameRate);

    break;
	case 3:
        // stage-background change
      $("#stage-background").css('background-color', '#ADADAD');

      // player HP reset
      playerHP = 5;

      ball = setInterval(function () {
         if(holeX <= ballX && ballX <= holeX + holeWidth && ballY-ballRad <= 0 || keyState[77]) {
            clearInterval(ball);
            clearInterval(bar);
            clearTimeout(attackInterval);
            // 3단계 클리어 처리
            curr_time = Number(new Date());
            clear_time = Math.floor((curr_time - start_time)/1000);
            $("#score").slideDown('slow');
            $("#score-result").html(`clear time : ${clear_time} sec<br><br>number of cheese: ${getScore()}`);
            offpause = true;







            showNextStage = setTimeout(function () {
               // stage_level = 1;
               $("#score").fadeOut('fast');
               $("#ingame").hide();
               $("#stage-menu").show();
            }, 5000);
         } else if(ballY+ballRad >= ingame_canvas_height || playerHP <= 0) {
            clearInterval(ball);
            clearInterval(bar);
            clearTimeout(attackInterval);
            attack.y = 600;
            setTimeout(function () {
               init_stage();
            }, 1000);
         }
         draw();
      }, frameRate);
      
      // Initialize Tom's attacks
      initAttacks();
      break;

   }


}

// 프레임을 업데이트하는 함수
function draw() {
    if(!pauseFlag) {
        frame.clearRect(0, 0, ingame_canvas_width, ingame_canvas_height);
        drawBall();
        drawBar();
        drawBlocks();

        if (stage_level === 2) {
            drawHand();
            moveHand();
            checkCollisionWithHand();
            handleBallCollisionWithHand();
        } else if(stage_level == 3) {
            drawAttacks();
            checkAttackCollision();
            drawHP();
        }
    }
}

// 바(bar) 계속 그리는 함수
function drawBar() {
	frame.beginPath();
	frame.fillStyle = "peru";
	frame.fillRect(barX, barY, barWidth, barHeight);
	frame.drawImage(bar_jerry, barX+25, barY+10, 50, 50);
}

// 공의 상태를 체크(충돌했는지 등)하고 변화를 적용하며 계속 그리는 함수
function drawBall() {
	// 공 그리기
	frame.beginPath();
	frame.fillStyle = bouncingBallColor;
	frame.arc(ballX, ballY, ballRad, 0, 2*Math.PI);
	frame.fill();



	// 맵벽 좌-우
	if((ballX + dx <= ballRad && ballY + dy > ballRad) || (ballX + dx >= ingame_canvas_width-ballRad && ballY + dy > ballRad)) {
		dx *= -1;
		if(ballX <= ballRad+1)
			ballX += dx;
	}
	// 맵벽 천장
	if(ballX > ballRad && ballY <= ballRad ) {
		dy *= -1; 
	} 

	// 바(bar) 충돌
	// bar 모서리
	if(check_crash_bar_co()) {
		dx *= -1;
		dy *= -1;
	}
	// bar 위
	else if(check_crash_bar()) {
		dy *= -1;
		if((keyState[37] && dx > 0) || (keyState[39] && dx < 0))
			dx *= -1;
	}

	// 블록과 공의 충돌
	// block 모서리
	if(check_crash_blocks_co()) {
		dy *= -1;
		dx *= -1;
	}
	else {
		// block 상 하
		if(check_crash_blocks_tb()) {
			dy *= -1;
		}
		if(check_crash_blocks_lr()) {
			dx *= -1;
		}
 	}

	// 변화량 적용
	ballX += dx;
	ballY += dy;
}

// 배열(block 변수)을 참고하여 벽돌 그리는 함수
// 1번 부수면 깨짐-노랑 / 2번 부수면 깨짐-회색 / 3번 부수면 깨짐-파랑
var cheese_imgs = ['cheese1.jpg', 'cheese2.jpg', 'cheese3.jpg'];
function drawBlocks() {
	for(i=0;i<block.length;i++) {
		for(j=0;j<block[i].length;j++) {
			if(block[i][j] > 0) {
				cheese_block = new Image();
				cheese_block.src = cheese_imgs[block[i][j] - 1];
				frame.drawImage(cheese_block, blockX+j*blockWidth, blockY+i*blockHeight, blockWidth, blockHeight);
			}
		}
	}
}

////////////////////// 바(bar)와 공의 충돌 감지 /////////////////////////
// 모서리의 경우
function check_crash_bar_co() {
	if(isDistanceZero(ballX, barX, ballY, barY, ballRad) && dx > 0) {
		return 1;
	}
	else if(isDistanceZero(ballX, barX+barWidth, ballY, barY, ballRad) && dx < 0) {
		return 1;
	}
	else
		return 0;
}

// 위의 경우
function check_crash_bar() {
	if(ballX >= barX && ballX <= barX+barWidth && ballY+ballRad >= barY && ballY+ballRad <= barY+3) {

		if(ballX <= barX + barWidth*(1/4)) {
			dx = -Math.sqrt(2.5);
			dy = Math.sqrt(2.5);
		} 
		else if(ballX >= barX + barWidth*(3/4)) {
			dx = Math.sqrt(2.5);
			dy = Math.sqrt(2.5);
		}
		else if(ballX <= barX + barWidth*(1/2)) {
			dx = -1;
			dy = 2;
		}
		else if(ballX <= barX + barWidth*(3/4)) {
			dx = 1;
			dy = 2;
		}
		return 1;
	}
	else {
		return 0;
	}
}
////////////////////////////////////////////////////////////////////////

////////////////////// 벽돌과 공의 충돌 감지 /////////////////////////////
// 모서리의 경우	
function check_crash_blocks_co() {
	for(i=0;i<block.length;i++) {
		for(j=0;j<block[i].length;j++) {
			if(block[i][j] > 0) {
				if(isDistanceZero(ballX, blockX+j*blockWidth, ballY, blockY+i*blockHeight, ballRad) && dx > 0 && dy > 0) { // 왼쪽 위
					if(j > 0 && block[i][j-1] > 0) {
						return 0;
					} else if(i > 0 && block[i-1][j] > 0) {
						return 0;
					} else {
						block[i][j]--;
						return 1;
					}
				}
				else if(isDistanceZero(ballX, blockX+(j+1)*blockWidth, ballY, blockY+i*blockHeight, ballRad) && dx < 0 && dy > 0){ // 오른쪽 위
					if(j < block[i].length-1 && block[i][j+1] > 0) {
						return 0;
					} else if(i > 0 && block[i-1][j] > 0) {
						return 0;
					} else {
						block[i][j]--;
						return 1;
					}
				}
				else if(isDistanceZero(ballX, blockX+j*blockWidth, ballY, blockY+(i+1)*blockHeight, ballRad) && dx > 0 && dy < 0) { // 왼쪽 아래
					if(j > 0 && block[i][j-1] > 0) {
						return 0;
					} else if(i < block.length-1 && block[i+1][j] > 0) {
						return 0;
					} else {
						block[i][j]--;
						return 1;
					}
				}
				else if(isDistanceZero(ballX, blockX+(j+1)*blockWidth, ballY, blockY+(i+1)*blockHeight, ballRad) && dx < 0 && dy < 0){ // 오른쪽 아래
					if(j < block[i].length-1 && block[i][j+1] > 0) {
						return 0;
					} else if(i < block.length-1 && block[i+1][j] > 0) {
						return 0;
					} else {
						block[i][j]--;
						return 1;
					}
				}
			}
		}
	}
	return 0;
}

// 모서리 체크용, 공 중심~블록 모서리(혹은 바 모서리) 거리가 r(반지름)인가?
function isDistanceZero(x1, x2, y1, y2, r) {
	if((x1-x2)**2 + (y1-y2)**2 <= r**2)
		return true;
	else
		return false;
}

// 위 아래의 경우
function check_crash_blocks_tb() {
	for(i=0;i<block.length;i++) {
		for(j=0;j<block[i].length;j++) {
			if(block[i][j] > 0) {
				if(ballX >= blockX+j*blockWidth && ballX <= blockX+(j+1)*blockWidth) {
					if(dy > 0) {
						if(ballY + ballRad + dy >= blockY+i*blockHeight && ballY + ballRad + dy <= blockY+(i+1)*blockHeight) {
							block[i][j]--;
							return 1;
						}
					}
					else if(dy < 0) {
						if(ballY - ballRad + dy >= blockY+i*blockHeight && ballY - ballRad + dy <= blockY+(i+1)*blockHeight) {
							block[i][j]--;
							return 1;
						}
					}
				}
			}
		}
	}
	return 0;
}

// 좌 우의 경우
function check_crash_blocks_lr() {
	for(i=0;i<block.length;i++) {
		for(j=0;j<block[i].length;j++) {
			if(block[i][j] > 0) {
				if(ballY >= blockY+i*blockHeight && ballY <= blockY+(i+1)*blockHeight) {
					if(dx > 0) {
						if(ballX + ballRad + dx >= blockX+j*blockWidth && ballX + ballRad + dx <= blockX+(j+1)*blockWidth) {
							block[i][j]--;
							return 1;
						}
					}
					else if(dx < 0) {
						if(ballX - ballRad + dx >= blockX+j*blockWidth && ballX -ballRad + dx <= blockX+(j+1)*blockWidth) {
							block[i][j]--;
							return 1;
						}
					}
				}
			}
		}
	}
	return 0;
}
////////////////////////////////////////////////////////////////////////

// 점수 계산하는 함수
function getScore() {
	var sum = 0;

	for(i=0;i<block.length;i++) {
		for(j=0;j<block[i].length;j++) {
			if(block[i][j]==0)
				sum++;
		}
	}

	return sum;	
}

///////////////////////// stage 1 light on off ////////////////////////////////////////
// stage 1 light on off 
function lightDrawer() {
	if(!pauseFlag) {
		$("#light-off").show();

     
        $("#storyText").html('');
        // 타이핑 효과 시작
        story_index = 0;
        typeWriter();

        setTimeout(function () {
            $("#light-off").hide();
        }, 500);

		nextLightOff = Math.floor(Math.random() * 3000) + 5000;
	}

	lightHandler = setTimeout(lightDrawer, nextLightOff);
}

var story_index;
function typeWriter() {
	var storyText = "앞이 보이지 않을 것이다 제리 크하하하";
    if (story_index < storyText.length) {
        $("#storyText").html($("#storyText").html() + storyText.charAt(story_index));
        story_index++;
        setTimeout(typeWriter, 50); 
    } else {  
	    setTimeout(function() {
	        $("#storyText").html('');
	    }, 1000); 
	}
}


////////////////////////////// stage 2 code //////////////////////////////////////////
let tomHand = new Image();
tomHand.src = 'tomshead.png'; // replace with the actual path to your Tom's hand image
let handY = (ingame_canvas_height - 20) / 2;
let handX = 50; // Horizontal position of Tom's hand
let handDirection = 1; // Direction of Tom's hand movement (1: right, -1: left)
let handBlocked = false; // Flag to indicate whether the hand is blocked
let ballVelX = 3;

function drawHand() {
    frame.drawImage(tomHand, handX, handY, 50, 40); // Adjust size and position as needed
}

function moveHand() {
    // Move Tom's hand horizontally
    if (!handBlocked) {
        handX += handDirection * 2; // Adjust the movement speed as needed
    }

    // Check if the hand is out of frame
    if (handX < 0) {
        handX = 0;
        handDirection = 1; // Change direction to right
    } else if (handX > ingame_canvas_width - 50) {
        handX = ingame_canvas_width - 50;
        handDirection = -1; // Change direction to left
    }

    // Check collision with the ball
    if (checkCollisionWithHand()) {
        // Handle ball collision with Tom's hand
        handleBallCollisionWithHand();

        // Set the hand as blocked
        handBlocked = true;

        // Reset the hand's position after a short delay
        setTimeout(function () {
            handBlocked = false;
            handX = Math.floor((ingame_canvas_width - 50) / 2);
            handDirection = 1; // Reset direction to right
        }, 500);
    }

    // Draw the hand
    drawHand();
}
// Check for collisions
function checkCollisions() {
  // Check for collisions with the walls
  if (ball.x < 0 || ball.x + ball.width > canvas.width) {
    ballVelX = -ballVelX;
  }
  if (ball.y < 0 || ball.y + ball.height > canvas.height) {
    ballVelY = -ballVelY;
  }

  // Check for collisions with the tomHand object
  if (
    ball.x < tomHand.x + tomHand.width &&
    ball.x + ball.width > tomHand.x &&
    ball.y < tomHand.y + tomHand.height &&
    ball.y + ball.height > tomHand.y
  ) {
    // Reverse the ball's horizontal velocity
    ballVelX = -ballVelX;
  }
}
function checkCollisionWithHand() {
    // Check if the ball collides with Tom's hand
    return (
        ballX + ballRad >= handX &&
        ballX - ballRad <= handX + 50 &&
        ballY + ballRad >= handY &&
        ballY - ballRad <= handY + 40
    );
}

// Initialize ball direction
let ballDirectionX = 1; // Initial horizontal movement
let ballDirectionY = 1; // Initial vertical movement

function handleBallCollisionWithHand() {
    if (checkCollisionWithHand()) {
        // Reverse the ball's direction on the Y-axis
        ballDirectionY *= -1;

        // Calculate the new ball position
        ballX += ballDirectionX;
        ballY += ballDirectionY;
    } else {
        // Reverse the ball's direction on the X-axis
        ballX -= ballDirectionX;

        // Reverse the ball's direction on the Y-axis
        ballDirectionY *= -1;

        // Calculate the new ball position
        ballX += ballDirectionX;
        ballY += ballDirectionY;
    }
}

////////////////////////////////////////////////////////////////////////	

// Stage 3: Tom's attack (add HP element, need to avoid)
let playerHP = 5;
let attacks = [];
const attackWidth = 20;
const attackHeight = 20;
let attackInterval;
var attack = { x: 100, y: 0, width: attackWidth, height: attackHeight, speedY: 2 };

function initAttacks() {
  // Initialize Tom's attacks
  // Attack every 2 seconds
   
  attackInterval = setTimeout(initAttacks, 1513);
}

function drawAttacks() {
  // Draw attacks
  frame.fillStyle = 'red';
  frame.fillRect(attack.x, attack.y, attack.width, attack.height);

  // Update attacks
  updateAttacks();
}

function updateAttacks() {
    attack.y += attack.speedY;
    if (attack.y > ingame_canvas_height) {
      attack.y = 0; // Reset attack position when it goes beyond canvas height
      attack.x = Math.random() * (ingame_canvas_width - attackWidth); // Randomize attack position
    }
}


//    frame.fillRect(barX, barY, barWidth, barHeight);
//   frame.drawImage(bar_jerry, barX+25, barY+10, 50, 50);


function checkAttackCollision() {
    if (
      barX + barWidth - 25 >= attack.x && // Check if the bar collides with the attack
      barX + 25 <= attack.x + attack.width &&
      ingame_canvas_height - 40 <= attack.y + attack.height &&
      ingame_canvas_height >= attack.y
    ) {
      // Decrease player's HP
      playerHP--;
      // Reset the attack position
      attack.y = 0;
      attack.x = Math.floor(Math.random() * (ingame_canvas_width - attackWidth)); // Randomize attack position

      clearTimeout(attackInterval);
      attackInterval = setTimeout(initAttacks, 1513);
    }
}

// Draw HP element
function drawHP() {
  frame.font = '16px Arial';
  frame.fillStyle = 'black';
  frame.fillText('HP: ' + playerHP, 8, 20);
}