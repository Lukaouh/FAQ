export default function accordionItems(props) {
  const { sameIf, accordionNumber, content, title, itemNumber } = props;
  return (
    <div onClick={() => sameIf(itemNumber)}>
      {accordionNumber === itemNumber ? <b>{title}</b> : <h5>{title}</h5>}
      {accordionNumber === itemNumber ? <p>{content}</p> : null}
    </div>
  );
}
