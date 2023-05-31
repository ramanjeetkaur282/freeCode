"use strict";
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const IP = document.querySelector(".ip").value;
  console.log(IP);
  let output = "Invalid IP Address";
  displayMessage(output);

  if (IP.length === 0) displayMessage(output);
  let ipv4 = IP.split(".");
  console.log(ipv4);
  let ipv6 = IP.split(":");
  if (ipv4.length === 4 && ipv4.every(validIPv4)) {
    output = "IPv4";
    displayMessage(output);
  }
  if (ipv6.length === 8 && ipv6.every(validIPv6)) {
    output = "IPv6";
    displayMessage(output);
  }

  function validIPv4(str) {
    let num = "0123456789";
    console.log(str);
    if (str.length === "" || str.length > 4) return false;
    if (str.length === 1 && str.charAt(0) === "0") return false;
    if (str.split("").some((ch) => !num.includes(ch))) return false;
    if (Number(str) < 0 || Number(str) > 255) return false;
    return true;
  }
  function validIPv6(str) {
    let hex = "0123456789abcdefABCDEF";
    if (str.length === 0 || str.length > 4) return false;
    for (let char of str) {
      if (!hex.includes(char)) return false;
    }
    return true;
  }
});
