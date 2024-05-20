$(window).on("load", function () {
	
	////////////      MAIN-MENU EVENT        ///////////

	$('#main-menu-start-btn').click(function () {	// initialize start button
		$('#main-menu').hide();
		$('#ingame').show();
	})

	$('#main-menu-setting-btn').click(function () {
		$('#main-menu').hide();
		$('#setting-page').show();
	});

	////////////////////////////////////////////////////

	////////////      STAGE-MENU EVENT      ////////////

	setInterval(function () {
		if($("#stage-menu-title > img").attr('src') == 'stageTitle1.png')
			$("#stage-menu-title > img").attr('src','stageTitle2.png')
		else
			$("#stage-menu-title > img").attr('src','stageTitle1.png')
	}, 1000);
	

	$("#stage1").click(function () {
		$("#ingame").show();
		$("#stage-menu").hide();
		stage_level = 1;

		// 스테이지 1 시작 전에 스토리 출력





		init_stage();
	});

	$("#stage2").click(function () {
		$("#ingame").show();
		$("#stage-menu").hide();
		stage_level = 2;
		init_stage();
	});

	$("#stage3").click(function () {
		$("#ingame").show();
		$("#stage-menu").hide();
		stage_level = 3;
		init_stage();
	});

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
	$(document).keydown(function (e) {
		if(e.keyCode == 27) {
			if(!pauseFlag)
				// 게임 일시정지 시간 측정 시작
				pause_start = Number(new Date());
				// 팝업 창 열리는 처리




			else {
				// 팝업 창 닫히는 처리




				// 멈추는 거 풀 때 일시정지 시간 측정 종료
				pause_end = Number(new Date());
				pause_cum += Math.floor((pause_end - pause_start)/1000);
			}
			pauseFlag = !pauseFlag;
		}
		else
			keyState[e.keyCode] = true;
	});
	$(document).keyup(function (e) {
		if(e.keyCode != 27)
			keyState[e.keyCode] = false;
	});	

	//


	// 출구 위치 랜덤 생성은
	// 초기화 될 때마다 함께 되도록

	////////////////////////////////////////////////////

	//////////      GAME SETTING EVENT       ///////////

	// (게임 환경 설정 관련 코드 작성)
	// (인게임 환경 설정은 재시작도 있어야 함)

	////////////////////////////////////////////////////

	//////////////      SCORE PART       ///////////////

	// (게임 점수 출력시 이벤트 처리)

	$("#score-stage-btn").click(function () {
		$("#ingame").hide();
		$("#stage-menu").show();
	});

	////////////////////////////////////////////////////



});

var keyState = {};
function barController() {
	if(!pauseFlag) {
		if(keyState[37] && barX > 0){
			barX-=4;
		}
		else if(keyState[39] && barX < ingame_canvas_width-barWidth) {
			barX+=4;
		}
	}
}

// stage info
var stage_level = 1;

// pause info
var pauseFlag = false;

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
var dx = 1;
var dy = 1;
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
cheese_block.src = 'cheese1.jpg';

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

// 상태 초기화 : 스테이지 바뀔 때, 재시작할 때, 등등..
function init_stage() {

	// bar init
	barX = 375;
	barY = 450;
	bar = setInterval(barController, frameRate);

	// ball init
	ballX = 300;
	ballY = 300;
	dx = 1;
	dy = 1;

	// block init
	block = [
	[1, 1, 1, 1, 3, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	];

	// hole init
	var holeX = Math.floor(Math.random() * 721);
	console.log(holeX)
	var hole = $("#hole");
	hole.attr('src', 'hole.png');
	hole.css({position:'absolute', top:'54px', left:`${50+holeX}px`});

	// score init
	start_time = Number(new Date());
	pause_cum = 0;

	switch (stage_level) {
	case 1:

		ball = setInterval(function () {
			if(holeX <= ballX && ballX <= holeX + holeWidth && ballY-ballRad <= 0) {
				clearInterval(ball);
				clearInterval(bar);
				// 1단계 클리어 처리
				// 스토리 진행 후
				// 점수창 출력
				// 점수창
				curr_time = Number(new Date());
				clear_time = Math.floor((curr_time - start_time)/1000) - pause_cum;
				$("#score").slideDown('slow');
				$("#score-result").html(`clear time : ${clear_time} sec<br><br>number of cheese: ${getScore()}`);










				setTimeout(function () {
					$("#score").fadeOut('fast');
					stage_level = 2;
					pauseFlag = false;
					init_stage();
				}, 5000);
			} else if(ballY+ballRad >= ingame_canvas_height) {
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
		ball = setInterval(function () {
			if(holeX <= ballX && ballX <= holeX + holeWidth && ballY-ballRad <= 0) {
				clearInterval(ball);
				clearInterval(bar);
				// 2단계 클리어 처리
				curr_time = Number(new Date());
				clear_time = Math.floor((curr_time - start_time)/1000);
				$("#score").slideDown('slow');
				$("#score-result").html(`clear time : ${clear_time} sec<br><br>number of cheese: ${getScore()}`);










				setTimeout(function () {
					$("#score").fadeOut('fast');
					stage_level = 3;
					pauseFlag = false;
					init_stage();
				}, 5000);
			} else if(ballY+ballRad >= ingame_canvas_height) {
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
		ball = setInterval(function () {
			if(holeX <= ballX && ballX <= holeX + holeWidth && ballY-ballRad <= 0) {
				clearInterval(ball);
				clearInterval(bar);
				// 3단계 클리어 처리
				curr_time = Number(new Date());
				clear_time = Math.floor((curr_time - start_time)/1000);
				$("#score").slideDown('slow');
				$("#score-result").html(`clear time : ${clear_time} sec<br><br>number of cheese: ${getScore()}`);

				setTimeout(function () {
					// stage_level = 1;
					$("#score").fadeOut('fast');
					$("#ingame").hide();
					$("#stage-menu").show();
					pauseFlag = false;
				}, 5000);



			} else if(ballY+ballRad >= ingame_canvas_height) {
				clearInterval(ball);
				clearInterval(bar);
				setTimeout(function () {
					init_stage();
				}, 1000);
			}
			draw();
		}, frameRate);
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
	frame.fillStyle = "black";
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
function drawBlocks() {
	for(i=0;i<block.length;i++) {
		for(j=0;j<block[i].length;j++) {
			if(block[i][j] > 0) {
				frame.drawImage(cheese_block, blockX+j*blockWidth, blockY+i*blockHeight, blockWidth, blockHeight);
			}
		}
	}
}

// 여러번 부숴야 할수록 색깔이 어둡게 표현하기 위함 -> 이미지 주소 배열로 바꾸기
var numForColor = ['ff', 'bb', '5f', '44', '22'];
function getBlockColor(num) {
	if(num == 1) {
		return 'white';
	} else {
		return '#0000' + numForColor[num-2];
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
			dx = -1;
			dy = 1;
		} 
		else if(ballX >= barX + barWidth*(3/4)) {
			dx = 1;
			dy = 1;
		}
		else if(ballX <= barX + barWidth*(1/2)) {
			dx = -0.5;
			dy = 1;
		}
		else if(ballX <= barX + barWidth*(3/4)) {
			dx = 0.5;
			dy = 1;
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
				if(ballX >= blockX+j*blockWidth && ballX <= blockX+(j+1)*blockWidth && ((ballY+ballRad >= blockY+i*blockHeight && ballY+ballRad <= blockY+i*blockHeight+1) || (ballY-ballRad >= blockY+(i+1)*blockHeight-1 && ballY-ballRad <= blockY+(i+1)*blockHeight))) {
					block[i][j]--;
					return 1;
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
				if(ballY >= blockY+i*blockHeight+1 && ballY <= blockY+(i+1)*blockHeight-1 && ((ballX+ballRad >= blockX+j*blockWidth && ballX+ballRad <= blockX+j*blockWidth+1) || (ballX-ballRad >= blockX+(j+1)*blockWidth-1 && ballX-ballRad <= blockX+(j+1)*blockWidth))) {
					console.log(ballX, blockX+(j+1)*blockWidth)
					console.log(ballY)
					block[i][j]--;
					return 1;
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