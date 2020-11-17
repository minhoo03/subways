window.addEventListener('DOMContentLoaded', () => {
    // JSON : 데이터 교환 형식
    const sandwiches = 
        [{
            "type": "pm",
            "img": "https://www.subway.co.kr/images/menu/sandwich_pm15.png",
            "ko_title": "치지 갈릭 미트볼",
            "en_title": "Cheesy Garlic Meatbal",
            "summary": "마늘향 가득한 부드러운 갈릭버터와<br>써브웨이 비프 미트볼의 만남!",
            "label": "NEW",
            "kcal": "558 kcal",
            "view_id": "pm15"
        }, {
            "type": "pm",
            "img": "https://www.subway.co.kr/images/menu/sandwich_pm13.jpg",
            "ko_title": "K-바비큐",
            "en_title": "K-BBQ",
            "summary": "써브웨이 최초의 코리안 스타일 샌드위치!<br>한국식 마늘, 간장 그리고 은은한 불맛까지!",
            "label": "NEW",
            "kcal": "378 kcal",
            "view_id": "pm13"
        }, {
            "type": "pm",
            "img": "https://www.subway.co.kr/images/menu/sandwich_pm14.jpg",
            "ko_title": "얼터밋",
            "en_title": "Altermeat",
            "summary": "고기없이 고기맛을 낸다고?<br>써브웨이에서 제안하는 또다른 특별한 선택!",
            "label": "NEW",
            "kcal": "472 kcal",
            "view_id": "pm14"
        }]

        const listSandwich = () => {
            // for(var i = 0; i >= sanwiches.length; i++)
            for(const sandwich of sandwiches){
                console.log(sandwich)
            }
        }
        listSandwich()
})