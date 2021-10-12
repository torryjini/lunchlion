const timeTable = document.querySelector("#time");

const today = new Date
const todaysDate = `${today.getMonth()+1}/${today.getDate()}`

const week = ['일', '월', '화', '수', '목', '금', '토'];
const dayOfWeek = week[today.getDay()];

const schedule = [
    {
        date : "10/12",
        table : "<h2>HTML</h2><h2>--점심시간--</h2><h2>HTML 실습</h2><h2>CSS</h2><h2>CSS 실습</h2><h2>질의시간</h2>"
    },
    {
        date : "10/13",
        table : "<h2>HTML & CSS 리뷰</h2><h2>프로필 제작</h2><h2>--점심시간--</h2><h2>프로필 제작</h2><h2>Bootstrap</h2><h2>Bootstrap 실습</h2><h2>질의시간</h2>"
    },
    {
        date : "10/14",
        table : "<h2>Python 가상환경</h2><h2>--점심시간--</h2><h2>Django가 설치된 가상환경</h2><h2>Django 시작</h2><h2>실습 프로젝트 소개</h2><h2>질의시간</h2>"
    },
    {
        date : "10/15",
        table : "<h2>주간 리뷰 & 질의</h2><h2>--점심시간--</h2><h2>팀 프로젝트</h2>"
    },
    {
        date : "10/18",
        table : "<h2>Git & Github 및 기능들</h2><h2>--점심시간--</h2><h2>Git으로 코드 관리</h2><h2>Django Urls & Views</h2><h2>질의시간</h2>"
    },
    {
        date : "10/19",
        table : "<h2>Url & Views 실습</h2><h2>--점심시간--</h2><h2>MVT</h2><h2>Relational Database<br>(ORM)</h2><h3>개인 컴퓨터 DB 세팅<br>(간단한 Docker 소개)</h3><h2>질의시간</h2>"
    },
    {
        date : "10/20",
        table : "<h2>Django Models & Admin</h2><h2>--점심시간--</h2><h2>Model 실습</h2><h2>Django CRUD & 실습</h2><h2>질의시간</h2>"
    },
    {
        date : "10/21",
        table : "<h2>Django Template(1)</h2><h2>--점심시간--</h2><h2>Django Template(2)</h2><h2>Media File(1)</h2><h2>질의시간</h2>"
    },
    {
        date : "10/22",
        table : "<h2>주간 리뷰 & 질의</h2><h2>--점심시간--</h2><h2>팀 프로젝트</h2><h2>팀별 공유회</h2>"
    },
    {
        date : "10/25",
        table : "<h2>static의 의미</h2><h2>--점심시간--</h2><h3>Django Static File Management</h3><h2>Media File(2)</h2><h2>질의시간</h2>"
    },
    {
        date : "10/26",
        table : "<h2>검색기능</h2><h2>--점심시간--</h2><h2>검색실습</h2><h2>기본보안<br>(CSRF, CORS, HTTPS)</h2><h3>Authentication 이론</h3><h2>질의시간</h2>"
    },
    {
        date : "10/27",
        table : "<h2>로그인 구현</h2><h2>--점심시간--</h2><h2>로그인 구현 실습</h2><h2>소셜 로그인<br>(Naver OAuth2)</h2><h2>질의시간</h2>"
    },
    {
        date : "10/28",
        table : "<h2>Javascript</h2><h2>--점심시간--</h2><h2>jQuery & AJAX</h2><h3>jQuery를 활용하여<br>HTML 작성</h3><h2>질의시간</h2>"
    },
    {
        date : "10/29",
        table : "<h2>주간 리뷰 & 질의</h2><h2>--점심시간--</h2><h2>팀 프로젝트</h2>"
    },
    {
        date : "11/1",
        table : "<h2>Chrome 알림(1)</h2><h2>--점심시간--</h2><h2>Chrome 알림(2)</h2><h2>외부 API 사용</h2><h2>질의시간</h2>"
    },
    {
        date : "11/2",
        table : "<h2>Naver Cloud</h2><h2>--점심시간--</h2><h3>Naver Geolocations</h3><h3>DRF and JS<br>template engines</h3><h3>Authentication 이론</h3><h2>질의시간</h2>"
    },
    {
        date : "11/3",
        table : "<h2>팀별 프로젝트 리뷰</h2><h2>--점심시간--</h2><h2>팀별 프로젝트 리뷰</h2><h2>개발 1차 세션 마무리</h2>"
    },
    {
        date : "11/4",
        table : "<h2>비즈니스 실무</h2><h2>--점심시간--</h2><h2>전체 리뷰 세션</h2>"
    },
    {
        date : "11/5",
        table : "<h2>비즈니스 실무</h2><h2>--점심시간--</h2><h2>전체 리뷰 세션</h2>"
    }
]

console.log(schedule.length)

function schedulrByDate() {
    var i = 0;
    while(i < 36){
        if(schedule[i].date == todaysDate){
            timeTable.innerHTML = 
            `<h1>${todaysDate} (${dayOfWeek})</h1>${schedule[i].table}`
            break
        } else {
            i ++
        }
    }
}

setInterval(schedulrByDate, 100)
