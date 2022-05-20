import React from "react";
import { Link } from "gatsby";

const headingStyles: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 640,
};

export const Header: React.FC = () => {
  return (
    <header>
      <title>Altmeta.org Pixel Test</title>
      <Link to="/">
        <h1 style={headingStyles}>Altmeta.org Pixel Test</h1>
      </Link>
      <!-- Meta Pixel Code -->
      <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '538713067745297');
      fbq('track', 'PageView');
      </script>
      <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=538713067745297&ev=PageView&noscript=1"
      /></noscript>
      <!-- End Meta Pixel Code -->
    </header>
  );
};
