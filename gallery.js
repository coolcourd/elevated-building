let imageIndex = 1
const target = document.getElementById("gallery")
const images = window.location.pathname === "/interiors/" ? [
    "/wp-content/uploads/2019/01/ISyzlcj01634x81000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISa1733twzf4991000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISmi03k9kbrc991000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISqtj01uwxu6x81000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/IS6qff4jdwct891000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISy3lm9oq5res20000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISustyae72o3s20000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISucdzv093qer20000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISmmrms73uf6s20000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISmm381av1xva30000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISmi07v0szs9c30000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISm6bndu4vhhr20000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISqxuvzje507b30000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISalq7z66pjcb30000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISa177ek4oh1c30000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/IS6u6zchwe1nr20000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/IS2fovg02hbfb30000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/IS2jfbe7dbybr20000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/IS6azj0xmlg1b30000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/IS6qfjfalkeqb30000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/IS2v4vvd0g94c30000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISuoyjb33th1391000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISukvi5uzqdf491000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISugshzkwo9t591000000000-512x406.jpg",
    "/wp-content/uploads/2019/01/ISugkrhvp7act81000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISuchqbmm56qu81000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISu4fjqg1sfq391000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISu04s2ir8cns81000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISqtnvr6iocf391000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISqpkulxem8t491000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISqpc448859cs81000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISql93yy435qt81000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISq94v6kgna4491000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISmyc78axj7t391000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISmiw7twyk94391000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISm6fetfixxsu81000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISizyhi49dyk591000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISizqr0f2wy3t81000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISivnqu5ztuhu81000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISecuvaquc17391000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISe8ru4hraxk491000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/IS2rxun04zlc491000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/IS2nuthr0xhq591000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/IS2nm302ufi9t81000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/IS2jj2usqdenu81000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/IS2bhv8n50on391000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/ISq5h2iu7no0dd0000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/IS6yhe7tfdmdic0000000000-650x406.jpg",
    "/wp-content/uploads/2019/01/EJK9165-Edit-Edit-Edit-650x406.jpg",
    "/wp-content/uploads/2019/01/EJK8445_7_9-Edit-Edit-650x406.jpg",
    "/wp-content/uploads/2019/01/EJK8455_7_9-Edit-Edit-Edit-1-650x406.jpg",
    "/wp-content/uploads/2019/01/EJK8390-Edit-Edit-650x406.jpg",
    "/wp-content/uploads/2019/01/EJK8372_4_6-Edit-Edit-462x406.jpg",
    "/wp-content/uploads/2019/01/EJK8360_2_4-Edit-Edit-Edit-452x406.jpg",
    "/wp-content/uploads/2019/01/EJK8351-Edit-Edit-650x406.jpg",
    "/wp-content/uploads/2019/01/EJK8296-Edit-Edit-Edit-650x406.jpg",
    "/wp-content/uploads/2019/01/EJK8267_69_71-Edit-650x406.jpg",
    "/wp-content/uploads/2019/01/EJK8240_2_4-Edit-Edit-650x406.jpg",
    "/wp-content/uploads/2019/01/EJK8226-Edit-Edit-650x406.jpg",
    "/wp-content/uploads/2019/01/EJK8196_198_200-Edit-Edit-463x406.jpg",
    "/wp-content/uploads/2019/01/EJK8168-Edit-Edit-650x406.jpg",
    "/wp-content/uploads/2019/01/EJK8109_11_13-Edit-Edit-650x406.jpg",
    "/wp-content/uploads/2019/01/EJK8145-Edit-Edit-Edit-650x406.jpg"
] : [
    "/wp-content/uploads/2019/01/ISqtrutab3wkc30000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISq1mbxqpzm3r20000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISivjzeklre6r20000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISmi42mddqaii30000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISu8aypr51mss20000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISec2q379i2li30000000000-650x406.jpg",
"/wp-content/uploads/2019/01/IS2fca8y99ups20000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISu8mj25lz2kun1000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISm2k7kygrumun1000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISizqvfhxa03fn1000000000-650x406.jpg",
"/wp-content/uploads/2019/01/IS6qfjjl8besun1000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISyb36jhhtef591000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISyvegmecdh9s81000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISuw0rw8o681u81000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISu0cik7ypb4591000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISmqyee2kyz3u81000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISmu9621uh37591000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISeo7ujup9v9591000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISekw2wvfqr6u81000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISe8j4nrktx3s81000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISa95fxlwmovt81000000000-650x406.jpg",
"/wp-content/uploads/2019/01/IS2333ffsegyt81000000000-650x406.jpg",
"/wp-content/uploads/2019/01/IS62hs4lglp6s81000000000-650x406.jpg",
"/wp-content/uploads/2019/01/IS6i5i1ol1nc591000000000-650x406.jpg",
"/wp-content/uploads/2019/01/IS2v0wt971qy291000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISugoeqcs1b5ic0000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISqldq6g7x5jic0000000000-650x406.jpg",
"/wp-content/uploads/2019/01/IS6qj2d0gqdmxc0000000000-650x406.jpg",
"/wp-content/uploads/2019/01/IMG_8023-650x406.jpeg",
"/wp-content/uploads/2019/01/2018-02-15.jpg",
"/wp-content/uploads/2019/01/ISqtrutab3wkc30000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISq1mbxqpzm3r20000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISivjzeklre6r20000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISmi42mddqaii30000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISu8aypr51mss20000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISec2q379i2li30000000000-650x406.jpg",
"/wp-content/uploads/2019/01/IS2fca8y99ups20000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISu8mj25lz2kun1000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISm2k7kygrumun1000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISizqvfhxa03fn1000000000-650x406.jpg",
"/wp-content/uploads/2019/01/IS6qfjjl8besun1000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISyb36jhhtef591000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISyvegmecdh9s81000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISuw0rw8o681u81000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISu0cik7ypb4591000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISmqyee2kyz3u81000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISmu9621uh37591000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISeo7ujup9v9591000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISekw2wvfqr6u81000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISe8j4nrktx3s81000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISa95fxlwmovt81000000000-650x406.jpg",
"/wp-content/uploads/2019/01/IS2333ffsegyt81000000000-650x406.jpg",
"/wp-content/uploads/2019/01/IS62hs4lglp6s81000000000-650x406.jpg",
"/wp-content/uploads/2019/01/IS6i5i1ol1nc591000000000-650x406.jpg",
"/wp-content/uploads/2019/01/IS2v0wt971qy291000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISugoeqcs1b5ic0000000000-650x406.jpg",
"/wp-content/uploads/2019/01/ISqldq6g7x5jic0000000000-650x406.jpg",
"/wp-content/uploads/2019/01/IS6qj2d0gqdmxc0000000000-650x406.jpg",
"/wp-content/uploads/2019/01/IMG_8023-650x406.jpeg",
"/wp-content/uploads/2019/01/2018-02-15.jpg"
]

const lb = document.getElementById("lb-overlay")
const lbImg = document.querySelector("#lb-overlay img")
lb.style.display = "none";

images.forEach((e,i)=> {
    target.innerHTML += `
<div class="p-3">
<img class="galimg" onClick="lightbox(${i})"
    src="${e}">
</img>
</div>
`
})
const lightbox = (index) => {
    lb.style.display = "block";
    setLbSrc(index)
}

const closeLb = () => {
    lb.style.display = "none";
}

const setLbSrc = (index) => {
    lbImg.src = images[index]
    imageIndex = index
}

const next = () => {
    let nextImage = imageIndex+1
    if (nextImage >= images.length) {
        nextImage = 0
    }
    setLbSrc(nextImage)
}

const prev = () => {
    let previous = imageIndex-1
    if (previous < 0) {
        previous = images.length-1
    }
    setLbSrc(previous)
}

document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") {
        closeLb()
    }
    if(e.key === "ArrowRight" && lb.style.display === "block") {
        next()
    }
    if(e.key === "ArrowLeft" && lb.style.display === "block") {
        prev()
    }
})