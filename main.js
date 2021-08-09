const footerEl = document.querySelector('.footer-content-inner-left')
footerEl.innerText = footerEl.innerText.replace("2018", (new Date()).getFullYear())
