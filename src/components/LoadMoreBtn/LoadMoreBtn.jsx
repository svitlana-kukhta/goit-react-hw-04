import css from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({ handleLoadMore }) => {
   
  return (
      <div className={css.loadMoreButtonContainer}>
          <button className={css.loadMoreButton} onClick={handleLoadMore}>Load more</button>
      </div>
  )
}

export default LoadMoreBtn