"use client";
import dynamic from "next/dynamic";
import { useState } from "react";


import PreviewRenderer from "@/components/PreviewRenderer";
// important that we use dynamic loading here
// editorjs should only be rendered on the client side.
const Editor = dynamic(() => import("../components/Editor"), {
  ssr: false,
});


export default function EditorPage(id) {
  //state to hold output data. we'll use this for rendering later
  const [data, setData] = useState();
  if (id.initBlocks) {
    const linkFix = id.initBlocks.replaceAll('http://localhost:3000', 'https://intranet-aptp.vercel.app/')
    var jsonBlocks = JSON.parse(linkFix);
  }
  return (
    <div className="grid w-full gap-2 m-2">
      {/* <NewPage /> */}
      <div className="row-span-1">
        <h1>{id.edit ? 'You are editing' : ''}</h1>
        <div className="border rounded-md">
          <Editor
            id={id}
            data={jsonBlocks}
            onChange={setData}
            holder="editorjs-container"
            edit={id.edit ?? false}
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