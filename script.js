const y901 = document.querySelector("#y901");
const y901Text = "neprivaloma regl.nr.0428/2009";

y901.addEventListener("click", () => {
  navigator.clipboard.writeText(y901Text);
  console.log(y901Text);
});

const y904 = document.querySelector("#y904");
const y904Text = "neprivaloma regl.nr.xxxx";

y904.addEventListener("click", () => {
  navigator.clipboard.writeText(y904Text.toUpperCase());
  console.log(y904Text);
});

const y906 = document.querySelector("#y906");
const y906Text = "neprivaloma regl.nr.xxxxxx";

y906.addEventListener("click", () => {
  navigator.clipboard.writeText(y906Text.toUpperCase());
  console.log(y906Text);
});
