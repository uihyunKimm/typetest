import React, { useEffect } from "react"

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share"
import { CopyToClipboard } from "react-copy-to-clipboard"
import {
  KakaoShareButton,
  ShareBox,
  ShareCircle,
} from "../styles/ResultPageStyles"
import { useScript } from "../hook"

const Share = () => {
  const KakaoKEY = process.env.REACT_APP_KAKAO_KEY

  const testURL = "https://graeseocoffee.vercel.app"

  const status = useScript(" https://t1.kakaocdn.net/kakao_js_sdk/v1/kakao.js")

  // kakao sdk 초기화하기
  // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도
  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        //  javascript key 를 이용하여 initialize
        window.Kakao.init(KakaoKEY)
      }
    }
  }, [status, KakaoKEY])

  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: testURL,
    })
  }

  const linkShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "카페 음료테스트",
        url: testURL,
      })
    } else {
      alert("주소가 복사되었습니다!")
    }
  }
  return (
    <ShareBox>
      <KakaoShareButton
        onClick={() => {
          handleKakaoButton()
        }}
      />
      <CopyToClipboard text={testURL}>
        <ShareCircle
          onClick={() => {
            linkShare()
          }}
        >
          URL
        </ShareCircle>
      </CopyToClipboard>
      <FacebookShareButton url={testURL}>
        <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
      </FacebookShareButton>
      <TwitterShareButton url={testURL}>
        <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
      </TwitterShareButton>
    </ShareBox>
  )
}
export default Share