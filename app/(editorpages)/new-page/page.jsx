import EditorPage from "../../editor-instance";
import NewPage from "../../new-page";

export default function NewPagePage() {
  return (
    <div className="container mx-auto my-12 border border-gray-800 sm:w-1/2">
    <h1 className="text-xl">What is the name of your page?</h1>
        <NewPage />
    </div>
  )
}
