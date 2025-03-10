var cat_list = {
  "POPS & ANIME": "pops_anime",
  "niconico": "niconico",
  "東方Project": "toho",
  "VARIETY": "variety",
  "イロドリミドリ": "irodorimidori",
  "ゲキマイ": "gekimai",
  "ORIGINAL": "original",
  "WORLDS'S END": "we",
  "ULTIMA": "ultima",
  "創作譜面": "custom",
  "削除曲": "omni",
};

// 生成
var make_music_item = function (
  new_icon,
  image,
  category,
  title,
  artist,
  lev_bas,
  lev_adv,
  lev_exp,
  lev_mas,
  lev_WE,
  WE_tex,
  lev_ul,
) {
  // リスト
  var list = document.getElementById("music--list");
  // .music--item
  var music_item = document.createElement("div");
  music_item.className = "music--item";
  music_item.classList.add("animation");
  // .music--item__wrapper
  var wrapper = document.createElement("div");
  wrapper.className = "music--item__wrapper";
  // .music--item__thumb
  var thumb = document.createElement("p");
  thumb.className = "music--item__thumb";
  if (new_icon == "1") {
    thumb.classList.add("new");
  }
  var thumb_img = document.createElement("img");
  thumb_img.src = "https://oss.am-all.com.cn/asset/img/main/music/" + image;
  thumb.appendChild(thumb_img);
  wrapper.appendChild(thumb);

  // .music--item__inner
  var inner = document.createElement("div");
  inner.className = "music--item__inner";
  var box_cat = document.createElement("p");
  box_cat.className = "music--item__cat";
  box_cat.classList.add(cat_list[category]);

  box_cat.innerHTML = category;
  inner.appendChild(box_cat);
  var box_title = document.createElement("p");
  box_title.className = "music--item__tit";
  box_title.innerHTML = title;
  inner.appendChild(box_title);
  var box_head = document.createElement("p");
  box_head.className = "music--item__head";
  box_head.innerHTML = "ARTIST";
  inner.appendChild(box_head);
  var box_artist = document.createElement("p");
  box_artist.className = "music--item__artist";
  box_artist.innerHTML = artist;
  inner.appendChild(box_artist);
  wrapper.appendChild(inner);

  music_item.appendChild(wrapper);

  //  lv
  if (!(category == "WORLDS'S END" || category == "ULTIMA")) {
    var lev_list = document.createElement("div");
    lev_list.className = "music--item__lv";
    var lev_list_num_bas = document.createElement("p");
    lev_list_num_bas.className = "music--item__num";
    lev_list_num_bas.innerHTML = lev_bas;
    var lev_list_num_adv = document.createElement("p");
    lev_list_num_adv.className = "music--item__num";
    lev_list_num_adv.innerHTML = lev_adv;
    var lev_list_num_exp = document.createElement("p");
    lev_list_num_exp.className = "music--item__num";
    lev_list_num_exp.innerHTML = lev_exp;
    var lev_list_num_mas = document.createElement("p");
    lev_list_num_mas.className = "music--item__num";
    lev_list_num_mas.innerHTML = lev_mas;
    lev_list.appendChild(lev_list_num_bas);
    lev_list.appendChild(lev_list_num_adv);
    lev_list.appendChild(lev_list_num_exp);
    lev_list.appendChild(lev_list_num_mas);
    music_item.appendChild(lev_list);
  } else if (lev_WE) {
    var lev_list = document.createElement("div");
    lev_list.className = "music--item__lv";
    lev_list.classList.add("end");
    var lev_list_num_we = document.createElement("p");
    lev_list_num_we.className = "music--item__num";
    lev_list_num_we.innerHTML = lev_WE;
    var lev_list_we_tex = document.createElement("p");
    lev_list_we_tex.className = "music--item__num";
    lev_list_we_tex.innerHTML = WE_tex;
    lev_list.appendChild(lev_list_num_we);
    lev_list.appendChild(lev_list_we_tex);
    music_item.appendChild(lev_list);
  } else {
    var lev_list = document.createElement("div");
    lev_list.className = "music--item__lv";
    lev_list.classList.add("ultm");
    var lev_list_num_ul = document.createElement("p");
    lev_list_num_ul.className = "music--item__num";
    lev_list_num_ul.innerHTML = lev_ul;
    lev_list.appendChild(lev_list_num_ul);
    music_item.appendChild(lev_list);
  }
  list.appendChild(music_item);
};

var first_make = function (dir) {
  $("#music--list").empty();
  $.ajax({
    type: "GET",
    url: "data/music.json",
    dataType: "json",
  }).then(
    function (json) {
      var json_length = Object.keys(json).length;
      for (let i = 0; i < json_length; i++) {
        if (searchWord(json[i])) {
          if (
            page == "new" &&
            json[i].newflag == "1" &&
            !json[i].lev_ult &&
            !json[i].we_kanji
          ) {
            console.log(json[i]);
            make_music_item(
              json[i].newflag,
              json[i].image,
              json[i].catname,
              json[i].title,
              json[i].artist,
              json[i].lev_bas,
              json[i].lev_adv,
              json[i].lev_exp,
              json[i].lev_mas,
              json[i].we_star,
              json[i].we_kanji,
              json[i].lev_ult
            );
          } else if (
            page == cat_list[json[i].catname] &&
            !json[i].lev_ult &&
            !json[i].we_kanji) {
            make_music_item(
              json[i].newflag,
              json[i].image,
              json[i].catname,
              json[i].title,
              json[i].artist,
              json[i].lev_bas,
              json[i].lev_adv,
              json[i].lev_exp,
              json[i].lev_mas,
              json[i].we_star,
              json[i].we_kanji,
              json[i].lev_ult
            );
          } else if (
            page == "we" &&
            json[i].we_kanji) {
            make_music_item(
              json[i].newflag,
              json[i].image,
              "WORLDS'S END",
              json[i].title,
              json[i].artist,
              json[i].lev_bas,
              json[i].lev_adv,
              json[i].lev_exp,
              json[i].lev_mas,
              json[i].we_star,
              json[i].we_kanji,
              json[i].lev_ult
            );
          } else if (
            page == "ultima" &&
            json[i].lev_ult) {
            make_music_item(
              json[i].newflag,
              json[i].image,
              "ULTIMA",
              json[i].title,
              json[i].artist,
              json[i].lev_bas,
              json[i].lev_adv,
              json[i].lev_exp,
              json[i].lev_mas,
              json[i].we_star,
              json[i].we_kanji,
              json[i].lev_ult
            );
          }
        }
      }
    },
    function () {
      alert("エラー時に表示されるテキスト");
    }
  );
};
var copy_make = function () {
  $("#copy--list").empty();
  $.ajax({
    type: "GET",
    url: "data/rightsInfo.json",
    dataType: "json",
  }).then(
    function (json) {
      var json_length = Object.keys(json).length;
      console.log(json_length);
      for (let i = 0; i < json_length; i++) {
        const element = json[i];
        console.log(element);
        var html = `<li class="music--copy__text">${element}</li>`
        $("#copy--list").append(html);
      }
    },
    function () {
      alert("エラー時に表示されるテキスト");
    }
  );
};
var page = $(".common--h3").data("current");
first_make();
copy_make();
// searchWordの実行
var searchWord = function (json) {
  var jsonKeys = ["artist", "title", "reading"];
  var searchText = $(".music--search__input").val(), // 検索ボックスに入力された値
    targetText;

  // 検索ボックスに値が入ってる場合
  if (searchText != "") {
    for (var i = 0; i < jsonKeys.length; i++) {
      targetText = json[jsonKeys[i]];
      // 検索対象となるリストに入力された文字列が存在するかどうかを判断
      if (targetText.indexOf(searchText) != -1) {
        return true;
      }
    }
  } else {
    return true;
  }
};

$(".music--search__delete").on("click", function () {
  $(".music--search__input").val("");
  first_make();
});

$(document).on("input", ".music--search__input", function (e) {
  if (!DEVICE.isSp) {
    first_make();
  }
});
$(document).on("change", ".music--search__input", function (e) {
  if (DEVICE.isSp) {
    first_make();
  }
});