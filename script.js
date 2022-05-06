const generalText = "NEPRIVALOMA REGL.NR.";
const y901Text = "0428/2009";
const y904Text = "xxxx";
const y906Text = "xxxxxx";

const btns = document.querySelectorAll("button");

btns.forEach((e) =>
  e.addEventListener("click", () => {
    const pressedBtnId = e.id;
    switch (pressedBtnId) {
      case "y901":
        navigator.clipboard.writeText(`${generalText}${y901Text}`);
        break;
      case "y904":
        navigator.clipboard.writeText(`${generalText}${y904Text}`);

        break;
      case "y906":
        navigator.clipboard.writeText(`${generalText}${y906Text}`);
        break;
    }
  })
);
