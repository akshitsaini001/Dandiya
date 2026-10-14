import React from 'react';
function Hero() {
    return (
        <><div id="carouselExample" class="carousel slide position-relative overflow-hidden shadow-sm p-2" data-bs-ride="carousel">


            <div class="carousel-indicators mb-3">
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>


            <div class="carousel-inner  overflow-hidden">
                <div class="carousel-item active">
                    <img
                        src="images/ba.webp"
                        class="d-block rounded-0 w-100 carousel-hero-img"
                        alt="Navratri Dandiya Nights"
                    />
                </div>
                <div class="carousel-item">
                    <img
                        src="images/OIP.webp"
                        class="d-block w-100 carousel-hero-img"
                        alt="Garba Night Celebration"
                    />
                </div>
                <div class="carousel-item">
                    <img
                        src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=80"
                        class="d-block w-100 carousel-hero-img"
                        alt="Navratri Festive Lights"
                    />
                </div>
            </div>


            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </>
    );
}

export default Hero;