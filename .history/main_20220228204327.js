
const container = document.querySelector(".data_container");

function generate() {
    const num = 20;

    for (let i = 0; i < num; i++) {

        const value = Math.floor(Math.random() * 100);

        const bar = document.createElement("div");

        bar.classList.add("bar");

        if (value == 0) {
            bar.style.height = `${17}px`;
        } else {
            bar.style.height = `${value * 4 + 17}px`;
        }

        bar.style.transform = `translateX(${i * 31}px)`;

        const barlabel = document.createElement("label");

        barlabel.classList.add("bar_id");

        barlabel.innerHTML = value;

        bar.appendChild(barlabel);
        container.appendChild(bar);

    }
}


async function BubbleSort() {

    let bars = document.querySelectorAll(".bar");

    for (let i = 0; i < bars.length - 1; i++) {

        for (let j = 0; j < bars.length - 1 - i; j++) {

            bars[j].style.backgroundColor = "darkblue";
            bars[j + 1].style.backgroundColor = "red";

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 200)
            );

            var val1 = parseInt(bars[j].childNodes[0].innerHTML);
            var val2 = parseInt(bars[j + 1].childNodes[0].innerHTML);

            if (val1 > val2) {
                var temp1, temp2;

                temp1 = bars[j + 1].style.height;
                bars[j + 1].style.height = bars[j].style.height;
                bars[j].style.height = temp1;

                temp2 = bars[j + 1].childNodes[0].innerText;
                bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
                bars[j].childNodes[0].innerText = temp2;

            }

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 200)
            );

            bars[j].style.backgroundColor = "rgb(0, 183, 255)";
            bars[j + 1].style.backgroundColor = "rgb(0, 183, 255)";
        }

        var id = bars.length - 1 - i;
        bars[id].style.backgroundColor = "rgb(49, 226, 13)";
    }
    bars[0].style.backgroundColor = "rgb(49, 226, 13)";

    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#6f459e";


    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "#6f459e";
}


function disable() {

    document.getElementById("Button1").disabled = true;
    document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

    document.getElementById("Button2").disabled = true;
    document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}