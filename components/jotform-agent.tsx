"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function JotformAgent() {
  useEffect(() => {
    // This will run after the script has loaded and the DOM is ready
    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <>
      <Script src="https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js" strategy="afterInteractive" />
      <Script id="jotform-agent-init" strategy="afterInteractive">
        {`
          window.addEventListener("DOMContentLoaded", function() {
            if (window.AgentInitializer) {
              window.AgentInitializer.init({
                agentRenderURL: "https://agent.jotform.com/0195b8765a2278e19946bde894c736b54c54",
                rootId: "JotformAgent-0195b8765a2278e19946bde894c736b54c54",
                formID: "0195b8765a2278e19946bde894c736b54c54",
                queryParams: ["skipWelcome=1", "maximizable=1"],
                domain: "https://www.jotform.com",
                isDraggable: false,
                background: "linear-gradient(180deg, #3A5800 0%, #3A5800 100%)",
                buttonBackgroundColor: "#004BB6",
                buttonIconColor: "#F8FEEC",
                variant: false,
                customizations: {
                  "greeting": "Yes",
                  "greetingMessage": "Hi! How can I assist you?",
                  "openByDefault": "No",
                  "pulse": "Yes",
                  "position": "right",
                  "autoOpenChatIn": "0"
                },
                isVoice: undefined
              });
            }
          });
          
          // Backup initialization in case DOMContentLoaded already fired
          if (document.readyState === 'complete' || document.readyState === 'interactive') {
            setTimeout(() => {
              if (window.AgentInitializer) {
                window.AgentInitializer.init({
                  agentRenderURL: "https://agent.jotform.com/0195b8765a2278e19946bde894c736b54c54",
                  rootId: "JotformAgent-0195b8765a2278e19946bde894c736b54c54",
                  formID: "0195b8765a2278e19946bde894c736b54c54",
                  queryParams: ["skipWelcome=1", "maximizable=1"],
                  domain: "https://www.jotform.com",
                  isDraggable: false,
                  background: "linear-gradient(180deg, #3A5800 0%, #3A5800 100%)",
                  buttonBackgroundColor: "#004BB6",
                  buttonIconColor: "#F8FEEC",
                  variant: false,
                  customizations: {
                    "greeting": "Yes",
                    "greetingMessage": "Hi! How can I assist you?",
                    "openByDefault": "No",
                    "pulse": "Yes",
                    "position": "right",
                    "autoOpenChatIn": "0"
                  },
                  isVoice: undefined
                });
              }
            }, 100);
          }
        `}
      </Script>
      <div id="JotformAgent-0195b8765a2278e19946bde894c736b54c54"></div>
    </>
  )
}

