"use client";
import React, { useState } from "react";
import HowtoCard from "../molecules/HowtoCard";

// next
import Link from "next/link";
// import Image from "next/image";

// components

const Howto = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <div className="w-screen py-20 sm:py-36">
      <div id="method" className="w-11/12 mx-auto">
        <h1 className="text-4xl mb-10 sm:text-4xl text-center">METHOD</h1>
        <p className="text-center text-sm font-serif mb-10">
          <span
            className="text-blue-500 hover:text-blue-600 hover:border-b"
            onClick={togglePopup}
          >
            力動的心理療法
          </span>
          をベースにしたAigisのカウンセリング手法をご紹介します。
        </p>
        {/* ポップアップ */}
        {isPopupOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={togglePopup}
          >
            <div
              className="relative w-11/12 max-w-lg bg-white p-6 rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()} // 内部クリックでは閉じない
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
                onClick={togglePopup}
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                力動的心理療法とは？
              </h2>
              <p className="text-gray-700 whitespace-pre-line">
                フロイトの精神分析理論を基盤にした心理療法の一つ。
                心の深層にある無意識に焦点を当て、
                個人の感情、行動がどのように形成されるかを探求するもの。
                「力動」とは安定を求める動きと変化しようとする、不安定な動きの拮抗のこと。
                人の無意識には、生きたい、破壊したいなどの欲動が備わっており、
                この欲動により人を好きになったり、憎んだりの対人関係が生じる。
                一方で、この欲動をコントロールする力も働き、
                この2つの拮抗状態によって人は機能している。
                自分が一体どう生きているのかを知るため、
                この安定、不安定の拮抗状態をカウンセラーと俯瞰して見つめる。
                欲動が強いのか、固まっていて苦しいのか、
                自分の防衛本能やクセを自分自身で気付くことで、
                「どう生きるか」を見つける心理療法。
              </p>
            </div>
          </div>
        )}
        {/* YouTube */}
        <div className="w-full sm:w-6/12 mb-20 h-auto mx-auto bg-red-100">
          <iframe
            src="https://www.youtube.com/embed/TJpuUdZs5UA?rel=0&modestbranding=1&controls=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              aspectRatio: "16/9",
              border: "none",
            }}
          ></iframe>
        </div>
        {/* 具体的なカウンセリング方法 */}
        <div className="block w-11/12 sm:w-9/12 mx-auto mb-10 sm:flex sm:justify-between">
          <HowtoCard
            id="howtocard-1"
            title="無意識の反復から抜け出す"
            text1="人は無意識のうちに安定を求める生き物で、同じことを強力に反復させる性質がある。"
            text2="人の無意識は幼少期の外傷体験、親子関係、本能的な願望など、様々なタブーで構成されており、自身に同じ痛みを与えないよう、防衛体制に入るから。"
            text3="私たちの行動、判断の大部分は無意識によって決定されると言われている。"
            subText="無意識が変化することで、自分のコントロールを超えるような変化が起こり始め、思い描く現実が自動的に創られるようになる。"
            caseText="身体が弱く、大事な日に限って体調を崩す体質が悩みのクライアント様。思えば高校受験、大学受験の時も高熱が出て、第一志望に行けなかった。しかしセッションを通して、上手くいかなかったこと全て、体調不良のせいにしていたことに気が付いた。体調を崩すことが、自信のない自分にとっての防衛反応だったのだ。「悪」だと思い込んでいた体調不良が、実は言い訳として、逃げ道として自分を守っていたのだと気付いた時、涙が止まらなかった。その後、体調不良は完全に改善され、志望していたプロジェクトにアサイン、現在も活躍している。"
          />
          <HowtoCard
            id="howtocard-2"
            title="Solitude(必要な孤独・静寂)と向き合う"
            text1="混沌とした思いや欲望、隠しておきたい気持ち、ここを「Solitude」と呼んでいる。こここそがあなた本来の潜在能力の源泉。"
            text2="しかし、私たちの生きる0か1かの社会では、なんとなく感じる繊細で曖昧な感覚、違和感は、「大したことでないもの」とされ、無意識下に閉じ込められる。"
            text3=""
            subText="暗闇の奥底に長年埋もれていた宝の山を、使える力に変える。子供の頃のように内側からエネルギーが湧き、塞がっていた視界が晴れるように道が開ける。"
            caseText="事業承継の相談で来られたクライアント様。弟との相続取り決めが一向に決まらないと悩んでいた。具体的な方法論はコンサルの方と相談できても、私的な問題である家族関係には皆触れられずにいた。それまで彼は、周囲から見ても弟と仲良く、本人もそのように自覚していた。しかし、セッションの中でSolitudeと向き合っていくうちに、幼い頃の両親の一言がきっかけで、弟に対して苦手意識を抱いていることに気がついた。この感情を自覚した時、最初はショックを受け、次第に頭が整理され、セッションを終える頃には心の底から弟を愛せていた。その後二人の相続取り決めは、不思議なほどすんなりと決まった。"
          />
          <HowtoCard
            id="howtocard-3"
            title="Whyのアプローチ"
            text1="問題を対外的な「How to」で解決するのではなく、意識/在り方を分析する「Why」のアプローチ。"
            text2="その悩みは、意識/在り方の問題が表層化したもの。「How to」による対処療法のみでは、形を変えて別の問題が発生する。「Why」のアプローチにより真因を解決する。"
            text3=""
            subText="組織は、トップの内なる「質」の変化によって真に成長する。無関係と思われていた問題までもが自然と改善され、見える景色や流れが劇的に変化する。"
            caseText="部内でも期待の星として頑張ってきたクライアント様。慕っている上司にも応援され、次こそはと頑張っていても、なぜか一向に昇格できない。この繰り返しのたびに、「頑張りが足りない」と自分を責めてきたが、あまりにも苦しくなっていた。セッションを進める中で、実は全幅の信頼を寄せていたこの上司が、無意識では「いつまでも悩める可愛い部下でいてほしい」と思っていたことに気付いた。自分を越えてほしくなかったのだ。この解釈ができたことで、これまでとは全く違う頑張り方ができるようになり、今では役員を任されている。"
          />
        </div>
        {/* icon */}
        <div className="w-full text-center">
          {/* <img className="w-9 h-9 mx-auto" src="/images/bad.png" alt="bad" /> */}
          <p className=" block font-thin text-6xl mx-auto">+</p>
        </div>
        <div className="sm:w-9/12 mx-auto">
          {/* sub content */}
          <h2 className="text-2xl font-semibold mt-10 mb-2 sm:mt-36 font-serif sm:text-3xl">
            身体からのアプローチ
          </h2>
          <span className="block w-20 h-[1px] mb-5 bg-[var(--main-green)]"></span>
          <p className="text-base text-gray-800 h-auto mb-3 font-serif">
            心と身体は密接に関係しており、分けて考えることができません。
            <br />
            Aigisは意識のみならず、双方向からのサポートを行うため、
            独自で厳選した企業様と連携し、
            オーダーメイドサポートをご提供します。
          </p>
          <h2 className="text-2xl font-medium mt-10 mb-2 sm:mt-20 font-serif sm:text-3xl">
            Partner
          </h2>
          <span className="block w-20 h-[1px] mb-5 bg-[var(--main-green)]"></span>
          <p className="text-base text-gray-800 h-auto mb-2 font-serif">
            シンバイオシス・ソリューションズ株式会社様
            <br />
            〜心と身体を繋ぐのは「腸」〜
            <br />
            <br />
            特に「第二の脳」と呼ばれている腸の環境は、
            様々な病気に関係し、意識の状態を左右します。
            <br />
            腸内細菌は重さにして約1.5kgあると言われており、
            これは最大の人の臓器です。（心臓0.3kg、肝臓0.9kg）
            <br />
            最近の研究結果でも、あらゆる疾病との強い関連性が明らかになっています。
            <br />
            クライアント様の身体を分析し、摂るべき栄養素や生活習慣を見直します。
            <br />
            <br />
            シンバイオシスソリューションズ株式会社： <br />
            ３万人超の腸内細菌叢データベースをもとに、疾病のリスク、うつ病や認知障害など、
            心的問題と腸との関係解明を研究している機関。
            <br />
          </p>
          <Link
            className="w-full"
            href="https://www.symbiosis-solutions.co.jp/"
          >
            <p className="text-sm text-blue-500 ">
              https://www.symbiosis-solutions.co.jp/
            </p>
          </Link>
        </div>
      </div>
      {/* 休憩画像の挿入 */}
      <div className="w-11/12 sm:w-5/12 mt-20 sm:mt-48 h-auto mx-auto flex justify-center items-center">
        <img className="w-full" src="/images/yacht.jpg" alt="yacht" />
      </div>
    </div>
  );
};

export default Howto;
