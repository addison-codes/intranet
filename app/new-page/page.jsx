import EditorPage from "../editor-instance";
import NewPage from "../new-page";

export default function NewPagePage() {
  return (
    <div>
    <h1 className="text-xl">What is the name of your page?</h1>
        <NewPage />
        {/* <EditorPage /> */}
    </div>
  )
}
