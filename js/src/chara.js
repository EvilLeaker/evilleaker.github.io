var make_chara = function (chara_id, name, id) {
  // リスト
  var list = document.getElementById(id);
  var chara_item = document.createElement("div");
  chara_item.className = "chara--item";
  var chara_img = document.createElement("p");
  chara_img.className = "chara--item__thumb";
  var chara_thumb = document.createElement("img");
  chara_thumb.srcset =
    "https://oss.am-all.com.cn/asset/img/main/chara/chara_thumbnail/" + chara_id + ".png";
  var chara_name = document.createElement("p");
  chara_name.className = "chara--item__name";
  chara_name.innerHTML = name;
  chara_img.appendChild(chara_thumb);
  chara_item.appendChild(chara_img);
  chara_item.appendChild(chara_name);
  list.appendChild(chara_item);
};

var make_box = function (title, id) {
  var list = document.getElementById("chara");
  var box = document.createElement("div");
  box.className = "chara--box";
  if (title) {
    var box_h4 = document.createElement("p");
    box_h4.className = "common--h4";
    box_h4.classList.add("mt0");
    box_h4.innerHTML = title;
    box.appendChild(box_h4);
  }
  var inner = document.createElement("div");
  inner.className = "chara--inner";
  inner.setAttribute("id", id);
  box.appendChild(inner);
  list.appendChild(box);
};

var genre = $(".common--h3").data("genre");

var first_make = function (dir) {
  $.ajax({
    type: "GET",
    url: "../data/chara.json",
    dataType: "json",
  }).then(
    function (json) {
      var json_length = Object.keys(json).length;
      console.log(genre);
      for (let i = 0; i < json_length; i++) {
        if (json[i].title == genre) {
          var json_cat_length = Object.keys(json[i].category).length;
          for (let j = 0; j < json_cat_length; j++) {
            var cat = json[i].category[j];
            var id_num = "chara_" + j;
            make_box(cat.map, id_num);
            var json_chara_length = Object.keys(
              json[i].category[j].characters
            ).length;
            for (let k = 0; k < json_chara_length; k++) {
              var chara = json[i].category[j].characters[k];
              make_chara(chara.id, chara.name, id_num);
            }
          }
        }
      }
    },
    function () {
      alert("エラー時に表示されるテキスト");
    }
  );
};
first_make();
