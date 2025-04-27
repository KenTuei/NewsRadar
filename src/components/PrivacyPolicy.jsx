import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white p-8 flex flex-col items-center justify-center">
      <div className="bg-white text-gray-800 p-8 rounded-xl shadow-xl max-w-3xl w-full">
        <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-6">Privacy Policy</h2>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            At <span className="font-semibold text-blue-600">NewsRadar</span>, we respect your privacy and are committed to protecting any personal information you share with us.
          </p>
          <p>
            We do not collect personal information unless you explicitly provide it for feedback or subscriptions.
          </p>
          <p>
            Any data collected is used solely to improve user experience and is never shared with third parties.
          </p>
          <p className="text-center mt-6">
            For more details, please contact us at:{" "}
            <a href="mailto:tueituei20@gmail.com" className="text-blue-400 hover:text-blue-600">
              tueituei20@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
