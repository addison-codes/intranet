const editorJsHtml = require("editorjs-html");
const EditorJsToHtml = editorJsHtml();

export default function PreviewRenderer ({ data }) {
  if (data) {
    var html = EditorJsToHtml.parse(data)

  }
  return (
    <div className="max-w-full prose" key={data.time}>
      {html.map((item, index) => {
        if (typeof item === "string") {
          return (
            <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
          );
        }
        return item;
      })}
    </div>
  );
};