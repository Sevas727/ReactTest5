export function setPopups(popups = []) {
  return {
    type: "SET_POPUPS", data: popups
  }
}

export function showPopup(popup) {
  return {
    type: "SHOW_POPUP", data: popup
  }
}

export function closePopup() {
  return {
    type: "CLOSE_POPUP"
  }
}
