

export default function BlockRenderer ({ data }) {
  const { blocks } = JSON.parse(data)
  console.log('blocks', blocks)
  const elements = blocks.map((item, index) => {
    console.log('item', item.type, item.data, index)
    return item;
  })
  console.log(elements)

  return (
    <div className="max-w-full prose">
      {blocks.map((item, index) => {
        {/* console.log('item', item.data) */}
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