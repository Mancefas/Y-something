const generalText = "NEPRIVALOMA REGL.NR.";
const y901Text = "0428/2009";
const y904Text = "xxxx";
const y906Text = "xxxxxx";

const btns = document.querySelectorAll("button");

const addingClipboard = (btnId) => {
  const btnToAddTo = document.querySelector(`.${btnId}`);

  //Adding check cliboard after pressing btn
  btnToAddTo.insertAdjacentHTML(
    "beforeend",
    ` <svg
  xmlns="http://www.w3.org/2000/svg"
  width="26"
  height="26"
  color="green"
  fill="currentColor"
  class="bi bi-clipboard2-check"
  viewBox="0 0 16 16"
>
  <path
    d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"
  />
  <path
    d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"
  />
  <path
    d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z"
  />
</svg>`
  );

  //Removing check cliboard element after some time
  setInterval(() => {
    const elementToRemove = document.querySelector(".bi-clipboard2-check");
    elementToRemove.remove();
  }, 2000);
};

btns.forEach((e) =>
  e.addEventListener("click", () => {
    const pressedBtnId = e.id;
    switch (pressedBtnId) {
      case "y901":
        navigator.clipboard.writeText(`${generalText}${y901Text}`);
        addingClipboard(pressedBtnId);
        break;
      case "y904":
        navigator.clipboard.writeText(`${generalText}${y904Text}`);
        addingClipboard(pressedBtnId);
        break;
      case "y906":
        navigator.clipboard.writeText(`${generalText}${y906Text}`);
        addingClipboard(pressedBtnId);
        break;
    }
  })
);
