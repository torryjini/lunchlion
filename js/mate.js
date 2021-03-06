const mateList = document.getElementById("mate-list");
const mateBtn = document.getElementById("restbtn")

const allMembers = [
    "강명성", "강지수", "김동낙", "김명진",
    "김지민", "김지화", "김진욱", "김태완",
    "김현호", "박기둥", "박상우", "박지운",
    "박지원", "배승현", "서수정", "오수민",
    "유승연", "이동진", "이병곤", "이선문",
    "이재관", "이지원", "이학임", "장다예",
    "장익제", "전세환", "전웅섭", "전준수",
    "정승연", "주예슬", "최소영", "황현태"
]

const members = [
    '김현호', '강명성', '장익제', '장다예', '전준수', '김지화', '이병곤', '박상우', '서수정', '김동낙', '김태완', '배승현', '박지원', '김명진'
]

let restMembers = allMembers.filter(x => !members.includes(x));

const randomMates = []

const mates = {}

function randomMembers() {
    while(randomMates.length < members.length){
        const mate = members[Math.floor(Math.random() * members.length)]
        if(randomMates.indexOf(mate) == -1){
            randomMates.push(mate)
        }
    }
    var i = 0;
    while(i < randomMates.length){
        const arrayInObject = new Array(randomMates[i], randomMates[i+1]);
        arrayInObject.sort();
        mates[i] = arrayInObject;
        i = i + 2;
    }
    console.log(mates)
}

//randomMembers()

const matesThisWeek = {
    //3주차
    // 0: ['박기둥', '전준수'],
    // 2: ['서수정', '오수민'],
    // 4: ['김동낙', '장다예'],
    // 6: ['강명성', '이동진'],
    // 8: ['박지원', '이병곤'],
    // 10: ['김지민', '김현호'],
    // 12: ['김진욱', '장익제'],
    // 14: ['박지운', '황현태'],
    // 16: ['김명진', '김태완'],
    // 18: ['배승현', '전웅섭'],
    // 20: ['김지화', '이재관']
    //4주차
    // 0: ['박기둥', '배승현'],
    // 2: ['서수정', '정승연'],
    // 4: ['강명성', '박지원'],
    // 6: ['이지원', '황현태'],
    // 8: ['장다예', '장익제'],
    // 10: ['김지화', '전준수'],
    // 12: ['김태완', '이병곤']
    //5주차
    0: ['김동낙', '장다예'],
    2: ['김태완', '서수정'],
    4: ['배승현', '전준수'],
    6: ['김지화', '장익제'],
    8: ['강명성', '김명진'],
    10: ['김현호', '이병곤'],
    12: ['박상우', '박지원']
}

var j = 0;
var nthWeek = 5;
mateList.innerHTML = `<span>${nthWeek}주차 식사 랜덤 매칭입니다.</span><br>`
while(j < Object.keys(matesThisWeek).length * 2) {
    mateList.innerHTML += `<span>${matesThisWeek[j][0]} - ${matesThisWeek[j][1]}</span><br>`
    j = j + 2
}
mateList.innerHTML += "<p>*이미 식사하신 분이면 자유롭게 바꾸셔도 됩니다.<br>혹시 매칭 신청하지 않으셨다면?</p>"

function restMemberRandom() {
    const restMember = restMembers[Math.floor(Math.random() * restMembers.length)]
    swal(restMember + " 님", "","")
}

mateBtn.addEventListener("click", restMemberRandom)