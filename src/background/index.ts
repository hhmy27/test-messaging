import "@plasmohq/messaging/background"

console.log("Inner")

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.contextMenus.create({
//     id: "openSidePanel",
//     title: "Open side panel",
//     contexts: ["all"]
//   })
// })

// chrome.contextMenus.onClicked.addListener((info, tab) => {
//   console.log("background open side panel")
//   if (info.menuItemId === "openSidePanel") {
//     chrome.sidePanel.open({ windowId: tab.windowId })
//   }
// })
