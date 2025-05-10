$.get('./text_wrap.txt')
  .done(function(data) {
    var lines = data.split("\n");
    var content = lines.join("\n");
    document.getElementById('text_wrap').innerText = content;
  })
  .fail(function() {
    document.getElementById('text_wrap').innerText = "加载文件失败！";
  });