import React from 'react';

function Slider() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel my-5">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src={require('./images/img1.jpg')} alt="First slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={require('./images/img2.jpg')} alt="Second slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={require('./images/img3.jpg')} alt="Third slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={require('./images/img4.jpeg')} alt="Third slide" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Slider