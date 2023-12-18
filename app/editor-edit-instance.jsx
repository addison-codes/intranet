"use client";
import dynamic from "next/dynamic";
import { useState } from "react";


import PreviewRenderer from "@/components/PreviewRenderer";
// important that we use dynamic loading here
// editorjs should only be rendered on the client side.
const Editor = dynamic(() => import("../components/Editor"), {
  ssr: false,
});


export default function EditorPage(id, edit) {
  //state to hold output data. we'll use this for rendering later
  const [data, setData] = useState();
  if (id.initBlocks) {
    console.log('initBlocks', id.initBlocks)
    var jsonBlocks = JSON.parse(id.initBlocks);
    console.log('jsonBlocks', jsonBlocks)
  }
  return (
    <div className="grid w-full grid-rows-2 gap-2 m-2">
      {/* <NewPage /> */}
      <div className="row-span-1">
        <h1>You are editing</h1>
        <div className="border rounded-md">
          <Editor
            id={id}
            data={jsonBlocks}
            onChange={setData}
            holder="editorjs-container"
            edit={edit}
          />
        </div>
      </div>
      {/* <div className="row-span-1">
        <h1>Preview</h1>
        <div className="border rounded-md">
          <div className="p-16">{data && <PreviewRenderer data={data} />}</div>
        </div>
      </div> */}
    </div>
  );
};