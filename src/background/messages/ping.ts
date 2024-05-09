import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  console.log("Received ping message", req)
  res.send({
    msg: "pong"
  })
  try {
    chrome.sidePanel.open({ tabId: req.tabId })
  } catch (error) {
    console.log("Error opening side panel", error)
  }
}

export default handler
