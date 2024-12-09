        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = 
        
            } else if (colour ="メガネ" && number === 1) {
                result = "モテすぎ";
         } else if (colour ="メガネ" && number === 2) {
                result = "黒すぎ";
                     } else if (colour ="メガネ" && number ===0) {
                result = "度なし";
            } else if (colour === "桃" && number === 2) {
                result = "でかすぎ";
                 } else if (colour === "桃" && number ===1) {
                result = "肉ずキヨシ";
                 } else if (colour === "桃" && number === 0) {
                result = "ぷにぷに";
            } else if (colour === "車" && number === 0) {
                result = "寝すぎ";
                 } else if (colour === "車" && number ===1)  {
                result = "方向音痴";
                 } else if (colour === "車" && number === 2) {
                result = "口開けすぎ";
                
            } else if (colour === "息" && number === 1) {
                result = "ネガティブ";
                } else if (colour === "息" && number === 2) {
                result = "僕が悪いです";
                } else if (colour === "息" && number === 0) {
                result = "人のせい";
            } else if (colour === "ゲーム" && number === 2) {
                result = "下手";
                } else if (colour === "ゲーム" && number === 1) {
                result = "はまりすぎ";
                 } else if (colour === "ゲーム" && number === 0) {
                result = "浮気しすぎ";
                 } else if (colour === "顔" && number === 0) {
                result = "かわいい";
                   } else if (colour === "顔" && number === 1) {
                result = "やさしい";
                   } else if (colour === "顔" && number === 2) {
                result = "わかりやすい";
            } else if (colour === "服" && number === 1) {
                result = "少しおしゃれ";
                  } else if (colour === "服" && number === 2) {
                result = "意外にチャレンジャー";
                  } else if (colour === "服" && number === 0) {
                result = "無";
            } else if (colour === "豚" && number === 2) {
                result = "豚足";
                } else if (colour === "豚" && number === 1) {
                result = "遅い";
            } else if (colour === "豚" && number === 0) {
                result = "短い";
            }
            }

            document.getElementById('result-output').innerText = "あなたの悪いところは【" + result + "】です";
        }
