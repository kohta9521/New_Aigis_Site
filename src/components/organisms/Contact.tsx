import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-auto py-20 pb-10">
      <div className="w-11/12 mx-auto sm:w-10/12">
        <h1 className="section-title mb-4">Contact</h1>
        <p className="text-base font-mono font-medium">
          お見積りやその他ご相談、お気軽にお問い合わせください。
        </p>
        {/* Main */}
        <div className="w-full">
          <form method="post" action="https://aigis.form.newt.so/v1/tqB7MGvOr">
            <label htmlFor="name" className="mt-4 mb-2 block font-medium">
              お名前<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              className="w-full mb-4 block border border-gray-600 rounded-md p-1"
              id="name"
              name="name"
              required
              placeholder="山田太郎"
            />
            <label htmlFor="email" className="mb-2 block font-medium">
              メールアドレス<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full mb-1 block border border-gray-600 rounded-md p-1"
              placeholder="sample@sample.mail"
              required
            />
            <label htmlFor="message" className="mt-4 mb-2 block font-medium">
              お問い合わせ内容<span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full mb-4 block border border-gray-600 rounded-md p-1"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[var(--main-green)] w-full py-2 text-white rounded-md"
            >
              送信
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
