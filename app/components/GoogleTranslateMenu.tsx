// app/components/GoogleTranslateMenu.tsx

'use client';

import { useEffect } from 'react';

const GoogleTranslateMenu = () => {
  useEffect(() => {
    // Add the Google Translate widget after component mounts
    const script = document.createElement('script');
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Define the Google Translate initialization function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };

    return () => {
      // Clean up the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return <div id="google_translate_element" />;
};

export default GoogleTranslateMenu;
