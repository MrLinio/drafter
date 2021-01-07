export default function Card(props) {
    return (
      <div>
        {props.value.name} - {props.value.type} - {props.value.cost}
      </div>
    );
  }