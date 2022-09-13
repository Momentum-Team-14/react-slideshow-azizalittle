import { filmData } from "./film-data"
import { useState } from 'react'
// this is where i need to write all the code for my slide show
// should i make a function for each slide, then feed that into slide show?
// how do i get the slides in order and toggle between them?


export const Slideshow = () => {
const [filmIndex, setFilmIndex] = useState(0) 

return (
    <div>
        <div>
                <Slide
                setFilmIndex={setFilmIndex}
                filmIndex={filmIndex}
                filmData={filmData}
                title={filmData[filmIndex].title}
                originalTitle={filmData[filmIndex].original_title}
                releaseDate={filmData[filmIndex].release_date}
                description={filmData[filmIndex].description}
                imageUrl={filmData[filmIndex].image}
                />
    </div>
    </div>
)}

const Slide = ({ title, originalTitle, releaseDate, description, imageUrl, filmIndex, setFilmIndex, filmData }) => {

return (
    <div class='card m2 p2 align-items:center is-fluid'>
        <div class='title is-4 is-centered'>
            <h1>{title}</h1>
            <div class='info-box' is-flex-wrap-wrap>
            <figure class='image is-1by1'>
                <img src={imageUrl} alt='cover-picture'/>
            </figure>
            <div class='text-info'>
                <div class='title is-4 is-centered'>{originalTitle}</div>
                <div class='subtitle is-5' >{releaseDate}</div>
                <div class='content'>{description}</div>
            </div>
            </div>
        </div>
    <footer class='card-footer'>
    <button class='card-footer-item' onClick={() => {setFilmIndex(0)}} disabled={filmIndex === 0}>Start Over</button>
    <button class='card-footer-item' onClick={() => {setFilmIndex(parseInt(filmIndex-1))}} disabled={filmIndex === 0}>Back</button>
    <button class='card-footer-item' onClick={() => {setFilmIndex(parseInt(filmIndex+1))}} disabled={filmIndex === (filmData.length-1)}>Next</button>
    </footer>
    </div>
)
}