export function Button({ onClickLoadMore }) {
  return (
    <button onClick={onClickLoadMore} type="button" className="btn">
      Load more
    </button>
  );
}
