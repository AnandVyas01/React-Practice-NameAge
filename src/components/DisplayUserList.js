function DisplayUserList(props) {
  console.log(props.userValue);
  return (
    <div>
      <ul>
        {props.userValue.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayUserList;
