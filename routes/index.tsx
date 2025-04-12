const Index = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center px-4 mx-auto mt-6">
      <div className="text-xl font-bold mt-12 prose dark:prose-invert text-justify">
        <form action="/api/agent">
          <button type="submit">pickle me</button>
        </form>
      </div>
    </div>
  );
};

export default Index;
