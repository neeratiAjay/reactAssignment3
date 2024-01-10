import './index.css'

const ImageItem = props => {
  const {imageDetails, countScore} = props
  const {thumbnailUrl} = imageDetails

  const onTickImg = () => {
    countScore(thumbnailUrl)
  }

  return (
    <li>
      <button className="btn" type="button" onClick={onTickImg}>
        <img src={thumbnailUrl} alt="thumbnail" className="image" />
      </button>
    </li>
  )
}
export default ImageItem
