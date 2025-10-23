const ItemList = ({ data }: { data: string[] }) => {
  return (
    <div className="mb-[50px] ps-5">
      {data.length ? (
        <ul className="marker:text-blue-main list-disc">
          {data.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      ) : (
        <p>هیچ موردی ذکر نشده است</p>
      )}
    </div>
  );
};

export default ItemList;
