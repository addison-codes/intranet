import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import ImageTool from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import Link from "@editorjs/link";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header"
import AttachesTool from "@editorjs/attaches";
import TextVariantTune from "@editorjs/text-variant-tune"
import Table from "@editorjs/table"
import Underline from '@editorjs/underline';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import anyButton from "editorjs-button";
import Alert from 'editorjs-alert';
import EditorJsColumns from '@calumk/editorjs-columns';
import EditorJS from '@editorjs/editorjs';
import Hyperlink from 'editorjs-hyperlink';


const supabase = createClientComponentClient();

const handleImageUpload = async (file) => {
  const { data, error } = await supabase.storage.from('images').upload(`page-images/${file.name}`, file);
  if (error) {
    throw error
  }
  return data;
}
const handleFileUpload = async (file) => {
  const { data, error } = await supabase.storage.from('files').upload(`page-files/${file.name}`, file);
  if (error) {
    throw error
  }
  return data;
}

let column_tools = {
    header: Header,
    alert : Alert,
    paragraph: {
      class: Paragraph,
      inlineToolbar: true,
    },
    delimiter : Delimiter,
    link: Link,
    hyperlink: {
      class: Hyperlink,
      config: {
        shortcut: 'CMD+L',
        target: '_blank',
        rel: 'nofollow'
      },
      inlineToolbar: true,
    },
}


export const EDITOR_TOOLS = {
  hyperlink: {
    class: Hyperlink,
    config: {
      shortcut: 'CMD+L',
      target: '_blank',
      rel: 'nofollow'
    },
    inlineToolbar: true,
  },
  attaches: {
    class: AttachesTool,
      config: {
      /**
       * Custom uploader
       */
      uploader: {

        uploadByFile(file){
          // your own uploading logic here
          return handleFileUpload(file).then((data) => {
            return {
              success: 1,
              file: {
                url: `https://kpifzufhdtskjhvmjorm.supabase.co/storage/v1/object/public/files/${data.path}`,
                // any other image data you want to store, such as width, height, color, extension, etc
              }
            }
          })

        },

        uploadByUrl(url){
          // your ajax request for uploading
          return MyAjax.upload(file).then(() => {
            return {
              success: 1,
              file: {
                url: 'https://codex.so/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg',
                // any other image data you want to store, such as width, height, color, extension, etc
              }
            }
          })
        }
      }
    }
  },
  code: Code,
  header: {
      class: Header,
      config: {
        placeholder: 'Enter a Header',
        levels: [2, 3, 4],
        defaultLevel: 2
    },
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  checklist: CheckList,
  embed: Embed,
  underline: Underline,
  image: {
    class: ImageTool,
    config: {
      /**
       * Custom uploader
       */
      uploader: {

        uploadByFile(file){
          // your own uploading logic here
          return handleImageUpload(file).then((data) => {
            return {
              success: 1,
              file: {
                url: `https://kpifzufhdtskjhvmjorm.supabase.co/storage/v1/object/public/images/${data.path}`,
                // any other image data you want to store, such as width, height, color, extension, etc
              }
            }
          })

        },

        uploadByUrl(url){
          // your ajax request for uploading
          return MyAjax.upload(file).then(() => {
            return {
              success: 1,
              file: {
                url: 'https://codex.so/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg',
                // any other image data you want to store, such as width, height, color, extension, etc
              }
            }
          })
        }
      }
    }
  },
  inlineCode: InlineCode,
  link: Link,
  table: Table,
  list: List,
  quote: Quote,
  simpleImage: SimpleImage,
  delimiter: Delimiter,
  textVariant: TextVariantTune,
  AnyButton: {
    class: anyButton,
    inlineToolbar: false,
  },
  columns: {
    class: EditorJsColumns,
    config: {
      EditorJsLibrary: EditorJS,
      tools: column_tools,
    }
  },
  alert: Alert,
};
