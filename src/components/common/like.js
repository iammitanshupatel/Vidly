const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={props.toggleClick}
      class={classes}
      aria-hidden="true"
    ></i>
  );
};
export default Like;
