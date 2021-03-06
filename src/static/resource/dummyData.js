
const data = [
  {
    id: '1',
    title: '홍제천 코스',

    location: ['흥남교사거리 -', ' 성산3교'],
    content:
      '왕복 약 6km 홍제천을 따라 월드컵경기장 방향으로 달리는 왕복 코스. 홍제천을 사이에 두고 양쪽으로 길이 있어 날씨나 기분에 따라 코스를 선택할 수 있다. 홍제천을 건널 수 있는 다리가 중간에 어디쯤 있는지 미리 알아두면 총 몇 km를 뛸지 계산하고 반환점을 생각할 때 편하다. 반환점을 염두에 두지 않고 풍경에 빠져 달리다 보면 돌아오는 길이 멀어 힘들 수도 있다.',
    picture: 'img/홍제천.png',
    point: [ {lat: 37.57540324238941, lng: 126.92648561785495}, {lat: 37.5522068927662, lng: 126.891208914151}]
  },
  {
    id: '2',
    title: '여의도 코스',
    location: ['서강대교 남단 여의도 3주차장 -', ' 원효대교 -', ' 여의도샛강공원 -', ' 국회의사당 뒤편'],
    content:
      '약 9km 여의도를 한 바퀴 달린다고 할 때 강변북로에서 바라보는 빌딩숲이나 한강 뷰를 연상하기 쉽지만, 자연 풍경을 고려한 러닝을 한다면 샛강생태공원길이 핵심이다. 이름 그대로 샛강을 따라 자연환경이 잘 조성된 곳으로, 달릴 때마다 계절의 변화를 오감으로 느낄 수 있다.',
    picture: 'img/여의도.png',
    point: [ {lat: 37.53241486263124, lng: 126.92367957058515}, {lat: 37.526533954581545, lng: 126.94454666885821}, {lat: 37.5182407242957, lng: 126.92157871876582}, {lat: 37.53316768330584, lng: 126.91769371565564}]
  },
  {
    id: '3',
    title: '청와대 코스',
    location: ['청와대 -', ' 부암동 -', ' 인왕산로 -', ' 사직공원 -', ' 경복궁'],
    content:
      '약 5km  차량 통행이 많지 않고, 나무가 울창해 서울 도심 같지 않은 풍광이 뛰어나고 공기도 맑은 편이다. 오르막길과 내리막길은 물론 포장도로와 비포장도로가 함께 있어 지루하거나 단조롭지 않은 점도 한몫한다. 달리다가 인왕산에서 내려다보는 서울 풍경도 일품이다.',
    picture: 'img/청와대.png',
    point: [ {lat: 37.58377750780677, lng: 126.97298660715872}, {lat: 37.59208319632871, lng: 126.96720893607039}, {lat: 37.58112565057105, lng: 126.96227769005303}, {lat: 37.575378585960614, lng: 126.9665144005342}, {lat: 37.575813623968166, lng: 126.97726860195188}]
  },
  {
    id: '4',
    title: '청계천 코스',
    location: ['광화문 동아일보사 -', ' JW 메리어트 동대문 스퀘어 서울 왕복'],
    content:
      '약 6km  동아일보 앞 스프링 조형물에서 시작해 청계천 길을 따라 동대문까지 뛰면 약 3km. JW 메리어트 동대문스퀘어 서울에서 다시 동아일보 앞까지 뛰면 왕복 6km를 완주할 수 있다. 사람이 많지 않은 이른 아침에 달리면 맑은 물과 주변에서 흔히 찾기 어려운 새, 물고기를 보며 쾌적하게 러닝을 즐길 수 있다.',
    picture: 'img/청계천.png',
    point: [ {lat: 37.56943468735823, lng: 126.97783651327181}, {lat: 37.5699950682194, lng: 127.00864812605495}]
  },
  {
    id: '5',
    title: '중랑천 코스',
    location: ['월릉교 -', ' 창동교'],
    content:
      '왕복 약 10km 중랑천 인근 거주민을 위해 조성한 도보 겸 러닝용 트랙(산책로)과 자전거도로를 즐길 수 있다. 뛰는 내내 강과 강 주변으로 자라난 수풀을 만끽할 수 있고 중간중간 등장하는 다리 위 차량, 저 멀리 아파트 등을 함께 볼 수 있어 자연적이지도, 도시적이지도 않다. 대부분 동네 주민이 찾는 곳이라 러닝 초보가 뛰기에 부담스럽지 않은 점에도 높은 점수를 주고 싶다.',
    picture: 'img/중랑천.png',
    point: [ {lat: 37.61653776248404, lng: 127.07020219146995}, {lat: 37.652784094207405, lng: 127.05362345577558}]
  },
  {
    id: '6',
    title: '잠실대교 코스',
    location: ['성덕정나들목 -', ' 잠실대교'],
    content:
      '왕복 약 8km  저녁 시간에는 사람이 많지 않고 바람이 선선하게 불어와 상쾌하게 달릴 수 있는 코스. 잠실대교의 오렌지빛, 초록빛 조명이 아름다워 그 풍경을 바라보며 뛰는 맛이 있다. 비가 온 다음 날이면 잠실대교 아래 댐처럼 물이 터지는 곳이 있는데 그 물소리를 듣다 보면 기분 전환에 도움이 된다.',
    picture: 'img/잠실대교.png',
    point: [ {lat: 37.5371356697265, lng: 127.04694414079258}, {lat: 37.5278500375041, lng: 127.08784671898565}]
  },
  {
    id: '7',
    title: '압구정나들목 코스',
    location: ['압구정나들목(압구정토끼굴) -', ' 한남대교'],
    content:
      '왕복 7.2km 압구정나들목에서 시작해 성수대교, 동호대교, 한남대교를 지나 다시 돌아오는 코스는 조명 시설이 잘 정비되고 강변에서 휴식을 취하는 이들이 많아 늦은 밤에도 안심하고 달릴 수 있다. 길이 곧고 넓은 데다 바로 옆 한강 뷰도 일품이다. 특히 동호대교에서 성수대교 사이는 큰 나무들이 많아 자연을 즐기며 달리기에 좋다.',
    picture: 'img/압구정나들목.png',
    point: [ {lat: 37.53090260300984, lng: 127.04200749333775}, {lat: 37.524601979093816, lng: 127.01598480934186}]
  },
  {
    id: '8',
    title: '청담나들목 코스',
    location: ['청담나들목 -', ' 탄천'],
    content:
      '왕복 5km 청담나들목에서 탄천까지의 5km는 한강, 작은 다리, 숲 등 다양하고 아름다운 풍경이 펼쳐져 지루함이 없다. 매일 아침 같은 길을 달리더라도 계절의 변화가 눈에 확 들어오고, 길이 좁아졌다 넓어져 러닝에 더욱 집중할 수 있다.',
    picture: 'img/청담나들목.png',
    point: [ {lat: 37.5217034353753, lng: 127.06227386197219}, {lat: 37.50032042350184, lng: 127.08075763673455}]

  },
  // {
  //   id: '2',
  //   title: '여의도 코스',
  //   location: '서강대교 남단 여의도 3주차장 - 원효대교 - 여의도샛강공원 - 국회의사당 뒤편',
  //   content:
  //     '약 9km 여의도를 한 바퀴 달린다고 할 때 강변북로에서 바라보는 빌딩숲이나 한강 뷰를 연상하기 쉽지만, 자연 풍경을 고려한 러닝을 한다면 샛강생태공원길이 핵심이다. 이름 그대로 샛강을 따라 자연환경이 잘 조성된 곳으로, 달릴 때마다 계절의 변화를 오감으로 느낄 수 있다.',
  //   picture: 'img/여의도.png',
  // },
  // {
  //   id: '3',
  //   title: '청와대 코스',
  //   location: '청와대 - 부암동 - 인왕산로 - 사직공원 - 경복궁',
  //   content:
  //     '약 5km  차량 통행이 많지 않고, 나무가 울창해 서울 도심 같지 않은 풍광이 뛰어나고 공기도 맑은 편이다. 오르막길과 내리막길은 물론 포장도로와 비포장도로가 함께 있어 지루하거나 단조롭지 않은 점도 한몫한다. 달리다가 인왕산에서 내려다보는 서울 풍경도 일품이다.',
  //   picture: 'img/청와대.png',
  // },
  // {
  //   id: '4',
  //   title: '청계천 코스',
  //   location: '광화문 동아일보사 - JW 메리어트 동대문 스퀘어 서울 왕복',
  //   content:
  //     '약 6km  동아일보 앞 스프링 조형물에서 시작해 청계천 길을 따라 동대문까지 뛰면 약 3km. JW 메리어트 동대문스퀘어 서울에서 다시 동아일보 앞까지 뛰면 왕복 6km를 완주할 수 있다. 사람이 많지 않은 이른 아침에 달리면 맑은 물과 주변에서 흔히 찾기 어려운 새, 물고기를 보며 쾌적하게 러닝을 즐길 수 있다.',
  //   picture: 'img/청계천.png',
  // },
  // {
  //   id: '5',
  //   title: '중랑천 코스',
  //   location: '월릉교 - 창동교',
  //   content:
  //     '왕복 약 10km 중랑천 인근 거주민을 위해 조성한 도보 겸 러닝용 트랙(산책로)과 자전거도로를 즐길 수 있다. 뛰는 내내 강과 강 주변으로 자라난 수풀을 만끽할 수 있고 중간중간 등장하는 다리 위 차량, 저 멀리 아파트 등을 함께 볼 수 있어 자연적이지도, 도시적이지도 않다. 대부분 동네 주민이 찾는 곳이라 러닝 초보가 뛰기에 부담스럽지 않은 점에도 높은 점수를 주고 싶다.',
  //   picture: 'img/중랑천.png',
  // },
  // {
  //   id: '6',
  //   title: '잠실대교 코스',
  //   location: '성덕정나들목 - 잠실대교',
  //   content:
  //     '왕복 약 8km  저녁 시간에는 사람이 많지 않고 바람이 선선하게 불어와 상쾌하게 달릴 수 있는 코스. 잠실대교의 오렌지빛, 초록빛 조명이 아름다워 그 풍경을 바라보며 뛰는 맛이 있다. 비가 온 다음 날이면 잠실대교 아래 댐처럼 물이 터지는 곳이 있는데 그 물소리를 듣다 보면 기분 전환에 도움이 된다.',
  //   picture: 'img/잠실대교.png',
  // },
  // {
  //   id: '7',
  //   title: '압구정나들목 코스',
  //   location: '압구정나들목(압구정토끼굴) - 한남대교',
  //   content:
  //     '왕복 7.2km 압구정나들목에서 시작해 성수대교, 동호대교, 한남대교를 지나 다시 돌아오는 코스는 조명 시설이 잘 정비되고 강변에서 휴식을 취하는 이들이 많아 늦은 밤에도 안심하고 달릴 수 있다. 길이 곧고 넓은 데다 바로 옆 한강 뷰도 일품이다. 특히 동호대교에서 성수대교 사이는 큰 나무들이 많아 자연을 즐기며 달리기에 좋다.',
  //   picture: 'img/압구정나들목.png',
  // },
  // {
  //   id: '8',
  //   title: '청담나들목 코스',
  //   location: '청담나들목 - 탄천',
  //   content:
  //     '왕복 5km 청담나들목에서 탄천까지의 5km는 한강, 작은 다리, 숲 등 다양하고 아름다운 풍경이 펼쳐져 지루함이 없다. 매일 아침 같은 길을 달리더라도 계절의 변화가 눈에 확 들어오고, 길이 좁아졌다 넓어져 러닝에 더욱 집중할 수 있다.',
  //   picture: 'img/청담나들목.png',
  // },
];


export default data;
