

export default function BlockRenderer ({ data }) {
  const { blocks } = JSON.parse(data)
  const elements = blocks.map((item, index) => {
    return item;
  })

  return (
    <div className="max-w-full prose">
      {blocks.map((item, index) => {
        if (typeof item.data === "text") {
          return (
            <div key={index}>
              <pre>{item.data.text}</pre>
            </div>
          );
        }
        return item;
      })}
    </div>
  );
};