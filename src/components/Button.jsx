export function Button({ onClickLoadMore }) {
  return (
    <button onClick={onClickLoadMore} type="button" className="Button">
      Load more
    </button>
  );
}
