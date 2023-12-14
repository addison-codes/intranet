import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import Image from "@editorjs/image";
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


export const EDITOR_TOOLS = {
  attaches: {
    class: AttachesTool,
      config: {
        endpoint: 'http://localhost:3000/uploadFile'
      }
  },
  code: Code,
  header: {
      class: Header,
      config: {
        placeholder: 'Enter a Header',
        levels: [2, 3, 4],
        defaultLevel: 2
    }
  },
  paragraph: Paragraph,
  checklist: CheckList,
  embed: Embed,
  underline: Underline,
  image: Image,
  inlineCode: InlineCode,
  link: Link,
  table: Table,
  list: List,
  quote: Quote,
  simpleImage: SimpleImage,
  delimiter: Delimiter,
  textVariant: TextVariantTune
};
