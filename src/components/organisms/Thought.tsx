import React from "react";

// components

const Thought = () => {
  return (
    <div className="py-24">
      {/* static Image */}
      <div className="w-full mb-20">
        <img
          className="w-full h-64"
          src="/images/sea1.png"
          alt="thought-static-image"
        />
      </div>
      {/* main */}
      <div className="w-11/12 mx-auto">
        {/* title */}
        <h1 className="text-5xl mb-1 sm:text-5xl text-center">Thought</h1>
        <p className="text-center text-base mb-16 font-semibold text-[var(--main-green)] sm:text-xl">
          想い
        </p>
        <p className="text-center text-base font-semibold leading-10">
          ⾃分の本当の気持ちや欲望、隠しておきたい思いなど⾃分しか知らない、⾃分だけの深遠な秘境。
          <br />
          ここが「Solitude（必要な孤独・静寂）」です。
          <br />
          ここに向き合うには苦痛が伴い、相当の勇気と覚悟が必要です。
          <br />
          なぜならこれは、⾃⾝の弱さと正⾯から向き合い、深く悩み、しっかり落ち込む⾏為も含まれるからです。
          <br />
          そこまでしてなぜこのアプローチが必要なのか。
          <br />
          それは、ここにこそパワーの源泉があると科学的にも証明されているからです。
          <br />
          暗闇や孤独の中に⻑年埋もれている宝の⼭を、使えるパワーに変える。
          <br />
          その伴⾛をするのがAigisのセッションです。
          <br />
          このようなアプローチなくして、⽿障りの良いカウンセリングのみでは、本質的改善は難しかったというケースに、私はこれまでに幾度となく遭遇してきました。
          <br />
          Aigisは、普段隅に追いやられてしまうような些細な感情であったり、無意識の思い込み、様々な⼈間関係としっかり向き合う場となります。
          <br />
          私自身、カウンセラーとして長年多くの「影響を受ける側の方々（従業員、子供など）」と関わってきました。
          <br />
          しかし、いくら彼らを癒しても、トップ層の影響如何でまた新たな問題が生まれてしまいます。
          <br />
          立場、権力などいわゆる影響力のある方々は、その意識/在り方が知らぬ間に周囲の方々の人生、社会に多大な影響を及ぼしているのです。
          <br />
          そしてその影響は、瞬時ではなく時間差を伴いじわじわと、様々な問題に形を変えて現れます。
          <br />
          そのため、社会の⾵潮は柔らかくなれど、良い社会、組織をつくるためにはトップ層は依然として、強い⼼を持って孤独と共に進まなくてはいけません。
          <br />
          Aigisは、人と社会を幸せにする社会的影響力の大きな方々の、勇気と覚悟に伴走します。
        </p>
      </div>
    </div>
  );
};

export default Thought;
