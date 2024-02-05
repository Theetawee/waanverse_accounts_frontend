import { useState } from "react";
import { useSearchParams } from "react-router-dom";


const VerifyEmailPage = () => {

    const [cansend, setCanSend] = useState(() => {
        const time = localStorage.getItem('timestamp');
        if (time) {
            const now = Date.now();
            const diff = now - parseInt(time);
            return diff > 60 * 1000;
        } else {
            return true;
        }
    });

    const handleResend = () => {
        const time = Date.now();
        localStorage.setItem('timestamp', time.toString());
        setCanSend(false);

    }

    const [searchParams] = useSearchParams();

    const redirect_login = searchParams.get('redirect_login');
    let content;
    if (redirect_login === "true") {
        content = (
            <>
                <p className="text-lg mb-4">
                    Please verify your account. An activation email was sent to
                    you on account registration
                </p>
                {cansend ?(<button onClick={handleResend} className="bg-primary-600 disabled:cursor-progress hover:bg-primary-700 text-white font-bold py-2.5 px-5 rounded">
                    Resend link
                </button>) : (
                        <p className="text-sm text-gray-600">Can request again after a minute</p>
                )}

            </>
        );
    }

  return (
      <section className="h-screen flex items-center justify-center">
          <div className="max-w-lg min-h-52 mx-auto bg-white border-gray-100 shadow p-4 rounded">
              <div>
                  {content}
            </div>
          </div>
    </section>
  )
}

export default VerifyEmailPage
