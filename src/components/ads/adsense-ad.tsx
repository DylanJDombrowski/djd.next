"use client";

import React, { useEffect } from "react";

interface AdSenseAdProps {
  clientId: string;
  adSlotId: string;
}

export default function AdSenseAd({ clientId, adSlotId }: AdSenseAdProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div className="hidden md:block rounded-lg overflow-hidden bg-white">
      <script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${clientId}`}
        crossOrigin="anonymous"
      ></script>
      <ins
        className="adsbygoogle"
        style={{ display: "block", minHeight: "280px" }}
        data-ad-client={`ca-pub-${clientId}`}
        data-ad-slot={adSlotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
