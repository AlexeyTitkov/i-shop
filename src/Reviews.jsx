import {useState, useEffect} from "react";
import avatarIcon from "./assets/img/avatarIcon.svg";

  export const Reviews = ({ productId }) => {
    const [reviews, setReviews] = useState(() => {
      const storedReviews = localStorage.getItem(`reviews_${productId}`);
      return storedReviews ? JSON.parse(storedReviews) : [   {
      author: 'Jane Cooper',
      title: 'Amazing Product',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      date: '01/01/2021',
      rating: 4
    },
      {
        author: 'Max Doodle',
        title: 'Best choice',
        text: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        date: '05/23/2021',
        rating: 5
      },];
  });

  const [currentReview, setCurrentReview] = useState('')

  const currentReviewHandler = (event) => {
    let newValue = event.currentTarget.value
    setCurrentReview(newValue)
  }

  const addReviewHandler = () => {
    const currentDate = new Date();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Добавляем ноль перед месяцем при необходимости
    const day = currentDate.getDate().toString().padStart(2, "0"); // Добавляем ноль перед днем при необходимости
    const formattedDate = `${month}/${day}/${currentDate.getFullYear()}`;
    const newReview = {
      author: 'Jane Doodle',
      title: 'Amazing Product',
      text: currentReview,
      date: formattedDate,
      rating: 5
    }
    setReviews([newReview, ...reviews])
    setCurrentReview('')
  }

  useEffect(() => {
    localStorage.setItem(`reviews_${productId}`, JSON.stringify(reviews));
  }, [reviews]);

  return (

    <div className="reviewBox">
      <div className="review">
        <h3>Reviews ({reviews.length})</h3>
        <textarea placeholder='Provide your text...'
                  value={currentReview}
                  onChange={currentReviewHandler}></textarea>
        <button onClick={() => addReviewHandler()}>Send review</button>
      </div>
      <div>
        {reviews.map((r) => {
          return (
            <div className="reviewField">
              <div className="info">
                <div className="user">
                  <img src={avatarIcon} alt=""/>
                  <div className="infoBox">
                    <p className="author">{r.author}</p>
                    <p className="rating">{r.rating} Rating</p>
                  </div>
                </div>
                <div>
                  <p className="date">{r.date}</p>
                </div>
              </div>
              <div className="content">
                <p className="title">{r.title}</p>
                <p>{r.text}</p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  )
}
