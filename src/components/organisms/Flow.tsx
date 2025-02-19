import React from "react";

const Flow = () => {
  return (
    <div className="w-full h-auto py-24 bg-white">
      <div className="w-10/12 mx-auto">
        {/* タイトル */}
        <h1 className="text-4xl mb-10 sm:text-4xl sm:text-center">
          SESSION FLOW
        </h1>

        {/* メインフロー */}
        <div className="w-full text-center items-center sm:items-top   text-gray-800">
          {/* 初回面談 */}
          <div className="w-full text-center mb-5">
            <h2 className="font-bold text-lg">初回面談</h2>
            <p className="text-sm">
              初回のヒアリングは無料で行わせていただきます。
              <br />
              その後のセッションに進むかどうか、お互い相談します。
            </p>
          </div>

          {/* 矢印 (モバイル: ↓ / PC: →) */}
          <span className=" lg:block text-2xl">↓</span>

          {/* セッションセットアップ */}
          <div className="text-center my-5">
            <h2 className="font-bold text-lg">セッション</h2>
            <p className="text-sm">10ヶ月（40回）</p>
            <p className="text-sm">各週1回 50分</p>
          </div>

          {/* 矢印 (モバイル: ↓ / PC: →) */}
          <span className=" lg:block text-2xl">↓</span>

          {/* 声の録音 */}
          <div className="text-center my-5">
            <h2 className="font-bold text-lg">声の納品</h2>
            <p className="text-sm">
              オプションでセッション最終回に実施。
              <br />
              10ヶ月かけてじっくり作り上げた新たな意識を、生の声として保存。
              <br />
              熱々のうちに対象者に落とし込むことが可能です。
            </p>
          </div>

          {/* 矢印 (モバイル: ↓ / PC: →) */}
          <span className=" lg:block text-2xl">↓</span>

          {/* フォローアップ */}
          <div className="text-center my-5">
            <h2 className="font-bold text-lg">フォローアップ</h2>
            <p className="text-sm">
              月2回まで
              <br />
              各50分
              <br />
            </p>
            <p className="text-sm">
              ご希望のタイミングで行います。
              <br />
              さらに安定して効果を追求される方は、
              セッションの継続をおすすめします。
            </p>
          </div>
        </div>

        {/* 画像と説明テキスト */}
        <div className="mt-10 flex flex-col lg:flex-row items-end lg:justify-center gap-3">
          {/* 画像 */}
          <div className="w-full lg:w-[13%]">
            <img
              src="/images/upgrade.png"
              alt="Session"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* テキスト */}
          <div className="w-full lg:w-2/5 bg-gray-100 p-6 rounded-lg shadow-md text-center lg:text-left">
            <p className="text-gray-800 text-sm">
              クライアント様の些細な表情、仕草などあらゆる情報を捉えて、
              <br />
              その瞬間に最適なアプローチを行うため、
              全てのセッションは対面形式となります。
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flow;
