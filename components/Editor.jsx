import React, { useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { EDITOR_TOOLS } from "./EditorTools";
import { createBrowserClient } from "@supabase/ssr";


export default function Editor({ data, onChange, holder, edit, id }) {
  //add a reference to editor
  const ref = useRef();
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  //initialize editorjs
  useEffect(() => {
    const supabase = createBrowserClient(
      supabaseUrl || "",
      supabaseAnonKey || ""
    );

    //initialize editor if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: EDITOR_TOOLS,
        tunes: ["textVariant"],
        readOnly: edit ? false : true,
        data,
        async onChange(api, event) {
          const data = await api.saver.save();
          const { error } = await supabase
            .from('pages')
            .update({ blocks: data })
            .eq('id', id.id);
          onChange(data);
        },
      });
      ref.current = editor;
    }

    //add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);


  return <div id={holder} className="max-w-full prose" />;
};
