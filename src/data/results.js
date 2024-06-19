const results = {
    ENFP: {
      name: "생레몬스파클링",
      name_text: "톡! 쏘는 긍정적인 에너지로 주위를 밝게 하는",
      description: [
        "생레몬스파클링 같은 당신은 항상 긍정적인 에너지로 주위를 밝게 해요.",
        "사람들과 대화하는 것을 좋아해요. 특히 이야기하는 것도 듣는 것도 다 잘해요.",
        "남들에게는 항상 밝아 보이지만,사실 내면에는 걱정이 많아요.",
        "배려심이 깊어서 주변 사람들의 부탁을 쉽게 거절하지 못하는 편이에요.",
        "내가 좋아하는 것은, 다른 사람들에게도 적극적으로 공유하고 함께 누리고 싶어 해요.",
        "호기심이 많아 주변에 많은 것들에 대해 관심이 있고 재밌어해요.",
      ],
      imageUrl: "/images/menu/espresso-removebg.png",
      match: ["INTJ", "INFJ"],
    },
    ESFJ: {
      name: "라떼",
      name_text: "다정다감, 달콤함과 따듯함이 가득한",
      description: [
        "따듯함이 가득한 라떼 같은 당신은 정이 많고 이야기를 잘 들어줘서, 주변에 사람들이 많아요.",
        "주변 사람이 행복해하는 모습을 보면 나도 함께 행복해져요.",
        "사소한 것에도 의미를 담는 편이어서, 때론 사소한 일에 상처받기도 해요.",
        "사람들과 함께하는 시간도 좋지만, 혼자 있는 시간도 필요해요.",
        "한번 좋아하기 시작한 것에 쉽게 질리지 않아요.",
        "다른 사람의 생각을 잘 이해하고 공감하지만, 옳고 그름이 분명해요.",
      ],
      imageUrl: "/images/menu/espresso-removebg.png",
      match: ["ISFP", "ISTP"],
    },
    ISFJ: {
      name: "카푸치노",
      name_text: "따듯하고 폭신한 거품 같은",
      description: [
        "카푸치노의 푹신한 거품같은 매력을 가진 당신은 다른 사람에게 늘 따듯하고, 정이 많아요.",
        "여러 사람과 다양한 대화보다는 한 사람과 깊은 대화를 선호해요.",
        "해야 할 일을 자주 미루지만, 할 때는 누구보다 확실하게 처리해요.",
        "상대방에게 상처 주지 않기 위해 늘 조심해서 이야기해요.",
        "새로운 것보다는 안정적이고 익숙한 것을 좋아해요.",
        "겉으론 티가 잘 안 나지만, 마음속으로는 많은 감정 변화가 있어요.",
      ],
      imageUrl: "/images/menu/cappuccino.png",
      match: ["ESFP", "ESTP"],
    },
    ISFP: {
      name: "히비스커스 자몽차",
      name_text: "차분하면서도 달콤하고 쌉싸름한",
      description: [
        "히비스커스 자몽차의 따듯함을 가진 당신은 말없이 다정하고 온화하며 주변 사람들에게 친절해요.",
        "지나친 관심은 부담스럽지만, 관심을 받는 것을 좋아해요.",
        "내 의견보다는 주로 다수의 의견을 따르는 편이에요.",
        "책임감이 깊고, 속마음을 잘 이야기하지 않아요.",
        "내 것보다는 남의 것을 챙기는 것에 익숙해요.",
        "지나간 일은 지나간 일로 생각하고 현재의 삶에 집중해요.",
      ],
      imageUrl: "/images/menu/espresso-removebg.png",
      match: ["ESFJ", "ESTJ"],
    },
    ESFP: {
      name: "시그니처 바닐라",
      name_text: "나만의 매력을 맘껏 뽐내는",
      description: [
        "시그니처 바닐라 같이 나만의 매력이 가득한 당신은 항상 분위기를 주도해요.",
        "가만히 있는 것 보다는 새로운 일을 찾아서 하려고 해요.",
        "어색한 분위기를 싫어해서 먼저 이야기를 꺼내는 편이에요.",
        "새로운 사람, 새로운 일 등 새로움을 접하는 것에 두려움이 없어요.",
        "어떤 일을 시작할 때 계획보다는 행동이 앞서요.",
      ],
      imageUrl: "/images/menu/espresso-removebg.png",
      match: ["ISFJ", "ISTJ"],
    },
    INTP: {
      name: "진한 대추고",
      name_text: "깊고 진한 매력의",
      description: [
        "깊고 진한 매력의 대추고 같은 당신은 조용하고 과묵하지만, 관심 있는 것엔 말이 많아져요.",
        "나만의 생각이나 취향이 확고한 편이에요.",
        "다양한 것보다는 하나에 깊게 파고드는 스타일이에요.",
        "대부분의 상황에서 감정적이기보다는 이성적으로 다가가요.",
        "개인적인 시간을 매우 중요하게 여겨요.",
        "항상 배우고 성장하는 것을 추구해요.",
      ],
      imageUrl: "/images/menu/espresso-removebg.png",
      match: ["ENTJ", "ESTJ"],
    },
    INFJ: {
      name: "리얼발로나 쇼콜라떼",
      name_text: "진한 초콜릿의 그윽한 맛",
      description: [
        "리얼발로나 쇼콜라떼 처럼 그윽한 매력의 소유자인 당신은 겉은 차가워 보이지만 속은 따듯한 스타일이에요.",
        "스스로를 돌아보는 시간을 많이 가지며, 나만의 기준이 있어요.",
        "다른 사람의 말에 확실한 근거가 없으면 쉽게 믿지 않아요.",
        "감정을 솔직하게 표현하지 않고 속으로 꾹 참는 편이에요.",
        "외로움을 잘 타지만 혼자 있는 시간도 좋아해요.",
        "유행에 크게 흔들리지 않아요.",
      ],
      imageUrl: "/images/menu/espresso-removebg.png",
      match: ["ENFP", "ENTP"],
    },
    ENFJ: {
      name: "문경 오미자차",
      name_text: "한 알에 다섯 가지 맛, 다채로운 매력의",
      description: [
        "문경 오미자차 처럼 다채로운 매력을 가지고 있는 당신은 다양한 사람들과 함께하는 것을 좋아하고 에너지를 받아요.",
        "인간관계에서 진실함과 신뢰를 중요시해요.",
        "눈치가 빨라서 사람들한테 잘 맞추는 편이에요.",
        "내 생각을 잘 표현하는 만큼 다른 사람의 생각도 잘 들어줘요.",
        "어떤 일이든 긍정적으로 바라보려고 노력해요.",
        "항상 더 나은 삶을 위해서 행동해요.",
      ],
      imageUrl: "/images/menu/espresso-removebg.png",
      match: ["INFP", "ISFP"],
    },
    ESTJ: {
      name: "에스프레소",
      name_text: "커피 본연의 맛",
      description: [
        "에스프레소와 같이 근본의 매력을 가진 당신은 본인이 나서지 않아도 리더가 되는 경우가 많아요.",
        "주로 계획적으로 일을 진행하고 원칙을 중요시해요.",
        "주변 사람에게 정이 많아서, 때론 잔소리가 많아져요.",
        "목표를 정하고 목표를 위해 열정적으로 살아가요.",
        "다른 사람이 일을 못 하면 내가 나서서 마무리해요.",
        "애매모호한 것보다는 확실한 것을 선호해요.",
      ],
      imageUrl: "/images/menu/espresso.png",
      match: ["ISFP", "ISTP"],
    },
    ENTP: {
      name: "민트자몽스파클링",
      name_text: "상큼,달콤하고 시원한 맛",
      description: [
        "민트자몽 스파클링처럼 달콤하고 시원한 당신은 가식이 없고, 겉과 속이 다르지 않아서 솔직해요.",
        "좋아하는 것과 싫어하는 것에 구분이 분명해요.",
        "독립심이 강하고, 혼자서도 잘 돌아다녀요.",
        "어떤 일이든 디테일을 중요하게 생각해요.",
        "일을 시작하는 것은 잘하지만, 끈기는 부족한 편이에요.",
        "대화를 나눌 때 내 의견을 분명하게 전달하려고 해요.",
      ],
      imageUrl: "/images/menu/espresso-removebg.png",
      match: ["INFJ", "INTJ"],
    },
  
    ISTJ: {
      name: "꼼빠냐",
      name_text: "다크한 맛과 크림의 달콤함의 조화",
      description: [
        "꼼빠냐처럼 다크함과 달콤함을 모두 가진 당신은 표현은 부족하지만, 내 사람을 정말 소중하게 여겨요.",
        "혼자 있는 시간을 중요하게 생각하고, 집에서 쉬는 걸 좋아해요.",
        "결정 하나하나에 많은 시간이 필요해요.",
        "계획적인 것을 좋아하고 즉흥적인 것을 좋아하지 않아요.",
        "시간 약속을 지키는 것을 매우 매우 중요하게 생각해요.",
  
        "항상 주위를 정돈되게 유지해요.",
      ],
      imageUrl: "/images/menu/espresso-removebg.png",
      match: ["ESFP", "ESTP"],
    },
    INTJ: {
      name: "콜드브루",
      name_text: "부드럽고 깔끔한 매력의",
      description: [
        "콜드브루처럼 깔끔한 매력의 당신은 감정 기복이 크지 않고, 침착함을 잘 유지해요.",
        "계획을 세울 때 다양한 상황을 고려해서 세우는 편이에요.",
        "고민 상담에 공감보단 주로 해결책을 제공해요.",
        "뭐든지 결론이 확실한 것을 좋아해요.",
        "주변에 주로 무신경하지만, 때로는 집착하는 것이 하나씩 있어요.",
        "원리, 원칙보단 효율성을 중요시 생각해요.",
      ],
      imageUrl: "/images/menu/espresso-removebg.png",
      match: ["ENFP", "ENTP"],
    },
    ISTP: {
      name: "카페모카",
      name_text: "초콜릿의 달콤함과 커피의 쌉싸름한",
      description: [
        "카페모카의 달콤함과 쌉싸름한 매력을 닮은 당신은 독립적이고 자유로워서 간섭받는 것을 좋아하지 않아요.",
        "마음에 없는 소리보다는 솔직하고 정직한 내 생각을 표현해요.",
        "주변에서 일어나는 일을 잘 알고 있지만, 직접 관여하진 않아요.",
        "평소에 조용하지만, 상황에 따라 적극적으로 대화를 주도해요.",
        "다른 사람의 말에 크게 신경 쓰지 않아요.",
        "새로운 일도 곧잘 해내요.",
      ],
      imageUrl: "/images/menu/espresso-removebg.png",
      match: ["ESFJ", "ESTJ"],
    },
    ESTP: {
      name: "아메리카노",
      name_text: "고소하고 묵직한 바디감의",
      description: [
        "아메리카노처럼 묵직한 바디감이 매력인 당신은 과감한 성격으로 표현도 적극적으로 하는 편이에요.",
        "새로운 것을 배우고 경험하는 것을 좋아해요.",
        "주변에 많은 관심을 기울이고, 필요하다면 적극적으로 나서요.",
        "내가 직접 경험하기 전까지는 쉽게 선입견을 가지지 않아요.",
        "새로운 사람과도 금세 친해져요.",
        "백 마디 말보단 행동으로 실천하는 것을 좋아해요.",
      ],
      imageUrl: "/images/menu/espresso-removebg.png",
      match: ["ISFJ", "ISTJ"],
    },
    ENTJ: {
      name: "리얼딸기라떼",
      name_text: "생딸기의 달콤함과 부드러운 우유의 조합",
      description: [
        "리얼딸기라떼처럼 부드러운 매력을 가진 당신은 때론 고집있는 것처럼 보이지만, 내 생각이 틀릴 수도 있음을 인정해요.",
        "감정 표현에 솔직하고 직설적인 편이에요.",
        "뭐든 '열심히'보다는'잘'하는 것이 중요해요.",
        "지루하고 반복되는 것보다 새롭고 변화가 있는 삶이 좋아요.",
        "평소 호기심이 많고 새로운 것을 배우는 걸 좋아해요.",
        "사람들과 다양한 주제에 관해서 이야기 나누는 것을 좋아해요.",
      ],
      imageUrl: "/images/menu/espresso-removebg.png",
      match: ["INFP", "INTP"],
    },
    INFP: {
      name: "밀크티",
      name_text: "홍차의 쌉싸름함과 부드러운 우유의 조합",
      description: [
        "밀크티처럼 따뜻함과 부드러운 매력을 가진 당신은 감수성이 풍부하고, 내 감정에 솔직한 편이에요.",
        "주로 말보다는 글로 내 마음을 전달하는 것에 더 능숙해요.",
        "속상한 일이 있을 때는 혼자만의 시간을 가져서 해결해요.",
        "혼자 있는 걸 좋아하고 다른 사람 일에 관여하지 않아요.",
        "선택지가 여러 가지인 상황에서 결정에 시간이 오래 걸리는 편이에요.",
        "말이나 행동을 할 때 다른 사람의 시선에 신경이 쓰여요.",
      ],
      imageUrl: "/images/menu/espresso-removebg.png",
      match: ["ENFJ", "ENTJ"],
    },
  }
  
  export default results