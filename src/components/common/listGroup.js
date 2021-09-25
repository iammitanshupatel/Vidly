const ListGroup = ({
  items,
  textProp,
  valueProp,
  onItemSelect,
  selectedItem,
}) => {
  return (
    <ul className="list-group">
      {items.map((x) => (
        <li
          onClick={() => onItemSelect(x)}
          key={x[valueProp]}
          className={
            x === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {x[textProp]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  textProp: "name",
  valueProp: "_id",
};

export default ListGroup;
