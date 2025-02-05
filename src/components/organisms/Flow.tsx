import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Flow = () => {
  return (
    <div className="w-full h-auto py-24 bg-white">
      <div className="w-10/12 mx-auto">
        {/* タイトル */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-10">
          SESSION FLOW
        </h1>

        {/* メインフロー */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-gray-800">
          {/* 初回面談 */}
          <div className="text-center lg:text-left">
            <h2 className="font-bold text-lg">初回面談</h2>
            <p className="text-sm">
              初回のヒアリングは無料で行わせていただきます。
              <br />
              その後のセッションに進むかどうか、お互い相談します。
            </p>
          </div>

          {/* 矢印 (モバイル: ↓ / PC: →) */}
          <IoIosArrowDown className="text-2xl lg:hidden text-gray-500" />
          <span className="hidden lg:block text-2xl">→</span>

          {/* セッションセットアップ */}
          <div className="text-center lg:text-left">
            <h2 className="font-bold text-lg">セッションセットアップ</h2>
            <p className="text-sm">10回（40分）</p>
            <p className="text-sm">各週1回 50分</p>
          </div>

          {/* 矢印 (モバイル: ↓ / PC: →) */}
          <IoIosArrowDown className="text-2xl lg:hidden text-gray-500" />
          <span className="hidden lg:block text-2xl">→</span>

          {/* 声の録音 */}
          <div className="text-center lg:text-left">
            <h2 className="font-bold text-lg">声の納品</h2>
            <p className="text-sm">
              オプションでセッション最終回に実施
              <br />
              10ヶ月かけてじっくり作り上げた新たな意識を、生の声として保存。
              <br />
              熱々のうちに対象者に落とし込むことが可能です。
            </p>
          </div>

          {/* 矢印 (モバイル: ↓ / PC: →) */}
          <IoIosArrowDown className="text-2xl lg:hidden text-gray-500" />
          <span className="hidden lg:block text-2xl">→</span>

          {/* フォローアップ */}
          <div className="text-center lg:text-left">
            <h2 className="font-bold text-lg">フォローアップ</h2>
            <p className="text-sm">月2回まで 各50分</p>
            <p className="text-sm">
              ご希望のタイミングで行います。
              <br />
              さらに安定して効果を追求される方は、
              <br />
              セットアップセッションの継続をおすすめします。
            </p>
          </div>
        </div>

        {/* 画像と説明テキスト */}
        <div className="mt-10 flex flex-col lg:flex-row items-center gap-6">
          {/* 画像 */}
          <div className="w-full  lg:w-1/3">
            <img
              src="/images/flow.png"
              alt="Session"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* テキスト */}
          <div className="w-full lg:w-2/3 bg-gray-100 p-6 rounded-lg shadow-md text-center lg:text-left">
            <p className="text-gray-800 text-sm">
              クライアント様の感情と葛藤、仕事をとりまく情報を捉えて、その時間に最適なアプローチを行うため、全てのセッションは対面形式となります。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flow;
