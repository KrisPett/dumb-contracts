'use client';

export default function HomePage() {
  const onClickButton = () => {
    console.log("onClickButton");
  };

  return (
    <div>
      <button onClick={() => onClickButton()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
  );
}
