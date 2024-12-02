        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "りょうきち占い"; // デフォルトの値

            if (colour === "白" && number === 0) {
                result = "はげ";
            } else if (colour ="メガネ" && number === 1) {
                result = "モテすぎ";
            } else if (colour === "桃" && number === 2) {
                result = "でかすぎ";
            } else if (colour === "車" && number === 0) {
                result = "寝すぎ";
            } else if (colour === "息" && number === 1) {
                result = "ネガティブ";
            } else if (colour === "ゲーム" && number === 2) {
                result = "下手";
            } else if (colour === "顔" && number === 0) {
                result = "かわいい";
            } else if (colour === "服" && number === 1) {
                result = "少しおしゃれ";
            } else if (colour === "豚" && number === 2) {
                result = "豚足";
            }

            document.getElementById('result-output').innerText = "あなたの悪いところは【" + result + "】です";
        }
