export function modal(info, error = false, time = 1000) {
  const body = document.querySelector("body");
  const mod = document.createElement("div");

  function modalOn() {
    mod.className = `modal ${error ? "modal--error" : ""}`;
    mod.innerText = info;

    body.appendChild(mod);
  }

  function modalOff() {
    body.removeChild(mod);
  }

  modalOn();
  setTimeout(modalOff, time);
}
