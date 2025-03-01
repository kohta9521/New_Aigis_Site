import React from "react";

// components
import ClientCard from "../molecules/ClientCard";

const Client = () => {
  return (
    <div className="w-full h-auto pt-10 pb-0">
      <div className="w-10/12 mx-auto">
        <h1 className="text-5xl mb-10 sm:text-5xl text-center">Client Voice</h1>
        <div className="w-full h-auto mx-auto sm:w-10/12 sm:flex sm:justify-between">
          <ClientCard
            id="card-1"
            title="真の企業再建 (コンサル会社経営者 40代)"
            desc="企業も人です。何よりトップの人格で変わります。破綻する企業の大半のトップのマインドは、言葉を選ばずに言えば、破綻する企業のマインドなのです。だからこそ、Aigisが提供されている自己分析的アプローチは非常に有効であり、それなしに真の再建はできないと私は確信しました。ただ残念ながら私どものよく知る中小企業の経営者は、自己変容に対して非常に抵抗感を持つ方も多く、自己分析に対するリテラシーはまだまだ低いのが現実です"
          />
          <ClientCard
            id="card-2"
            title="プライベートにも影響 (大手企業人事責任者 40代)"
            desc="深刻で、道が塞がれていると思っていた感覚が、しばらく経つと頭が整理され、そのうちその悩みが笑えるくらい軽い気持ちに変化して行った。その新たな感覚で仕事をすると、今までとは全く違う視点からアイディアが湧いてきて、随分と思い切った軌道 修正や組織改革に着手できるようになった。サポートいただくようになってから次第に、高校生の娘との関係や、ゴルフのイップスまでもが改善されたのは大変驚きだった。"
          />
        </div>
        <div className="w-full h-auto mx-auto sm:w-10/12 sm:flex sm:justify-between">
          <ClientCard
            id="card-3"
            title="V字回復と過去最高売上（飲食会社経営者 50代)"
            desc="会社の問題や行く手を遮っていたのは、自分自身の感覚だったんだと自然に気付けたことが驚きでした。関係ないと思っていた プライベートな部分と仕事が、実はこんなに影響し合い、繋がっているということも知らなかった。気付いた瞬間から見える景色 が180度変わりました。 下降線だった業績も、セッション後から継続してV字に回復し、過去最高売上を記録しました。"
          />
          <ClientCard
            id="card-4"
            title="真澄さんのお人柄（サービス業経営者 30代）"
            desc="驚くほどの大胆さと繊細な優しい感覚を持ち合わせた方。寄り添いながらも、共感を超えた、人の奥まで分かって見てくれてい るような感覚を覚えました。あくまで相手の立場に立って、俯瞰して分析されていたのは流石だと思いました。カウンセラーは もっと優しいと思っていたけれど、厳しかった。でもそれだけ真剣さを感じました。心理療法を受けている間、空間を共有するだ けで心が晴れていく、前に進んでいける、先が見える、安心する、そんな感覚の時間でした。 修正や組織改革に着手できるようになった。サポートいただくようになってから次第に、高校生の娘との関係や、ゴルフのイップスまでもが改善されたのは大変驚きだった。"
          />
        </div>
      </div>
    </div>
  );
};

export default Client;
