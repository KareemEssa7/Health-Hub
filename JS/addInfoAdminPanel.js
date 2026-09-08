// =============== Adding Alert Choosing Image ===============
var inputs = document.querySelectorAll(".add-alert .file-input");

for (var i = 0, len = inputs.length; i < len; i++) {
  customInput(inputs[i]);
}

function customInput(el) {
  const fileInput = el.querySelector('[type="file"]');
  const label = el.querySelector("[data-js-label]");

  fileInput.onchange = fileInput.onmouseout = function () {
    if (!fileInput.value) return;

    var value = fileInput.value.replace(/^.*[\\\/]/, "");
    el.className += " -chosen";
    label.innerText = value;
  };
}

// =============== Textarea Editor Design ===============
tinymce.init({
  selector: "#basic-conf",
  width: 600,
  height: 300,
  plugins: [
    "advlist",
    "autolink",
    "link",
    "image",
    "lists",
    "charmap",
    "preview",
    "anchor",
    "pagebreak",
    "searchreplace",
    "wordcount",
    "visualblocks",
    "code",
    "fullscreen",
    "insertdatetime",
    "media",
    "table",
    "emoticons",
    "template",
    "help",
  ],
  toolbar:
    "undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | " +
    "bullist numlist outdent indent | link image | print preview media fullscreen | " +
    "forecolor backcolor emoticons | help",
  menu: {
    favs: {
      title: "My Favorites",
      items: "code visualaid | searchreplace | emoticons",
    },
  },
  menubar: "favs file edit view insert format tools table help",
  content_style:
    "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
});
