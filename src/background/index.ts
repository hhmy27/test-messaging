import "@plasmohq/messaging/background"

console.log("hello from background/index.ts")

chrome.runtime.onInstalled.addListener(() => {
  // BUG: create is undefined
  chrome.contextMenus.create({
    id: "openSidePanel",
    title: "Open side panel",
    contexts: ["all"]
  })
})

// BUG: onClicked is undefined
chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log("background open side panel")
  if (info.menuItemId === "openSidePanel") {
    chrome.sidePanel.open({ windowId: tab.windowId })
  }
})
