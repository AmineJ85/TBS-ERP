const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        id="1"
        title="1"
        disabled
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        <button id="1pg" title="1" className="px-2 rounded-sm bg-tbsSky">
          1
        </button>
        <button id="2pg" title="2" className="px-2 rounded-sm ">
          2
        </button>
        <button id="3pg" title="3" className="px-2 rounded-sm ">
          3
        </button>
        ...
        <button id="4pg" title="4" className="px-2 rounded-sm ">
          10
        </button>
      </div>
      <button
        id="5"
        title="5"
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
