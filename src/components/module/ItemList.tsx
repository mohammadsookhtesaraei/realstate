
const ItemList=({ data }:{
    data:string[];
})=> {
  return (
    <div className="ps-5 mb-[50px]">
      {data.length ? (
        <ul className="list-disc marker:text-blue-main">
          {data.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      ) : (
        <p>هیچ موردی ذکر نشده است</p>
      )}
    </div>
  );
}

export default ItemList;