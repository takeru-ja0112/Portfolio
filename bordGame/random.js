const total = document.getElementById("totalPoint");
const creaer = document.getElementById("cerear");
crear.classList.add("re");



console.log("hello world")
  const topics = [
    "アスリートといえば？","スマートフォンメーカーといえば？","ドラマジャンルといえば？","世界遺産といえば？","鉄道会社といえば？","声優といえば？","軍事映画といえば？","恋愛漫画といえば？","野球チームといえば？","ファンタジー小説といえば？","宝石といえば？","キャラクターグッズといえば？","宇宙映画といえば？","ウェブブラウザといえば？","アート作品といえば？","音楽フェスティバルといえば？","経済学者といえば？","人気YouTuberといえば？","異世界ファンタジーといえば？","現代アートといえば？","国内旅行といえば？","昔話といえば？","猫種といえば？","動物園といえば？","家電メーカーといえば？","有名絵本作家といえば？","運動靴ブランドといえば？","プログラミング言語といえば？","職業といえば？","クラシック音楽といえば？","人気漫画家といえば？","おもちゃメーカーといえば？","ヨーロッパ旅行といえば？","現代詩といえば？","伝統芸能といえば？","大学といえば？","アート映画といえば？","アパレルブランドといえば？","地球上の絶景といえば？","スポーツカーといえば？","海外ドラマといえば？","ファンタジーゲームといえば？","現代美術家といえば？","お笑い芸人といえば？","有名建築家といえば？","海外旅行といえば？","ジャズミュージシャンといえば？","アート写真といえば？","空港といえば？","有名脚本家といえば？","マンガといえば？","ヨーロッパの首都といえば？","スポーツ用品ブランドといえば？","ミステリー小説といえば？","世界の料理といえば？","有名画家といえば？","学問分野といえば？","スマートフォンアプリといえば？","地方鉄道といえば？","日本の城といえば？","人気アイドルグループといえば？","医療器具メーカーといえば？","世界の山といえば？","ファッションモデルといえば？","恐竜といえば？","タブレット端末といえば？","西洋古典音楽といえば？","有名クイズ番組といえば？","夏といえば？","春といえば？","秋といえば？","冬といえば？","中華料理といえば？","ファミレスといえば？","コンビニといえば？","美術館といえば？",'あから始まる言葉','いから始まる言葉','うから始まる言葉','えから始まる言葉','おから始まる言葉','かから始まる言葉','きから始まる言葉','くから始まる言葉','けから始まる言葉','こから始まる言葉','さから始まる言葉','しから始まる言葉','すから始まる言葉','せから始まる言葉','そから始まる言葉','たから始まる言葉','ちから始まる言葉','つから始まる言葉','てから始まる言葉','とから始まる言葉','なから始まる言葉','にから始まる言葉','ぬから始まる言葉','ねから始まる言葉','のから始まる言葉','はから始まる言葉','ひから始まる言葉','ふから始まる言葉','へから始まる言葉','ほから始まる言葉','まから始まる言葉','みから始まる言葉','むから始まる言葉','めから始まる言葉','もから始まる言葉','やから始まる言葉','ゆから始まる言葉','よから始まる言葉','らから始まる言葉','りから始まる言葉','るから始まる言葉','れから始まる言葉','ろから始まる言葉','わから始まる言葉','をから始まる言葉','んから始まる言葉',
  ];

  let i = 0;

  const success = function(){
      console.log("hello");
      const point = document.getElementById("point");
      i++;
      console.log(i);
  
      point.innerHTML = i;
      total.innerHTML = i;
  }

document.getElementById("start-btn").addEventListener("click" , function(){
    
    document.getElementById("start-btn").classList.add("no-start")
    const button = document.querySelector("#start-btn.no-start");
    button.style.pointerEvents = "none";
var countdown = 10; // 5分（300秒）のカウントダウン

var timer = setInterval(function() {
  var minutes = Math.floor(countdown / 60);
  var seconds = countdown - minutes * 60;

  // ゼロパディング
  var formattedMinutes = String(minutes).padStart(2, "0");
  var formattedSeconds = String(seconds).padStart(2, "0");

  // 残り時間を表示
  document.getElementById("timer").textContent =
    formattedMinutes + ":" + formattedSeconds;

  // 残り30秒になったら文字のカラーを赤色に変える
  if (countdown === 30) {
    document.getElementById("timer").style.color = "red";
  }

  countdown--; // カウントダウンを1秒減らす

  // カウントダウンが0になったら停止
  if (countdown < 0) {
    clearInterval(timer);
    document.getElementById("timer").textContent = "時間切れ";
    document.getElementById("start-btn").style.pointerEvents = "auto";
    document.getElementById("start-btn").classList.remove("no-start");
    document.getElementById("timer").style.color = "#f7f7f7";
    button.style.pointerEvents = "auto";
    document.getElementById("crear").classList.remove("re");
  }
}, 1000); // 1秒ごとにカウントダウンを更新

});

const htmlRandom = function(){
    const topicsMatome = topics[Math.floor(Math.random() * topics.length)] ;
    const fuwa = document.getElementById('edit-area');
    fuwa.innerHTML = topicsMatome;
    const box = document.getElementById("box");
    box.style.animation = "underOpen 0.7s ease ";

    box.addEventListener("animationend", function(){
        box.style.animation = "";
    })

    const on = document.getElementById("on");
    on.value = "チェンジする"
    on.style.animation = "switch 0.3s ease";
    on.addEventListener("animationend" , function(){
        on.style.animation = "";
    })
};




const reTry = function(){
    crear.classList.add("re")
    i = 0;
    point.innerHTML = i;
}